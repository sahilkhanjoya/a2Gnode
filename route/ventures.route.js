import Express from "express";
import router from "express-promise-router";
import { imageUploads } from "../service/image.js";
import { deleteventure, getventure, updateventure, venturecreate } from "../controller/ventures.con.js";


const venrouter = Express.Router();
venrouter.route("/ventuers/create").post(imageUploads.single('image'), venturecreate);
venrouter.route('/venture/get').get(getventure)
venrouter.route('/venture/delete').delete(deleteventure)
venrouter.route("/ventuers/update").put(imageUploads.single('image'), updateventure);

export default venrouter