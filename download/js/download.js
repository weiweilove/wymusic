/**
 * Created by liuxu on 2017/1/5.
 */
var i =0;
var setId = setInterval(dl,1500);
function dl() {
    if(i==3){
        i=-1;
    }
    i++;
    $("#dlSqu>span:eq("+i+")").css("background","url(download/sprite.png) no-repeat -94px -102px").siblings().css("background","url(download/sprite.png) no-repeat -113px -102px");
    $("#dlPic>div:eq("+i+")").fadeIn(600).siblings("div").fadeOut(600);
}



$("#dlSqu>span:eq(0)").css("background","url(download/sprite.png) no-repeat -94px -102px");
$("#dlSqu>span").mouseover(function () {
    clearInterval(setId);
    $(this).css("background","url(download/sprite.png) no-repeat -94px -102px").siblings().css("background","url(download/sprite.png) no-repeat -113px -102px");
    $("#dlPic>div:eq("+$(this).index()+")").fadeIn(600).siblings("div").fadeOut(600);
});
$("#dlSqu>span").mouseout(function () {
    setId = setInterval(dl,1500);
});
