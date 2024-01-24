import mongoose from "mongoose";

const schemas = new mongoose.Schema({
    name:{type:String,required:true},
    number:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
},{timestamps: true})
const Contact = mongoose.model('Contect',schemas)
export default Contact