//轮播图开始
//创建圆点 放入ball中 创建a放入div中
var bd = ["#d0cecf","#edbf09","#403dd2","#1d0f0c","#030303","#180a01","#eab527","#3d3e38"];
for(var i = 0; i < bd.length; i++) {

    $("<li><a href='#'><img src='img/"+(i+1)+".jpg' id='box'/></a></li>").appendTo($(".banner-in-left>ul"));
    $("<li></li>").appendTo($("#ball"));
}
//获取相框宽度
var imgWidth = parseInt($(".banner-in-left").css("width"));
var pic= 0;
var ballBg=null;
//获取ball中的li 添加鼠标进入事件 设置样式
$("#ball>li").mouseover(function () {
    ballBg=$(this).css("backgroundColor");
    $(this).css("backgroundColor","#c70d0d");
    //获取触发该事件的索引值
    $(this).click(function () {
        pic= $(this).index();
        $(this).css("backgroundColor","#c70d0d").siblings("li").css("backgroundColor","");
        ballBg=$(this).css("backgroundColor");
        //移动图片
        $(".banner-in-left>ul>li:eq("+pic+")").fadeIn(1000).siblings("li").hide();
        $("#dv").css({"backgroundColor":bd[pic]});
    });
}).mouseout(function () {
    $(this).css("backgroundColor",ballBg);
});

//设置ol中第一个li的默认样式
$("#ball>li:first").css("backgroundColor","#c70d0d");
$("#dv").css({"backgroundColor":bd[0]});

//克隆ul中的第一个li放到ul的最后
$(".banner-in-left>ul>li:first").clone().appendTo($(".banner-in-left>ul"));
//设置定时器
var setId = null;
setId = setInterval(f1,3000);

//获取dv 添加鼠标进入和鼠标离开事件
$("#dv").mouseover(function () {
    //鼠标进入时  定时器停止 并且左右焦点的div显示
    $("#arr").show();
    clearInterval(setId)
}).mouseout(function () {
    //鼠标进入时  定时器继续 并且左右焦点的div隐藏
    $("#arr").hide();
    setId = setInterval(f1,3000);
});

//获取右边按钮 注册鼠标进入事件
$("#arrRight").click(f1);
function f1() {
    //进行判断 当pic的值为9的时候 其实是克隆的那一张图片 用户以为的第一张 此时应该让 图片快速切换到第一张
    if (pic == $(".banner-in-left>ul>li").length-1) {
        pic = 0;
        $(".banner-in-left>ul>li:eq("+pic+")").fadeIn(1000).siblings("li").hide();
    }
    pic++;
    $(".banner-in-left>ul>li:eq("+pic+")").fadeIn(1000).siblings("li").hide();
    //设置样式 需要判断
    if (pic == $(".banner-in-left>ul>li").length-1) {
        //第一个ol设置背景颜色 最后一个 去除背景颜色
        $("#ball>li:first").css("backgroundColor","#c70d0d");
        $("#ball>li:last").css("backgroundColor","");
        $("#dv").css({"backgroundColor":bd[0]});
    }else {
        $("#ball>li:eq("+pic+")").css("backgroundColor","#c70d0d").siblings("li").css("backgroundColor","");
        $("#dv").css({"backgroundColor":bd[pic]});
    }
}
//获取左侧按钮 注册鼠标点击事件
$("#arrLeft").click(function () {
    //进行判断 当是第一张图片时 此时应该快速切换到克隆的那一张图片
    if (pic==0) {
        pic = $(".banner-in-left>ul>li").length-1;
        $(".banner-in-left>ul>li:eq("+pic+")").fadeIn(1000).siblings("li").hide();
    }
    pic--;
    $(".banner-in-left>ul>li:eq("+pic+")").fadeIn(1000).siblings("li").hide();
    //设置样式
    $("#ball>li:eq("+pic+")").css("backgroundColor","#c70d0d").siblings("li").css("backgroundColor","");
    $("#dv").css({"backgroundColor":bd[pic]});
});
//轮播图结束
//碟片部分开始
my$("list-left").onmouseover=function () {
    this.style.backgroundPositionX=-285+"px";
};
my$("list-right").onmouseover=function () {
    this.style.backgroundPositionX=-326+"px";
};
my$("list-left").onmouseout=function () {
    this.style.backgroundPositionX=-265+"px";
};
my$("list-right").onmouseout=function () {
    this.style.backgroundPositionX=-306+"px";
};

var bool=true;
my$("list-left").onclick=function () {
    if(bool){
        if(my$("slideShow-DVD-list").style.left==0){
            bool=false;
            my$("slideShow-DVD-list").style.left=-1280+"px";
            animate(my$("slideShow-DVD-list"),{"left":-640},function () {
                bool=true;
            })
        }else if(my$("slideShow-DVD-list").style.left==-640+"px"){
            bool=false;
            animate(my$("slideShow-DVD-list"),{"left":0},function () {
                bool=true;
            });
        }else{
            my$("slideShow-DVD-list").style.left=-1280+"px";
            bool=false;
            animate(my$("slideShow-DVD-list"),{"left":-640},function () {
                bool=true;
            })
        }
    }
};
my$("list-right").onclick=function () {
    if(bool){
        if (my$("slideShow-DVD-list").style.left == 0) {
            bool = false;
            animate(my$("slideShow-DVD-list"), {"left": -640} ,function () {
                bool=true;
            })

        } else if (my$("slideShow-DVD-list").style.left == -640 + "px") {
            bool = false;
            animate(my$("slideShow-DVD-list"), {"left": -1280},function () {
                bool=true;
            });
        } else {
            bool = false;
            my$("slideShow-DVD-list").style.left = 0 + "px";
            animate(my$("slideShow-DVD-list"), {"left": -640},function () {
                bool=true;
            })
        }
    }
};
//碟片部分结束
//榜单部分js
//隔行变色
$("#billboardLeft li:odd").css("backgroundColor","#F4F4F4");
$("#billboardLeft li:even").css("backgroundColor","#E8E8E8");
$("#billboardMiddle li:odd").css("backgroundColor","#F4F4F4");
$("#billboardMiddle li:even").css("backgroundColor","#E8E8E8");
$("#billboardRight li:odd").css("backgroundColor","#F4F4F4");
$("#billboardRight li:even").css("backgroundColor","#E8E8E8");

$("#billboard li").mouseover(function () {
    $(this).children().last().removeClass("hide");
    $(this).children().last().prev().removeClass("hide");
});
$("#billboard li").mouseout(function () {
    $(this).children().last().addClass("hide");
    $(this).children().last().prev().addClass("hide");
});

$("#billboard i").mouseover(function () {
    $(this).css("background","url(img/index.png) no-repeat -267px -288px");
});
$("#billboard i").mouseout(function () {
    $(this).css("background","url(img/index.png) no-repeat -267px -268px");
});

$("#billboard s").mouseover(function () {
    $(this).css("background","url(img/index.png) no-repeat -297px -288px");
});
$("#billboard s").mouseout(function () {
    $(this).css("background","url(img/index.png) no-repeat -297px -268px");
});
//榜单部分js