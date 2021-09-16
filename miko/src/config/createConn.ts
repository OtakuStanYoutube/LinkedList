import { createConnection, getConnectionOptions } from "typeorm";
// import { __prod__ } from "../constants";

export const createConn = async () => {
  const conOptions = await getConnectionOptions();

  return createConnection(conOptions);
};
