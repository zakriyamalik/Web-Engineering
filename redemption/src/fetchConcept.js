import { useEffect, useState } from "react"
function fetchConcept(){
    const [text,setText]=useState([]);
    useEffect(()=>{
        fetch("ConceptsData.txt")
        .then((res)=>res.json())
        .then((data)=> 
            {
                setText(data);
            })
        .catch((err) => console.error("Error loading concept data:", err));
    },[])
    console.log("Data is ",text);
    return 
    
    
}


export default fetchConcept