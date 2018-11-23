window.onload=function () {
    $('#username').mouseout(function () {
        if ($('#username').val() == "" ) {
            $('#username').attr('placeholder', '请输入账号');
            $('#next').attr('disabled', true)
        }
        else {
            $('#next').attr('disabled', false)
        }
    })
    $('#password').mouseout(function () {
        if ($('#password').val() == "") {
            $('#password').attr('placeholder', '请输入密码');
            $('#next').attr('disabled', true)
        }
        else {
            $('#next').attr('disabled', false)
        }
    })
    $('#confirmPassword').mouseout(function () {
        if ($('#confirmPassword').val() == ""||$('#confirmPassword').val()!=$('#password').val() )   {
            $('#confirmPassword').attr('placeholder', '请确认密码');
            $('#next').attr('disabled', true)
        }
        else {
            $('#next').attr('disabled', false)
        }
    })
    $("#demoForm").validate({
        rules: {
            username: {
                required: true,
            },
            password: {
                required: true,
                number:true,
                minlength: 2,
                maxlength: 16
            },
            "confirmPassword": {
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "必须填写用户名",
                remote: '用户名不存在'
            },
            password: {
                required: "必须填写密码",
                minlength: "密码最小为2位",
                maxlength: "密码最大为16位",
                number:"密码必须为数字"
            },
            confirmPassword: {
                equalTo: "两次输入密码不一致"
            }
        }
    })
}

