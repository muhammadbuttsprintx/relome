import { config } from "dotenv";
import pkg from "mongoose";
const { connect, connection } = pkg;

config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
export function connectDB() {
  connect("mongodb://localhost/relo", options).catch((error) =>
    console.log(error)
  );

  connection.on("connected", () => console.log("DB CONNECTED"));
}
