

//3创建路由
module.exports.showUser=(req,res)=>{
    //res.send('用户列表')
    res.render('user')
}

module.exports.editUser=(req,res)=>{
    //res.send('用户编辑')
    res.render('user-edit')
}

