
// $(".components").hover(function(){
//     console.log("In hover ")

//     $(this).css("color", "yellow");
//     }, function(){
//     $(this).css("color", "white");
//   });



  $("#firstEle").click(function(){
    if(this.style.color == "yellow")
    {
        $(".intro1").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro1").css("display","block");
        $("#bodydiv").addclass("intro1");
       
    }


    
  });

$("#secondEle").click(function(){
    if(this.style.color == "yellow")
    {
        $(".intro2").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro2").css("display","block");
        $("#bodydiv").addclass("intro2");
       
    }

    
    
  });

  $("#thirdEle").click(function(){
    if(this.style.color == "yellow")
    {
        $(".intro3").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro3").css("display","block");
        $("#bodydiv").addclass("intro3");
       
    }

    
    
  });

  $("#fourthEle").click(function(){
    if(this.style.color == "yellow")
    {
        $(".intro4").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro4").css("display","block");
        $("#bodydiv").addclass("intro4");
       
    }

    
    
  });

  $("#fifthEle").click(function(){
    if(this.style.color == "yellow")
    {
        $(".intro5").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro5").css("display","block");
        $("#bodydiv").addclass("intro5");
       
    }

    
    
  });

  $("#sixthEle").hover(function(){
    if(this.style.color == "yellow")
    {
        // $(".intro6").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro6").css("display","block");
        $("#bodydiv").addclass("intro6");
       
    } 
    
  });

  $("#intro6").hover(function(){
    if(this.style.color == "yellow")
    {
          $(".intro6").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro6").css("display","block");
        $("#bodydiv").addclass("intro6");
       
    } 
    
  });



  $("#intro6ab").hover(function(){
    if(this.style.color == "yellow")
    {
       $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro6").css("display","block");
        $("#bodydiv").addclass("intro6");
       
    } 
    
  });


  $("#intro6bb").hover(function(){
    if(this.style.color == "yellow")
    {
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro6").css("display","block");
        $("#bodydiv").addclass("intro6");
       
    } 
    
  });
  $("#sevenEle").click(function(){
    if(this.style.color == "yellow")
    {
        $(".intro7").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro7").css("display","block");
        $("#bodydiv").addclass("intro7");
       
    }
    $("#contactBody").hover(function(){
        if(this.style.color == "yellow")
            {
                $(this).css("color", "black");
               
            }
            else
            {
               
                $.widget.bridge('uitooltip', $.ui.tooltip);
    
                $("#contactBody").uitooltip({ 
                    content: "<strong>Hidfdfd!</strong>", 
                    track: true,
                    tooltipClass: "custom-tooltip"
                });
            }
    
        
        
      });
    
    
  });
  $("#contactBody").click(function() {
    if ($("#modelview").css("display") === "none") {
        $("#modelview").css("display", "inline");
        $(this).css("color", "blue");
    } else {
        $("#modelview").css("display", "none");
        $(this).css("color", "white");
    }
});


$(".intro4").click(function(){
    $("#submitbtnid").click(function(){
      let name=  $("nameinputid").text();
       let remarks= $("remarksinputid").text();
       
        
    })
})