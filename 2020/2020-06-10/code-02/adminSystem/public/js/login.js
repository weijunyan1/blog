// 实际上不需要表单插件来进行表单校验
// 1.表单校验插件好用
// 2.阻止默认提交
// 3.前端校验主要的作用是为了提高用户体验(提示用户)
$(function () {
    $("#login-form").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
        }
  
      },
      messages: {
        password: {
          required: "密码必须填写",
        },
        email: {
          required: "邮箱必须填写",
          email: "邮箱格式错误"
        }
      },
      // 提交处理
      submitHandler: function (form) {
          //console.log(form)
          //获取序列化数据
          let formdata=$(form).serialize()
          console.log(formdata)

          //发起请求
          $.ajax({
              type:'POST',
              url:'/api/login',
              data:formdata,
              success:function(result){}
          })
      }
    });
  })
