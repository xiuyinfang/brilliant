      $("#login").button();
    	$("#zc").button();
    	$(".rigko>a>.book").button();
    	$("#lefte>a>.book").button();
//会员管理

  function changeColor(){
        $("tr:first").css({"background":"#0066cc","font-weigth":"bold","color":"#ffffdd"});
        $("tr:not(:first):not(:last):odd").css("background","#c4e1ff");
        $("tr:not(:first):not(:last):even").css("background","#ecf5ff");
      }
  $(function(){
        changeColor();
        //创建增加的那一行
        $("input[value='增加']").bind("click",function(){
          //step1: 获取文本框的值
           var inputVal=[];  //输入的值
          $("tr:last").find("input").not("[value='增加']").each(function(){
            inputVal.push($(this).val());
          })

            //step2: 生成包含值的3个td元素
            var tdLen=$("tr:first td").length;
            var $tdText="";
            for(var i=0;i<tdLen-1;i++){
              $tdText+="<td>"+inputVal[i]+"</td>"
            }
            //console.log(tdText);

            //step3: 生成包含按钮的1个td元素
            var $tdBtn=$("<td></td>");
            $("tr:eq(1)").find("input").each(function(){
              //$(this).clone().appendTo($tdBtn)
              $tdBtn.append($(this).clone(true)).append(" ");
            })

            //step4: 将td添加到tr中，并将tr添加到table中
            $("<tr></tr>").append($tdText).append($tdBtn).insertBefore($("tr:last"));

            //step5: 清空文本框
            $("tr:last").find("input").not(":last").each(function(){
              $(this).val("");
            })

            //step5: 隔行变色
            changeColor();



          })

    //查看
      $("input[value='查看']").click(function(){
        $("<div class='mask'></div>").appendTo($("body"));
        var maskHeight=$(document).height(); //获取当前页面高度
        var maskWidth=$(document).width(); //获取当前页面宽度
        $(".mask").css({
          "position":"absolute",
          "left":0,
          "top":0,
          "width":maskWidth,
          "height":maskHeight,
          "background":"#000",
          "opacity":0.4,
          "z-index":2
})
        var arr=[];
        $(this).parent().siblings().each(function(){
          arr.push($(this).text());
          console.log(arr);
        })
        $(".popDiv").show().find("span").each(function(i){
          $(this).text(arr[i]);
        });
      })
       //关闭
      $(".close").click(function(){
        $(".popDiv").hide();
        $(".mask").remove();
      })
      //删除
      $("input[value='删除']").bind("click",function(){
        var $d=$($(this).parent()).parent();
        $d.remove();
        changeColor();
      })

    })