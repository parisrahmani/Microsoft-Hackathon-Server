import express, { Router } from "express";
import "dotenv/config";
import cors from "cors";
import "dotenv/config";
import axios from "axios";

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
