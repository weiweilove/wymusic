/**
 * Created by jiliqiang on 2017/1/5.
 */
/**
 * Created by jiliqiang on 2017/1/4.
 */
/**
 * Created by jiliqiang on 2016/12/29.
 */
/**
 * Created by jiliqiang on 2016/12/29.
 */
/**
 * Created by Administrator on 2016/7/27.
 */
/**
 * Created by Administrator on 2016/7/21.
 *
 * 次文件来自  很牛x的程序员 .
 *
 * 作者:无名
 */

/*
 * 该函数是返回的是指定格式的日期,是字符串类型
 * 参数:date ----日期
 * 返回值: 字符串类型的日期
 * */
function getDatetoString(date) {
    var strDate;//存储日期的字符串
    //获取年
    var year=date.getFullYear();
    //获取月
    var month=date.getMonth()+1;
    //获取日
    var day=date.getDate();
    //获取小时
    var hour=date.getHours();
    //获取分钟
    var minute=date.getMinutes()
    //获取秒
    var second=date.getSeconds();
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    //拼接
    strDate=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;//隐藏问题,关于变量声明的位置
    return strDate;
}



/*
 *
 * innerText属性IE中支持
 * textContent火狐中支持
 * dvObj.innerText="您好";设置innerText的值
 * console.log(dvObj.innerText);获取innerText的值
 * 因为上述原因,inerText有时候需要设置值，有时候需要获取值
 * 所以,需要写一个兼容的代码能在火狐中使用,也可以在IE中使用
 *
 *
 * */

/*
 *设置innerText属性的值
 * element-----为某个元素设置属性值
 * content-----设置的值
 * */
function setInnerText(element,content) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        element.innerText=content;
    }else{
        element.textContent=content;
    }
}
/*
 * 获取innerText属性的值
 * element 要获取的元素
 * 返回的是该元素的innerText值
 * */
function getInnerText(element) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        return element.innerText;
    }else{
        return element.textContent;
    }
}


//获取当前元素前一个元素
function getPreviousElement(element) {
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var ele=element.previousSibling;
        while (ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的后一个元素
function getNextElement(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var ele=element.nextSibling;
        while(ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}

//获取父元素中的第一个元素
function getFirstElementByParent(parent) {
    if(parent.firstElementChild){
        return parent.firstElementChild;
    }else{
        var ele=parent.firstChild;
        while (ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素中的最后一个元素
function getLastElementByParent(parent) {
    if(parent.lastElementChild){
        return parent.lastElementChild;
    }else{
        var ele=parent.lastChild;
        while(ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}

//获取兄弟元素
function getsiblings(ele) {
    if(!ele)return;//判断当前的ele这个元素是否存在
    var elements=[];//定义数组的目的就是存储当前这个元素的所有的兄弟元素
    var el=ele.previousSibling;//当前元素的前一个节点
    while (el){
        if (el.nodeType===1){//元素
            elements.push(el);//加到数组中
        }
        el=el.previousSibling;
    }
    el=ele.nextSibling;
    while(el){
        if(el.nodeType===1){
            elements.push(el);
        }
        el=el.nextSibling;
    }
    return elements;
}
//    //能力检测多个浏览器为同一个对象注册多个事件
var EventTools= {
    //为对象添加注册事件
    addEventListener: function (element, eventName, listener) {
        if (element.addEventListener) {
            element.addEventListener(eventName, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, listener)
        } else {
            element["on" + eventName] = listener;
        }
    },
    //为对象移除事件
    removeEventListener: function (element, eventName, listener) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, listener, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventName, listener);
        } else {
            element["on" + eventName] = null;
        }
    },
    //获取参数e
    getEvent: function (e) {
        return e || window.event;
    },
    getPageX: function (e) {
        if (e.pageX) {
            return e.pageX;
        } else {
            //有的浏览器把高度设计在了文档的第一个元素中了
            //有的浏览器把高度设计在了body中了
            //document.documentElement.scrollTop;//文档的第一个元素
            //document.body.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            return e.clientX + scrollLeft;
        }
    },
    getPageY: function (e) {
        if (e.pageY) {
            return e.pageY;
        } else {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            return e.clientY + scrollTop;
        }
    }

}

//获取元素的当前位置,移动,每次移动多少像素
function animate1(element,target) {
    //每次调用这个函数的时候先清理之前的计时器
    clearInterval(element.setId);
    element.setId=setInterval(function () {
        //获取元素当前的位置
        var current=element.offsetLeft;
        //每次移动的像素
        var step=15;
        //判断移动的步数应该是正数还是负数
        step=current<target?step:-step;
        //当前的位置=之前的当前位置+移动的步数
        current=current+step;
        if(Math.abs(target-current)<Math.abs(step)){
            //把计时器清理
            clearInterval(element.setId);
            element.style.left=target+"px";
        }else{
            //赋值给要移动的元素
            element.style.left=current+"px";
        }
    },20);



}


//获取任意元素的任意属性值
function getStyle(element,attr){
    return window.getComputedStyle ? window.getComputedStyle(element,null)[attr]:element.currentStyle[attr];
}

//最终的缓动动画
function animate(element,json,fn){
    clearInterval(element.setId);
    element.setId = setInterval(function (){
        var flag = true;
        for(var key in json){
            if(key == 'opacity'){
                var current = getStyle(element,key)*100;
                var target = json[key]*100;
                var step = (target-current)/10;
                step = step > 0 ? Math.ceil(step):Math.floor(step);
                current += step;
                element.style[key]= current/100;

            }else if(key == 'zIndex'){
                element.style[key] = json[key];
            }else{
                var current = parseInt(getStyle(element,key));
                var target = json[key];
                var step = (target-current)/10;
                step = step > 0 ? Math.ceil(step):Math.floor(step);
                current += step;
                element.style[key] = current + 'px';
            }
            if(current != target){
                flag = false;
            }
        }

        if(flag){
            clearInterval(element.setId);
            if(fn){
                fn();
            }
        }
    },20);
}



function getClient() {
    return{
        //可视区域的宽度
        width:window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth||0,
        //可视区域的高度
        height:window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight||0
    }
}


//添加事件的兼容代码
function addEvent(element,type,fn) {
    if(element.addEventListener){//如果浏览器支持这个
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){//浏览器支持这个
        element.attachEvent("on"+type,fn);
    }else{//浏览器不支持上面的两种情况
        element["on"+type]=fn;
    }
}
//移除事件的兼容代码
function removeEvent(element,type,fn) {
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}


//根据id获取元素对象
function my$(id) {
    return document.getElementById(id);
}


//封装函数：阻止默认行为
function preDef(e){
    var e  = e || window.event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

//封装函数：获取鼠标上下滚轮的距离
function getScrollDistance(e){
    var e = e || window.event;
    if(e.wheelDelta){     //非火狐支持，滚轮向前滑动是120；向后滑动是-120；
        return e.wheelDelta;
    }else if(e.detail){   //火狐支持，滚轮向前滑动是-30；向后滑动是30；
        return -e.detail*40;   //为了跟别的浏览器保持一致
    }
}