import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { connectDB } from "./util/connection.js";
const port = 5000;
connectDB();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
