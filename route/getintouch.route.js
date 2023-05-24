import Express from "express";
import { deletedtouch, gettouch, touchcreate, updatetouch } from "../controller/getintouch.con.js";


const touchroute = Express.Router();
touchroute.route("/create/touch").post(touchcreate)
touchroute.route("/get/touch").get(gettouch)
touchroute.route("/deleted/touch").delete(deletedtouch)
touchroute.route("/update/touch").put(updatetouch)

export default touchroute