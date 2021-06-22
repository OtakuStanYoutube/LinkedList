import { Router, Request, Response } from "express";
import { Strategy } from "passport-google-oauth2";
import { User, Profile } from "../models";
import { PassportStatic } from "passport";
import { generateAccessToken } from "../utils/generateToken";
import { generateUniqueUsername } from "../utils/generateUniqueUsername";
import { __prod__ } from "../constants";

export default (passport: PassportStatic): Router => {
  passport.use(
    new Strategy(
      {
        clientID: process.env.LINKEDLIST_API_GOOGLE_CLIENT_ID!,
        clientSecret: process.env.LINKEDLIST_API_GOOGLE_CLIENT_SECRET!,
        callbackURL: process.env.LINKEDLIST_API_GOOGLE_CALLBACK_URL!,
      },
      async (_, __, profile, done) => {
        const id = String(profile.id);
        let username = profile.displayName.replace(/ /g, "_");
        const email = String(profile.email);
        const user = await User.findOne({ oauthId: id });

        if (user) {
          return done(null, user);
        } else {
          const usernameExists = await User.findOne({ username });

          if (usernameExists) {
            username = generateUniqueUsername(username);
          }

          const newUser = await User.create({
            username,
            email,
            oauthId: id,
            imgUrl: profile._json.picture,
          });

          if (newUser) {
            const newProfile = await Profile.create({
              parent: newUser._id,
              handle: newUser.username,
              imgUrl: newUser.imgUrl,
            });

            newUser.activeProfile = newProfile._id;
            await newUser.save();

            return done(null, newUser);
          }
        }
      },
    ),
  );

  const router = Router();

  router.get(
    "/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      session: false,
    }),
  );

  router.get(
    "/callback",
    passport.authenticate("google"),
    (req: Request, res: Response) => {
      const token = generateAccessToken(req.user!._id);

      res.cookie("jwt", token, {
        httpOnly: true,
        path: "/",
        secure: __prod__,
      });
      res.status(201).redirect("/");
    },
  );

  return router;
};
