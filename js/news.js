// 显示栏提示
var headerBox=document.querySelector(".location");
window.onscroll=function(){
    // 获取页面的滚动距离
    var top=document.body.scrollTop||document.documentElement.scrollTop;
    console.log(top);
    if(top<=75){
        // 固定定位
        headerBox.className="location  location_fixed";
     }
    else{
        // 不固定定位
        headerBox.className="location";
    } 
};

// 轮播图
    var showIndex = 0;
        var timer;
        $(function(){
            $("ul.uItems li").not(":eq(0)").css("display", "none");
            startTimer();
            $("ul.uIndex li").hover(function() {
            clearInterval(timer);

            showIndex = $(this).index();
                showImg();
            }, function() {
                startTimer();
            })

            $(".btnPrev").click(function() {
                clearInterval(timer);
                if(showIndex == 0) showIndex = 6;
                showIndex--;
                showImg();
                startTimer();
            })

            $(".btnNext").click(function() {
                clearInterval(timer);

                if(showIndex == 4) showIndex = -1;
                showIndex++;
                showImg();
                startTimer();
            })
            $(".con h2").click(function(){
                $(this).next().slideDown("slow").parent().siblings().children('.list').slideUp("slow");
            })
        // });

        function startTimer() {
            timer = setInterval(function() {
                showIndex++;
                if(showIndex >= 5) showIndex = 0;
                showImg();
            }, 2000);
        }

        function showImg() {
            $("ul.uItems li").stop(true, true);
            $("ul.uItems li").fadeOut(400).eq(showIndex).fadeIn(400);
            $("ul.uIndex li").removeClass("bg").eq(showIndex).addClass("bg");
        }
    })
//图片出现白色的字
$(document).ready(function(){ 

$(".section ul li .rsp").hide(); 

$(".section ul li").hover(function(){ 
 
$(this).find(".rsp").stop().fadeTo(1000,0.5) 

$(this).find(".text").stop().animate({top:'0'}, {duration: 1000}) 

},function(){ 

$(this).find(".rsp").stop().fadeTo(1000,0) 

$(this).find(".text").stop().animate({top:'300'}, {duration: "fast"}) 

$(this).find(".text").animate({top:'-300'}, {duration: 0}) 

}); 

})
// 按钮插件
$(function(){
    $("#zc").button();
    $("#login").button();
})
