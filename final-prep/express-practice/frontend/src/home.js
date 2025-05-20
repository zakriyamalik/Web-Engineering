import { NavLink } from "react-router"
import {Link} from "react-router"
function home(){
    return (
        <>
        {
            <h1>Home</h1>
        }
            <NavLink>
             <Link to='/AddUser'>Add User</Link> |   
             <Link to='/DeleteUser'> DeleteUser</Link>
             </NavLink>
           
            

        </>
    )
}


export default home