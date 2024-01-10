import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{type:String,required:true},
    des:{type:String,required:true},
    keyWord:{type:String,required:true},
    page:{type:String,required:false},
    image:{type:String,required:false},
    url:{type:String,required:false},
    Type:{type:String,required:false},
})
const SeoTag = mongoose.model('Seo',schema)
export default SeoTag