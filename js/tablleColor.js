/**
 * Created by gome1 on 2018/5/9.
 */

$(document).ready(function(){
    odd= {"background":"white"};//奇数样式
    even={"background":"#EDD9B1"};//偶数样式
    odd_even("#dataTable",odd,even);
    odd_even1("#dataTable1",odd,even);
    odd_even2("#dataTable2",odd,even);
    odd_even3("#dataTable3",odd,even);
    odd_even4("#dataTable4",odd,even);
});
function odd_even(id,odd,even) {
    $(id).find("tr").each(function (index, element) {
        if (index % 2 == 1)
            $(this).css(odd);
        else
            $(this).css(even);
    });
}
function odd_even1(id,odd,even) {
    $(id).find("tr").each(function (index, element) {
        if (index % 2 == 1)
            $(this).css(odd);
        else
            $(this).css(even);
    });
}
function odd_even2(id,odd,even) {
    $(id).find("tr").each(function (index, element) {
        if (index % 2 == 1)
            $(this).css(odd);
        else
            $(this).css(even);
    });
}
function odd_even3(id,odd,even) {
    $(id).find("tr").each(function (index, element) {
        if (index % 2 == 1)
            $(this).css(odd);
        else
            $(this).css(even);
    });
}
function odd_even4(id,odd,even) {
    $(id).find("tr").each(function (index, element) {
        if (index % 2 == 1)
            $(this).css(odd);
        else
            $(this).css(even);
    });
}
