import { config } from "dotenv";
config();

import app from "./app";
import { connectDB } from "./config/db";
import { createConn } from "./config/createConn";
import { connectRedis } from "./config/redis_connect";
import { ready } from "./lib/logs";
import User from "./entities/User";

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

const main = async () => {
  connectDB();
  connectRedis();
  console.log("Creating Database entry in");
  try {
    const conn = await createConn();

    console.log("connected, running migrations now", conn);

    const userName = "LoliLover";

    const user = new User({ userName });

    await user.save();
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
};

main();
