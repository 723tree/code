/**
 * Created by gome1 on 2018/7/19.
 */
/**
 * Created by gome1 on 2018/7/19.
 */
$.fn.extend({
    paging4: function(option) {
        var obj4 = $(this);
        var defaults4 = {
            // pageSize: 10, //可视页码数量
            // totalPage:10, //数据总页码
        };
        var settings4 = $.extend(defaults4, option || {});  //初始化
        var totalPage4 = settings4.totalPage4;
        var pageSize4 = settings4.pageSize4;
        init();
        function light(obj4) {    //点击页码高亮样式，当前页码
            obj4.addClass("current").siblings().removeClass("current");
        }
        function getCurrentIndex(){
            return obj4.find(".current").index();
        }
        function getCurrentPage(){
            return parseInt(obj4.find("span").eq(getCurrentIndex()).text());
        }
        function resetPage(start){
            var objPage = obj4.find("span");
            for(var i = 2; i < pageSize4+2; i++ ) {
                $(objPage[i]).text(start++);
            }
        }
        function showHome(ishome){
            var homeObj = obj4.find(".home");
            if(ishome){
                homeObj.show();
            } else{
                homeObj.hide();
            }
        }
        function showEnd(isend){
            var endObj = obj4.find(".end");
            if(isend){
                endObj.show();
            } else{
                endObj.hide();
            }

        }
        function makePage(start,isHome,isEnd) {  //生成页码
            var index = 0;
            var html = '';
            var endPage = start + pageSize4-1;
            if(totalPage4 <= pageSize4) {
                endPage = totalPage4;
            }
            html = '<span class="home" id="home4">首页</span><span id="pre4" class="home"><</span>';
            for (var i = start; i <= endPage; i++) {
                html += '<span class="page4" id="uipage-nav4'+ i +'" onclick="mynext()">' + i + "</span>";
            }
            html += '<span id="next4" class="end">></span><span  class="end" id="end4">末页</span>';
            obj4.html(html);
            if(!isHome || start == 1){
                showHome(false);
            }
            if(!isEnd){
                showEnd(false);
            }
        }
        function refreshPage(start,nextPage){   //刷新页码
            var end = start + pageSize4 - 1;
            if(start <= 1) {
                start = 1;
                resetPage(start);
                showHome(false);
                showEnd(true);
                light($("#uipage-nav4"+nextPage));
            }else if(start>1 && start+pageSize4 < totalPage4){
                resetPage(start);
                showHome(true);
                showEnd(true);
                light($("#uipage-nav4"+pageSize4));
            }
            else if(end > totalPage4) {
                start = totalPage4 - pageSize4 + 1;
                showEnd(false);
                showHome(true);
                resetPage(start);
                var endPage = parseInt($("#uipage-nav4"+pageSize4).text()); //末页页数
                var showPageIndex = pageSize4 - (endPage - nextPage);
                light($('#uipage-nav4'+showPageIndex));
            } else if(end == totalPage4){
                resetPage(start);
                showEnd(false);
                showHome(true);
                light($('#uipage-nav4'+totalPage4));
            } else {
                resetPage(start);
                showEnd(true);
                showHome(true);
                light($('#uipage-nav4'+totalPage4-1));
            }
        }
        function init(){   //初始化页码
            if(totalPage4 <= 1) {
                return false
            } else if(totalPage4 <= pageSize4){
                makePage(1,false,false)
            } else {
                makePage(1,false,true);
            }
            light(obj4.find("span").eq(1));
        }
        obj4.find(".page4").click(function clickFirst(){
            var _this = $(this);
            var showPage = _this.text();
            light(_this);
            sendAjax4(showPage,20);
        });
        obj4.find("#next4").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex+1;
            var nextPage = currentPage + 1;
            if(currentIndex == pageSize4 + 1) {
                refreshPage(currentPage-1,nextPage);
            }
            if(currentIndex !=pageSize4 + 1){
                light(obj4.find("span").eq(showPageIndex));
            }
            sendAjax4(nextPage,10);
        });
        obj4.find("#pre4").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex - 1;
            var nextPage = currentPage - 1;
            if(currentIndex == 2) {
                refreshPage(currentPage - pageSize4,nextPage);
            }
            else{
                light(obj4.find("span").eq(showPageIndex));
            }
            sendAjax4(nextPage,10);
        });
        obj4.find("#home4").click(function(){
            refreshPage(1);
            showEnd(true);
            showHome(false);
            light(obj4.find("span").eq(2));
            sendAjax4(1,20);
        });
        obj4.find("#end4").click(function(){
            refreshPage(totalPage4-pageSize4+1);
            showEnd(false);
            showHome(true);
            light(obj4.find("span").eq(pageSize4+1));
            sendAjax4(totalPage4,20);
        });
    }
});


