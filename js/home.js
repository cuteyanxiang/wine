$(function() {
    /***用于放图片的数组*****/
    var arr = ["img/lunbo11.jpg","img/lunbo22.jpg","img/lunbo33.jpg","img/lunbo44.jpg","img/lunbo55.jpg"];
    /****初始化页面启动显示的图片*****/
    $(".ul_img li img").attr("src", arr[0]);

    var index = 0;
    var timer = null;
    /****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
    $(".ul_text li").hover(function() {
        clearInterval(timer);
        index = $(this).index();
        //alert(index);
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
            'opacity': 1
        }, 4000);
    }, function() {
        auto();
    });

    auto();
    /*****自动播放图片的定时器****/
    function auto() {
        timer = setInterval(function() {
            index++;
            if (index > 3) {
                index = 0;
            }
            $(".ul_text li").eq(index).addClass("hover").siblings().removeClass("hover");
            $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 4000);
        }, 4000);
    }
});