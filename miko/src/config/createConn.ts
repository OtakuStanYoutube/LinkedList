import { createConnection, ConnectionOptions } from "typeorm";
import { __prod__ } from "../constants";

export const createConn = () => {
  const connectionOptions: ConnectionOptions = {
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: __prod__ ? process.env.DB_USERNAME : "postgres",
    password: __prod__ ? process.env.DB_PASSWORD : "postgres",
    database: __prod__ ? process.env.DB_DATABASE : "linkedlist",
    // url: __prod__ ? process.env.DATABASE_URL : undefined,
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    synchronize: !__prod__,
    logging: !__prod__,
  };

  return createConnection(connectionOptions);
};
