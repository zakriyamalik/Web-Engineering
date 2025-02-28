$(document).ready(function(){
    $("#search").keyup(function(){
        var val=$("#search").val();
        console.log(val)
        if(val!=""){

            $("#outputBox").show();
            $.ajax({
                url:"https://fakestoreapi.com/products",
                type:"GET",
                success:function(data){
                    var final=[]
                    console.log(data);
                    var output="";
                    output=JSON.stringify(data);
                    $.each(data,function(index,value){
                           if(value.title.includes(val))
                           {
                            var re = new RegExp('(' + val + ')', 'gi');
                            final.push("<li>"+ value.title.replace(re,'<strong>$1</strong>')+"</li>");
                           }
                        
                    })
                    console.log("Final   ");
                    console.log(final)
                    $("#outputBox").html("<ul>"+final.join("")+"</ul>").show();
                }

            })
        }
        else{
            $("#outputBox").hide();
        }
    })
    
})




const body=document.querySelector("body");
console.log(body.classList.add("bg-dark"));
