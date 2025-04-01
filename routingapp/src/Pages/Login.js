import React from "react";

function Login({setAuth}){
    const handleChange=()=>{
        console.log("In handle change")

    setAuth(true);

    }
    return (
        <>
        <div>
            <p>This is Login componenet</p>
            <button onClick={handleChange}>Login</button>
        </div>
        </>
    )
 
}
export default Login