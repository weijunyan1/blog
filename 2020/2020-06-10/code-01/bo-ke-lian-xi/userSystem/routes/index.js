//路由文件
/////////////////////在为app.js所挂载的路由 导入的路由安排导入数据////////////

//1导入express
const express = require('express');
//2使用express.Router来创建路由
const router = express.Router();
//5导入controller文件，及导入控制文件
const { getArticle,getDetail} = require('../controller/indexCtrl')

//const router=express.Router()
//3接受前端请求并处理数据
//3.1显示首页列表数据
router.get('/api/article', getArticle);
//3.2显示文章详情数据
router.get('/api/detaile', getDetail);
//getDetail is not difind
//所以要在controller中获取文章详情
//4导出路由

module.exports = router;

