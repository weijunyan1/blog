//入口函数
$(document).ready(function () {
    //当页面进入后，获取文章id显示文章详情
    //获取文章ID
    let id = new URLSearchParams(location.search).get('id')
    //检验是否获取成功
    //console.log(id)
    //成功后将ID 传给后台
    getDetailDate(id)
})

//请求数据
//id形参
function getDetailDate(id) {
    //$.get(url,param,callback(daata));
    //url请求资源的路径，
    //param请求参数，注意将请求参数写在url后，这里填null,
    //callback(data)回调函数。服务器响应事件后，Ajax引擎xhr会自动调用回调函数数据没有回来时页面不会等待而是继续执行
    // $.ajax({  

    // })
    $.get(`/api/detail?id=${id}`, null, function (result) {
        //console.log(result)



       
 
            result.data.publishDate = moment(result.data.publishDate).format('YYYY-MM-DD')
       
        //2.渲染模板
        //2.1先将数据获取到
        let articleStr=template('article_templ',result.data)
        //然后将数据渲染到<div class="container"></div>的前面
        $('.container').prepend(articleStr)
    });
}