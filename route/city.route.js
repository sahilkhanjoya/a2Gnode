import Express from "express";
import { cityadd, cityget, joinSEO } from "../controller/city.con.js";

const cityroute = Express.Router();
cityroute.route("/city/add").post(cityadd)
cityroute.route("/city/get").get(cityget)
cityroute.route("/city/join").get(joinSEO)

export default cityroute