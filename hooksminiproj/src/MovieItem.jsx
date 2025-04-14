import React from "react";

function MovieItem({category,description,price}){
    return (
        <>
        <div>
        <h1>{category}</h1>
        <p>{description}</p>
        <p>{price}</p>
        </div>
       
        </>
    )
}


export default React.memo(MovieItem);