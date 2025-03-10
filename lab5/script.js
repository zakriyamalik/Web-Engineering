
// // $(".components").hover(function(){
// //     console.log("In hover ")

// //     $(this).css("color", "yellow");
// //     }, function(){
// //     $(this).css("color", "white");
// //   });



//   $("#firstEle").click(function(){
//     if(this.style.color == "yellow")
//     {
//         $(".intro1").css("display","none");
//         $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro1").css("display","block");
//         $("#bodydiv").addClass("intro1");
       
//     }


    
//   });

// $("#secondEle").click(function(){
//     if(this.style.color == "yellow")
//     {
//         $(".intro2").empty().css("display","none");
//         $(this).css("color", "white");

//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro2").css("display","block");
//         $("#bodydiv").addClass("intro2");
       

       
//     }    
//   });
//   $("#getValueButton").click(function() {
//     var selectedValue = $("input[name='coffee']:checked").val();
//     console.log(selectedValue);
//     if (selectedValue) {
//         var res=$(`<img src="coffee1.jpeg"></img>`).css({
//             width:"100px",
//             height:"100px"
//         })
       
//         $(".intro2").append(res)
//     } else {
//         var res1=$(`<img src="coffee2.jpeg"></img>`).css({
//             width:"100px",
//             height:"100px"
//         })
       
//         $(".intro2").empty().append(res1)
//     }
// });

//   $("#thirdEle").click(function(){
//     if(this.style.color == "yellow")
//     {
//         $(".intro3").css("display","none");
//         $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro3").css("display","block");
//         $("#bodydiv").addClass("intro3");
//         $.ajax({
//             url:"http://universities.hipolabs.com/search?name=fast",
//             method: "GET",
//             success: function(response){
//                 list="<ul>";
//                 response.forEach(item => {
//                     list+=`<li>${item.name}<br>${item.domains}<br>${item.web_pages}<br>
//                     </li>`
//                 });
//                 list+="<ul>";
                
//                 $(".intro3").empty().append(list)
//             }
//         })
       
//     }

    
    
//   });

//   $("#fourthEle").click(function(){
//     if(this.style.color == "yellow")
//     {
//         $(".intro4").css("display","none");
//         $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro4").css("display","block");
//         $("#bodydiv").addClass("intro4");
       
//     }    
//   });


//   $("#submitbtnidi4").click(function(){
//     let name1=  $("#nameinputid").val();
//      let remarks= $("#remarksinputid").val();

//      var userData = {
//       username: name1,
//       Remark: remarks,
//   };
//   console.log("User Name : "+name1+" Remarks : "+remarks) 
// //   $.cookie(name1.remarks)
//   document.cookie=name1+"="+remarks;
  
// })




//   $("#fifthEle").click(function(){
//     console.log("Button Clicked!");
//     if(this.style.color == "yellow")
//     {
//         console.log("Change color Button Clicked!");
//         $(".intro5").empty().css("display","none");
//         $(this).css("color", "white");
//         $(".intro5").empty()
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//        $(".intro5").empty().css("display","block");
//         $("#bodydiv").addClass("intro5");
//         console.log("Fifth")
//         let c=document.cookie.split("=");
//         let name=c[0];
//         let response=c[1];
//         var para=`<p id="responsePara">User name is <var>${name}</var> and response is <var>${response}</var></p>`
//         var btn=`<btn id="deletebtn">Delete Record</btn>`
//         $(".intro5").append(para,btn)

//         $(document).off("click","#deletebtn").on("click","#deletebtn",function(){
//             $(".intro5").empty().css("display","none");
//             $(".intro5").empty()

//         });
//     }    
//   });

//   $("#sixthEle").hover(function(){
//     if(this.style.color == "yellow")
//     {
//         // $(".intro6").css("display","none");
//         $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro6").css("display","block");
//         $("#bodydiv").addClass("intro6");
       
//     } 
    
//   });

//   $("#intro6").hover(function(){
//     if(this.style.color == "yellow")
//     {
//           $(".intro6").css("display","none");
//         $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro6").css("display","block");
//         $("#bodydiv").addClass("intro6");
       
//     } 
    
//   });



//   $("#intro6ab").hover(function(){
//     if(this.style.color == "yellow")
//     {
//        $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro6").css("display","block");
//         $("#bodydiv").addClass("intro6");
       
//     } 
    
//   });


//   $("#intro6bb").hover(function(){
//     if(this.style.color == "yellow")
//     {
//         $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro6").css("display","block");
//         $("#bodydiv").addclass("intro6");
       
//     } 
    
//   });
//   $("#sevenEle").click(function(){
//     if(this.style.color == "yellow")
//     {
//         $(".intro7").css("display","none");
//         $(this).css("color", "white");
//     }
//     else
//     {
//         $(this).css("color", "yellow");
//         $(".intro7").css("display","block");
//         $("#bodydiv").addclass("intro7");
       
//     }
//     $("#contactBody").hover(function(){
//         if(this.style.color == "yellow")
//             {
//                 $(this).css("color", "black");
               
//             }
//             else
//             {
               
//                 $.widget.bridge('uitooltip', $.ui.tooltip);
    
//                 $("#contactBody").uitooltip({ 
//                     content: "<strong>Hidfdfd!</strong>", 
//                     track: true,
//                     tooltipClass: "custom-tooltip"
//                 });
//             }
    
        
        
//       });
    
    
//   });





$("#extractDataBtn").click(function(){
    var name=$("#nameInput").val();
    var Email=$("#emailInput").val();
    // $("#mover").animate({left:'200px'})
    // $("#mover").animate({left:'-80px'})
    // $("#mover").animate({left:'200px'})

    // $("#mover").toggleClass("active")
   
    

    $("#mover").toggle()
    $("#mover1").toggle()
   
//    if( $("#mover").text()=="Show")
//    {
//     $("#mover").text("Hide")
//    }
//    else
//    {
//     $("#mover").text("Show")
//    }
    var Gender=$("input[name='gender']:checked").val()
    var skills=[]
    $("input[name='skills']:checked").each(function(){
        skills.push($(this).val())
        
    });
    var Country=$("#countrySelect").val();
    var message=$("#messageInput").val();
    console.log("Name : "+name);
    console.log("Email : "+Email);
    console.log("Gender : "+Gender);
    console.log("Skills : "+skills);
    console.log("Country : "+Country);
    console.log("message : "+message);
    
    
})