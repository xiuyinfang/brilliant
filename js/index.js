//显示栏提示
var headerBox=document.querySelector(".nav");
window.onscroll=function(){
	// 获取页面的滚动距离
 	var top=document.body.scrollTop||document.documentElement.scrollTop;
 	console.log(top);
 	if(top>=100){
  		// 固定定位
  		headerBox.className="nav nav_fixed";
	 }
 	else{
  		// 不固定定位
  		headerBox.className="nav";
 	} 
};

//轮播图
// 1、自动播放
// 2、播放的时候图片和圆点对应的
// 轮播图播放函数
function bannerPlay(){
    var bannerBox=document.querySelector(".bd");
    // 计算宽度
    var w=bannerBox.offsetWidth;
    // 轮播图片所在的盒子，第1个ul
    var imageBox=bannerBox.querySelector("ul:first-child");
    // 小圆点所在的盒子，第2个ul
    var pointBox=bannerBox.querySelector("ul:last-child");
    // 获取所有的小圆点,所有的li
    var points=pointBox.querySelectorAll("li");
    // 自动播放：自动改变第1个ul的位置，就是显示某一个li里面的图片
    // 默认显示第2个li的图片
    var index=1;
    // 定义添加过渡效果函数
    function addTransition(){
        imageBox.style.transition="transform 0.3s";
    }
    // 定义一个删除过渡效果函数
    function removeTransition(){
        imageBox.style.transition="none";
    }
    // 定位函数
    function setTranslateX(x){
        imageBox.style.transform="translateX("+x+"px)";
    }
    // 定时器
    var timer=null;
    // 2秒自动切换图片 
    timer=setInterval(function(){
        // 下一张图片
        index=index+1;
        // 显示第index位置的图片,此时ul的位置为-index*w
        // translateX(a):水平平移a像素的距离，正数往右移，负数往左移
        // 切换图片的时候有过渡效果
        addTransition();
        setTranslateX(-index*w);
    },2000);
    // 图片切换完毕，判断是否到了边界，最后一张或第一张
    // 过渡效果结束事件
    imageBox.addEventListener("transitionend",function(){
        console.log("图片切换完毕"+index);
        if(index>=6){
            // 最后一张,瞬间显示另外一张相同的图片
            index=1;
            // 不需要过渡效果,就要删除过渡效果
            removeTransition();
            // 定位
            setTranslateX(-index*w);
        }else if(index<=0){
            // 第一张,瞬间显示另外一张相同的图片
            index=5;
            // 不需要过渡效果,就要删除过渡效果
            removeTransition();
            // 定位
            setTranslateX(-index*w);
        }
        // 图片切换完毕，图片和小圆点对应起来
        // 调用对应函数
        setPoint();
    });
        // 图片和小圆点对应起来的函数
    function setPoint(){
        // 全部不对应
        for(var i=0;i<points.length;i++){
            points[i].className="";
        }
        // 对应的class="now"
        points[index-1].className="now";
    }

}
// 调用函数
bannerPlay();





