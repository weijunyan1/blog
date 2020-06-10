//////////////////////用户表/////////////////


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

//3.创建并应用约束
let User = new mongoose.model('User', new mongoose.Schema({
    //用户名(必填，长度6-18位之间)
    username: {
        type:String,
        required:true,
        //唯一
        unique:true,
        minlength:6,
        maxlength:18,
    },
    //密码(必填，长度在6-12位之间)
    password: {
        type:String,
        required:true,
        minlength:6,
        maxlength:12,
    },
    //邮箱
    email: {
        type:String,
        required:true,
        //唯一
        unique:true
    },
    //状态(1 true:用户正常，0 false:用户被禁用)
    status: {
        type:Boolean,
        default:true,
    },
    //角色(必选，普通用户或超级管理员)
    role: {
        type:String,
        required:true,
    }
}))

// //4.写一条数据--->初始化数据因为以后的数据添加都在界面操作，所以只用这一次
// User.create({
//      //用户名(必填，长度6-18位之间)
//      username: 'xiaoxiesheng',
//     //密码(必填，长度在6-12位之间)
//     password:'1234567',
//     //邮箱
//     email: '123456@qq.com',
//     //状态(1 true:用户正常，0 false:用户被禁用此处默认为true，所以可以不写
//     // status: {
//     //     type:Boolean,
//     //     default:true,
//     // },
//     //角色(必选，普通用户或超级管理员)
//     role: '超级管理员'
// })

module.exports = User;