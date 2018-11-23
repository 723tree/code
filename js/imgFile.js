window.onload=function () {
    function getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }
    $('#thumbnail').change(function() {
        var eImg = $('.boxSet img');
        eImg.attr('src', getObjectURL($(this)[0].files[0])); // 或 this.files[0] this->input
        $(this).after(eImg);
    });

}
