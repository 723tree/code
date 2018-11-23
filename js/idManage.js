function beforeSubmit() {
    var name=document.getElementById('name').value;
    var password=document.getElementById('password').value;
    var password2=document.getElementById('password2').value;
    var error=document.getElementById('error').value;
    if(name==''){
        // alert('用户名不能为空！');
        error1();
        form.number.focus();
        return false;
    }
    if(password==''){
           // alert('密码不能为空！');
        error1();
        form.password.focus();
        return false;
    }
    if(password2==''){
        // alert('密码不能为空2！');
        error1();
        form.password.focus();
        return false;
    }
    if(password!=password2){
        // alert('两次密码输入不同！');
        error2()
    }
    else {
        document.getElementById("form").submit();
        success()
    }
    return true;
}

function error1(){
    $('#error').addClass('alert alert-danger').html("用户名和密码不能为空！");
}
function error2(){
    $('#error').addClass('alert alert-danger').html("两次密码输入不一致！");
}
function error3(){
    $('#error').addClass('alert alert-danger').html("该用户名已注册！");
}
function success(){
    $('#error').addClass('alert alert-success').html("创建成功！");
}


