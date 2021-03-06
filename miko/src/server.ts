import { config } from "dotenv";
config();

import app from "./app";
import { connectDB } from "./config/db";
import { createConn } from "./config/createConn";
import { connectRedis } from "./config/redis_connect";
import { ready } from "./lib/logs";

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

(async () => {
  connectDB();
  connectRedis();
  console.log("Connecting to Postgress.....");
  try {
    const conn = await createConn();

    console.log("connected, running migrations now", conn);
    // await conn.runMigrations();
    // console.log("migrations ran");
  } catch (error) {
    console.log("error", error);
  }

  app.listen(PORT, () =>
    ready(
      ` Backend server: `.inverse.yellow.bold +
        ` Running in ${ENV} mode on port ${PORT}`,
    ),
  );
})();
