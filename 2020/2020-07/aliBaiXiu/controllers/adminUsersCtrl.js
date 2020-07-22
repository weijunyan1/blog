
const {findCount,delectOne} = require('../models/adminUsersModel')

module.exports.UsersIndex = (req, res) => {
    findCount(0,50,function(results){
        console.log(results[0])
        
        res.render('./admin/users', 
        { title: "后台管理系统-用户" ,
          data:results[0],
          tatal:results[1][0].tatal,
          pagenum:0,
          pagesize:50
        });
    })
  }

// 删除
module.exports.UsersDelect = (req,res)=>{
    console.log(req.body)
    let id = 1;
    delectOne(id,function(results){
        console.log(results)
    })
}

module.exports.UsersEdit = (req, res) => {
  res.render('./admin/profile', { title: "后台管理系统-编辑用户" });
}

