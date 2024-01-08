import mongoose from 'mongoose';

const users = new mongoose.Schema ({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'User'},
    token:{type:String,required:true},
    status:{type:Boolean,default:true}
}, {
    timestamps: true
});
const User = mongoose.model('User',users)
export default User