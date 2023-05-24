import Express from "express";
import { getjourney, journeycreate, updatejourney } from "../controller/journey.con.js";

const journeyroute = Express.Router();
journeyroute.route("/create/journey").post(journeycreate)
journeyroute.route("/get/journey").get(getjourney)
journeyroute.route("/update/journey").put(updatejourney)

export default journeyroute