function checkme(){
    var phone=document.getElementById("phone").value;
    // alert(phone)
    var mobilevalid = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!mobilevalid.test(phone)) {
        $('#phone').val('').attr('placeholder', '请输入正确的手机号码！');
        // .placeholder="请输入正确的手机号码！"
    }
}

function beNumber(id) {
    var check=$("input[type='number']");
    // alert(check.length)
    for(var i=0;i<check.length;i++){
        var myid = id;
        var num=/[^a-zA-Z]/;
        // alert(document.getElementById(myid).value);
        if (!num.test(document.getElementById(myid).value)){
            // alert("只能输入数字")
            $("#"+myid).val('').attr('placeholder', '只能输入数字！');
        }
    }

}