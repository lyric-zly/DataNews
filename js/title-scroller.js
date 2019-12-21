$(function () {
// ------------------------------------------------------ //
// title animation
// ------------------------------------------------------ //
    var eTop = $("#mainTitle").offset().top;//橙色容器距离整个页面顶部的距离
    //var wTop = $(window).height();//绿色框可视区域的高度
    var dTop = $(document).scrollTop();
    window.onresize = function()
    {
        wTop = $(window).height();//缩放窗口这个高度会改变，需要再取得
    }
    $(window).scroll(function()
    {
        dTop = $(document).scrollTop();//绿色框可视区域上面到黑色页面顶部的距离，会实时改变
        if(dTop < eTop){
            //动画播放事件
            console.log("bofang");
            $("#mainTitle").addClass("titleIn");
        }
        else{
            $("#mainTitle").removeClass("titleIn");
        }
    }
    );
});
