// // Local Storage
// // Save data to localStorage
// localStorage.setItem("username", "JohnDoe");

// // Retrieve data from localStorage
// const user = localStorage.getItem("username");
// console.log(user); // "JohnDoe"

// // Remove item from localStorage
// localStorage.removeItem("username");

// // Clear all localStorage
// localStorage.clear();

// // Session Storage
// // Save data to sessionStorage
// sessionStorage.setItem("sessionID", "abc123");

// // Retrieve data from sessionStorage
// const session = sessionStorage.getItem("sessionID");
// console.log(session); // "abc123"

// // Remove item from sessionStorage
// sessionStorage.removeItem("sessionID");

// // Clear all sessionStorage
// sessionStorage.clear();

// // Cookies
// //Cookie (Sent with every http request)
// // Set a cookie (expires in 7 days)
// document.cookie = "username=JohnDoe; expires=" + new Date(2025, 0, 1).toUTCString();

// // Read cookies
// console.log(document.cookie);

// // Delete a cookie (set expiration to past)
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

// Function closure

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
//     };
// }

// const closureExample = outerFunction("Hello");
// closureExample("World"); // Output: Outer: Hello, Inner: World

// Event Delegation

const list=document.getElementById("myList");
const first=document.getElementById("f");
first.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("This is the first element")
})
console.log(list)
list.addEventListener("click",function(e){
    const trg=e.target;
    if(trg.nodeName=="LI"){
        console.log("This is the user defined target",trg.textContent)
    }

})

// Stop propogation is used to stop the propogation of the event to the parent element
// To see the difference of how stop propogation works as compare to event delegation you can click on the first element and the rest (there is visible difference )