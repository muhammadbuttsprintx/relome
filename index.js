import express from "express";
import cors from "cors";
import path from "path";
const __dirname = path.resolve();

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

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
