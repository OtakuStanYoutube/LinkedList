import { connect, disconnect } from "mongoose";
import { event, errors } from "../lib/logs";

const mongoURI: string = process.env.MONGO_URI!;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

export const connectDB = async () => {
  try {
    const con = await connect(mongoURI, options);

    event(` MongoDB Connected: `.inverse.green + ` ${con}`);
  } catch (error) {
    errors(` ! Error: `.inverse.red.bold + `${error.message}`);
    throw error;
  }
};

export const connectClose = async () => {
  await disconnect();
};
