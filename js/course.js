// 导航栏固定显示
window.onscroll=function(){
  var topScroll=document.body.scrollTop||document.documentElement.scrollTop;
  console.log(topScroll);
  var nav=document.getElementById("nav");
  if(topScroll>1100){
    nav.style.position="fixed";
    nav.style.top="25px";
    nav.style.zIndex="999";
    nav.style.background="#fff";
  }else{
    nav.style.position="static";
  }
}




// $(function(){
//     	$("#login").button();
//     	$("#zc").button();
// })

