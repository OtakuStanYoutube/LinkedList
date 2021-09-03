import { createConnection } from "typeorm";
import { __prod__ } from "../constants";

export const createConn = () =>
  createConnection({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // url: __prod__ ? process.env.DATABASE_URL : undefined,
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    synchronize: !__prod__,
    logging: !__prod__,
  });
