import Express from "express";
import { createHR, getHR } from "../controller/HRexecutive.con.js";
import { pdfUploads } from "../service/image.js";

const HRroute = Express.Router();
HRroute.route("/create/hr/executive").post(pdfUploads.single('resume'), createHR)
HRroute.route('/get/hr/executive').get(getHR)

export default HRroute