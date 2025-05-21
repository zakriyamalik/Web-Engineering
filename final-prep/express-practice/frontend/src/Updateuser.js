import axios from "axios";
import { useState } from "react";

function UpdateUser(){
    const [pass,setPass]=useState('');

    const [name,setName]=useState('');

     const handlClick=(e)=>{
        const user={pass};
        e.preventDefault();
        const result=axios.patch(`http://localhost:3000/updateUser/${name}`,user).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{
            console.log(error.data);
        })




        }


    return (
       
        <>

        {<div>Update user</div>}
        {
            <form>
                  <label>
                    Name : 
                </label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter name"/>

                <label>
                    Password : 
                </label>
                <input type="text" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Enter new Password"/>

                <button onClick={handlClick}>Submit</button>

            </form>
        }

        
        </>
    )
}


export default UpdateUser