//1引入express
const express=require('express')

//2使用express方法创建路由
const articleRouter=express.Router()

//3创建路由
articleRouter.get('/',(req,res)=>{
    //res.send('文章列表页面')
    res.render('article')
})

articleRouter.get('/edit',(req,res)=>{
    //res.send('文章编辑')
    res.render('article-edit')
})

//4导出
module.exports=articleRouter