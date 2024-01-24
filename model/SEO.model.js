import mongoose from 'mongoose';

const SEO = new mongoose.Schema ({
    jobTitle:{type:String,required:true},
    employeeType:{type:String,required:true},
    location:{type:String,required:true},
    skill:{type:String,required:true},
    experience:{type:String,required:true},
    salary:{type:String,required:true},
    datePosted:{type:String,required:true},
    job_Description:{type:Array,required:true},
    responsibilities:{type:Array,required:true},
    requiredskills:{type:Array,required:true},
    url:{type:String,required:false},
    seo:{type:Boolean,default:false}
}, {
    timestamps: true
});
const seoJobs = mongoose.model('Job',SEO)
export default seoJobs
