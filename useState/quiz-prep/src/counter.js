import { useState } from "react"
import Home from "./home";
import Customer_sup from "./customer_sup";
import Login from "./login";

function Counter ({name1}){
    console.log("In Counter function")
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
    console.log("Name1 is "+name1)
    if(name1=="Home")
        {
            return <>
            {/*   
                        <p>You clicked {count} times with prop: Miss:{name1}</p>
                        <button style={{marginRight:"20px"}}onClick={()=>setCount(count+1)}>ADD</button>
                        <button style={{marginRight:"20px"}}onClick={reset}>Reset</button>
                        <button onClick={double}>Double</button> */}
                        
                       
                        <Home/>
                        {/* console.log("In login "); */}
                        </>
          
        }
        else if(name1=="Login")
        {
            return <>
{/*   
            <p>You clicked {count} times with prop: Miss:{name1}</p>
            <button style={{marginRight:"20px"}}onClick={()=>setCount(count+1)}>ADD</button>
            <button style={{marginRight:"20px"}}onClick={reset}>Reset</button>
            <button onClick={double}>Double</button> */}
            
           
            <Login/>
            {/* console.log("In login "); */}
            </>
        }
    
        else if(name1=="Customer_sup")
        {
            return <>
            {/*   
                        <p>You clicked {count} times with prop: Miss:{name1}</p>
                        <button style={{marginRight:"20px"}}onClick={()=>setCount(count+1)}>ADD</button>
                        <button style={{marginRight:"20px"}}onClick={reset}>Reset</button>
                        <button onClick={double}>Double</button> */}
                        
                       
                        <Customer_sup/>
                        {/* console.log("In login "); */}
                        </>
            
        }
        else
        {
            <>

            

            </>
        }


    
    
    
}

export default Counter