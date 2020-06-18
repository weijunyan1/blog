// 1.导入包
// 1.1 导入express框架
const express = require('express');
// 1.2 导入path模块
const path = require('path');
// 1.3 引入登录页面路由
const indexRouter = require('./routes-管理系统/indexRouter');
// 1.4 引入关于用户的路由
const userRouter = require('./routes-管理系统/userRouter');
// 1.5 引入关于文章的路由
const articleRouter = require('./routes-管理系统/articleRouter');
// 1.6 引入express-sesssion
const session = require('express-session');
// 2.设置包
// 2.1 使用express方法创建Web服务
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 2.3 模板设置
// 用的模板引擎是art-template
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// 2.4 POST请求处理中间件
app.use(express.urlencoded({ extended: false }))
// 2.5 连接数据库
require('./model/dbContent');
// 2.6 设置express-session(在浏览器中有没有sessionid,名称: connect.sid)
// cookie的声明周期 如果不设置cookie的生命周期 他的周期就是浏览器打开出现 浏览器结束消失
app.use(session({
  // keyboard cat就是一个普通字符串
  // 密钥 secret 在这里表示的是签名(必须的)
  secret: 'keyboard cat',
  // resave: false,
  // saveUninitialized: true,
  // maxAge就是cookie在浏览器中存在的时间，单位是毫秒
  //cookie: { maxAge: 60000 * 30 }

}))

// 3.处理请求(挂载路由)
app.use(indexRouter);
app.use('/user', userRouter);
app.use('/article', articleRouter);



// 4.指定端口启动服务
app.listen(3000, () => {
  console.log("服务器已启动,请打开 http://localhost:3000");
})