import { join } from "path";
import { createConnection } from "typeorm";
import { __prod__ } from "../constants";
// import User from "../entities/User";

export const createConn = () =>
  createConnection({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: __prod__ ? process.env.USERNAME : "postgres",
    password: __prod__ ? process.env.DB_PASSWORD : "postgres",
    database: __prod__ ? process.env.DB_DATABASE : "linkedlist",
    url: __prod__ ? process.env.DATABASE_URL : undefined,
    entities: ["dist/entities/*.js"],
    migrations: [join(__dirname, "./migrations/**/*.js")],
    synchronize: !__prod__,
    logging: !__prod__,
  });
