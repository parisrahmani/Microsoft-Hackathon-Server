import promptEngineering from "../data/promptEngineering.json" with { type: "json" };

import express from "express";
const router = express.Router();
router.route("/prompt-engg").get((req, res) => {
  res.json(promptEngineering);
});
export default router;