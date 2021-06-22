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
  if (process.env.LINKEDLIST_API_GOOGLE_CLIENT_ID) {
    authRouter.use("/google", GoogleAuth(passport));
  }

  return authRouter;
};