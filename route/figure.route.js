import Express from "express";
import { figurecreate, updatefig } from "../controller/figure.con.js";


const figroute = Express.Router();
figroute.route("/create/figure").post(figurecreate)
figroute.route("/update/figure").put(updatefig)

export default figroute