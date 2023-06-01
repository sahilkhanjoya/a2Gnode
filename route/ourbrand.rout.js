import Express from "express";
import { IDgetbrand, brandcreate, deletedourbrand, getourbrand, join, updateourbrand } from "../controller/ourbrand.con.js";


const brandroute = Express.Router();
brandroute.route("/create/our/brand").post(brandcreate)
brandroute.route("/get/our/brand").get(getourbrand)
brandroute.route("/id/get/our/brand").get(IDgetbrand)
brandroute.route("/deleted/our/brand").delete(deletedourbrand)
brandroute.route("/update/our/brand").put(updateourbrand)
brandroute.route("/join/our/brand").get(join)


export default brandroute