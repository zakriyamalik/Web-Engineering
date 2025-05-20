const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const jwt=require("jsonwebtoken");
const User=require('./model');
const app=express()
const port=3000;


app.use(cors());
app.use(express.json());

mongoose.connect
('mongodb://localhost:27017/final-prep').then
(()=>{

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.post('/login', async(req,res)=>{
    const {name,password}=req.body;
    const user= await User.findOne({name});
    if(user && user.password==password){
        const token=jwt.sign({id:user.name},"toooooooken");
        res.send(token);
    }
    else
    {
        res.send("Invalid credentials");
    }
})
app.post('/addUser', async (req,res)=>{
    console.log("received in body  ",req.body);
    const {name,password}=req.body;
    const user=new User({
        name:name,
        password:password
    })

    await user.save();
     console.log("received in body name and password  ",name," ",password,"\n");
   
    res.send(`Received post req from user ${name}`);
})

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

app.put('/user',(req,res)=>{
    res.send("Got is put requst from the user");
})



app.delete('/DeleteUser',async (req,res)=>{
    const {name}=req.body;

    
    const result=await User.deleteOne({name:name})
    if(result.deletedCount==0)
    {
    res.send("User not found");
    }
    else
    {

    res.send("User deleted");
    }

})



console.log("Connected with database")
}).catch
((error)=>console.log("Error creating database",error));






app.listen(port,()=>{
    console.log(`Listening on Port ${port}`)
})