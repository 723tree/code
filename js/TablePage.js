
var data1=document.getElementById('test1');
var data2=document.getElementById('test2');
data1.onclick=function () {
    if(data2.value){
        data2.value='';
    }
}
data2.onclick=function () {
    if(data1.value){
        data1.value='';
    }
}
function beforeSubmit(){
    if(data1.value==''&&data2.value==''){
        error();
        return false;
    }
    else {
        document.getElementById("myForm").setAttribute('action','InStationRunTable')
        document.getElementById("myForm").submit();
    }
    return true;
}
function daochu() {
    form=document.getElementById('myForm');
    form.setAttribute('action','ExcelOut_Example2')
    document.getElementById("myForm").submit();
}
function error(){
    $('.kong2').addClass('alert alert-danger').html("日期不能为空！");
}