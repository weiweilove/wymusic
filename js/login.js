/**
 * Created by Administrator on 2017/1/4.
 */

//LZZ


//显示登录框和遮挡层
$("#login-userName").click(function () {
    $("#logon").css("display","block");
    $("#mask").css("display","block");
}) ;

//为导航栏中的登录注册点击事件
$("#beforeNavLogin").click(function () {
    $("#logon").css("display","block");
    $("#mask").css("display","block");
})
$("#phone").click(function () {
    $("#loginTel").css("display","block");
    $("#mask").css("display","block");
});

//登录框中手机登录跳转到手机登录界面
$("#loginPhone").click(function () {
    $("#logon").css("display","none");
    $("#loginTel").css("display","block");
    $("#telLogin").val("请输入手机号");
    $("#pwdLogin").val("请输入密码");
    $("#telLogin").css("border","1px solid #CDCDCD");
    $("#telLogin").css("color","#919191");

});
//登录框中注册跳转到注册界面
$("#register").click(function () {
    $("#logon").css("display","none");
    $("#regTel").css("display","block");
    $("#telReg").val("请输入手机号");
    $("#pwdReg").val("设置登录密码,不少于6位");
    $("#telReg").css("border","1px solid #CDCDCD");
    $("#telReg").css("color","#919191");
});

//登录页面跳转到注册页面
$("#freeReg").click(function () {
    $("#loginTel").css("display","none");
    $("#regTel").css("display","block");
    $("#telReg").val("请输入手机号");
    $("#pwdReg").val("设置登录密码,不少于6位");
    $("#telReg").css("border","1px solid #CDCDCD");
    $("#telReg").css("color","#919191");
});

//登录页面中的忘记密码跳转到重设密码界面
$("#forgetPwd").click(function () {
    $("#loginTel").css("display","none");
    $("#resetPwd").css("display","block");
    $("#telReset").val("请输入手机号");
    $("#pwdReset").val("设置登录密码,不少于6位");
    $("#telReset").css("border","1px solid #CDCDCD");
    $("#telReset").css("color","#919191");
});

//登录页面中登录按钮设置
$("#butLogin").click(function () {
    //不输入手机号的情况
    if($("#telLogin").val()=="请输入手机号"){
        $("#titleLogin").html("<span> </span>请输入手机号");
        $("#telLogin").css("border","1px solid #DE7C7C");
        $("#telLogin").css("color","#DE7C7C");
    }
});

//登录框中其他方式登录
$("#otherLogin").click(function () {
    $("#loginTel").css("display","none");
    $("#logon").css("display","block");
});

//注册页面和重设密码页面返回登录页面
$("#returnReg").click(function () {
    $("#regTel").css("display","none");
    $("#loginTel").css("display","block");
});
$("#returnReset").click(function () {
    $("#resetPwd").css("display","none");
    $("#loginTel").css("display","block");
});

//点击关闭div隐藏
$('#close-btn').click(function (){
    $('#logon').css("display","none");
    $('#mask').css("display","none");
});
$("#closeLogin").click(function () {
    $("#loginTel").css("display","none");
    $("#mask").css("display","none");
    $("#telLogin").val("请输入手机号");
    $("#pwdLogin").val("请输入密码");
    
});
$("#closeReg").click(function () {
    $("#regTel").css("display","none");
    $("#mask").css("display","none");
    $("#telReg").val("请输入手机号");
    $("#pwdReg").val("设置登录密码,不少于6位");
    // $("body").css("overflow","");
});
$("#closeReset").click(function () {
    $("#resetPwd").css("display","none");
    $("#mask").css("display","none");
    $("#telReset").val("请输入手机号");
    $("#pwdReset").val("设置登录密码,不少于6位");
});


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

// //调用鼠标按下函数
mouseDown(my$("title"),my$("logon"));
mouseDown(my$("loginTelTitle"),my$("loginTel"));
mouseDown(my$("regTelTitle"),my$("regTel"));
mouseDown(my$("resetPwdTitle"),my$("resetPwd"));

document.onmouseup = function () {
    document.onmousemove= null;
};


//登录页面中.input
//获取和失去焦点事件

//调用为多个元素注册相同事件
//手机登录和手机注册中手机号和密码的input获取焦点和失去焦点事件
$("#telLogin").focus(function () {
    if($(this).val()=="请输入手机号"){
        $(this).val("");
    }
    //获取光标焦点,提示文本没有
    $("#loginTitleLogin").css("display","none");
    //本身的文字颜色和边框变回原来的颜色
    $(this).css("border","1px solid #CDCDCD");
    $(this).css("color","#919191");
});
$("#telLogin").blur(function () {
    if($(this).val().length==0){
        $(this).val("请输入手机号");
    }
});
$("#pwdLogin").focus(function () {
    if($(this).val()=="请输入密码"){
        $(this).val("");
    }
    $("#loginTitleLogin").css("display","none");
    //本身的文字颜色和边框变回原来的颜色
    $(this).css("border","1px solid #CDCDCD");
    $(this).css("color","#919191");
})
$("#pwdLogin").blur(function () {
    if($(this).val().length==0){
        $(this).val("请输入密码");
    }
});
$("#telReg").focus(function () {
    if($(this).val()=="请输入手机号"){
        $(this).val("");
    }
    $("#regTitleLogin").css("display","none");
    //本身的文字颜色和边框变回原来的颜色
    $(this).css("border","1px solid #CDCDCD");
    $(this).css("color","#919191");
});
$("#telReg").blur(function () {
    if($(this).val().length==0){
        $(this).val("请输入手机号");
    }
});
$("#pwdReg").focus(function () {
    if($(this).val()=="设置登录密码,不少于6位"){
        $(this).val("");
    }
    $("#regTitleLogin").css("display","none");
    //本身的文字颜色和边框变回原来的颜色
    $(this).css("border","1px solid #CDCDCD");
    $(this).css("color","#919191");
});
$("#pwdReg").blur(function () {
    if($(this).val().length==0){
        $(this).val("设置登录密码,不少于6位");
    }
});
$("#telReset").focus(function () {
    if($(this).val()=="请输入手机号"){
        $(this).val("");
    }
    $("#resetTitleLogin").css("display","none");
    //本身的文字颜色和边框变回原来的颜色
    $(this).css("border","1px solid #CDCDCD");
    $(this).css("color","#919191");
});
$("#telReset").blur(function () {
    if($(this).val().length==0){
        $(this).val("请输入手机号");
    }
});
$("#pwdReset").focus(function () {
    if($(this).val()=="设置登录密码,不少于6位"){
        $(this).val("");
    }
    $("#resetTitleLogin").css("display","none");
    //本身的文字颜色和边框变回原来的颜色
    $(this).css("border","1px solid #CDCDCD");
    $(this).css("color","#919191");
});
$("#pwdReset").blur(function () {
    if($(this).val().length==0){
        $(this).val("设置登录密码,不少于6位");
    }
});


//封装函数验证手机号
function checkElement(ele1,ele2,ele3) {
    ele2.blur(function () {
        //通过正则验证对错
        var reg=/^([1][358][0-9]{9})$|^([1][4][7][0-9]{8})$|^([1][7][178][0-9]{8})$/;
        // var tempBorder=ele2.style.border;
        // var tempColor=ele2.style.border;
        if (reg.test(ele2.val())) {
            ele3.css("display","none");
            ele2.css("border","1px solid #CDCDCD");
            ele2.css("color","#919191");
        }else{
            ele3.css("display","block");
            ele3.html("<span></span> 请输入11位数字的手机号");
            ele2.css("border","1px solid #DE7C7C");
            ele2.css("color","#DE7C7C");
        }
    });
}
checkElement($("#butLogin"),$("#telLogin"),$("#loginTitleLogin"));
checkElement($("#regNext"),$("#telReg"),$("#regTitleLogin"));
checkElement($("#resetNext"),$("#telReset"),$("#resetTitleLogin"));

//验证手机号和密码
$("#butLogin").click(function () {
    var reg=/^([1][358][0-9]{9})$|^([1][4][7][0-9]{8})$|^([1][7][178][0-9]{8})$/;

    if($("#pwdLogin").val()=="123456" && reg.test($("#telLogin").val())) {
        $("#loginTel").css("display","none");
        $("#mask").css("display","none");
        $("#loginTitleLogin").css("display","none");
        //右侧登录框的转换
        $("#beforeLogin").css("display","none");
        $("#afterLoginAll").css("display","block");
        $(".login-top").css("height","200px");
        //顶部导航栏的转换
        $("#loginBefore").css("display","none");
        $("#loginAfter").css("display","block");

    }else if($("#telLogin").val()=="请输入手机号" && $("#pwdLogin").val()=="请输入密码"){
        //手机号和密码都不输入就点登陆按钮时
        $("#loginTitleLogin").css("display","block");
        $("#loginTitleLogin").text("请输入手机号");

    }else if(reg.test($("#telLogin").val()) && $("#pwdLogin").val()=="请输入密码"){
        //输入手机号,但是不输入密码的时候
        $("#loginTitleLogin").css("display","block");
        $("#loginTitleLogin").text("请输入密码");

    }else{
        //输入错入时
        $("#loginTitleLogin").css("display","block");
        $("#loginTitleLogin").text("手机号或密码错误");
    }
});


//登录成功之后
//小三角
var iObj=my$("loginAfterIcon").getElementsByTagName("i")[0];
my$("login").onmouseover=function (){
    iObj.style.backgroundPosition="-228px -418px";
    iObj.previousElementSibling.style.color="#fff";
    my$("inner-list").style.display="block";
};

my$("login").onmouseout=function (){
    iObj.style.backgroundPosition="-228px -380px";
    iObj.previousElementSibling.style.color="#786658";
    my$("inner-list").style.display="none";
};


//登录成功之后点击退出
$("#exit").click(function () {
    //右侧登录框的转换
    $("#afterLoginAll").css("display","none");
    $("#beforeLogin").css("display","block");
    $(".login-top").css("height","123px");
    //顶部导航栏的转换
    $("#loginAfter").css("display","none");
    $("#loginBefore").css("display","block");

});
