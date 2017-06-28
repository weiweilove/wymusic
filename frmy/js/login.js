/**
 * Created by Administrator on 2017/1/4.
 */

//LZZ
//封装函数部分

//为多个元素注册相同事件
function addEventListener(element,type,fn) {
    if(element.addEventListener){
        //谷歌和火狐支持这个
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        //IE8支持这个
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
//鼠标按下拖拽登录框
function mouseDown(ele1,ele2) {
    ele1.onmousedown  = function (e){
        var spaceX = e.clientX - ele2.offsetLeft;
        var spaceY = e.clientY - ele2.offsetTop;
        document.onmousemove = function (e){
            var x = e.clientX - spaceX;
            var y = e.clientY - spaceY;
            x = x < 0 ? 0 : x;
            y = y < 0 ? 0 : y;
            x = x > getClient().width - ele2.offsetWidth ? getClient().width - ele2.offsetWidth : x;
            y = y > getClient().height - ele2.offsetHeight ? getClient().height - ele2.offsetHeight : y;
            ele2.style.left = x + ele2.offsetWidth/2 + 'px';
            ele2.style.top = y + ele2.offsetHeight/2  + 'px';
            window.getSelection ? window.getSelection().removeAllRanges():document.selection.empty();
        };

    };
}


//jLQ
//登录部分开始
//显示登录框和遮挡层
my$('login-userName').onclick = function (e) {
    my$('logon').style.display = 'block';
    my$('mask').style.display = 'block';
    clearInterval(setId);
    //document.documentElement.style.position = 'fixed';

};

//调用鼠标按下函数
mouseDown(my$("title"),my$("logon"));
mouseDown(my$("loginTelTitle"),my$("loginTel"));
mouseDown(my$("regTelTitle"),my$("regTel"));
mouseDown(my$("resetPwdTitle"),my$("resetPwd"));

document.onmouseup = function () {
    document.onmousemove= null;
};


//LZZ

//登录框中手机登录跳转到手机登录界面
my$("loginPhone").onclick=function () {
    my$("logon").style.display="none";
    my$("loginTel").style.display="block";
}
//登录框中注册跳转到注册界面
my$("register").onclick=function () {
    my$("logon").style.display="none";
    my$("regTel").style.display="block";

}

//登录页面中.input
//获取焦点事件


//调用为多个元素注册相同事件
//手机登录和手机注册中手机号和密码的input获取焦点和失去焦点事件
var tempBorder=my$("telLogin").style.border;
var tempColor= my$("telLogin").style.color;
addEventListener(my$("telLogin"),"focus",function () {
    if(this.value=="请输入手机号"){
        this.value="";
    }
    //获取光标焦点,提示文本没有
    my$("titleLogin").innerHTML="";
    //本身的文字颜色和边框变回原来的颜色
    my$("telLogin").style.border=tempBorder;
    my$("telLogin").style.color=tempColor;
});
addEventListener(my$("telLogin"),"blur",function () {
    if(this.value.length==0){
        this.value="请输入手机号";
    }
});
addEventListener(my$("pwdLogin"),"focus",function () {
    if(this.value=="请输入密码"){
        this.value="";
    }
});
addEventListener(my$("pwdLogin"),"blur",function () {
    if(this.value.length==0){
        this.value="请输入密码";
    }
});
addEventListener(my$("telReg"),"focus",function () {
    if(this.value=="请输入手机号"){
        this.value="";
    }
});
addEventListener(my$("telReg"),"blur",function () {
    if(this.value.length==0){
        this.value="请输入手机号";
    }
});
addEventListener(my$("pwdReg"),"focus",function () {
    if(this.value=="设置登录密码,不少于6位"){
        this.value="";
    }
});
addEventListener(my$("pwdReg"),"blur",function () {
    if(this.value.length==0){
        this.value="设置登录密码,不少于6位";
    }
});
addEventListener(my$("telReset"),"focus",function () {
    if(this.value=="请输入手机号"){
        this.value="";
    }
});
addEventListener(my$("telReset"),"blur",function () {
    if(this.value.length==0){
        this.value="请输入手机号";
    }
});
addEventListener(my$("pwdReset"),"focus",function () {
    if(this.value=="设置登录密码,不少于6位"){
        this.value="";
    }
});
addEventListener(my$("pwdReset"),"blur",function () {
    if(this.value.length==0){
        this.value="设置登录密码,不少于6位";
    }
});



//点击关闭div隐藏
my$('close-btn').onclick = function (){
    my$('logon').style.display = 'none';
    my$('mask').style.display = 'none';
    change();
    //document.documentElement.style.position = '';

};
my$("closeLogin").onclick=function () {
    my$("loginTel").style.display="none";
    my$('mask').style.display = 'none';
};
my$("closeReg").onclick=function () {
    my$("regTel").style.display="none";
    my$('mask').style.display = 'none';
};
my$("closeReset").onclick=function () {
    my$("resetPwd").style.display="none";
    my$('mask').style.display = 'none';
};

//登录页面跳转到注册页面
my$("freeReg").onclick=function () {
    my$("loginTel").style.display="none";
    my$("regTel").style.display="block";
}

//登录页面中的忘记密码跳转到重设密码界面
my$("forgetPwd").onclick=function () {
    my$("loginTel").style.display="none";
    my$("resetPwd").style.display="block";
}

//登录页面中的自动登录
my$("autoLogin").onclick=function () {
    if(my$("checked").checked){
        my$("checked").checked="";
    }else{
        my$("checked").checked="checked";
    }
}

//登录页面中登录按钮设置
my$("butLogin").onclick=function () {
    //不输入手机号的情况
    if(my$("telLogin").value=="请输入手机号"){
        my$("titleLogin").innerHTML="<span></span>请输入手机号";

        my$("telLogin").style.border="1px solid #DE7C7C";
        my$("telLogin").style.color="#DE7C7C";
    }
   /* //手机号文本框的长度为11位且为数字
    var mobile=my$("telLogin").value;
    var tempTel=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(mobile);
    if(my$("telLogin").value.length!=11 ||my$("telLogin").value!=tempTel){
        my$("titleLogin").innerHTML="<span></span>请输入11位数字的手机号";
        my$("telLogin").style.border="1px solid #DE7C7C";
        my$("telLogin").style.color="#DE7C7C";
    }*/
}

//登录框中其他方式登录
my$("otherLogin").onclick=function () {
   my$("loginTel").style.display="none";
    my$("logon").style.display="block";
}


//注册页面和重设密码页面返回登录页面
my$("returnReg").onclick=function () {
    my$("regTel").style.display="none";
    my$("loginTel").style.display="block";
}
my$("returnReset").onclick=function () {
    my$("resetPwd").style.display="none";
    my$("loginTel").style.display="block";
}

