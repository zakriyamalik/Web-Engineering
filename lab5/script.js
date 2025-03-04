
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
        $("#bodydiv").addClass("intro1");
       
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
        $("#getValueButton").click(function() {
            var selectedValue = $("input[name='gender']:checked").val();
            console.log(selectedValue);
            if (selectedValue) {
                $("#result").text("Selected value: " + selectedValue);
            } else {
                $("#result").text("No option selected.");
            }
        });
       
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
        $("#bodydiv").addClass("intro3");
       
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
        $("#bodydiv").addClass("intro4");
       
    }

    
    
  });

  $("#fifthEle").click(function(){
    console.log("Button Clicked!");
    if(this.style.color == "yellow")
    {
        console.log("Change color Button Clicked!");
        $(".intro5").css("display","none");
        $(this).css("color", "white");
    }
    else
    {
        $(this).css("color", "yellow");
        $(".intro5").css("display","block");
        $("#bodydiv").addClass("intro5");
        console.log("Fifth")
        // console.log("Cookie0  ",document.cookie);       
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
        $("#bodydiv").addClass("intro6");
       
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
        $("#bodydiv").addClass("intro6");
       
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
        $("#bodydiv").addClass("intro6");
       
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

$(".intro4").click(function(){
    $("#submitbtnid").click(function(){
      let name1=  $("nameinputid").text();
       let remarks= $("remarksinputid").text();

       var userData = {
        username: name1,
        Remark: remarks,
    };
    
    document.cookie = `userData=${encodeURIComponent(JSON.stringify(userData))}; expires=Thu, 31 Dec 2025 12:00:00 UTC; path=/`;
    

    })
})