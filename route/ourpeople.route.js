import  Express  from "express";
import  {imageUploads}  from "../service/image.js";
import { deletedpeople, getpeople, peoplecreate, updatepeople } from "../controller/ourpeople.con.js";


const peopleroute = Express.Router();
peopleroute.route("/create/our/people").post(imageUploads.single('ourpeople_image'),peoplecreate)
peopleroute.route("/get/our/people").get(getpeople)
peopleroute.route("/delete/our/people").delete(deletedpeople)
peopleroute.route("/update/our/people").put(imageUploads.single('ourpeople_image'),updatepeople)

export default peopleroute