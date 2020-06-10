/////////////////////主要是为了index.html发起Ajax请求/////////////////



//入口函数（本质：等待某某某加载完毕后执行代码）
$(function () {
  //1获取第一页数据
  getListData();
  //2获取其他页数据
  //2.1添加点击事件
  $('.page').on('click','a',function(){
    //2.2获取点击页码数
    //console.log($(this).data('pagenum'))
    //2.2将点击页码数调处来
    let pagenum=$(this).data('pagenum')
    getListData(pagenum)
  })
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
      //列表模板
      //console.log(result.data)
      //修改时间戳将时间格式修改为yy-mm-dd
      for (let i = 0; i < result.data.records.length; i++) {
        //console.log(moment(result.data.records[i].publishDate).format('YYYY-MM-DD'))
        //重新赋值
        //具体解析：
        //将result.data.records[i].publishDate使用moment重新格式后赋值给result.data.records[i].publishDate
        result.data.records[i].publishDate = moment(result.data.records[i].publishDate).format('YYYY-MM-DD')
      }

      let listStr = template('list_templ', result.data);

      $('.list').html(listStr)

      //渲染分页
      //获取模板  传入result
      let paginationStr = template('page_templ',result.data)
      //渲染
      $('.page').html(paginationStr)


    }
  })
}