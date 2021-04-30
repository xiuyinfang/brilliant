$(function(){
	// 按钮插件
    	$("#login").button();
    	$("#zc").button();
    	$("#djxz").button();


    // 选项卡插件
        $("#tabs").tabs({
            collapsible:true,
        });

//折叠菜单
  $(".nav_bar").find(".ulist").mouseenter(function(){
   $(this).find(".list").stop().slideDown(500);
   }).mouseleave(function(){
     $(this).find(".list").stop().slideUp(500);
     $(this).css("background","#e60ceb");
 });
})