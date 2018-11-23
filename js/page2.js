$.fn.extend({
    paging2: function(option) {
        var obj = $(this);
        var defaults = {
            // pageSize2: 10, //可视页码数量
            // totalPage2:10, //数据总页码
        };
        var settings = $.extend(defaults, option || {});  //初始化
        var totalPage = settings.totalPage2;
        var pageSize = settings.pageSize2;
        init();
        function light(obj) {    //点击页码高亮样式，当前页码
            obj.addClass("current").siblings().removeClass("current");
        }
        function getCurrentIndex(){
            return obj.find(".current").index();
        }
        function getCurrentPage(){
            return parseInt(obj.find("span").eq(getCurrentIndex()).text());
        }
        function resetPage(start){
            var objPage = obj.find("span");
            for(var i = 2; i < pageSize + 2; i++ ) {
                $(objPage[i]).text(start++);
            }
        }
        function showHome(ishome){
            var homeObj = obj.find(".home2");
            if(ishome){
                homeObj.show();
            } else{
                homeObj.hide();
            }

        }
        function showEnd(isend){
            var endObj = obj.find(".end2");
            if(isend){
                endObj.show();
            } else{
                endObj.hide();
            }

        }
        function makePage(start,isHome,isEnd) {  //生成页码
            var index = 0;
            var html = '';
            var endPage = start + pageSize-1;
            if(totalPage <= pageSize) {
                endPage = totalPage;
            }
            html = '<span class="home2" id="home2">首页</span><span id="pre2" class="home2"><</span>';
            for (var i = start; i <= endPage; i++) {
                html += '<span class="page2" id="uipage-nav2'+ i +'">' + i + "</span>";
            }
            html += '<span id="next2" class="end2">></span><span  class="end2" id="end2">末页</span>';
            obj.html(html);
            if(!isHome || start == 1){
                showHome(false);
            }
            if(!isEnd){
                showEnd(false);
            }
        }
        function refreshPage(start,nextPage){   //刷新页码
            var end = start + pageSize - 1;
            if(start <= 1) {
                start = 1;
                resetPage(start);
                showHome(false);
                showEnd(true);
                light($("#uipage-nav2"+nextPage));
            }else if(start>1 && start+pageSize < totalPage){
                resetPage(start);
                showHome(true);
                showEnd(true);
                light($("#uipage-nav2"+pageSize));
            }else if(end > totalPage) {
                start = totalPage - pageSize + 1;
                showEnd(false);
                showHome(true);
                resetPage(start);
                var endPage = parseInt($("#uipage-nav2"+pageSize).text()); //末页页数
                var showPageIndex = pageSize - (endPage - nextPage);
                light($('#uipage-nav2'+showPageIndex));
            } else if(end == totalPage){
                resetPage(start);
                showEnd(false);
                showHome(true);
                light($('#uipage-nav'+totalPage));
            } else {
                resetPage(start);
                showEnd(true);
                showHome(true);
                light($('#uipage-nav'+totalPage-1));
            }

        }
        function init(){   //初始化页码
            if(totalPage <= 1) {
                return false
            } else if(totalPage <= pageSize){
                makePage(1,false,false)
            } else {
                makePage(1,false,true);
            }
            light(obj.find("span").eq(2));
        }
        obj.find(".page2").click(function(){
            var _this = $(this);
            var showPage = _this.text();
            light(_this);
            sendAjax2(showPage,20);
            setChecked2()
        });
        obj.find("#next2").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex + 1;
            var nextPage = currentPage + 1;
            if(currentIndex == pageSize + 1) {
                refreshPage(currentPage-1,nextPage);
            }
            if(currentIndex !=pageSize + 1){
                light(obj.find("span").eq(showPageIndex));
            }
            sendAjax2(nextPage,20);
            setChecked2()
        });
        obj.find("#pre2").click(function(){
            var currentIndex = getCurrentIndex();
            var currentPage = getCurrentPage();
            var showPageIndex = currentIndex - 1;
            var nextPage = currentPage - 1;
            if(currentIndex == 2) {
                refreshPage(currentPage - pageSize,nextPage);
            } else {
                light(obj.find("span").eq(showPageIndex));
            }
            sendAjax2(nextPage,20);
            setChecked2()
        });
        obj.find("#home2").click(function(){
            refreshPage(1);
            showEnd(true);
            showHome(false);
            light(obj.find("span").eq(2));
            sendAjax2(1,20);
            setChecked2();
        });
        obj.find("#end2").click(function(){
            refreshPage(totalPage-pageSize+1);
            showEnd(false);
            showHome(true);
            light(obj.find("span").eq(pageSize+1));
            sendAjax2(totalPage,20);
            setChecked2();
        });



    }
});