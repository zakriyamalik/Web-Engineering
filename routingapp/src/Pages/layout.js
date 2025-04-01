import { Link ,Outlet} from "react-router-dom";

function layout(){
    return(
        <div>
            <nav>
                <Link to="/home">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/Login">Login</Link>  |
                <Link to="/UserProfile/1">User Profile</Link> |
                <Link to="/Dashboard">DashBoard</Link>  |
            </nav>
            <hr />
      
      {/* Outlet will render the current route's component */}
      <Outlet />
        </div>
        

    )
}


export default layout;