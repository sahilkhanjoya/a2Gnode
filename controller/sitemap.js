import sitemapModel from "../model/sitemap.js";
import axios from 'axios';
import { create } from 'xmlbuilder2';
import fs from 'fs';


class sitemapController {
    async createSiteMap (req,res) {
       try {
        const checkSiteMapUrl = await sitemapModel.findOne({url:req.body.url})
        if(checkSiteMapUrl) return res.send({status:409,message:'sitemap url already use.',data:null})
        const createNewUrl = await sitemapModel.create(req.body)
        const axiosData = await axios.get('https://oyster-app-hkcep.ondigitalocean.app/siteMap/get-all-Url')
        const xml = create({
            version: '1.0',
            encoding: 'UTF-8',
        }).ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

        axiosData.data.data.forEach((url) => {
            console.log(url.url);
            xml.ele('url').ele('loc').txt(url.url).up()
                .ele('lastmod').txt(new Date().toISOString()).up()
                .ele('changefreq').txt('daily').up()
                .ele('priority').txt('1.0').up().up();
        });
        const xmlString = xml.end({ prettyPrint: true });
        fs.writeFileSync('./public/sitemap.xml', xmlString, 'utf-8');
        res.send({status:200,message:'sitemap create successfully',data:createNewUrl})
       } catch (error) {
        res.status(404).send({status:false,message:error.message,data:error})
       }
    }
    async findAllData (req,res){
        const findAll = await sitemapModel.find({})
        if (findAll.length == 0) {
            return res.status(404).send({status:false,message:'data not found',data:null})
        }
        res.send({status:true,message:'find all data',data:findAll})
    }
}
const sitemap = new sitemapController()
export default sitemap