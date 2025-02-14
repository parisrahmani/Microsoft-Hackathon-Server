import AI_Ethics from "../data/aIEthics.json" with { type: "json" };

import express from "express";
const router = express.Router();
router.route("/ai-ethics").get((req, res) => {
  res.json(AI_Ethics);
});
export default router;
