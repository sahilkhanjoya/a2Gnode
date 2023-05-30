import Express from "express";
import router from "express-promise-router";
import { imageUploads } from "../service/image.js";
import { createsmall, getsmall, smalldelete, smallupdate } from "../controller/smallbanner.con.js";


const smallroute = Express.Router();
smallroute.route("/small/banner/create").post(imageUploads.single('small_banner'), createsmall);
smallroute.route("/get/small/banner").get(getsmall)
smallroute.route("/delete/small/banner").delete(smalldelete)
smallroute.route("/update/small/banner").put(imageUploads.single('small_banner'),smallupdate)


export default smallroute