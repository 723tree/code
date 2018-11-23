/**
 * Created by gome1 on 2018/4/12.
 */
function beforeSubmit(){
    var password=document.getElementById('password').value;
    var number=document.getElementById('user-number').value;
    if(number==''){
//            alert('用户名不能为空！');
        error();
        form.number.focus();
        return false;
    }
    if(password==''){
//            alert('密码不能为空！');
        error();
        form.password.focus();
        return false;
    }
    else {
        document.getElementById("myForm").submit();
    }
    return true;
}
function error(){
    $('.center .kong').addClass('alert alert-danger').html("邮箱或密码不能为空！");
    $('input[type="password"]').val('');
}