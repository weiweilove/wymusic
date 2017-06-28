/**
 * Created by Administrator on 2017/1/6.
 */


var arr=["杨宗纬","许巍","蔡健雅","Adele","Bruno Mars","Coldplay","Justin Bieber","陈粒","孙燕姿","赵雷","李志","王力宏","好妹妹乐队","EXO","Beyond","Alan Walker","Fall Out Boy","金玟岐","宋冬野","朴树","Eminem","李健","OneRepublic","Tobu","Two Steps From Hell","陈小春","那英","莫文蔚","许嵩","苏打绿","Ed Sheeran","谢安琪","杨千嬅","马頔","张国荣","Charlie Puth","萧敬腾","张敬轩","Wiz Khalifa","Rihanna","张靓颖","Ellie Goulding","张惠妹","IU","防弹少年团","澤野弘之","Carly Rae Jepsen","G-Dragon","古巨基","五月天","Taylor Swift","One Direction","张杰","容祖儿","蔡依林","刘瑞琦","Imagine Dragons","刘思涵","A-Lin","Ariana Grande","Katy Perry","Aimer","Avicii","周传雄","梁静茹","久石譲","李克勤","逃跑计划","Justin Timberlake","Westlife","Sunshine","Hans Zimmer","Sam Smith","Avril Lavigne","T-ara","陶喆","Lana Del Rey","Linkin Park","张信哲","少女时代","Pitbull","陈绮贞","Audio Machine","刘德华","TheFatRat","方大同","谭维维","GALA","Owl City","初音ミク"];

for(var i=0;i<arr.length;i++){
    var con=arr[i];
    var divObj=$("<div id='singerOne"+i+"'></div>");
    divObj.addClass("singerOne");
    $("<a>"+con+"</a><a> </a>").appendTo(divObj);
    $("#singerName").append(divObj);
    //两个字的
    var arr2=["陈粒","赵雷","李志","李健","许嵩","马頔","张杰","陶喆"];
    for(var j=0;j<arr2.length;j++){
        var con2=arr2[j];
        if(con==con2){
            divObj.children("a").last().addClass("name-head");
            divObj.children("a").first().css("width","26px");
        }
    };
    //名字是三个字的
    var arr3=["杨宗纬","蔡健雅","王力宏","金玟岐","宋冬野","谢安琪","张惠妹","刘瑞琦","刘思涵","周传雄","陈绮贞","方大同","谭维维"];
    for(var j=0;j<arr3.length;j++){
        var con3=arr3[j];
        if(con==con3){
            divObj.children("a").last().addClass("name-head");
            divObj.children("a").first().css("width","38px");
        }
    }
    
    var arr4=["好妹妹乐队"];
    for(var j=0;j<arr4.length;j++){
        var con4=arr4[j];
        if(con==con4){
            divObj.children("a").last().addClass("name-head");
            divObj.children("a").first().css("width","60px");
        }
    }
    var arr5=["逃跑计划"];
    for(var j=0;j<arr5.length;j++){
        var con5=arr5[j];
        if(con==con5){
            divObj.children("a").last().addClass("name-head");
            divObj.children("a").first().css("width","50px");
        }
    }
    var arr5=["Sunshine"];
    for(var j=0;j<arr5.length;j++){
        var con5=arr5[j];
        if(con==con5){
            divObj.children("a").last().addClass("name-head");
            divObj.children("a").first().css("width","54px");
        }
    }

    var arr6=["GALA"];
    for(var j=0;j<arr6.length;j++){
        var con6=arr6[j];
        if(con==con6){
            divObj.children("a").last().addClass("name-head");
            divObj.children("a").first().css("width","34px");
        }
    }
}


