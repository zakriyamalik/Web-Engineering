import { useState } from "react"
import axios from 'axios';
function AddUser(){
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [response,setResponse]=useState('');
    
    const handleClick= async (e) => {
         e.preventDefault();  
          const user ={name,password};
        axios.post("http://localhost:3000/AddUser",user).then((response)=>{
            console.log(response.data);
            setResponse(response.data);
        }).catch((error)=>{
              console.log(error);
              setResponse(error.data);
        })
    }
    return (
       
        <>

        <h1>Add User</h1>
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

export default AddUser