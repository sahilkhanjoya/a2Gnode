import mongoose from 'mongoose';

const HR = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const applyjob = mongoose.model('job_applys',HR)
export default applyjob