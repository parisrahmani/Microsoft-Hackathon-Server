import express from "express";
import "dotenv/config";
import cors from "cors";
import "dotenv/config";
import aiEthics from "./routes/mqaAiEthics.js";
import promptEng from "./routes/mqaPromptEngineering.js";
import chatData from "./routes/chatBot.js";
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/mqa", aiEthics);
app.use("/mqa", promptEng);
app.use("/", chatData);
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
