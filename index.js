import Express from "express";
import cors from "cors"
import db from "./mysqlDB/DB.js";
import cookieParser from "cookie-parser";
// import bannerroute from "./route/banner.route.js";
// import venrouter from "./route/ventures.route.js";
// import meanroute from "./route/meanbanner.route.js";
// import locationroute from "./route/location.route.js";
// import figroute from "./route/figure.route.js";
// import smallroute from "./route/smallbanner.route.js";
// import brandroute from "./route/ourbrand.rout.js";
// import touchroute from "./route/getintouch.route.js";
// import journeyroute from "./route/journey.route.js";
// import peopleroute from "./route/ourpeople.route.js";
// import queryRoute from "./route/query.route.js";
// import cityroute from "./route/city.route.js";
import SEOroute from "./route/SEO.route.js";
import HRroute from "./route/HRexecutive.route.js";
import userRouter from "./route/user.js";
import tagRouter from "./route/seo.tags.js";
import sitemapRouter from "./route/sitemap.js";
import fs from "fs";
import generateSitemap from "./sitemap.js";
import ContactRouter from "./route/contact.js";

const app = Express()
app.use(Express.json())
app.use(cors())
db()
// generateSitemap()
app.use(cookieParser())
// app.use(bannerroute)
// app.use(venrouter)
// app.use(meanroute)
// app.use(locationroute)
// app.use(figroute)
// app.use(smallroute)
// app.use(brandroute)
// app.use(touchroute)
// app.use(journeyroute)
// app.use(peopleroute)
// app.use(queryRoute)
// app.use(cityroute)
app.use(SEOroute)
app.use(HRroute)
app.use(userRouter)
app.use(tagRouter)
app.use(sitemapRouter)

app.get('/sitemap.xml', (req, res) => {
  const sitemapContent = fs.readFileSync('./public/sitemap.xml', 'utf-8');
  res.type('application/xml').send(sitemapContent);
});
app.use( Express.static('public'))
app.use(ContactRouter)
app.use('/image', Express.static('image'))
app.use('/pdf', Express.static('pdf'))
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send({ status: false, message: error.message, data: error })
});
generateSitemap()
app.listen(8080, () => {
    console.log("=======");
});