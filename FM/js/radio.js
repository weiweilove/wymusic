/**
 * Created by Administrator on 2017/1/11.
 */

//program部分开始

//获取左侧li
// var lileft = my$("ulleft").children;
// //循环遍历
// for (var i = 0; i < lileft.length; i++) {
//
//     if (i % 2 != 0) {
//         lileft[i].style.backgroundColor = "#f7f7f7";
//     }
//     lileft[i].onmouseover = mouseoverhandle;
//     lileft[i].onmouseout = mouseoutHandle;
// }
// var bg = null;
// function mouseoverhandle() {
//     bg = this.style.backgroundColor;
//     this.style.backgroundColor = "rgba(0,0,0,0.1)";
// }
// function mouseoutHandle() {
//     this.style.backgroundColor =  bg;
// }
// //获取右侧li
// var liright = my$("ulright").children;
// //循环遍历
// for (var i = 0; i < liright.length; i++) {
//     if (i % 2 != 0) {
//         liright[i].style.backgroundColor = "#f7f7f7";
//     }
//     liright[i].onmouseover = mouseoverhandle;
//     liright[i].onmouseout = mouseoutHandle;
// }

//页面加载

//循环遍历 左侧 设置隔行变色
for (var i = 0; i < $("#ulleft>li").length;i++) {
    if (i % 2 != 0) {
        $("#ulleft>li:eq("+i+")").css("backgroundColor","#f7f7f7");
    }
}
//获取左边的li 添加鼠标进入事件
var bg = null;
$("#ulleft>li,#ulright>li").mouseover(function () {
    bg = $(this).css("backgroundColor");
    $(this).css("backgroundColor","rgba(0,0,0,0.1)");
}).mouseout(function () {
     $(this).css("backgroundColor",bg);
});

//循环遍历 右侧 设置隔行变色
for (var i = 0; i < $("#ulright>li").length;i++) {
    if (i % 2 != 0) {
        $("#ulright>li:eq("+i+")").css("backgroundColor","#f7f7f7");
    }
}





//program部分结束