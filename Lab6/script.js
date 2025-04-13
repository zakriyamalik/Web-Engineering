// $("document").ready(function(){
//     let userData=JSON.parse(sessionStorage.getItem("userData"));

//     $("#nameinputid").val(userData.name);
//     $("input[name='option']:checked").val(userData.storage)

//     let userData1=JSON.parse(localStorage.getItem("userData"));

//     $("#nameinputid").val(userData1.name);
//     $("input[name='option']:checked").val(userData1.storage)
    
//     //  let userData2=JSON.parse(document.cookie.getItem("userData"));

//     $("#nameinputid").val(userData1.name);
//     $("input[name='option']:checked").val(userData1.storage)
    
//    displayStoredData(userData); 
//    displayStoredData(userData1);
//    displayStoredData(userData1); 

   
// })
// $("#submitbtnid").click(function(){
//    var name= $("#nameinputid").val();
//    var selection=$("input[name='option']:checked").val()
//    let userData={name:name,storage:selection}
//    console.log(name,selection);
//    if(selection=="Session Storage")
//    {
//        sessionStorage.setItem("userData",JSON.stringify(userData))
//    }
//    else if(selection=="Local Storage")
//    {
//     localStorage.setItem("userData",JSON.stringify(userData))
//    }
//    else
//    {
//     document.cookie(JSON.stringify(userData))
//    }

// })
// function displayStoredData(data) {
//     console.log("Data Name : "+ data.name);
//     console.log("Data Name : "+ data.storage);
   
//     let dataDiv = `<div id="storedDataDiv">
//                     <p><strong>Stored Name:</strong> ${data.name}</p>
//                     <p><strong>Storage Type:</strong> ${data.storage}</p>
//                 </div>`;
//     $("#clearbtn").after(dataDiv);
// }


// $("#clearbtn").click(function(){
//     console.log("Button clicked")
//     $("#storedDataDiv").remove(); 
// })


// Q2


function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const myCounter = counter(); 

myCounter(); //1
myCounter(); //2
myCounter(); //3
myCounter(); //4
    // document.getElementById("parent-list").addEventListener("click", function(event) {
    //     if (event.target.tagName === "LI") {
    //         alert("You clicked: " + event.target.textContent);
    //     }
    // });
