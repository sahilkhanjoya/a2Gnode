import jwt from "jsonwebtoken";
import User from "../model/user.js";
import bcrypt from 'bcrypt';

class user {
    async signup(req, res) {
        const userCheck = await User.findOne({ email: req.body.email })
        if (userCheck) return res.status(409).send({ status: false, message: 'User already exist', data: null })
        req.body.password = await bcrypt.hash(req.body.password,12)
        const createNewUser = await User.create(req.body)
        res.send({ status: true, message: 'create successfullly.', data: createNewUser })
    }
    async login(req, res) {
        const userCheck = await User.findOne({ email: req.body.email })
        if (!userCheck) return res.status(409).send({ status: false, message: 'config faild', data: null })
        const password = await bcrypt.compare(req.body.password, userCheck.password)
        if (!password) return res.status(401).send({ status: false, message: 'config faild', data: null })
        userCheck.token = await jwt.sign({ data: userCheck }, "keysDatas")
        res.cookie("token", userCheck.token).status(200).send({ status: true, message: 'login successfully', data: userCheck })
    }
}
const Users = new user()
export default Users