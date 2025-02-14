import express from "express";
import "dotenv/config";
import cors from "cors";
import "dotenv/config";

import mqa from "./routes/mqa.js";
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/", mqa);
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
