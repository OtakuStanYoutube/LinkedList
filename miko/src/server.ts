import express, { Application, json } from "express";
import cors from "cors";
import "colors";

const app: Application = express();

app.use(cors());

app.use(json());

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`,
  ),
);
