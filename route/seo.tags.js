import express from 'express';
import seotag from '../controller/seo.tags.js';
const tagRouter = express.Router()

tagRouter.post('/seo/tag', seotag.seoTagCreate)
tagRouter.get('/seo/gets/:id', seotag.seoGet)
tagRouter.get('/seo/gets', seotag.seoAllGets)
tagRouter.delete('/seo/delete/:id', seotag.deleteSeo)
tagRouter.put('/seo/update/:id', seotag.seoUpdates)
export default tagRouter