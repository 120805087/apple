$(function(){
    /*全屏滚动*/
    var currentNum = 0;
    var nextNum = 0;
    var flag = true;
    $(window).mousewheel(function (event, delta) {
        if(!flag){
           return false;
        }
        flag = false;
        if(delta>0){
            setTimeout(function(){
                nextNum--;
                if(nextNum<=0){
                    nextNum=0;
                }
                $(".item").eq(currentNum).css("transform","translateY(100%)");
                $(".item").eq(nextNum).css("transform","translateY(0)");
                $(".pages>a").removeClass("selected");
                $(".pages>a").eq(nextNum).addClass("selected");
                currentNum = nextNum;
                flag = true;
            },200)
        }else{
            setTimeout(function(){
                nextNum++;
                if(nextNum>=$(".item").length){
                    nextNum=$(".item").length-1;
                }
                $(".item").eq(currentNum).css("transform","translateY(-100%)");
                $(".item").eq(nextNum).css("transform","translateY(0)");
                $(".pages>a").removeClass("selected");
                $(".pages>a").eq(nextNum).addClass("selected");
                currentNum = nextNum;
                flag = true;
            },200)
        }
    })
    /*按钮点击事件*/
    $(".pages>a").click(function(){
        var index = $(this).index();
        if(nextNum>=index){
            nextNum = index;
            setTimeout(function(){
                $(".item").eq(currentNum).css("transform","translateY(100%)");
                $(".item").eq(nextNum).css("transform","translateY(0)");
                $(".pages>a").removeClass("selected");
                $(".pages>a").eq(nextNum).addClass("selected");
                currentNum = nextNum;
            },200)
        }else if(nextNum<index){
            nextNum = index;
            setTimeout(function(){
                $(".item").eq(currentNum).css("transform","translateY(-100%)");
                $(".item").eq(nextNum).css("transform","translateY(0)");
                $(".pages>a").removeClass("selected");
                $(".pages>a").eq(nextNum).addClass("selected");
                currentNum = nextNum;
            },200)
        }
    })
    /*skill*/
    var aa = 0;
    $(".skill_icon").click(function(){

        if(aa == 0){
            $(".skill_int").slideUp();
            $(this).parent().find(".skill_int").slideDown();
            $(this).parent().find(".skill_flag").css("transform","rotate(180deg)");
            aa=1;
        }else if(aa==1){
             $(".skill_int").slideUp();
            $(this).parent().find(".skill_int").slideUp();
            $(this).parent().find(".skill_flag").css("transform","rotate(0deg)");
            aa=0;
        }
    })
    /*demo_modal*/
    $("#demo_toggle").click(function(){
        $(".modal").css("visibility","visible");
        $(".md-overlay").css({
            visibility:"visible",
            opacity:1
        })
        $(".modal_content").css({
            transform:"scale(1)",
            opacity:1
        })
    })
    $(".modal_close").click(function(){
        $(".modal").css("visibility","hidden");
        $(".md-overlay").css({
            visibility:"hidden",
            opacity:0
        })
        $(".modal_content").css({
            transform:"scale(2)",
            opacity:0
        })
    })
    /*experience(经历)*/
    var current = 0;
    var next = 0;
    $(".exp_list_btn_left").click(function(){
        if(next>=3){
            return;
        }
        next++;
        $(".exp_list").eq(current).animate({left:"-100%"},1000);
        $(".exp_list").eq(next).animate({left:"0%"},1000,function(){
            current = next;
        });
    })
    $(".exp_list_btn_right").click(function(){
        if(next<=0){
            return;
        }
        next--;
        $(".exp_list").eq(current).animate({left:"100%"},1000);
        $(".exp_list").eq(next).animate({left:"0%"},1000,function(){
            current = next;
        });
    })
    /*按钮*/
    $(".exp_timeline a").click(function(){
        var index = $(this).index();
        next = index;
        if(next>current){
            $(".exp_list").eq(current).animate({left:"-100%"},1000);
            $(".exp_list").eq(next).animate({left:"0%"},1000,function(){
                current = next;
            });
        }else if(next<current){
            $(".exp_list").eq(current).animate({left:"100%"},1000);
            $(".exp_list").eq(next).animate({left:"0%"},1000,function(){
                current = next;
            });
        }
    })
})