import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { __prod__ } from "./constants";
import { notFound, errorHandler } from "./middlewares/error";
import "colors";

// Routes
import { router as userRoutes } from "./routes/user";

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

app.get("/", (_req: Request, res: Response) =>
  res.status(201).json({ message: "Hello" }),
);

app.use("/api/v1/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
