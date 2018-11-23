/* 初始化页面 */
initTotalPageNum=5;
pageSize=3;
if(initTotalPageNum!=0){
    $("#ui-page").paging({pageSize:pageSize,totalPage:initTotalPageNum});
    document.getElementsByClassName('page')[1].click();
}
if(pageSize==1){
    $("#ui-page").paging({pageSize:pageSize,totalPage:initTotalPageNum});
    document.getElementsByClassName('page')[1].click();
    document.getElementById('next').style.display='none';
    document.getElementById('end').style.display='none';
}

initTotalPageNum2=5;
pageSize2=3;
if(initTotalPageNum2!=0){
    $("#ui-page2").paging2({pageSize2:pageSize2,totalPage2:initTotalPageNum2});
    document.getElementsByClassName('page2')[1].click();
}
if(pageSize2==1){
    $("#ui-page2").paging2({pageSize2:pageSize2,totalPage2:initTotalPageNum2});
    document.getElementsByClassName('page2')[1].click();
    document.getElementById('next2').style.display='none';
    document.getElementById('end2').style.display='none';
}


var checkedIds= [];//保存radio选中的id
var checkValues=[];//保存radio选中的value
var temp;
function save(id) {
    if($("#"+id).is(":checked")){
        checkedIds.push($("#"+id).attr("id"));
        checkValues.push($("#"+id).attr("value"));
        temp=checkedIds[checkedIds.length-1];
    }
    if($("#"+id).is(":checked")==false){
        for(var i=0; i<checkedIds.length; i++){
            if($("#"+id).attr("id") == checkedIds[i]){
                checkedIds.splice(i, 1);
                break;
            }
        }
        for(var j=0; j<checkValues.length; j++){
            if($("#"+id).attr("value") == checkValues[j]){
                checkValues.splice(j, 1);
                break;
            }
        }
    }
}

function setradio() {
    var radionum=$("input[name='name']");
    for (var k=0;k<radionum.length;k++){
        if (radionum[k].id==temp){
            radionum[k].checked=true;
        }
        else {
//                radionum[k].setAttribute("disabled","true")
            radionum[k].checked=false;
        }
    }
}

//翻页后设置是否选中
function setChecked(){
    var $boxes =  $("input[name='name']");
    for(var i=0;i<$boxes.length;i++){
        var id = $boxes[i].id;
        if(checkedIds.indexOf(id,0)!=-1){
            $boxes[i].checked = true;
        }
        else{
            $boxes[i].checked = false;
        }
    }
}
var checkedIds2= [];//保存checkbox选中的id
var checkValues2=[];//保存checkbox选中的value
function save2(id) {
    if($("#"+id).is(":checked")){
        checkedIds2.push($("#"+id).attr("id"));
        checkValues2.push($("#"+id).attr("value"));
    }
    else{
        for(var i=0; i<checkedIds2.length; i++){
            if($("#"+id).attr("id") == checkedIds2[i]){
                checkedIds2.splice(i, 1);
                break;
            }
        }
        for(var j=0; j<checkValues2.length; j++){
            if($("#"+id).attr("value") == checkValues2[j]){
                checkValues2.splice(j, 1);
                break;
            }
        }
    }
//        alert(checkValues2)
}
//翻页后设置是否选中
function setChecked2(){
    var $boxes =  $("input[name='name2']");
    for(var i=0;i<$boxes.length;i++){
        var id = $boxes[i].id;
        if(checkedIds2.indexOf(id,0)!=-1){
            $boxes[i].checked = true;
        }else{
            $boxes[i].checked = false;
        }
    }
}

/* 动态写入数据 */
var radio = document.getElementsByName("name");
var names=document.getElementsByClassName('usersname');

//    提交验证
function getValue(){
    var radiovalue=[];
    for (i=0; i<radio.length; i++) {
        if (radio[i].checked) {
            radiovalue=names[i].innerHTML
        }
    }
    if (radiovalue==""&&checkValues2==""){
        // alert("请勾选需要关联的二三级用户")
        error1();
        return false
    }
    if (radiovalue==""){
        // alert("请勾选二级用户")
        error2();
        return false
    }
    if (checkValues2==""){
        // alert("请勾选三级用户")
        error3();
        return false
    }
    else {
        var l=checkedIds.length-1;
        alert('二级用户：'+checkedIds[l]+'三级用户：'+checkedIds2)
        document.getElementById("myForm").submit();
    }
    return true;
}
function error1(){
    $('.kong2').addClass('alert alert-danger text-center').html("请勾选需要关联的二三级用户");
}
function error2(){
    $('.kong2').addClass('alert alert-danger text-center').html("请勾选二级用户");
}
function error3(){
    $('.kong2').addClass('alert alert-danger text-center').html("请勾选三级用户");
}
