//1引入express
const express=require('express')

//2使用express方法创建路由
const userRouter=express.Router()

//3创建路由
userRouter.get('/',(req,res)=>{
    //res.send('用户列表')
    res.render('user')
})

userRouter.get('/edit',(req,res)=>{
    //res.send('用户编辑')
    res.render('user-edit')
})

//4导出
module.exports=userRouter