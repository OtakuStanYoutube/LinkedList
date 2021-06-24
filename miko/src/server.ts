import { config } from "dotenv";
config();

import app from "./app";
import { connectDB } from "./config/db";
import { connectRedis } from "./config/redis_connect";
import { ready } from "./lib/logs";

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

connectDB();
connectRedis();

app.listen(PORT, () =>
  ready(
    ` Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`,
  ),
);
