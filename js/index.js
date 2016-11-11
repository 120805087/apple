$(function(){
    /*下拉菜单*/
            $(".muen").click(function(){
                $("body").eq(0).toggleClass("scrool");
                var clientW = $(window).width();
                var clientY = $(window).height();
                $(".small-erji").css({width:clientW,height:clientY});
                $(".small-erji").fadeToggle();
            })

    /*轮播图*/
    var currentNum = 0;
    var nextNum = 0;
    var currentTime = 0;
    var flag = true;

    function move(){
        nextNum++;
        if(nextNum>=$(".item").length){
            nextNum = 0;
            flag = false;
        }
        $(".item").eq(currentNum).animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".item").eq(nextNum).animate({left:0,width:"100%",height:"100%"},function(){
            $(".item").eq(currentNum).css({left:"100%",width:"100%",height:"100%"});
            currentNum = nextNum;
            currentTime = 0;
            flag = true;
        }).css("zIndex",1);
    }
    /*进度条*/
    function jishi(){
        currentTime+=100;
        var bili=currentTime/3000;
        if(bili>1){
            bili=1;
        }
        $(".progess").eq(currentNum).css({width:bili*100+"%"});
        if(flag === false){
            $(".progess").css({width:0});
        }
    }
    $(".lunbo-item").click(function(){
        nextNum = $(this).index(".lunbo-item");
        stop();
    })
    $(".leftBtn").click(function(){
        /*暂停定时器*/
        clearInterval(t1);
        clearInterval(t);

        /*按钮发生变化*/
        $(".lunbo-item").find(".progess").css("width",0);
        $(".lunbo-item").eq(nextNum).find(".progess").css("width","100%");

        nextNum++;
        if(nextNum==$(".item").length){
            nextNum = 0;
        }
        $(".item").eq(currentNum).animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".item").eq(nextNum).animate({left:0,width:"100%",height:"100%"},function(){
            $(".item").eq(currentNum).css({left:"100%",width:"100%",height:"100%"});
            currentNum = nextNum;
        }).css("zIndex",1);
    })
    $(".rightBtn").click(function(){
        /*暂停定时器*/
        clearInterval(t1);
        clearInterval(t);

        /*按钮发生变化*/
        $(".lunbo-item").find(".progess").css("width",0);
        $(".lunbo-item").eq(nextNum).find(".progess").css("width","100%");

        nextNum--;
        if(nextNum==-1){
            nextNum =$(".item").length-1;
        }
        $(".item").eq(currentNum).animate({left:"100%"}).css("zIndex",1);
        $(".item").eq(nextNum).css({left:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
            currentNum = nextNum;
        }).css("zIndex",0);
    })
    function stop(){
        /*暂停定时器*/
        clearInterval(t1);
        clearInterval(t);

        /*按钮发生变化*/
        $(".lunbo-item").find(".progess").css("width",0);
        $(".lunbo-item").eq(nextNum).find(".progess").css("width","100%");

        /*监测改变*/
        if(nextNum>currentNum){
            $(".item").eq(currentNum).animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".item").eq(nextNum).animate({left:0,width:"100%",height:"100%"},function(){
                $(".item").eq(currentNum).css({left:"100%",width:"100%",height:"100%"});
                currentNum = nextNum;
            }).css("zIndex",1);
        }else if(nextNum<currentNum){
            $(".item").eq(currentNum).animate({left:"100%"}).css("zIndex",1);
            $(".item").eq(nextNum).css({left:0,width:"80%",height:"80%"}).animate({width:"100%",height:"100%"},function(){
                currentNum = nextNum;
            }).css("zIndex",0);
        }
    }
    var t1 = setInterval(jishi,100);
    var t = setInterval(move,3000);
    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t);
    })
    $(window).focus(function(){
        t1 = setInterval(jishi,100);
        t = setInterval(move,3000);
    })

    /*footer效果*/
    setInterval(function(){
        if($(window).width()<769){
            $(".inner-list-item-title").click(function(){
                $(this).parent().find("ul").toggle();
            })
        }else{
            $(".inner-list-item-title").next("ul").css("display","block");
        }
    },10)
})