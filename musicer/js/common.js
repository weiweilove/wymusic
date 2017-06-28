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
 * ���ļ�����  ��ţx�ĳ���Ա .
 *
 * ����:����
 */

/*
 * �ú����Ƿ��ص���ָ����ʽ������,���ַ�������
 * ����:date ----����
 * ����ֵ: �ַ������͵�����
 * */
function getDatetoString(date) {
    var strDate;//�洢���ڵ��ַ���
    //��ȡ��
    var year=date.getFullYear();
    //��ȡ��
    var month=date.getMonth()+1;
    //��ȡ��
    var day=date.getDate();
    //��ȡСʱ
    var hour=date.getHours();
    //��ȡ����
    var minute=date.getMinutes()
    //��ȡ��
    var second=date.getSeconds();
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    //ƴ��
    strDate=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;//��������,���ڱ���������λ��
    return strDate;
}



/*
 *
 * innerText����IE��֧��
 * textContent�����֧��
 * dvObj.innerText="����";����innerText��ֵ
 * console.log(dvObj.innerText);��ȡinnerText��ֵ
 * ��Ϊ����ԭ��,inerText��ʱ����Ҫ����ֵ����ʱ����Ҫ��ȡֵ
 * ����,��Ҫдһ�����ݵĴ������ڻ����ʹ��,Ҳ������IE��ʹ��
 *
 *
 * */

/*
 *����innerText���Ե�ֵ
 * element-----Ϊĳ��Ԫ����������ֵ
 * content-----���õ�ֵ
 * */
function setInnerText(element,content) {
    if(typeof element.textContent==="undefined"){
        //IE�����
        element.innerText=content;
    }else{
        element.textContent=content;
    }
}
/*
 * ��ȡinnerText���Ե�ֵ
 * element Ҫ��ȡ��Ԫ��
 * ���ص��Ǹ�Ԫ�ص�innerTextֵ
 * */
function getInnerText(element) {
    if(typeof element.textContent==="undefined"){
        //IE�����
        return element.innerText;
    }else{
        return element.textContent;
    }
}


//��ȡ��ǰԪ��ǰһ��Ԫ��
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
//��ȡ��ǰԪ�صĺ�һ��Ԫ��
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

//��ȡ��Ԫ���еĵ�һ��Ԫ��
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
//��ȡ��Ԫ���е����һ��Ԫ��
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

//��ȡ�ֵ�Ԫ��
function getsiblings(ele) {
    if(!ele)return;//�жϵ�ǰ��ele���Ԫ���Ƿ����
    var elements=[];//���������Ŀ�ľ��Ǵ洢��ǰ���Ԫ�ص����е��ֵ�Ԫ��
    var el=ele.previousSibling;//��ǰԪ�ص�ǰһ���ڵ�
    while (el){
        if (el.nodeType===1){//Ԫ��
            elements.push(el);//�ӵ�������
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
//    //��������������Ϊͬһ������ע�����¼�
var EventTools= {
    //Ϊ�������ע���¼�
    addEventListener: function (element, eventName, listener) {
        if (element.addEventListener) {
            element.addEventListener(eventName, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, listener)
        } else {
            element["on" + eventName] = listener;
        }
    },
    //Ϊ�����Ƴ��¼�
    removeEventListener: function (element, eventName, listener) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, listener, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventName, listener);
        } else {
            element["on" + eventName] = null;
        }
    },
    //��ȡ����e
    getEvent: function (e) {
        return e || window.event;
    },
    getPageX: function (e) {
        if (e.pageX) {
            return e.pageX;
        } else {
            //�е�������Ѹ߶���������ĵ��ĵ�һ��Ԫ������
            //�е�������Ѹ߶��������body����
            //document.documentElement.scrollTop;//�ĵ��ĵ�һ��Ԫ��
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

//��ȡԪ�صĵ�ǰλ��,�ƶ�,ÿ���ƶ���������
function animate1(element,target) {
    //ÿ�ε������������ʱ��������֮ǰ�ļ�ʱ��
    clearInterval(element.setId);
    element.setId=setInterval(function () {
        //��ȡԪ�ص�ǰ��λ��
        var current=element.offsetLeft;
        //ÿ���ƶ�������
        var step=15;
        //�ж��ƶ��Ĳ���Ӧ�����������Ǹ���
        step=current<target?step:-step;
        //��ǰ��λ��=֮ǰ�ĵ�ǰλ��+�ƶ��Ĳ���
        current=current+step;
        if(Math.abs(target-current)<Math.abs(step)){
            //�Ѽ�ʱ������
            clearInterval(element.setId);
            element.style.left=target+"px";
        }else{
            //��ֵ��Ҫ�ƶ���Ԫ��
            element.style.left=current+"px";
        }
    },20);



}


//��ȡ����Ԫ�ص���������ֵ
function getStyle(element,attr){
    return window.getComputedStyle ? window.getComputedStyle(element,null)[attr]:element.currentStyle[attr];
}

//���յĻ�������
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
        //��������Ŀ��
        width:window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth||0,
        //��������ĸ߶�
        height:window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight||0
    }
}


//����¼��ļ��ݴ���
function addEvent(element,type,fn) {
    if(element.addEventListener){//��������֧�����
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){//�����֧�����
        element.attachEvent("on"+type,fn);
    }else{//�������֧��������������
        element["on"+type]=fn;
    }
}
//�Ƴ��¼��ļ��ݴ���
function removeEvent(element,type,fn) {
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}


//����id��ȡԪ�ض���
function my$(id) {
    return document.getElementById(id);
}


//��װ��������ֹĬ����Ϊ
function preDef(e){
    var e  = e || window.event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

//��װ��������ȡ������¹��ֵľ���
function getScrollDistance(e){
    var e = e || window.event;
    if(e.wheelDelta){     //�ǻ��֧�֣�������ǰ������120����󻬶���-120��
        return e.wheelDelta;
    }else if(e.detail){   //���֧�֣�������ǰ������-30����󻬶���30��
        return -e.detail*40;   //Ϊ�˸�������������һ��
    }
}