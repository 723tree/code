function beforeSubmit(){
    var name=document.getElementById('name').value;
    var a=document.getElementById('a');
    var b=document.getElementById('b');
    var c=document.getElementById('c');
    var d=document.getElementById('d');
    var price=document.getElementById('price').value;
    var cost=document.getElementById('cost').value;
    var content=document.getElementById('content').value;
    var subsidy=document.getElementById('subsidy').value;
    var one=document.getElementById('one').value;
    var two=document.getElementById('two').value;
    var phone=document.getElementById('phone').value;
    var sn=document.getElementById('sn').value;
    var hide=document.getElementById('hide')
    var sn2=document.getElementsByName('sn')
    var snnum=[]
    var i=0
    for(;i<sn2.length;i++){
        snnum.push(sn2[i].value)
    }
    hide.value=snnum;
    alert(snnum);

    if(name==''){
        error();
        return false;
    }
    if(!a.checked&&!b.checked&&!c.checked&&!d.checked){
        error();
        return false
    }
    if(price==''){
        error();
        return false;
    }
    if(cost==''){
        error();
        return false;
    }
    if(content==''){
        error();
        return false;
    }
    if(subsidy==''){
        error();
        return false;
    }
    if(one.checked==false && two.checked==false){
        error();
        return false
    }
    if(phone==''){
        error();
        return false;
    }
    if(sn==''){
        error();
        form.sn.focus();
        return false;
    }
    else {
        document.getElementById("myform").submit();
    }
    return true;
}
function error(){
    $('.kong2').addClass('alert alert-danger').html("请将信息填写完整！");
    $('input[type="password"]').val('');
}


function addsn() {
    $('#block').append('<div class="addSN" style="margin-bottom: 10px;margin-top: 30px"><input type="text" placeholder="请输入新添加的SN号" name="sn" value="" ><i class="fa fa-minus-square" title="撤销" onclick="delesn()"></i></div>')
}
function delesn() {
    $('.addSN').remove()
}



