import { join } from "path";
import { createConnection } from "typeorm";
import { __prod__ } from "../constants";

export const createConn = () =>
  createConnection({
    type: "postgres",
    host: __prod__ ? process.env.DB_HOST : "host.docker.internal",
    port: 5432,
    username: __prod__ ? process.env.USERNAME : "postgres",
    password: __prod__ ? process.env.DB_PASSWORD : "satoshi",
    database: __prod__ ? process.env.DB_DATABASE : "linkedlist",
    // url: __prod__ ? process.env.DATABASE_URL : undefined,
    entities: [join(__dirname, "./entities/*")],
    migrations: [join(__dirname, "./migrations/*")],
    synchronize: !__prod__,
    logging: !__prod__,
  });
