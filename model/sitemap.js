import mongoose from "mongoose";
const schema = new mongoose.Schema({
    url:{type:String,required:true},
    pagename:{type:String,required:true},
},{timestamps:true})
const sitemapModel = mongoose.model('sitemap-urls',schema)
export default sitemapModel