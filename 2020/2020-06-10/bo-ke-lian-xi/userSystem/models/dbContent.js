// 1.引入模块
const mongoose = require('mongoose');
// 2.连接数据库
mongoose.connect('mongodb://localhost/db_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    console.log("数据库连接成功")
}).catch((err => {
    console.log(err)
}))