import { Navigate } from 'react-router-dom'
function PrivateRoute({children}){
    const token=localStorage.getItem('token');
    if (token)
    {
        return children
    }
    else
    {
      return <Navigate to={"/"}></Navigate>
    }
}

export default PrivateRoute