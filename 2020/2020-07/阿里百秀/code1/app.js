// 1.导入包
// 1.1 导入express框架
const express = require('express');
// 1.2 导入path模块
const path = require('path');
// 1.3 导入用户系统首页路由
const index = require('./routes/indexRouter');
// 1.4 导入用户系统列表路由
const list = require('./routes/listRouter');
// 1.5 导入用户系统详情路由
const detail = require('./routes/detailRouter');
//1.6导入ejs包
//const ejs=require('ejs');
//1.7导入后台系统登录路由
const adminLogin=require('./routes/adminLoginRouter')
// 1.8 导入后台系统首页路由
const adminIndex = require('./routes/adminIndexRouter');
// 1.9 导入后台系统文章路由
const adminPosts = require('./routes/adminPostsRouter');
// 1.10 导入后台系统评论路由
const adminComments = require('./routes/adminCommentsRouter');
// 1.11 导入后台系统用户路由
const adminUsers = require('./routes/adminUsersRouter');
// 1.12 导入后台系统设置路由
const adminSettings = require('./routes/adminSettingsRouter');

//2.设置包
// 2.1 创建服务器
const app = express();
// 2.2 配置静态资源
app.use(express.static(path.join(__dirname, 'public')));
//2.3将前端文件views设置为模板文件的跟目录
app.set('views',path.join(__dirname,'views'));
//2.4设置模板引擎为ejs
app.set('view engine','ejs')
//2.5为heml扩展名注册ejs
//app.engine('html',ejs.renderFile)

// 3.挂载路由
// 3.1 挂载首页路由
app.use(index);
// 3.2 挂载列表路由
app.use(list);
// 3.3 挂载详情路由
app.use(detail);
//3.4挂载登录路由
app.use('/admin',adminLogin)
// 3.5 挂载首页路由
app.use('/admin', adminIndex);
// 3.6 挂载文章路由
app.use('/admin', adminPosts);
// 3.6 挂载评论路由
app.use('/admin', adminComments);
// 3.7 挂载用户路由
app.use('/admin', adminUsers);
// 3.8 挂载设置路由
app.use('/admin', adminSettings);



//4.指定端口并启动服务
app.listen(3000,()=>{
  console.log('请打开：http://localhost:3000')
});
