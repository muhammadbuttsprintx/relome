import { config } from "dotenv";
import pkg from "mongoose";
import "dotenv";

const { connect, connection } = pkg;

config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
export function connectDB() {
  connect(process.env.MONGODB_CONNECTION, options).catch((error) =>
    console.log(error)
  );

  connection.on("connected", () => console.log("DB CONNECTED"));
}
