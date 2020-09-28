Window.onload = function () {
    //获取元素
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');



    //正则表达式
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的正则表达式
    var regqq = /^[1-9]\d{4,}$/; // 10000
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\d{6}$/;
    var reqpwd = /^[a-zA-Z0-9_-]{6-16}$/


    //实参
    yz(tel, regtel)
    yz(qq, regqq)

    yz(nc, regnc)
    yz(msg, regmag)
    yz(pwd, regpwd)

 
}