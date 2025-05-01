import { NavLink,Link } from "react-router-dom"


function Home(){
    return (
        <>

        <div>
            <p>
                This is home page 
            </p>
        </div>
        <NavLink>
            <Link to="/" >Back </Link>
          
        </NavLink>

        </>
    )
}


export default Home