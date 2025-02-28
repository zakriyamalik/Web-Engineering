  
// AJAX

// function loadData(){
//     const xhr=new XMLHttpRequest();
    
   
//     xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1', true);
//     xhr.setRequestHeader('X-Custom-Header', 'AJAXDemo');
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4 && xhr.status==200){
//             var data=JSON.parse(xhr.responseText);
//             document.getElementById('result').innerHTML=data.title+"<br>"+data.body;
//         }
//         else if(xhr.readyState==4 && xhr.status!=200)
//         {
//             document.getElementById('result').innerHTML="Error";
//         }
//         else
//         {
//             document.getElementById('result').innerHTML="Loading";
//         }
//     }
//     xhr.send();
// }

// function abortRequest() {
//     const xhr=new XMLHttpRequest();
    
   
//     if (xhr && xhr.readyState !== XMLHttpRequest.DONE) {
//       xhr.abort(); // Aborts the current request
//       document.getElementById('result').innerHTML = 'Request aborted.';
//     }
//   }


// JQUERY


// $(document).ready(function(){
    


$("#hideButton").click(function(){
        console.log("Hide button clicked");

        // Val attribute

        $("#hideButton").val("Hide");
        const val=$("#hideButton").val();
        console.log(val);
        $("#message").toggle();
    });
    $("#hideButton").mouseenter(function(){
        console.log("Mouse entered hide button");
        hideButton.style.backgroundColor="White";
        hideButton.style.color="Black";
    })
    $("#hideButton").mouseleave(function(){
        console.log("Mouse left hide button");
        hideButton.style.backgroundColor="Black";
        hideButton.style.color="White";
    })


// var newDiv=$('<div>',{id:"div1",text:"This is new div",backgroundColor:"red",innerHeight:"100px",outerHeight:"100px"});
// $('body').append(newDiv);
// $('#div1').addClass('highlight');


$('body').append($('<div>',{id:"div1",text:"This is new div",backgroundColor:"red",innerHeight:"100px",outerHeight:"100px"}).addClass('highlight'));

// $("#div1").attr("id","div2");
// $("#div2").removeClass("highlight");
// $("#div2").addClass("highlight1");

//$("#div1").attr("id","div2").addClass("highlight1");

const iterate=document.getElementById("iterateButton");
iterate.addEventListener("click",function(){
    $.each([1,2,3,4,5],function(index,value){
        console.log(index+" "+value)
    })
})

$("#hideButton").click(function(){
    $("#hideButton").data("Name","Zakriya");
    console.log($("#hideButton").data("Name"));
})






// Triggers

$("#hideButton").on("customEvent",function(){
    console.log("Triggered 2");
    $(this).text("Custom event triggered").show();
})

$("#hideButton").click(function(){
    console.log("Triggered 1");
    $("#hideButton").trigger("customEvent");
})