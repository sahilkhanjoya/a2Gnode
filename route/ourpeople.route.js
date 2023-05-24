import  Express  from "express";
import  {imageUploads}  from "../service/image.js";
import { getpeople, peoplecreate, updatepeople } from "../controller/ourpeople.con.js";


const peopleroute = Express.Router();
peopleroute.route("/create/our/people").post(imageUploads.single('ourpeople image'),peoplecreate)
peopleroute.route("/get/our/people").get(getpeople)
peopleroute.route("/update/our/people").put(imageUploads.single('ourpeople image'),updatepeople)

export default peopleroute