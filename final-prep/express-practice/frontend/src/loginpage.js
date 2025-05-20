import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Router from 'react'
function Login(){
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [response,setResponse]=useState('');
    const navigate=useNavigate();
    
    const handleClick= async (e) => {
         e.preventDefault();  
          const user ={name,password};
        axios.post("http://localhost:3000/login",user).then((response)=>{
            console.log("In response is ",response.data);
            setResponse(response.data);
            localStorage.setItem('token',response.data);
            
            if(response.data!="Invalid credentials")
            {
                navigate('/home')
            }
           
        
        }).catch((error)=>{
              console.log(error);
              setResponse(error.data);
        })
    }
    return (
       
        <>

        <h1>Login Page</h1>
        <form>
         <label>Name: </label>
           <input type="text" value={name} onChange={e=>setName(e.target.value)}  placeholder="Enter name   "/><br></br>
        <label>Password: </label>
           <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password   "/><br></br>
           <button type="submit" onClick={handleClick}>Submit</button>
        </form>
        
            <p>{response}</p>
        
        </>
    )    
}

export default Login