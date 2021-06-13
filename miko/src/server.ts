import app from "./app";
import { connectDB } from "./config/db";

const PORT: string | number = process.env.PORT || 5000;
const ENV: string | number = process.env.NODE_ENV || "development";

connectDB();

app.listen(PORT, () =>
  console.log(
    ` 📡 Backend server: `.inverse.yellow.bold +
      ` Running in ${ENV} mode on port ${PORT}`,
  ),
);
