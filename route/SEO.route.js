import Express from "express";
import { AllFindJobBySeo, onedataget, seocreate, seodelete, seoget, updatejobs } from "../controller/SEO.con.js";

const SEOroute = Express.Router();
SEOroute.route('/create/seo').post(seocreate)
SEOroute.route('/get/seo').get(seoget)
SEOroute.route('/onedata/get/seo/:id').get(onedataget)
SEOroute.route('/delete/seo/:id').delete(seodelete)
SEOroute.route('/update/jobs/:id').put(updatejobs)
SEOroute.route('/jobs').get(AllFindJobBySeo)

export default SEOroute;