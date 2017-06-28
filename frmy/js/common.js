function getDate(dt) {
    //获取年
    var year=dt.getFullYear();
    //获取月
    var month=dt.getMonth()+1;
    //获取日
    var day=dt.getDate();
    //获取小时
    var h=dt.getHours();
    //获取分钟
    var m=dt.getMinutes();
    //获取秒
    var s=dt.getSeconds();
    month=month<10?"0"+month:month;//月份
    day=day<10?"0"+day:day;//日
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    return year+"年"+month+"月"+day+"日 "+h+":"+m+":"+s;
}

//根据id获取单个元素
function my$(id) {
    return document.getElementById(id);
}


//获取innerText或者是获取textContent
function getInnerTxt(element) {//element表示的标签
    return element.innerText ? element.innerText : element.textContent;
}
//设置innerText或者是设置textContent
function setInnerText(element, value) {
    if (element.innerText) {
        element.innerText = value;
    } else {
        element.textContent = value;
    }
}
//获取的是当前父级元素中的第一个子元素----兼容代码
function getFirstElement(element) {
    if (element.firstElementChild) {
        //浏览器如果支持这个属性则直接返回第一个子元素
        return element.firstElementChild;
    } else {//浏览器不支持firstElementChild属性
        var node = element.firstChild;//获取父元素中的第一个子节点
        //如果node不为空,并且node的类型是1,则证明是一个标签,如果不是则继续找后面的子节点
        while (node && node.nodeType != 1) {
            node = node.nextSibling;//当前子节点的下一个节点
        }
        //如果循环结束,表示node中存储的是一个标签节点
        return node;
    }
}


//获取的是当前父级元素中的最后一个子元素---兼容代码
function getLastElement(element) {
    if (element.lastElementChild) {//浏览器支持这个属性则直接返回
        return element.lastElementChild;
    } else {//浏览器不支持这个属性
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            //这个节点不是标签,继续向前找节点
            node = node.previousSibling;
        }
        return node;
    }
}


//获取当前元素的后一个兄弟元素
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
//获取当前元素的前一个兄弟元素
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
//获取当前元素的兄弟元素
function getSiblingElement(element) {
    var elements = [];//保存当前元素的前面所有元素和后面所有元素
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType == 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType == 1) {
            elements.push(ele);
        }
        ele = ele.nextSibling;
    }
    return elements;
}
/*//获取元素的当前位置,移动,每次移动多少像素
function animate(element,target) {
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
}*/
//缓动动画
function getStyle(element,attr) {
    return window.getComputedStyle?window.getComputedStyle(element,null)[attr]:element.currentStyle[attr]
}

function animate(element,json,fn) {
    clearInterval(element.setId);//清理计时器
    element.setId=setInterval(function () {
        var flag=true;//假设所有的属性都到达目标了
        for(var key in json){
            if(key=="opacity"){
                var target=json[key]*100;
                //获取元素的当前位置
                var current=getStyle(element,key)*100;
                //步数
                var step=(target-current)/10;//改变了
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;//设置当前的位置
                element.style[key]=current/100;
            }else if(key=="zIndex"){
                element.style["zIndex"]=json[key];
            }else{
                var target=json[key];
                //获取元素的当前位置
                var current=parseInt(getStyle(element,key))||0;
                //步数
                var step=(target-current)/10;//改变了
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;//设置当前的位置
                element.style[key]=current+"px";
            }
            if(current!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.setId);//清理计时器
            if(fn){//如果为true则用户传了,否则用户没传
                fn();
            }
        }
    },20);
}
//获取可视区域的宽和高
function getClient() {
    return{
        //可视区域的宽度
        width:window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth||0,
        //可视区域的高度
        height:window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight||0
    }
}


