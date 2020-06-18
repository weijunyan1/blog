// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由

//*引入控制器代码
let {show,login}=require('../controller/indexCtrl')

const indexRouter = express.Router();
// 3.创建路由
//显示后台系统首页
indexRouter.get('/',show)

//*后台管理系统登录
// indexRouter.post('/api/login',(req,res)=>{
//   console.log(req.body)
// })
indexRouter.post('/api/login',login)


// 4.导出
module.exports = indexRouter;



