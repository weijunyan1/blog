//用户登录
module.exports.login=(req,res)=>{
    //获取邮箱和密码
    //方法一
    // let email=req.body.email
    // let password=req.body.password
    // console.log(email,password)
    //方法二推理
    // console.log(req.body)
    // //备注：此时获取的是一个对象
    // let {email,password}={
    //     email:'22222@qq.com',
    //     password:'221343242'
    // }
    // console.log(email,password)
    //方法二
    let {email ,password}=req.body;
    console.log(email,password)
}