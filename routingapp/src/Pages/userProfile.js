import React from "react";
import { useParams } from "react-router-dom";

function UserProfile(){
    const {data}=useParams();
    return (
        <div>
           User Name is {data}
        </div>
    )
}


export default UserProfile