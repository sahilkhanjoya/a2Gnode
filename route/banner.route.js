import Express from "express";
import router from "express-promise-router";
import { bannerdelete, createbanner, getbanner } from "../controller/banner.controller.js";
import { imageUploads } from "../service/image.js";


const bannerroute = Express.Router();
bannerroute.route("/banner/create").post(imageUploads.single('image'), createbanner);
bannerroute.route("/get/banner").get(getbanner)
bannerroute.route("/delete/banner").delete(bannerdelete)


export default bannerroute