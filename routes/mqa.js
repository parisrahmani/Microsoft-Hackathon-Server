import mqa from "../data/mqa.json";
import express from  express;
const router = express.Router();
router.route("/mqa").get((req,res)=>{
    res.json(mqa);
})
export default router;