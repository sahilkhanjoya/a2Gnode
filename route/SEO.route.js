import Express from "express";
import { seocreate, seoget } from "../controller/SEO.con.js";

const SEOroute = Express.Router();
SEOroute.route('/create/seo').post(seocreate)
SEOroute.route('/get/seo').get(seoget)

export default SEOroute;