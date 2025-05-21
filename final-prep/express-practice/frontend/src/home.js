import { useState } from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router"
import {Link} from "react-router"
function Home(){
    const user=useSelector((state)=>state.user);
    return (
        <>
        {
            <h1>WellCome Home</h1>
            
        }
        <p>{user.name}</p>
            <NavLink>
             <Link to='/AddUser'>Add User</Link> |   
             <Link to='/DeleteUser'> DeleteUser</Link>
             <Link to='/updateUser'>UpdateUser</Link>
             </NavLink>
           
            

        </>
    )
}


export default Home