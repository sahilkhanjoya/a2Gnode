import express from 'express'
import { default as sitemap } from '../controller/sitemap.js'
const sitemapRouter = express()
sitemapRouter.post('/sitemap-create-url' ,sitemap.createSiteMap)
sitemapRouter.get('/siteMap/get-all-Url',sitemap.findAllData)
export default sitemapRouter