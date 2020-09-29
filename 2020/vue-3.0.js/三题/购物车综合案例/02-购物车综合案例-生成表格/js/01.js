// js逻辑代码：

// 全选按钮

$('#all').click(function () {

    // 当前复选框的属性

    var status = $(this).prop('checked')

    // 选中的属性

    $('.dx').prop('checked', status)

    zj() //调用总价

})

//判断当前的全选按钮是否选中

function check_all() {

    //获取class为dx的所有的复选框的个数

    var dx = $(".dx").length;



    // 获取选中的复选框的个数

    var dx1 = $(".dx:checked").length;



    if (dx == dx1) {

        $("#all").prop("checked", true);

    } else {

        $("#all").prop("checked", false);

    }

}

//给按钮绑定点击事件，调用全选按钮的判断条件

$(".dx").click(function () {

    check_all();



    zj(); // 总价

})











// 选中删除

$('#xs').click(function () {

    // 遍历复选框是否选中

    $('.dx').each(function (index, item) {

        // 如果复选框属性等于true

        if ($(item).prop('checked') == true) {

            // 当前元素的父元素的父元素删除

            $(this).parent().parent().remove()

        }

    })

    zj() // 总价

})







// 清空购物车

$('#qk').click(function () {

    // 删除tbody

    $('tbody').empty();

})





// 减

$('.jian').click(function () {

    // 获取当前元素的下一个兄弟元素的val值

    var num = parseInt($(this).next().val());

    num--;

    if (num = 1) {

        num = 1;

    }

    // 当前元素的下一个兄弟元素val值是num

    $(this).next().val(num)

    zj() // 总价

})





// 加

$('.jia').click(function () {

    // 获取当前元素的上一个兄弟元素的val值

    var num = parseInt($(this).prev().val());

    num++;

    // 当前元素的上一个兄弟元素的val值为num

    $(this).prev().val(num)

    zj() // 总价

})







// 删除

$('tr>td>a').click(function () {

    // 当前父元素的父元素删除

    $(this).parent().parent().remove();

    zj() // 总价

})





// 总价

function zj() {
    var zj = 0.00; //商品总价
    var sl = 0; //选中商品数量
    $('.dx:checked').each(function () {
        // 单价
        var dj = $(this).parent().nextAll().eq(1).text();
        // 商品数量
        var num = $(this).parent().nextAll().eq(2).children('.txt').val()
        // 总价
        zj += num * dj;
        //数量
        sl += parseInt(num);
    })
    // 选中商品的总数量
    $('strong').eq(0).text(sl);
    // 总计商品的总价格
    $('strong').eq(1).text(zj.toFixed(2));
    // 遍历选中商品
    $('.dx').each(function () {
        // 单价
        var dj = $(this).parent().nextAll().eq(1).text();
        //商品数量
        var num = $(this).parent().nextAll().eq(2).children('.txt').val()
        // 总价
        var totals = num * dj;
        $(this).parent().nextAll().eq(3).text(totals.toFixed(2))
    })
}

zj()