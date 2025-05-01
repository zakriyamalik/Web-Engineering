import { NavLink,Link } from "react-router-dom"

function About(){
    return (
        <>

        <div>
            <p>
                This is About page 
            </p>
        </div>


        <NavLink>
           <Link to="/" >Back </Link>
        </NavLink>

        </>
    )
}


export default About