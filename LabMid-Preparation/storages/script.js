$(document).ready(function(){
    console.log("Session storage keys")
  //  console.log(Object.keys(sessionStorage))
    var ul=$("#listid");
    var sessionPair=[]
    var sessionkeys=[]
   sessionkeys= Object.keys(sessionStorage).filter(key=>key.startsWith("myapp_"))

   sessionkeys.forEach(element => {
    console.log(sessionStorage.getItem(element))
    var item=sessionStorage.getItem(element)
    sessionPair.push({element,item})
   });
  console.log("Data in session storage is \n")
  sessionPair.forEach(e=>{
    var li=$("<li></li>").text(e.element+" "+e.item+" in Session Storage")
    ul.append(li);
    console.log(e.element+" "+e.item)
  })
  
    var localPair=[]
    var localkeys=[]
    console.log("local storage keys")
   // console.log(Object.keys(localStorage))
   localkeys= Object.keys(localStorage).filter(key=>key.startsWith(" "))
   // console.log(Object.keys(localStorage).filter(key=>key.startsWith(" ")))
   localkeys.forEach(element => {
        console.log(localStorage.getItem(element))
        var item=localStorage.getItem(element)
        localPair.push({element,item})
       });

       console.log("Data in local storage is \n")
       localPair.forEach(e=>{
        var li=$("<li></li>").text(e.element+" "+e.item+" in Local Storage")
        ul.append(li);
        console.log(e.element+" "+e.item)
      })

    var cookiePair=[]
    console.log("Cookie keys")
    console.log(document.cookie)
    cookiePair=document.cookie.split("; ")
    console.log("Data in Cookies is \n")
       cookiePair.forEach(e=>{
        let [key,value]=e.split("=")
        if(e=="")
        {

        }
        else
        {
            var li=$("<li></li>").text(key+" "+ value+" in Cookie")
            ul.append(li);
        }
        
        console.log(e)
       })




    $("#resbtnid").click(function(){
        console.log("resbtnclicked")
        $("#rescontainerid").toggle(function(){
            console.log("rescontainerid")
            if($("#rescontainerid").is(":visible")){
                $("#resbtnid").text("Hide")
            }
            else
            {
                $("#resbtnid").text("Show")
            }
       
        })

    })

    $("#clearallbtnid").click(function(){
        sessionStorage.clear();
        localStorage.clear();
       document.cookie.split("; ").forEach(c=>{
        let name=c.split("=")[0];
        document.cookie=name+"=; path=/; expires=Thu, 01 Jan 2000 00:00:00 UTC;"
       })
       ul.text("");
    })
   
    $("#submitbtnid").click(function(e){
        e.preventDefault();
       let name1= $("#nameinputid").val();
       let review1=$("#reviewinputid").val();
       name1=" "+name1;
      // alert(name + ' ' + review);
       let value=$('input[class="options"]:checked').val()
       console.log(name1,review1,value)
       if(value=="Session Storage"){
        sessionStorage.setItem(name1,review1)
       }
       else if(value=="Local Storage"){
        localStorage.setItem(name1,review1);
       }
       else
       {
    //    Cookies.setItem(name1,review1)
    //    document.Cookies.set(name1,review1)
       document.cookie=name1+"="+review1+"; path=/; expires= Tu; 18 March 2025"
        //  document.cookie(name1,review1)
       }

      
    })
})