import { join } from "path";
import { createConnection } from "typeorm";
// import { connect, disconnect } from "mongoose";
import { event, errors } from "../lib/logs";
import { __prod__ } from "../constants";

// const mongoURI: string = process.env.MONGO_URI!;

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// };

export const connectDB = async () => {
  try {
    const con = await createConnection({
      type: "postgres",
      // database: __prod__ ? undefined : "linkedlist",
      // url: __prod__ ? process.env.DATABASE_URL : undefined,
      entities: [join(__dirname, "./entities/*")],
      migrations: [join(__dirname, "./migrations/*")],
      synchronize: !__prod__,
      logging: !__prod__,
    });

    event(` MongoDB Connected: `.inverse.green + ` ${con}`);

    return con;
  } catch (error) {
    errors(` ! Error: `.inverse.red.bold + `${error.message}`);
    throw error;
  }
};

// export const connectClose = async () => {
//   await disconnect();
// };
