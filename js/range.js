document.getElementById('fangwei').innerText=180;
$('#fangweiNum').on('input propertychange',function(){
    var num=$('#fangweiNum').val();
    document.getElementById('fangwei').innerText=num;
})

document.getElementById('qingjiao').innerText=26;
$('#qingjiaoNum').on('input propertychange',function(){
    var num=$('#qingjiaoNum').val();
    document.getElementById('qingjiao').innerText=num;
})
