/**
 * Created by gome1 on 2018/7/19.
 */
$.fn.extend({
    paging3: function(option) {
        var obj3 = $(this);
        var defaults3 = {
            // pageSize: 10, //可视页码数量
            // totalPage:10, //数据总页码
        };
        var settings3 = $.extend(defaults3, option || {});  //初始化
        var totalPage3 = settings3.totalPage3;
        var pageSize3 = settings3.pageSize3;
        init();
        function light(obj3) {    //点击页码高亮样式，当前页码
            obj3.addClass("current").siblings().removeClass("current");
        }
        function getCurrentIndex(){
            return obj3.find(".current").index();
        }
        function getCurrentPage(){
            return parseInt(obj3.find("span").eq(getCurrentIndex()).text());
        }
        function resetPage(start){
            var objPage = obj3.find("span");
            for(var i = 2; i < pageSize3+2; i++ ) {
                $(objPage[i]).text(start++);
            }
        }
        function showHome(ishome){
            var homeObj = obj3.find(".home");
            if(ishome){
                homeObj.show();
            } else{
                homeObj.hide();
            }
        }
        function showEnd(isend){
            var endObj = obj3.find(".end");
            if(isend){
                endObj.show();
            } else{
                endObj.hide();
            }

        }
        function makePage(start,isHome,isEnd) {  //生成页码
            var index = 0;
            var html = '';
            var endPage = start + pageSize3-1;
            if(totalPage3 <= pageSize3) {
                endPage = totalPage3;
            }
            html = '<span class="home" id="home3">首页</span><span id="pre3" class="home"><</span>';
            for (var i = start; i <= endPage; i++) {
                html += '<span class="page3" id="uipage-nav3'+ i +'" onclick="mynext()">' + i + "</span>";
            }
            html += '<span id="next3" class="end">></span><span  class="end" id="end3">末页</span>';
            obj3.html(html);
            if(!isHome || start == 1){
                showHome(false);
            }
            if(!isEnd){
                showEnd(false);
            }
        }
        function refreshPage(start,nextPage){   //刷新页码
            var end = start + pageSize3 - 1;
            if(start <= 1) {
                start = 1;
                resetPage(start);
                showHome(false);
                showEnd(true);
                light($("#uipage-nav3"+nextPage));
            }else if(start>1 && start+pageSize3 < totalPage3){
                resetPage(start);
                showHome(true);
                showEnd(true);
                light($("#uipage-nav3"+pageSize3));
            }
            else if(end > totalPage3) {
                start = totalPage3 - pageSize3 + 1;
                showEnd(false);
                showHome(true);
                resetPage(start);
                var endPage = parseInt($("#uipage-nav3"+pageSize3).text()); //末页页数
                var showPageIndex = pageSize3 - (endPage - nextPage);
                light($('#uipage-nav3'+showPageIndex));
            } else if(end == totalPage3){
                resetPage(start);
                showEnd(false);
                showHome(true);
                light($('#uipage-nav3'+totalPage3));
            } else {
                resetPage(start);
                showEnd(true);
                showHome(true);
                light($('#uipage-nav3'+totalPage3-1));
            }
        }
        function init(){   //初始化页码
            if(totalPage3 <= 1) {
                return false
            } else if(totalPage3 <= pageSize3){
                makePage(1,false,false)
            } else {
                makePage(1,false,true);
            }
            light(obj3.find("span").eq(1));
        }
        obj3.find(".page3").click(function clickFirst(){
            var _this = $(this);
            var showPage = _this.text();
            light(_this);
            sendAjax3(showPage,20);
        });
        obj3.find("#next3").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex+1;
            var nextPage = currentPage + 1;
            if(currentIndex == pageSize3 + 1) {
                refreshPage(currentPage-1,nextPage);
            }
            if(currentIndex !=pageSize3 + 1){
                light(obj3.find("span").eq(showPageIndex));
            }
            sendAjax3(nextPage,10);
        });
        obj3.find("#pre3").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex - 1;
            var nextPage = currentPage - 1;
            if(currentIndex == 2) {
                refreshPage(currentPage - pageSize3,nextPage);
            }
            else{
                light(obj3.find("span").eq(showPageIndex));
            }
            sendAjax3(nextPage,10);
        });
        obj3.find("#home3").click(function(){
            refreshPage(1);
            showEnd(true);
            showHome(false);
            light(obj3.find("span").eq(2));
            sendAjax3(1,20);
        });
        obj3.find("#end3").click(function(){
            refreshPage(totalPage3-pageSize3+1);
            showEnd(false);
            showHome(true);
            light(obj3.find("span").eq(pageSize3+1));
            sendAjax3(totalPage3,20);
        });
    }
});

