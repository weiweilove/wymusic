/**
 * Created by jiliqiang on 2017/1/5.
 */


//动态创建控制移动图片的按钮开始
var Ohome = $('#home');
var ulControl = $('#control-move');
var pic = 0;
for(var i = 0;i < 7;i++){
    var Oli = $('<li></li>');
    Oli.attr('index',i);
    ulControl.append(Oli);

    Oli.mouseover(function () {


        for(var j = 0;j < ulControl[0].children.length;j++ ){
            ulControl.children('li').removeClass();
        }
        $(this).addClass('current');
        pic = $(this).index();
        Ohome.stop().animate({'top':-pic*getClient().height},500);
    });
}
ulControl.children('li:first').addClass('current');


//动态创建控制移动图片的按钮结束




////滑动鼠标滚轮切换图片开始
$(function () {
var flag = true;
function scrollDistance(e){

    e = e || window.event;
    if(e.wheelDelta){      //判断浏览器IE，谷歌滑轮事件
        if(e.wheelDelta > 0){   //滑轮向上滑动
            if(pic > 0){
                pic--;
                Ohome.stop().animate({'top':-pic*getClient().height},function (){
                    flag = true;
                });
            }
            if(pic <= 0){
                flag = true;
            }
            ulControl.children('li').removeClass();
            ulControl.children('li:eq('+pic+')').addClass('current');
        }else{     //滑轮向下滑动
            if(pic < ulControl[0].children.length - 1 ){
                pic++;
                Ohome.stop().animate({'top':-pic*getClient().height}, function () {
                    flag = true;
                });
            }
            if(pic >= ulControl[0].children.length - 1 ){
                flag = true;
            }
            ulControl.children('li').removeClass();
            ulControl.children('li:eq('+pic+')').addClass('current');
        }
    } else if(e.detail){    //Firefox滑轮事件
        if(-e.detail > 0){   //滑轮向上滑动
            if(pic > 0){
                pic--;
                Ohome.stop().animate({'top':-pic*getClient().height},function (){
                    flag = true;
                });
            }
            if(pic <= 0){
                flag = true;
            }
            ulControl.children('li').removeClass();
            ulControl.children('li:eq('+pic+')').addClass('current');
        }else{
            if(pic < ulControl[0].children.length - 1 ){
                pic++;
                Ohome.stop().animate({'top':-pic*getClient().height}, function () {
                    flag = true;
                });
            }
            if(pic >= ulControl[0].children.length - 1 ){
                flag = true;
            }
            ulControl.children('li').removeClass();
            ulControl.children('li:eq('+pic+')').addClass('current');
        }
    }
}


addEvent(document,'mousewheel', function (e) {
    if(flag){
        flag = false;
        scrollDistance(e);
    }

});
    addEvent(document,'DOMMouseScroll', function (e) {
        if(flag){
            flag = false;
            scrollDistance(e);
        }
    })
});


////滑动鼠标滚轮切换图片结束
//









////滑动鼠标滚轮切换图片开始

//function scrollDistance(e) {
//
//    e = e || window.event;
//
//
//    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
//            if (e.wheelDelta > 0) { //当滑轮向上滚动时
//
//                if (pic > 0) {
//
//                    pic--;
//                    animate2(Ohome, -pic * getClient().height);
//                }
//                for (var i = 0; i < ulControl.children.length; i++) {
//                    ulControl.children[i].removeAttribute('class');
//                }
//                ulControl.children[pic].className = 'current';
//
//            } else { //当滑轮向下滚动时
//
//                if (pic < ulControl.children.length - 1) {
//
//                    pic++;
//                    animate2(Ohome, -pic * getClient().height);
//                }
//
//                for (var i = 0; i < ulControl.children.length; i++) {
//                    ulControl.children[i].removeAttribute('class');
//                }
//                ulControl.children[pic].className = 'current';
//
//            }
//        } else if (e.detail) {  //Firefox滑轮事件
//        if (-e.detail > 0) { //当滑轮向上滚动时
//                if (pic > 0) {
//                    pic--;
//                    animate2(Ohome, -pic * getClient().height);
//                }
//                for (var i = 0; i < ulControl.children.length; i++) {
//                    ulControl.children[i].removeAttribute('class');
//                }
//                ulControl.children[pic].className = 'current';
//            } else { //当滑轮向下滚动时
//                if (pic < ulControl.children.length - 1) {
//                    pic++;
//                    animate2(Ohome, -pic * getClient().height);
//                }
//
//                for (var i = 0; i < ulControl.children.length; i++) {
//                    ulControl.children[i].removeAttribute('class');
//                }
//                ulControl.children[pic].className = 'current';
//            }
//    }
//
//}
//
//addEvent(document,'mousewheel',function (e){
//
//    scrollDistance(e);    //非火狐支持
//})
//addEvent(document,'DOMMouseScroll',function (e){
//    scrollDistance(e);  //火狐支持
//})
////




//////滑动鼠标滚轮切换图片结束
////





//第三张图片中的轮播图开始

var scrollUl = $('#scroll-all');
var arrLeft = $('#arr-left');
var arrRight = $('#arr-right');
var n = 0 ;
arrRight.click(function () {
    if(n < 2){
        n++;

        scrollUl.animate({'left':-n*280});
    }
    if(n == 1){

        arrLeft.css('display','block');
    }
    if(n == 2){

        arrRight.css('display','none');
    }
});

arrLeft.click(function () {
    if(n > 0){
        n--;

        scrollUl.animate({'left':-n*280});
    }
    if(n == 1){

        arrRight.css('display','block');
    }
    if(n == 0){

        arrLeft.css('display','none');
    }
});
//第三张图片中的轮播图结束




















