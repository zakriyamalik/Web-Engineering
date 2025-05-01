import { NavLink,Link, Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
        <NavLink>
            <Link to="Home" >Home </Link> | 
            <Link to="Concept" > Concept </Link> | 
            <Link to="About" > About</Link>
          
        </NavLink>
        <Outlet/>
        </>
    )
}

export default Layout