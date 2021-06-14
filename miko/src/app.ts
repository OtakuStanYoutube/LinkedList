import express, { Application, json } from "express";
import cors from "cors";
import morgan from "morgan";
import { __prod__ } from "./constants";
import "colors";

const app: Application = express();

if (!__prod__) {
  app.use(morgan("dev"));
}

app.use(cors());

app.use(json());

export default app;
