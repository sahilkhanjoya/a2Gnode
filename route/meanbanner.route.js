import  Express  from "express";
import { deletedmeanbanner, getmeanbanner, meancreate, updatemeanbanner } from "../controller/meanbanner.con.js";
import { imageUploads } from "../service/image.js";


const meanroute = Express.Router();
meanroute.route("/mean/banner/create").post(imageUploads.single('image'), meancreate);
meanroute.route('/get/mean/banner').get(getmeanbanner)
meanroute.route('/deleted/mean/banner').delete(deletedmeanbanner)
meanroute.route('/update/mean/banner').put(imageUploads.single('image'),updatemeanbanner)

export default meanroute