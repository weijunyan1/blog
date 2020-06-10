/////////////////文章表///////////

// 1.引入模块
const mongoose = require('mongoose');
// 2.连接数据库
// mongoose.connect('mongodb://localhost/db_blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(result => {
//     console.log("数据库连接成功")
// }).catch((err => {
//     console.log(err)
// }))

let Article=new mongoose.model('Article', new mongoose.Schema({
    //标题
    title:{
        type:String,
        required:true,
        maxlength:20,
        minlength:1
    },
    //作者
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    //时间
    publishDate:{
        type:Date,
        default:Date.now
    },
    //封面图片
    cover:{
        type:String,
        default:null
    },
    //内容
    content:{
        type:String,
        required:true
    }
}))

// //4.写一条数据--->初始化数据因为以后的数据添加都在界面操作，所以只用这一次
// Article.create({
//     //标题
//     title:'戴帽子的兔兔',
//     //作者
//     author:'5edc50327da20827083adba9',
//     //内容
//     content:'春秋'
// })

module.exports=Article