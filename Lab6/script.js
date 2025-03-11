$("document").ready(function(){
    let userData=JSON.parse(sessionStorage.getItem("userData"));

    $("#nameinputid").val(userData.name);
    $("input[name='option']:checked").val(userData.storage)

    let userData1=JSON.parse(localStorage.getItem("userData"));

    $("#nameinputid").val(userData1.name);
    $("input[name='option']:checked").val(userData1.storage)
    
    let userData2=JSON.parse(document.cookie.getItem("userData"));

    $("#nameinputid").val(userData2.name);
    $("input[name='option']:checked").val(userData2.storage)
    
   displayStoredData(userData); 
   displayStoredData(userData1);
   displayStoredData(userData2); 

   
})
$("#submitbtnid").click(function(){
   var name= $("#nameinputid").val();
   var selection=$("input[name='option']:checked").val()
   let userData={name:name,storage:selection}
   console.log(name,selection);
   if(selection=="Session Storage")
   {
       sessionStorage.setItem("userData",JSON.stringify(userData))
   }
   else if(selection=="Local Storage")
   {
    localStorage.setItem("userData",JSON.stringify(userData))
   }
   else
   {
    document.cookie(JSON.stringify(userData))
   }

})
function displayStoredData(data) {
    $("#storedDataDiv").remove(); // Remove previous div if exists
    let dataDiv = `<div id="storedDataDiv">
                    <p><strong>Stored Name:</strong> ${data.name}</p>
                    <p><strong>Storage Type:</strong> ${data.storage}</p>
                </div>`;
    $("#submitbtnid").after(dataDiv); // Append after submit button
}