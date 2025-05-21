import { useCallback, useEffect,useMemo,useState } from "react";
import ShowUser from "./User";
import  axios  from 'axios'
function FetchList(){
    const [user,setuser]=useState([]);
    const [searched,setSearched]=useState('');
    const handleChange=useCallback((e)=>
        {
            setSearched(e.target.value)
        },[]);
    const filteredUsers=useMemo(()=>{
        return user.filter(e=>
            e.name.toLowerCase().includes(searched.toLowerCase()));
        },[searched]
    );
        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users').then(
                (res)=>{
                    const list=res.data;
                    setuser(list);
                   
                     console.log(list);
                    
                }

            ).catch((err)=>{
                console.log(err.data);
            })
        },[])
    return(
        <div>
           <br/> <label>Search</label>
            <input value={searched} onChange={handleChange} placeholder="Enter your word"/>
            <ul>
            {   filteredUsers.map( u =>
                    // <li key={u.id}>
                    //     <strong>{u.name}</strong>
                    // </li>
                    
                        <ShowUser key={u.id} name={u.name}/>

            )}
            </ul>
        </div>
       
    )
}

export default FetchList