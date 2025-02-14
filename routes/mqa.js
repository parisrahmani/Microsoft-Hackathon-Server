import mqaData from "../data/mqa.json" with { type: "json" };

import express from "express";
const router = express.Router();
router.route("/mqa").get((req, res) => {
  res.json(mqaData);
});
export default router;
