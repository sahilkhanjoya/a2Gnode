import express from 'express';
import seotag from '../controller/seo.tags.js';
const tagRouter = express()

tagRouter.post('/seo/tag', seotag.seoTagCreate)
tagRouter.get('/seo/gats/:page', seotag.seoTagCreate)
export default tagRouter