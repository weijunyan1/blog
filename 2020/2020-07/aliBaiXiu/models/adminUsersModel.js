// 引入数据库连接池
const pool = require('../config/dbconfig');

//#region 查询用户信息
module.exports.findCount = (pagenum,pagesize,callback) => {
    // 如果想要让msyql包支持多条sql查询 需要在数据库连接池中设置  multipleStatements: true,
    pool.query(`
    SELECT * FROM users LIMIT ?,?; SELECT COUNT(*)AS tatal FROM posts;  -- pcount是文章总数`,[pagenum,pagesize]
      , function (error, results) {
        if (error) throw error;
        callback(results);
        // console.log(results)
      });
  }
  //#endregion

  module.exports.delectOne = (id,callback)=>{
    pool.query(`
    UPDATE users SET 'status' = 'transhed' WHERE id = ${id}`,
    function (error, results) {
        if (error) throw error;
        callback(results);
        // console.log(results)
      });
  }