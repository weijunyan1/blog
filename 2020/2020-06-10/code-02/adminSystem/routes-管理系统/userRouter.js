//1引入express
const express=require('express')

//2使用express方法创建路由
const userRouter=express.Router()

//* 引入userCtrl.js
const {showUser,editUser}=require('../controller/userCtrl')


//3创建路由
userRouter.get('/',showUser)

userRouter.get('/edit',editUser)

//4导出
module.exports=userRouter

