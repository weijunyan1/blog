/////////////////////主要是为了index.html发起Ajax请求/////////////////



//入口函数（本质：等待某某某加载完毕后执行代码）
$(function () {
  getListData();
})

/**umber
 * 功能：分页获取数据
 * @param {Number} pagenum 第几页
 * @param {Number} pagesize 每页显示多少条数据
 */
//获取列表数据getListData----------index.html user.js
function getListData(pagenum, pagesize) {
  $.ajax({
    type: 'GET',
    url: '/api/article',
    data: {
      pageNum: pagenum || 1,
      pageSize: pagesize || 6
    },
    success: function (result) {
      //console.log(result.data)
      //修改时间戳将时间格式修改为yy-mm-dd
      for(let i =0;i<result.data.records.length;i++){
        console.log(result.data.records[i].publishDate)
      }

      let listStr = template('list_templ', result.data);

      $('.list').html(listStr)
      //渲染分页
      
    }
  })
}