import { createConnection, ConnectionOptions } from "typeorm";

export const createTestConn = () => {
  const connectionOptions: ConnectionOptions = {
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "linkedlist_test",
    // url: __prod__ ? process.env.DATABASE_URL : undefined,
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    dropSchema: true,
    synchronize: true,
    logging: true,
  };

  return createConnection(connectionOptions);
};
