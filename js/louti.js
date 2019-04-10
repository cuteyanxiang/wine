$(function () {
  var flag = true;
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1000) {
      $("#floorNav").fadeIn();
    } else {
      $("#floorNav").fadeOut();
    }
    if (flag) {
      $("div.content ul.stairs").each(function () {
        if (scrollTop > ($(this).offset().top - $(this).outerHeight() / 2) && scrollTop < ($(this).offset().top + $(this).outerHeight()/2)) {
          var index = $(this).attr('index');
          $("#floorNav li").eq(index).addClass("hover").siblings().removeClass("hover");
        }
      })
    }
  });
  $("#floorNav li:not(:last)").click(function () {
    var index = $(this).index();
    flag = false;
    $(this).addClass("hover").siblings().removeClass("hover");
    $("body,html").stop().animate({
      "scrollTop": $("div.content ul.stairs").eq(index).offset().top-150
    }, 500, function () {
      flag = true;
    });
  });
  $("#floorNav li:last").click(function () {
    $("body,html").stop().animate({
      "scrollTop": 0
    }, 500);
  })
})