import mongoose from 'mongoose';

const SEO = new mongoose.Schema ({
    employeeType:{type:String,required:true},
    location:{type:String,required:true},
    skill:{type:String,required:true},
    experience:{type:String,required:true},
    salary:{type:String,required:true},
    datePosted:{type:String,required:true},
    job_Description:{type:String,required:true},
    responsibilities:{type:String,required:true},
    requiredskills:{type:String,required:true},
    jobTitle:{type:String,required:true},
    url:{type:String,required:false},
}, {
    timestamps: true
});
const seoJobs = mongoose.model('Seo_Job',SEO)
export default seoJobs
