//1引入express
const express = require('express');

//2使用express方法创建路由
const { showArticle, editArticle } = require('../controller/articleCtrl')
const articleRouter = express.Router();
//3创建路由
articleRouter.get('/', showArticle)

articleRouter.get('/edit', editArticle)
//4导出
module.exports = articleRouter;