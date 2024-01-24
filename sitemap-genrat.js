import axios from 'axios';
import { create } from 'xmlbuilder2';
import fs from 'fs';

const websiteUrl = 'https://a2groups.org';

async function getUrls() {
    try {
      const axiosData = await axios.get('http://localhost:8080/siteMap/get-all-Url')
      const data = axiosData.data.data
      return data
    } catch (error) {
        throw error;
    }
}

export async function generateSitemap() {
    try {
        const urls = await getUrls();
        // console.log('Generated URLs:', urls);
        const xml = create({
            version: '1.0',
            encoding: 'UTF-8',
        }).ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

        urls.forEach((url) => {
            console.log(url.url);
            xml.ele('url').ele('loc').txt(url.url).up()
                .ele('lastmod').txt(new Date().toISOString()).up()
                .ele('changefreq').txt('daily').up()
                .ele('priority').txt('1.0').up().up();
        });
        const xmlString = xml.end({ prettyPrint: true });
        fs.writeFileSync('./public/sitemap.xml', xmlString, 'utf-8');
        console.log('Sitemap.xml generated successfully.');
    } catch (error) {
        console.error('Error generating sitemap:', error.toString());
    }
}
