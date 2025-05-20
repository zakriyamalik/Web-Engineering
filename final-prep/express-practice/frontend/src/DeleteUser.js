import { useState } from "react"
import axios, { Axios } from "axios";
function DeleteUser(){
    const [name,setName]=useState('');
    const [response,setResponse]=useState('');
    const handleClick=(e)=>{
        e.preventDefault();
        const user={name};
        axios.delete("http://localhost:3000/DeleteUser",{data : user}).then
        ((response)=>setResponse(response.data))
        .catch((err)=>setResponse(err.data));
    }
    return (
        <>
         <h1>Delete User</h1>
        <form>
         <label>Name: </label>
           <input type="text" value={name} onChange={e=>setName(e.target.value)}  placeholder="Enter name   "/><br></br>
           <button type="submit" onClick={handleClick}>Submit</button>
        </form>
        
            <p>{response}</p>
        </>
    )
}

export default DeleteUser;