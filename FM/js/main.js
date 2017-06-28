//轮播图部分开始

//获取所需要的所有元素
//获取最外面的div
var dv = my$("dv");
//获取box
var box = my$("box");
//获取左右焦点的div
var arr=my$("arr");
var pic=1;
var setId=null;
var ball=my$("ball");
var bd = ["#e0e0e0","#edbf09","#403dd2","#1d0f0c","#030303","#180a01","#eab527","#3d3e38"];

//动态创建圆点
for(var i=0;i<8;i++){
    var list=document.createElement("li");
    ball.appendChild(list);
//  list.onmouseover = function () {
//      list.style.backgroundColor="";
//  };
    dv.style.backgroundColor=bd[0];
    box.src = "img/"+(pic)+".jpg";
    ball.children[pic-1].style.backgroundColor="#c70d0d";
}
// dv.style.backgroundColor=bd[0];
// ball.children[pic-1].style.backgroundColor="#c70d0d";
//第一步,为box注册鼠标进入和离开的事件用来显示和隐藏左右焦点的div
dv.onmouseover=function () {
    arr.style.display="block";
    clearInterval(setId);
};
dv.onmouseout=function () {
    arr.style.display="none";
    setId=setInterval(f1,3000);
};
//第二步图片变化
function change() {
    clearInterval(setId);
    setId=setInterval(function () {
        pic++;
        if(pic==9){
            pic=1;
        }
        box.src="img/"+pic+".jpg";
        dv.style.backgroundColor=bd[pic-1];
        for(var j=0;j<ball.children.length;j++){
            ball.children[j].style.backgroundColor="";
        }
        ball.children[pic-1].style.backgroundColor="#c70d0d";
    },3000);

}
change();

//点击右边按钮
my$("arrRight").onclick=f1;
function f1() {

    if(pic==8){
        pic=1;
    }else{
        pic++;
    }
    box.src="img/"+pic+".jpg";
    dv.style.backgroundColor=bd[pic-1];
    for(var j=0;j<ball.children.length;j++){
        ball.children[j].style.backgroundColor="";
    }
    ball.children[pic-1].style.backgroundColor="#c70d0d";
    //去掉选中的一段代码,只能在document的事件中可以使用
    window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
}
//点击左边按钮
my$("arrLeft").onclick=function () {
    if(pic==1){
        pic=8;
    }else{
        pic--;
    }
    box.src="img/"+pic+".jpg";
    dv.style.backgroundColor=bd[pic-1];
    for(var j=0;j<ball.children.length;j++){
        ball.children[j].style.backgroundColor="";
    }
    ball.children[pic-1].style.backgroundColor="#c70d0d";
}
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
}
my$("list-right").onclick=function () {
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
    };
}
//碟片部分结束
//榜单部分js
var lis = my$("billboardLeft").getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = i % 2 == 0 ? "#E8E8E8" : "#F4F4F4";
}
var lis = my$("billboardMiddle").getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = i % 2 == 0 ? "#E8E8E8" : "#F4F4F4";
}
var lis = my$("billboardRight").getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = i % 2 == 0 ? "#E8E8E8" : "#F4F4F4";
}

var lis = my$("billboard").getElementsByTagName("li");
var iObjs = my$("billboard").getElementsByTagName("i");
var sObjs = my$("billboard").getElementsByTagName("s");
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover = function () {
        this.lastElementChild.className = "sprite6";
        this.lastElementChild.previousElementSibling.className = "sprite5";
    };
    lis[i].onmouseout = function () {
        this.lastElementChild.className = "sprite6 hide";
        this.lastElementChild.previousElementSibling.className = "sprite5 hide";
    };
}
for(var i=0;i<iObjs.length;i++){
    iObjs[i].onmouseover = function () {
        this.style.background = "url(img/index.png) no-repeat -267px -288px";
    };
    iObjs[i].onmouseout = function () {
        this.style.background = "url(img/index.png) no-repeat -267px -268px";
    };
}
for(var i=0;i<sObjs.length;i++){
    sObjs[i].onmouseover = function () {
        this.style.background = "url(img/index.png) no-repeat -297px -288px";
    };
    sObjs[i].onmouseout = function () {
        this.style.background = "url(img/index.png) no-repeat -297px -268px";
    };
}
//榜单部分js