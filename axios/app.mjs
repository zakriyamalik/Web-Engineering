import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/posts/1').then(function(response){
    console.log(response.data);
}).catch(function(res){
    console.error(res);
})


axios.post('https://jsonplaceholder.typicode.com/posts',{
    title:'X',
    body:'This is post for X',
    userId:1

}).then(response=>{
    console.log("The response is ",response.data)
}).catch(error=>console.log(error))