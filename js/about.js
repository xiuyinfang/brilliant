// 显示栏提示
var headerBox=document.querySelector(".header");
window.onscroll=function(){
	// 获取页面的滚动距离
 	var top=document.body.scrollTop||document.documentElement.scrollTop;
 	console.log(top);
 	if(top>=75){
  		// 固定定位
  		headerBox.className="header  header_fixed";
	 }
 	else{
  		// 不固定定位
  		headerBox.className="header";
 	} 
};

$(function(){
    	$("#login").button();
    	$("#zc").button();
    	$("#tijiao").button();
      $("#quxiao").button();
    	$("#close").button();
    })

// 表单
// 弹出提示框
$("#tijiao").click(function(){
  var message="谢谢您的宝贵建议！！！";
    alert(message);
})
// 字数检测
function checkLen(){
    var desc=$("textarea[name=advice]").val();
    if(desc.length<10){
      $("#advice").text(" ").css("color","green");
    }else{
      $("#advice").text("字数请在10个以内").css("color","red");
    }
  }
