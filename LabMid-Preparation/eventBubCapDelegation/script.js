// $(document).ready(function(){
//     // let ul=$("#unorderid")
//     let li1=$("#list1")
//     let li2=$("#list2")
//     let li3=$("#list3")
//     let li4=$("#list4")

//     let ul=document.getElementById("unorderid");
//     ul.addEventListener('click',function(){
//         console.log("Ul is clicked")
//     })
//     // ul.click(function(){
//     //     console.log("Ul is clicked")
//     // },true) remove true and see the difference for event capturing , it is not supported by jquery 

//     li1.click(function(e){
//         e.stopPropagation(); // Remove it and see the difference for event bubbling on clicking list item 1 and so on
//         console.log("List1 is clicked")
//     })
//     li2.click(function(e){
//         e.stopPropagation();
//         console.log("List2 is clicked")
//     })
//     li3.click(function(e){
//         e.stopPropagation();
//         console.log("List3 is clicked")
//     })
//     li4.click(function(e){
//         e.stopPropagation();
//         console.log("List4 is clicked")
//     })
    
// })



// Event delegation comment a above code 

let ul=document.getElementById("unorderid");
ul.addEventListener('click',function(event){
    if(event.target && event.target.matches('.items'))
    console.log("Clicked : ",event.target.textContent)
})