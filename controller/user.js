import User from "../model/user";

class user {
   async signup (req,res){
        const userCheck = await User.findOne({email:req.body.email})
        if(userCheck) return res.status(409).send({status:false,message:'User already exist',data:null})
        const createNewUser = await User.create(req.body)
        res.send({ })
    }
}