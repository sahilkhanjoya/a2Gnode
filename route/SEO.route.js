import Express from "express";
import { onedataget, seocreate, seoget } from "../controller/SEO.con.js";

const SEOroute = Express.Router();
SEOroute.route('/create/seo').post(seocreate)
SEOroute.route('/get/seo').get(seoget)
SEOroute.route('/onedata/get/seo').get(onedataget)

export default SEOroute;