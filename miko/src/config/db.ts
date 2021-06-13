import { connect } from "mongoose";

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

    console.log(
      ` MongoDB Connected: `.inverse.green + ` ${con.connection.host}`,
    );
  } catch (error) {
    console.error(` ! Error: `.inverse.red.bold + `${error.message}`);
    throw error;
  }
};
