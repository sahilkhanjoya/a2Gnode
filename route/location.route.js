import Express from "express";
import { deletedlocation, getlocation, locationcreate, updatelocation } from "../controller/location.con.js";


const locationroute = Express.Router();
locationroute.route("/create/location").post(locationcreate)
locationroute.route("/get/location").get(getlocation)
locationroute.route("/deleted/location").delete(deletedlocation)
locationroute.route("/update/location").put(updatelocation)

export default locationroute