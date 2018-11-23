function beforeSubmit() {
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var confirmPassword=document.getElementById('confirmPassword').value;
    if(username==""){
        error1();
        return false;
    }
    if(password==""){
        error1();
        return false;
    }
    if(confirmPassword==""){
        error2();
        return false;
    }
    if(password!==confirmPassword){
        error3();
        return false;
    }
    else {
        document.getElementById('demoForm').submit();
    }
    return true;
}
function error1(){
    $('.kong2').addClass('alert alert-danger').html("账号或密码不能为空！");
}
function error2(){
    $('.kong2').addClass('alert alert-danger').html("请确认密码！");
}
function error3(){
    $('.kong2').addClass('alert alert-danger').html("两次输入的密码不一致！");
}
