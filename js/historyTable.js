var myDate = new Date();//获取系统当前时间
var today=myDate.toLocaleDateString()//获取当前日期
//执行一个laydate实例
laydate.render({
    elem: '#test1', //指定元素
    max:today
});
laydate.render({
    elem: '#test2', //指定元素
    range: true,
    max:today

});

selectType=document.getElementById('select');
function caiji() {
    selectType.innerHTML="采集器"
}
function libian() {
    selectType.innerHTML="逆变器"
}
function dianbiao() {
    selectType.innerHTML="采集器"
}
function qixiang() {
    selectType.innerHTML="气象站"
}

window.onload = function () {
//        tab选项卡
    var tab=document.getElementById('tab');
    var lis=tab.getElementsByTagName('li');
    var con=document.getElementsByClassName('con');
    for(var i=0;i<lis.length;i++){
        lis[i].xuhao=i;
        lis[i].onclick=function () {
            for(var j=0;j<con.length;j++){
                con[j].style.display='none';
                lis[j].classList.remove('active')
            }
            con[this.xuhao].style.display='block';
            lis[this.xuhao].setAttribute('class','active')
        }
    }
}

$(document).ready(function() {
    $('.inactive').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            $(this).addClass('inactives');
            $(this).siblings('ul').slideDown(100).children('li');
        }else{
            $(this).removeClass('inactives');
            $(this).siblings('ul').slideUp(100);
        }
    })
});

initTotalPageNum=10;
if(initTotalPageNum!=0){
    $("#ui-page1").paging1({pageSize:3,totalPage:initTotalPageNum});
    document.getElementsByClassName('page')[0].click();
}

initTotalPageNum2=10;
if(initTotalPageNum2!=0){
    $("#ui-page2").paging2({pageSize2:3,totalPage2:initTotalPageNum2});
    document.getElementsByClassName('page2')[0].click();
}

initTotalPageNum3=20;
if(initTotalPageNum3!=0){
    $("#ui-page3").paging3({pageSize3:3,totalPage3:initTotalPageNum3});
    document.getElementsByClassName('page3')[0].click();
}
initTotalPageNum4=20;
if(initTotalPageNum4!=0){
    $("#ui-page4").paging4({pageSize4:3,totalPage4:initTotalPageNum4});
    document.getElementsByClassName('page4')[0].click();
}