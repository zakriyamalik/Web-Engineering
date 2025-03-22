import { useState,useMemo } from "react"
import Customer_sup from "./customer_sup";
import Login from "./login";

function Counter ({name1}){
    console.log("In Counter function")
    const [count,setCount]=useState(0);
    function double() {
        if(count===0)
        {
            setCount(1)
        }
        else
        {

            setCount(count*2);
        }
    }
    const [trigger,setTrigger]=useState(false);
    const complex=useMemo(()=>{
        console.log("Complex calculation....");
        return <div>Giga Chad</div>

    },[trigger])
    
    const ComplexComputation=()=>{
        setTrigger(trigger=>!trigger)
    }
   
    
    const reset=()=>{
        
        setCount(0);
        
        
    }
    console.log("Name1 is "+name1)
    if(name1==="Home")
        {
            return <>
              
                        <p>You clicked {count} times with prop: Miss:{name1}</p>
                        <button style={{marginRight:"20px"}}onClick={()=>setCount(count+1)}>ADD</button>
                        <button style={{marginRight:"20px"}}onClick={reset}>Reset</button>
                        <button style={{marginRight:"20px"}}onClick={double}>Double</button>
                        <button onClick={ComplexComputation}>Complex Calculations</button>
                        <div>Complex Computation res:{complex}</div>
                       
                        {/* <Home/> */}
                        </>
          
        }
        else if(name1==="Login")
        {
            return <>
{/*   
            <p>You clicked {count} times with prop: Miss:{name1}</p>
            <button style={{marginRight:"20px"}}onClick={()=>setCount(count+1)}>ADD</button>
            <button style={{marginRight:"20px"}}onClick={reset}>Reset</button>
            <button onClick={double}>Double</button> */}
            
           
            <Login/>
            </>
        }
    
        else if(name1==="Customer_sup")
        {
            return <>
            {/*   
                        <p>You clicked {count} times with prop: Miss:{name1}</p>
                        <button style={{marginRight:"20px"}}onClick={()=>setCount(count+1)}>ADD</button>
                        <button style={{marginRight:"20px"}}onClick={reset}>Reset</button>
                        <button onClick={double}>Double</button> */}
                        
                       
                        <Customer_sup/>
                        </>
            
        }
        else
        {
            <>



            </>
        }


    
    
    
}

export default Counter