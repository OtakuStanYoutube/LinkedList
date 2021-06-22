import { Router, Request, Response } from "express";
import { Strategy } from "passport-google-oauth20";
import { User } from "../models";
import { PassportStatic } from "passport";

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
        const user = await User.findOne({ where: { google: id } });

        console.log(profile);
        console.log(user);
        done(null, id);
      },
    ),
  );

  const router = Router();

  router.get(
    "/",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/userinfo.profile"],
      session: false,
    }),
  );

  router.get(
    "/callback",
    passport.authenticate("google", (req: Request, res: Response) => {
      console.log(req.user);
      res.status(201);
    }),
  );

  return router;
};
