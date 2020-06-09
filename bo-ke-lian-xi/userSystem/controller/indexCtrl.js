// //要查询数据,文章表和用户表
// //先要导入文章数据
// const Article = require('../models/article')
// const mongooseSexPage = require('mongoose-sex-page');
// //用户数据
// require('../models/user')

// module.exports.getArticle = async (req, res) => {
//     //返回数据
//     // Article.find().then(data => {
//     //     console.log(data)
//     // })

//     //let result=await Article.find()
//     //console.log(result)

//     // page 代表第几页
//     // size 代表每页显示多少条数据
//     // display 代表显示的页码数量
//     // exec() 向数据库发出查询请求
//     // 参考答案: https://www.npmjs.com/package/mongoose-sex-page
//     let result = await mongooseSexPage(Article).page(1).size(6).display().find().populate("author").exec();


//     res.send({
//         code: 200,
//         msg: '数据获取成功',
//         data: result
//     })
// }

//Article文章集合
const Article = require('../models/article');
//mongooseSexPage数据库的分页插件
const mongooseSexPage = require('mongoose-sex-page');
// Schema hasn't been registered for model "User". 调用User约束
require('../models/user')

module.exports.getArticle = async (req, res) => {
  // Article.find().then(data => {
  //   console.log(data);
  // })

  // page 代表第几页
  // size 代表每页显示多少条数据
  // display 代表显示的页码数量
  // exec() 向数据库发出查询请求
  // 参考答案: https://www.npmjs.com/package/mongoose-sex-page
  let result = await mongooseSexPage(Article).page(1).size(6).display().find().populate("author").exec();
  // console.log(result);
  res.send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}