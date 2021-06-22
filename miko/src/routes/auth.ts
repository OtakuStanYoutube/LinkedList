import { Router } from "express";
import { PassportStatic } from "passport";
import { GoogleAuth } from "../auth";

export default (passport: PassportStatic): Router => {
  const authRouter = Router();

  // OAuth Providers
  //   if (process.env.LINKEDLIST_API_GITHUB_CLIENT_ID) authRouter.use("/github", GitHubAuth(passport));
  //   if (process.env.LINKEDLIST_API_TWITTER_KEY)
  //     authRouter.use("/twitter", TwitterAuth(passport));
  //   if (process.env.LINKEDLIST_API_DISCORD_CLIENT_ID)
  //     authRouter.use("/discord", DiscordAuth(passport));

  // @desc     Authenticate and Login User using Google OAuth
  // @route    POST /api/v1/auth/google
  // @access   Public
  if (process.env.LINKEDLIST_API_GOOGLE_CLIENT_ID) {
    authRouter.use("/google", GoogleAuth(passport));
  }

  return authRouter;
};
