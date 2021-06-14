import express, { Application, json } from "express";
import cors from "cors";
import morgan from "morgan";
import { __prod__ } from "./constants";
import { notFound, errorHandler } from "./middlewares/error";
import "colors";

const app: Application = express();

if (!__prod__) {
  app.use(morgan("dev"));
}

app.use(cors());

app.use(json());

app.use(notFound);
app.use(errorHandler);

export default app;
