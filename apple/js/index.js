$(function(){
    $(".footer span").click(function(){
      $(this).next("ul").slideToggle(1000,"swing");
  });
    var currentNum=0;
    var nextNum=0;
    var currentTime=0;
    var flag=true;

    function move(){
        nextNum++;
        if(nextNum==3){
            nextNum=0;
            flag=false;
        }

        $(".list:eq("+currentNum+")").animate({width:"80%",height:"80%"}).css("zIndex",0);

        $(".list:eq("+nextNum+")").animate({left:0},function(){
            $(".list:eq("+currentNum+")").css({
                left:"100%",width:"100%",height:"100%"
            })
            currentNum=nextNum;
            currentTime=0;
            flag=true;

        }).css("zIndex",1)
    }
    function move1(){
        currentTime+=50;
        var bili=currentTime/3000;
        if(bili>1){
            bili=1;
        }
        $(".progress").eq(currentNum).css({width:bili*100+"%"})
        if(flag===false){
            $(".progress").css("width",0);
        }
    }


    var t1=setInterval(move,3000)
    var t2=setInterval(move1,50)

    $(window).focus(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50)
    })
    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })


    $(".btn-list").click(function(){
        nextNum=$(this).index(".btn-list");
        stop();
    })

    $(".leftbtn").click(function(){
        nextNum--
        if(nextNum==-1){
            nextNum=2;
        }
        stop();
    })
    $(".rightbtn").click(function(){
        nextNum++
        if(nextNum==3){
            nextNum=0;
        }
        stop();
    })


    function stop(){
        clearInterval(t1);
        clearInterval(t2);
        $(".btn-list").find(".progress").css("width",0);
        $(".btn-list").eq(nextNum).find(".progress").css("width","100%");

        if(nextNum>currentNum){
            $(".list:eq("+currentNum+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".list:eq("+nextNum+")").animate({left:0},function(){
                $(".list:eq("+currentNum+")").css({
                    left:"100%",width:"100%",height:"100%"
                })
                currentNum=nextNum;

            }).css("zIndex",1)
        }else{
            $(".list:eq("+currentNum+")").animate({left:"100%"}).css("zIndex",1);
            $(".list").eq(nextNum).css({
                width:"80%",height:"80%",left:0
            }).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })


        }
    }




















     $(".great .row:eq(0)").find("div:eq(0)").click(function(){
         $(".great").slideUp();
     })
    $(".header>.container").find(".row div:eq(0)").click(function(){
        var h=$(window).height();
        $(".great").css({
            height:h+"px",
            background:"#000",
            zIndex:"10000"
        }).slideDown();
    })
    $(".header>.container").find(".row div:eq(9)").click(function(){
        var that=$(this);
        $(".shopping").slideToggle(1000,"swing");
        that.find(".sanjiao").slideToggle(500,"swing");

    })








})