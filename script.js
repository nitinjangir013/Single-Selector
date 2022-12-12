var isOpen = false;
$(document).ready(function(){
//   Select item show
  $(".main_div_selector").append("<div class='select_item_container' id='s_i_c'><div></div><div class='select_item'>--Select--</div><div id='arrow'><img src='https://www.pngarts.com/files/2/Down-Arrow-PNG-Transparent-Image.png'></div></div>");
  
//   Select item store
  
  $(".main_div_selector").append("<div class='select_item_store_container'><div class='items' onclick='selectItem(0)'>--Select--</div><div class='items' onclick='selectItem(1)'>Apple</div><div class='items' onclick='selectItem(2)'>Banana</div><div class='items' onclick='selectItem(3)'>Carrot</div><div class='items' onclick='selectItem(4)'>Date</div><div class='items' onclick='selectItem(5)'>Mango</div><div class='items' onclick='selectItem(6)'>Orange</div></div>");
  
//  Click selector
   $(".select_item_container").click(function(){
     if(isOpen==false)
     {
       $(".main_div_selector").css({"height":"auto","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(180deg)");
       isOpen=true;
     }
     else
     {
       $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
     }
   });
});



//   Selector list Click
  
function selectItem(value)
{
  if(value==0)
    {
      $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
      
      $(".select_item").empty().css("color","rgba(217,217,217,1)").append("--Select--");
      $(".item").each(function(n){
        $(".items").css("background","rgba(245,248,255,1)");
        $(".items").css("background","#fff");
      });
    }
  else if(value==1)
    {
      $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
      
      $(".select_item").empty().css("color","rgba(255,255,255,1)").append("Apple");
    }
  else if(value==2)
    {
      $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
      $(".select_item").empty().css("color","rgba(255,255,255,1)").append("Banana");
    }
  else if(value==3)
    {
      $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
      
      $(".select_item").empty().css("color","rgba(255,255,255,1)").append("Carrot");
    }
  else if(value==4)
    {
      $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
      
      $(".select_item").empty().css("color","rgba(255,255,255,1)").append("Date");
    }
  else if(value==5)
    {
      $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
      
      $(".select_item").empty().css("color","rgba(255,255,255,1)").append("Mango");
    }
  else if(value==6)
    {
      $(".main_div_selector").css({"height":"38px","transition":"all 1s"});
       $("#arrow>img").css("transform","rotate(0deg)");
       isOpen=false;
      
      $(".select_item").empty().css("color","rgba(255,255,255,1)").append("Orange");
    }
}