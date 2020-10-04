const pool = require('../config/dbconfig');

/**
 * 添加一个新用户
 * @param {*} userInfo 新用户信息
 * @param {*} callback 回调函数
 */
module.exports.addOneUser = (userInfo, callback) => {
    var values = '';
    //拼接数据
    for(let k in userInfo){
        values += "'"+userInfo[k]+"',";
    };

    //删除末尾,
    values = values.slice(0,-1);
    console.log(values);
    pool.query(`
    INSERT INTO users (uname,password,age,email,hobbies) VALUES (${values})
    ` 
    ,function(error,results){
        if(error) throw error;

        callback(results);
    })



    // pool.query("INSERT INTO users SET ?", userInfo, (error, results) => {
    //     if (error) throw error;
    //     callback(results);
    // })
}