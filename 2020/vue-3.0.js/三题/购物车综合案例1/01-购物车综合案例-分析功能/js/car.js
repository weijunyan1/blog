// 数据
var datas = [
  { pName: "牛奶", src: "./uploads/01.jpg", price: 10, count: 1 },
  { pName: "三只松鼠", src: "./uploads/02.jpg", price: 30, count: 1 },
  { pName: "蓝牙播放器", src: "./uploads/03.jpg", price: 100, count: 1 },
  { pName: "大米", src: "./uploads/04.jpg", price: 50, count: 1 },
  { pName: "路由器", src: "./uploads/05.jpg", price: 110, count: 1 },
  { pName: "罐头", src: "./uploads/06.jpg", price: 20, count: 1 },
];

// 【功能1：生成表格】
// 遍历数组datas 取出第一个对象 生成一个tr 追加到tbody中
for (var i = 0, aut = datas.length; i < aut; i++) {
  // 取出一个对象
  var obj = datas[i];
  // 生成tr
  var $tr = $("<tr></tr>");
  // 追加到tbody中
  $tr.appendTo("tbody");
  // 创建第1个td
  $("<td></td>").html('<input type="checkbox" name="chbox">').appendTo($tr);
  // 创建第2个td
  $("<td></td>")
    .html('<img src="' + obj.src + '"><p>' + obj.pName + "</p>")
    .appendTo($tr);
  // 创建第3个td
  $("<td class='money-t'></td>")
    .html(obj.price + "￥")
    .appendTo($tr);
  // 创建第4个td
  $("<td></td>")
    .html(
      ' <div class="count-c clearfix"><a href="javascript:" class="reduce">-</a><input type="text" class="itxt" value="' +
        obj.count +
        '"><a href="javascript:" class="add">+</a></div>'
    )
    .appendTo($tr);
  // 创建第5个td
  $("<td></td>")
    .html(obj.count * obj.price + "￥")
    .appendTo($tr);
  // 创建第6个td
  $("<td></td>")
    .html('<a href="javascript:" class="del">删除</a>')
    .appendTo($tr);
}
// 【功能2：全选→点击thead中的复选框时，tbody中的复选框同步变化】
$(function () {
  $("#all").change(function () {
    $(this).prop("checked");
    // console.log($(this).prop("checked")); // true false
    $("tbody input").prop("checked", $(this).prop("checked"));
    //如果全选了 选中商品赋值为6
    if ($(this).prop("checked")) {
      $("  #totalCount").text(6);
    } else {
      //反之赋值为0
      $("  #totalCount").text(0);
    }
    sun();
  });
  //所有商品都选中时候 全选也选中
  $("tbody input").change(function () {
    if ($("tbody input:checked").length === 6) {
      $("#all").prop("checked", true);
      //   $("#totalCount").text($("tbody input:checked").length);
    } else {
      $("#all").prop("checked", false);
    }
    // 【功能3：控制全选→点击tbody中的某一个复选框，控制thead中的复选框是否选中】
    // 【功能4：封装计算选中的总数量和总价格】
    //获取选中框的数量
    var chks = $(" tbody input:checked").length;
    // console.log(chks);
    //把选中框数量赋值上去
    $("  #totalCount").text(chks);
    sun();
  });

  //结算
  // var tr = $("tbody tr");
  // console.log(tr);
  // for (var j = 0; j < tr.length; j++) {
  //   console.log(tr[j]);
  // }

  // 【功能5：点击加按钮实现数量递增】
  $(".add").click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings(".itxt").val();
    // console.log(n);
    n++;
    $(this).siblings(".itxt").val(n);
    //
    var t = $(this).parent().parent().siblings(".money-t").text();
    console.log(t);
    t = t.replace(/[^0-9]/gi, "");
    // console.log(m);
    var num = $(this).prev().val();
    console.log(num);
    $(this)
      .parent()
      .parent()
      .next()
      .text(`${t * num}￥`);
    console.log($(this).parent().parent().next());
    sun();
  });

  // 【功能6：点击减按钮实现数量递减】
  $(".reduce").click(function () {
    // 得到当前兄弟文本框的值
    var n = $(this).siblings(".itxt").val();
    if (n == 1) {
      return false;
    }
    // console.log(n);
    n--;
    $(this).siblings(".itxt").val(n);
    //
    var t = $(this).parent().parent().siblings(".money-t").text();
    // console.log(m);
    t = t.replace(/[^0-9]/gi, "");
    console.log(t);
    var num = $(this).next().val();
    console.log(num);
    $(this)
      .parent()
      .parent()
      .next()
      .text(`${t * num}￥`);
    console.log($(this).parent().parent().next());
    sun();
  });

  // 【功能7：删除单项】
  $(".del").click(function () {
    //   this.parentNode.parentNode.html();
    $(this).parent("td").parent("tr").remove();
    console.log(this.parentNode.parentNode);
    sun();
  });

  function sun() {
    var sum = 0;
    //    for(var i=0;i<$("tbody input:checked").length;i++){
    //     //    $(this).prop("checked")
    //     if ($("tbody input")[i].prop("checked")) {
    //     }
    $("tbody input:checked").each(function () {
      var num = $(this)
        .parent()
        .next()
        .next()
        .next()
        .next()
        .text()
        .replace(/[^0-9]/gi, "");
      console.log(this);
      console.log();

      sum += Number(num);
      console.log(sum);
    });
    // console.log(i);
    $(".total-price").text(`${sum}￥`);
  }

  // 【功能8：删除所选项】
  $(".del-all").click(function () {
    // console.log(111);

    var arr = [];
    $("tbody input[name='chbox']").each(function () {
      var state = $(this).prop("checked");
      // console.log(state);
      if (state) {
        $(this).parent().parent().remove();
      }
      sun();
    });
    // console.log(arr);
    // for (var i = 0; i < $("tbody input:checked").length; i++) {
    //   // $("this").remove();

    //    console.log($(this));

    //    var
    // }
  });
  // 【功能9：清理购物车】
  $(".clear").click(function () {
    var tr = $("tbody tr");
    console.log(tr);
    $("tbody tr").remove();
    $("#all").prop("checked", false);
    sun();
  });
});
