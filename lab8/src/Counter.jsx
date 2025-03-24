import React from "react";
import { useState,useRef } from "react";

function Counter(){
    const [count,setCount]=useState(0);
    const ref1=useRef()
    const handleInc=(e)=>{
        console.log(ref1.current.value)
        setCount((prev)=>{
           let tem=Number(prev)
           tem+=Number(ref1.current.value);
           console.log("temp "+tem)
           return tem;
        })
    }

    const handleDec=(e)=>{

        console.log(ref1.current.value)
        setCount((prev)=>{
            let temp=prev
            if(prev-ref1.current.value<0)
            {
                console.log("Prev if "+prev)
                return prev;
            }
            else
            {
                temp-=ref1.current.value;
                console.log("Prev else "+temp)
                return temp;

            }

        })
    }
       
    
    return (
    <div>
        <input type="text" ref={ref1} placeholder={count}/><br></br>
        <button style={{marginRight:'10px',marginTop:"8px", backgroundColor:"black", color:"white"}} onClick={e=>handleInc(e)}>Increment</button>
        <button style={{backgroundColor:"black",marginTop:"8px", color:"white"}} onClick={handleDec}>Decrement</button>
        <br></br>
        Result
        <br></br>
        <input type="text" value={count}/><br></br>
    </div>
    )
}

export default Counter