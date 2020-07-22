// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminUsersRouter = express.Router();
// 3.引入控制器方法
const {UsersIndex , UsersEdit , UsersDelect} = require('../controllers/adminUsersCtrl')
// 4.创建具体路由
// 4.1 显示用户管理页面
adminUsersRouter.get('/users',UsersIndex)
// 4.2 显示用户编辑页面
adminUsersRouter.get('/users/edit', UsersEdit)
// 4.3 通过ID删除用户
adminUsersRouter.put('/users/delete',UsersDelect)
// 5.导出路由
module.exports = adminUsersRouter;