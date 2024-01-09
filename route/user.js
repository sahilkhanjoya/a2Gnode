import express from 'express'
import  Users  from '../controller/user.js'
const userRouter = express()

userRouter.post('/login',Users.login)
userRouter.post('/signup',Users.signup)
export default userRouter
