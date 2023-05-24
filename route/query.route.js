import { querycraete, queryget } from "../controller/query.con.js";
import Express from "express";

const queryRoute = Express.Router();
queryRoute.route('/create/query').post(querycraete)
queryRoute.route('/get/query').get(queryget)

export default queryRoute;