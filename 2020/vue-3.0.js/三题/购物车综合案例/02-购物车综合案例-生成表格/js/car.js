// 数据
var datas = [
    { pName: '牛奶', src: './uploads/01.jpg', price: 10, count: 3 },
    { pName: '三只松鼠', src: './uploads/02.jpg', price: 30, count: 1 },
    { pName: '蓝牙播放器', src: './uploads/03.jpg', price: 100, count: 1 },
    { pName: '大米', src: './uploads/04.jpg', price: 50, count: 1 },
    { pName: '路由器', src: './uploads/05.jpg', price: 110, count: 1 },
    { pName: '罐头', src: './uploads/06.jpg', price: 20, count: 1 }
];


// 【功能1：生成表格】
// 1. 遍历数组datas，取出一个对象，就生成一个tr，追加到tbody中
for (let i = 0; i < datas.length; i++) {
    // 创建一个变量用于渲染页面
    let str = datas[i]
    // 在tbody标签创建tr标签，添加$符号为了分辨
    let $tr = $('<tr></tr>')
    // 将创建的tr放进tbody标签中
    $tr.appendTo('tbody')
    // 创建选择框
    $('<td></td>').html('<input type="checkbox" class="choice">').appendTo($tr)
    // 创建商品
    $('<td></td>').html('<img src="' + str.src + '"><p>' + str.pName + '</p>').appendTo($tr)
    // 创建单价
    $('<td></td>').html(str.price + '￥').appendTo($tr)
    // 创建商品数量
    $('<td></td>').html('<div class="count-c clearfix"><a href="javascript:" class="reduce cut" >-</a><input type="text" value="' + str.count + '"><a href="javascript:" class="add">+</a></div>').appendTo($tr)
    // 创建小计
    $('<td></td>').html(str.count * str.price + "￥").appendTo($tr)
    // 创建操作
    $('<td></td>').html('<a href="javascript:" class="del">删除</a>').appendTo($tr)
}

// 【功能2：全选→点击thead中的复选框时，tbody中的复选框同步变化】
// 为全选复选框添加点击事件
$('#all').click(function () {
    // 获取当前复选框（全选框）属性
    let str = $(this).prop('checked')
    // 将选中的复选框
    $('.choice').prop('checked', str)
})

// 【功能3：控制全选→点击tbody中的某一个复选框，控制thead中的复选框是否选中】
function check() {
    // 获取所有复选框的数量
    let son = $('.choice').length
    // 获取选中的复选框的数量
    let sont = $('.choice:checked').length
    // 判断是否所有复选框都被选中
    if (son == sont) {
        $('#all').prop('checked', true)
    } else {
        $('#all').prop('checked', false)
    }
}
// 给所有复选框添加点击事件
$('.choice').click(function () {
    // 调用全选函数
    check()
})

// 【功能4：封装计算选中的总数量和总价格】
// 创建总价格函数
// function price() {
//     // 商品总价格
//     let pr = 0
//     // 选中的商品
//     let more = 0
//     // 循环遍历选中的复选框
//     $('.choice:checked').each(function () {
//         // 单价
//         let dj = $(this).parent().nextAll().eq(1).text()
//         // 商品数量
//         let num = $(this).parent().nextAll().eq(2).children('.txt').val()
//         pr += num * dj
//         // 强制成两位小数
//         more += parseInt(num)
//     })
//     $('#totalCount').text(more)
//     $('#totalPrice').text(more.toFixed(2))
//     $('.choice').each(function () {
//         // 单价
//         let dj = $(this).parent().nextAll().eq(1).text()
//         // 商品数量
//         let num = $(this).parent().nextAll().eq(2).children('.txt').val()
//         pr += num * dj
//         // 强制成两位小数+
//         more += parseInt(num)
//     })


// }
// price()
// 【功能5：点击加按钮实现数量递增】
$('.add').click(function () {
    let num = parseInt($(this).prev().val())
    num++
    $(this).prev().val(num)
})

// 【功能6：点击减按钮实现数量递减】
$('.cut').click(function () {
    // 获取当前元素的下一个兄弟元素的val值
    let num = parseInt($(this).next().val());
    if (num > 1) {
        $(this).removeClass('disabled')
        num--
    } else if (num == 1) {
        $(this).addClass('disabled')
        num = 1
    }
    $(this).next().val(num)
})
// 【功能7：删除单项】

$('.del').click(function () {
    $(this).parent().parent().remove()
})
// 【功能8：删除所选项】
$('.del-all').click(function () {
    $('.choice').each(function (item) {
        if ($(item).prop('checked') == true) {
            $(this).parent().parent().remove()
        }
    })
})

// 【功能9：清理购物车】

$('.clear').click(function () {
    // 删除tbody
    $('tbody').empty();
})

