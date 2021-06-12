import express, { Application, json } from "express";
import cors from "cors";
import "colors";

const app: Application = express();

app.use(cors());

app.use(json());

export default app;
