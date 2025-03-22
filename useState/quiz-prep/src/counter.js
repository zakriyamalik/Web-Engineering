import { useState } from "react"

function Counter ({name}){
    const [count,setCount]=useState(0);
    function double() {
        if(count==0)
        {
            setCount(1)
        }
        else
        {

            setCount(count*2);
        }
    }
    
    const reset=()=>{
        
        setCount(0);
        
        
    }
    return <>
   
    <p>You clicked {count} times with prop: {name}</p>
    <button style={{marginRight:"20px"}}onClick={()=>setCount(count+1)}>ADD</button>
    <button style={{marginRight:"20px"}}onClick={reset}>Reset</button>
    <button onClick={double}>Double</button>
   

    
    </>


    
    
    
}

export default Counter