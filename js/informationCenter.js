function onCheckBox(checkbox)
{
    var items = document.getElementsByName("name");
    var maxChoices = 3;
    var flag = 0;
    for(var i=0; i<items.length; i++)
    {
        if(items[i].checked)
        {
            flag ++;
        }
    }
    if(flag >= maxChoices)
    {
        for(var k=0; k<items.length; k++)
        {
            if(!items[k].checked)
            {
                items[k].disabled = true;
            }
        }
    }
    else
    {
        for(var p=0; p<items.length; p++)
        {
            if(!items[p].checked)
            {
                items[p].disabled = false;
            }
        }
    }

    // alert(place)
}

function onSubmitVote()
{
    var items = document.getElementsByName("name");
    var choices = 0;
    var maxChoices = 3;
    var place=[];
    var watch=document.getElementById('watch');
    for(var j=0; j<items.length; j++)
    {
        if(items[j].checked)
        {
            place.push(items[j].value);
            choices ++;
        }
    }
    // alert(place);
    if(choices == 0)
    {
        watch.setAttribute("href",'#')
        alert("请先选择勾选项");

    }
    else if(choices > maxChoices)
    {
        watch.setAttribute("href",'#')
//            alert("选择选项不能超过 "+ maxChoices + "个");
    }
    else
    {
        watch.setAttribute("href","dataCompare.html")
//            alert("提交成功");
    }
}
