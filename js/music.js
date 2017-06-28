/**
 * Created by dell on 2017/1/7.
 */
//设置音乐
//播放按钮的点击效果
var flagMusic=false;
my$("music-b").onclick=function () {
    if(!flagMusic){
        this.style.backgroundPositionY="-166px";
        flagMusic=true;
        if(my$("music-length").style.width){
            singsLength();musicTimeChangeS();
        }
    }else {
        this.style.backgroundPositionY="-205px";
        clearInterval(setMusicId);
        clearInterval(setTimeId);
        flagMusic=false;
    }
    if(audio.paused){
        audio.play();
    }else {
        audio.pause();
    }
};
var  musicArr=new Array;
var musicArrIndex=1;
my$("music-p").onclick=function () {
    musicArrIndex++;
    if(musicArrIndex<=musicArr.length){
        singLength=-3;singsLength();
        audio.src=musicArr[(musicArr.length-musicArrIndex)];musicPlay();
        my$("music-b").style.backgroundPositionY="-166px";
        flagMusic=true;
    }
};
my$("music-n").onclick=function () {
    musicArrIndex--;
    if(musicArrIndex>=1){
        singLength=-3;singsLength();
        audio.src=musicArr[(musicArr.length-musicArrIndex)];musicPlay();
        my$("music-b").style.backgroundPositionY="-166px";
        flagMusic=true;
    }
};
//音乐时长显示效果
var setMusicId=null;
var singLength=-3;
function singsLength() {
    clearInterval(setMusicId);
    setMusicId=setInterval(function () {
        singLength+=2;
        singLength=singLength>493?493:singLength;
        my$("music-length").style.width=singLength+"px";
        my$("music-moveButton").style.left=singLength-6+"px";
    },1000);
}
my$("music-moveButton").onmousedown=function (e) {
    document.onmousemove=function () {
        window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
    }
    var spaceX=e.clientX-this.offsetLeft;
    my$("music").onmousemove=function (e) {
        this.style.cursor="default";
        var move=e.clientX-spaceX;
        move=move<-3?-3:move;
        move=move>488?488:move;
        my$("music-moveButton").style.left=move+"px";
        my$("music-length").style.width=move+5+"px";
    };
};
my$("music").onmouseup=function () {
    my$("music").onmousemove=null;
};
//小锁子
var flagLock=false;
my$("music-lock").onclick=function () {
    if(!flagLock){
        this.style.backgroundPositionX="-100px";
        my$("music").onmouseout=null;
        my$("music-lockBox").onmouseout=null;
        flagLock=true;
    }else{
        this.style.backgroundPositionX="-80px"
        flagLock=false;
        my$("music").onmouseout=function () {
            animate(my$("music-lockBox"),{"bottom":-40});
            animate(my$("music"),{"bottom":-40});
        };
        my$("music-lockBox").onmouseout=function () {
            animate(my$("music-lockBox"),{"bottom":-40});
            animate(my$("music"),{"bottom":-40});
        };
    }
};function musicPlay() {
    musicTimeChange();
    if(audio.paused){
        audio.play();
    }
}var audio=my$("audio");
var singOnes=my$("singOne").getElementsByTagName("a");
for(var i=0;i<singOnes.length;i++){
    singOnes[i].onclick=function () {
        singLength=-3;singsLength();
        var singMusic=this.innerText;
        audio.src="music/"+singMusic+".mp3";
        musicArr.push(audio.src);
        musicPlay();
        my$("music-b").style.backgroundPositionY="-166px";
        flagMusic=true;
        return false;
    };
}var singTwos=my$("singTwo").getElementsByTagName("a");
for(var j=0;j<singTwos.length;j++){
    singTwos[j].onclick=function () {
        singLength=-3;singsLength();
        var singMusic=this.innerText;
        audio.src="music/"+singMusic+".mp3";
        musicArr.push(audio.src);
        musicPlay();my$("music-b").style.backgroundPositionY="-166px";
        flagMusic=true;
        return false;
    };
}var singThrees=my$("singThree").getElementsByTagName("a");
for(var k=0;k<singThrees.length;k++){
    singThrees[k].onclick=function () {
        singLength=-3;singsLength();
        var singMusic=this.innerText;
        audio.src="music/"+singMusic+".mp3";
        musicArr.push(audio.src);
        musicPlay();my$("music-b").style.backgroundPositionY="-166px";
        flagMusic=true;
        return false;
    };
}
//逐渐加载出来
my$("music").onmouseover=function (e) {
    animate(my$("music-lockBox"),{"bottom":0});
    animate(my$("music"),{"bottom":0});
};
my$("music-lockBox").onmouseover=function () {
    animate(my$("music-lockBox"),{"bottom":0});
    animate(my$("music"),{"bottom":0});
};
my$("music").onmouseout=function () {
    animate(my$("music-lockBox"),{"bottom":-40});
    animate(my$("music"),{"bottom":-40});
};
my$("music-lockBox").onmouseout=function () {
    animate(my$("music-lockBox"),{"bottom":-40});
    animate(my$("music"),{"bottom":-40});
};
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
//歌单部分
var singsMusic=["致姗姗来迟的你","PDD象拔蚌","极乐净土","十年","我要你","我梦见我梦见我","告别的时代","一个师傅仨徒弟"];
var singsList=my$("main-amway-uu").getElementsByTagName("s");
for(var o=0;o<singsList.length;o++){
    singsList[o].setAttribute("singsMusicIndex",o);
    singsList[o].onclick=function () {
        singLength=-3;singsLength();
        singsMusicIndex=this.getAttribute("singsMusicIndex");
        audio.src="music/"+singsMusic[singsMusicIndex]+".mp3";
        musicArr.push(audio.src);
        musicPlay();
        my$("music-b").style.backgroundPositionY="-166px";
        flagMusic=true;
        return false;
    };
}var chage=1;
var setTimeId=null;
var mm=0;var ss=0;
function musicTimeChange() {var m=4;var s=5;
    clearInterval(setTimeId);
    setTimeId=setInterval(GetRTime,1000);
    function GetRTime(){
        s=s-chage;
        if(m==0&&s==0){
            clearInterval(setTimeId);
        }else if(s==-1){
            m=m-chage;
            s=59;
        }
        if(s<10){
            my$("t_m").innerText="0"+m;
            my$("t_s").innerText="0"+s;
        }else{
            my$("t_m").innerText="0"+m;
            my$("t_s").innerText=s;
        }
        mm=m;ss=s;
    }
}function musicTimeChangeS() {
    s=ss;m=mm
    clearInterval(setTimeId);
    setTimeId=setInterval(GetRTime,1000);
    function GetRTime(){
        s=s-chage;
        if(m==0&&s==0){
            clearInterval(setTimeId);
        }else if(s==-1){
            m=m-chage;
            s=59;
        }
        if(s<10){
            my$("t_m").innerText="0"+m;
            my$("t_s").innerText="0"+s;
        }else{
            my$("t_m").innerText="0"+m;
            my$("t_s").innerText=s;
        }
        mm=m;ss=s;
    }
}
//设置音乐结束
