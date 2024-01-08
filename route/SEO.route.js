import Express from "express";
import { onedataget, seocreate, seodelete, seoget } from "../controller/SEO.con.js";

const SEOroute = Express.Router();
SEOroute.route('/create/seo').post(seocreate)
SEOroute.route('/get/seo').get(seoget)
SEOroute.route('/onedata/get/seo/:id').get(onedataget)
SEOroute.route('/delete/seo').delete(seodelete)

export default SEOroute;