import { Router, Request, Response } from "express";
import { Strategy } from "passport-google-oauth2";
import { PassportStatic } from "passport";

// Utilities
import { generateActivationToken } from "../../utils/generateToken";
import { generateUniqueUsername } from "../../utils/generateUniqueUsername";

// Models
import User from "../../entities/User";
import Profile from "../../entities/Profile";

// constants
// import { __prod__ } from "../../constants";

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
        const user = await User.findOne({ oAuthId: id });

        if (user) {
          return done(null, user);
        } else {
          const usernameExists = await User.findOne({ username });

          if (usernameExists) {
            username = generateUniqueUsername(username);
          }

          const newUser = new User({
            username,
            email,
            oAuthId: id,
            imgUrl: profile._json.picture,
          });

          await newUser.save();

          if (newUser) {
            const newProfile = new Profile({
              displayname: username,
              imgUrl: newUser.imgUrl,
              user,
            });

            await newProfile.save();

            return done(null, newUser);
          }
        }
      },
    ),
  );

  const router = Router();

  // Google OAuth
  router.get(
    "/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      session: false,
    }),
  );

  // Callback URL
  router.get(
    "/callback",
    passport.authenticate("google", { failureRedirect: "/auth/login" }),
    (req: Request, res: Response) => {
      const token = generateActivationToken(req.user!.userID);

      res.status(201).redirect(`/activation?token=${token}`);
    },
  );

  return router;
};
