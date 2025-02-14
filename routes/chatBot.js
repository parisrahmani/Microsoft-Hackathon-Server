import axios from "axios";
import chatData from "../data/chatBot.json" with { type: "json" };

import express from "express";
const router = express.Router();
router.route("/chat-bot").get((req, res) => {
  res.json(chatData);
});
export default router;
