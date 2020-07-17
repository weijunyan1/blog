$(function () {
    // from标签的id
    $("#loginForm").bootstrapValidator({
        //反馈图标
        feedbackIcons: {
            //合法的
            valid: 'glyphicon glyphicon-ok',
            //不合法的
            invalid: 'glyphicon glyphicon-remove',
            //校验中
            validating: 'glyphicon glyphicon-refresh'
        },
        //提交按钮
        submitButtons: "#loginButton",
        //标明错误提示
         container: "#info", 

        fields: {
            email: {
                //关于Email的校验器            
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //设置Email的长度
                    stringLength: {
                        min: "6",
                        max: "10",
                        message: "最短为6,最长为10"
                    },
                    //邮箱格式要符合
                    emailAddress: {
                        message: '邮箱格式不正确'
                    },
                    //当服务器重新验证过后再来从新校验
                    callback: {
                        message: '用户不存在'
                    }
                }
            },
            passWord: {
                //关于password的校验器
                validators: {
                    notEmpty: {
                        message: '密码不能为空！'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]{6,30}$/,
                        message: '只能为字母数字，最短6，最长30！'
                    },
                    callback: {
                        message: '用户或密码错误'
                    }
                }
            }
        }
    });
});