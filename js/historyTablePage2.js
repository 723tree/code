$.fn.extend({
    paging2: function(option) {
        var obj2 = $(this);
        var defaults2 = {
            // pageSize: 10, //可视页码数量
            // totalPage:10, //数据总页码
        };
        var settings2 = $.extend(defaults2, option || {});  //初始化
        var totalPage2 = settings2.totalPage2;
        var pageSize2 = settings2.pageSize2;
        init();
        function light(obj2) {    //点击页码高亮样式，当前页码
            obj2.addClass("current").siblings().removeClass("current");
        }
        function getCurrentIndex(){
            return obj2.find(".current").index();
        }
        function getCurrentPage(){
            return parseInt(obj2.find("span").eq(getCurrentIndex()).text());
        }
        function resetPage(start){
            var objPage = obj2.find("span");
            for(var i = 2; i < pageSize2+2; i++ ) {
                $(objPage[i]).text(start++);
            }
        }
        function showHome(ishome){
            var homeObj = obj2.find(".home");
            if(ishome){
                homeObj.show();
            } else{
                homeObj.hide();
            }
        }
        function showEnd(isend){
            var endObj = obj2.find(".end");
            if(isend){
                endObj.show();
            } else{
                endObj.hide();
            }

        }
        function makePage(start,isHome,isEnd) {  //生成页码
            var index = 0;
            var html = '';
            var endPage = start + pageSize2-1;
            if(totalPage2 <= pageSize2) {
                endPage = totalPage2;
            }
            html = '<span class="home" id="home2">首页</span><span id="pre2" class="home"><</span>';
            for (var i = start; i <= endPage; i++) {
                html += '<span class="page2" id="uipage-nav2'+ i +'" onclick="mynext()">' + i + "</span>";
            }
            html += '<span id="next2" class="end">></span><span  class="end" id="end2">末页</span>';
            obj2.html(html);
            if(!isHome || start == 1){
                showHome(false);
            }
            if(!isEnd){
                showEnd(false);
            }
        }
        function refreshPage(start,nextPage){   //刷新页码
            var end = start + pageSize2 - 1;
            if(start <= 1) {
                start = 1;
                resetPage(start);
                showHome(false);
                showEnd(true);
                light($("#uipage-nav2"+nextPage));
            }else if(start>1 && start+pageSize2 < totalPage2){
                resetPage(start);
                showHome(true);
                showEnd(true);
                light($("#uipage-nav2"+pageSize2));
            }
            else if(end > totalPage2) {
                start = totalPage2 - pageSize2 + 1;
                showEnd(false);
                showHome(true);
                resetPage(start);
                var endPage = parseInt($("#uipage-nav2"+pageSize2).text()); //末页页数
                var showPageIndex = pageSize2 - (endPage - nextPage);
                light($('#uipage-nav2'+showPageIndex));
            } else if(end == totalPage2){
                resetPage(start);
                showEnd(false);
                showHome(true);
                light($('#uipage-nav2'+totalPage2));
            } else {
                resetPage(start);
                showEnd(true);
                showHome(true);
                light($('#uipage-nav2'+totalPage2-1));
            }
        }
        function init(){   //初始化页码
            if(totalPage2 <= 1) {
                return false
            } else if(totalPage2 <= pageSize2){
                makePage(1,false,false)
            } else {
                makePage(1,false,true);
            }
            light(obj2.find("span").eq(1));
        }
        obj2.find(".page2").click(function clickFirst(){
            var _this = $(this);
            var showPage = _this.text();
            light(_this);
            sendAjax2(showPage,20);
        });
        obj2.find("#next2").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex+1;
            var nextPage = currentPage + 1;
            if(currentIndex == pageSize2 + 1) {
                refreshPage(currentPage-1,nextPage);
            }
            if(currentIndex !=pageSize2 + 1){
                light(obj2.find("span").eq(showPageIndex));
            }
            sendAjax2(nextPage,10);
        });
        obj2.find("#pre2").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex - 1;
            var nextPage = currentPage - 1;
            if(currentIndex == 2) {
                refreshPage(currentPage - pageSize2,nextPage);
            }
            else{
                light(obj2.find("span").eq(showPageIndex));
            }
            sendAjax2(nextPage,10);
        });
        obj2.find("#home2").click(function(){
            refreshPage(1);
            showEnd(true);
            showHome(false);
            light(obj2.find("span").eq(2));
            sendAjax2(1,20);
        });
        obj2.find("#end2").click(function(){
            refreshPage(totalPage2-pageSize2+1);
            showEnd(false);
            showHome(true);
            light(obj2.find("span").eq(pageSize2+1));
            sendAjax2(totalPage2,20);
        });
    }
});

