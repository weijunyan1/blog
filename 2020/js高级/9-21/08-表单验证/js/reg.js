//当页面加载完毕时开始执行
window.onload=function(){
    //获取文本框
    //获取电话栏
    let tel=document.querySelector('#tel');
    //获取qq栏
    let qq=document.querySelector("#qq");
    //获取昵称栏
    let nickname=document.querySelector('#nc')
    //获取短信验证码
    let  msg=document.querySelector("#msg")
    //获取登录密码
    var password=document.querySelector('pwd');
    //获取输入密码
    var surepwd=document.querySelector('#surepwd')
    
  
    
    //创建正则表达式
    //手机号的长度w为11位   其中前有两位有要求，后9位随机
    //(第一位为1强制要求，第二位为34578中的其中一个强制要求，其余的为0到9的任意数字\b 随机获取的数字有9位{9})
    regTel=/^1[3|4|5|7|8]\d{9}$/
    //qq号的长度为5~~9位
    //第一位为1-9中的任意一位，其余的为0-9的任意一位{4,9}限制它的长度
    regQQ=/^[1-9]\d{4,9}$/
    //昵称
    //长度为2-8（最少两个字符，最多8个字符）w为字数
    regNc = /^[\u4e00-\u9fa5\da-zA-Z-_]{2,8}$/
    //短信验证码 是一个6位数的随机数
    regMsg=/^\d{6}$/
    //登录密码 长度为6--16位
    regPwd = /^[a-zA-Z\d]{6,16}$/



    //创建函数，用正则表达式判断输入的值是否符合规则
    //ipt为输入框，rex为输入框中的输入值
    function cheac(ipt,rex){
        //创建一个输入框失去焦点的事件(onblr事件会在对象失去焦点后发生)
        //test() 方法用于检测一个字符串是否匹配某个模式.
        ipt.onblur=function(){
            //使用正则表示式判断输入框中的值是否符合正则表达式的标准
            if(rex.text(ipt.value)){
                //如果符合正则表达式的标准
                //就需要将输入框后面的span标签的类更改
                ipt.nextElementSibling.ClassName='success'
                ipt.nextElementSibling.innerHtml='<i class="success_icon"></i>恭喜您输入正确'
            }else{
                 ipt.nextElementSibling.className = 'error'
                 ipt.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式输入不正确，请重新输入'
            }
        }
    }

    //check是用来复审核的
    //将文本框输入的内容，和正则表达式进行比较

    check(tel, regTel)
    check(qq, regQQ)
    check(nickname, regNc)
    check(msg, regMsg)
    check(password, regPwd)

    //二次确认密码
    //创建鼠标失去焦点事件
    surepwd.onblur=function(){
        //对二次输入的密码进行正则表达式校验
        if(regPwd.text(surepwd.value)){
            //判断两次密码是否正确
            if(surepwd.value==password.value){
                //将二次获取的密码的后面的span标签的类更改
                surepwd.nextElementSibling.ClassName='success';
                surepwd.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您密码输入正确'
            }else{
                surepwd.nextElementSibling.className = 'error'
                // 在span标签中加入失败的提醒
                surepwd.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不同，请重新输入'
            }
        }else{
            surepwd.nextElementSibling.className = 'error'
            // 在span标签中加入失败的提醒
            surepwd.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不同，请重新输入'
        }
    }
}