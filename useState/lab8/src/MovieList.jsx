import React, { use, useRef, useState } from "react";

function MovieList(){
    const [movie,setMovie]=useState(['One','Two','Third'])
    const use_ref=useRef();
    console.log("In movieList");
   const handleChange=(event,index)=>{
    console.log("Value changed "+event.target.value+" Index is "+index);
   setMovie((prev)=>
        {
            const updatedMovies=[...prev]
            updatedMovies[index]=event.target.value;
            return updatedMovies;
        }
    )
   }
   const addMovie=(event)=>{
    console.log(event.target.value)
    console.log(use_ref.current.value)
    setMovie((prev)=>
        {
            const updatedMovies=[...prev]
          updatedMovies.push(use_ref.current.value)
            return updatedMovies;
        }
    )
   }

   const deleteMovie=(index)=>{
    console.log(index)
    setMovie((prev)=>
        {
            const updatedMovies=[...prev]
          updatedMovies.pop(index)
            return updatedMovies;
        }
    )

   }
    return (
        <div>
            <input type="text" ref={use_ref} placeholder="Enter movie " />
            <button onClick={e=>addMovie(e)}>Add Movie</button>
  {  movie.map((name,index)=>(
    <div key={index}>
    {console.log("In movieList Map")}
    <p>{name}</p>
        <input placeholder="Enter movie Name" onChange={(e)=>handleChange(e,index)}></input>
       <br /><button onClick={(e)=>deleteMovie(index)}>Delete</button>
        </div>
  )

    
   )}

        </div>
   
);
}

export default MovieList