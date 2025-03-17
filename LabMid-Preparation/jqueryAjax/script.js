// $(document).ready(function()
// {
//     $("#Submitid").click(function(){
//        $.ajax({
           
            
//             url:"http://universities.hipolabs.com/search?name=fast",
//             method:"Get",
//             success: function(responce){
//                // responce=JSON.stringify(responce)
//                responce.forEach(element => {
//                 console.log(element.name);
//                 console.log(element.domains);

                
//                });
                
//                 $("#res").html(responce);
//             }
    
    
//         })
//     })


    
// })



$(document).ready(function () {
    $("#Submitid").click(function () {
        let university = $("#universityName").val(); // Get input value

        $.ajax({
            url:"http://universities.hipolabs.com/search?name=fast", // Replace with your actual API
            method: "POST",
            contentType: "application/json", // Specify JSON format
            data: JSON.stringify({ name: university }), // Send JSON object
            success: function (response) {
                console.log(response); // Log the response

                let output = `<h3>Response</h3><p>${response.message}</p>`;
                $("#res").html(output);
            },
            error: function () {
                $("#res").html("<p style='color:red;'>Error sending data</p>");
            }
        });
    });
});

