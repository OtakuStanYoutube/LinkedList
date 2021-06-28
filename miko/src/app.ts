import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import passport from "passport";
import { __prod__ } from "./constants";
import { notFound, errorHandler } from "./middlewares/error";
import { verifyToken } from "./middlewares/auth";
import "colors";

// Routes
import { router as userRoutes } from "./routes/user";
import authRoutes from "./routes/auth";

const app: Application = express();

if (!__prod__) {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "*",
    maxAge: __prod__ ? 86400 : undefined,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: [
      "access-token",
      "refresh-token",
      "content-type",
      "content-length",
    ],
  }),
);

app.use(json());

app.use(cookieParser());

app.set("trust proxy", 1);

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  console.log("I have Loli");
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  console.log("I got arrested");
  done(null, user);
});

if (!__prod__) {
  app.get("/", (_req: Request, res: Response) =>
    res.status(201).json({ message: "Hello" }),
  );

  app.get("/user", verifyToken, (req: Request, res: Response) => {
    res.status(201).json({ message: "logged in", user: req.body.user });
  });
}

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/auth", authRoutes(passport));

app.use(notFound);
app.use(errorHandler);

export default app;
