import { useState } from "react"
import { increment } from "./addReducer";
import { useDispatch, useSelector } from "react-redux";

function Counter(){
    const [add,setAdd]=useState(0);
    const addition=useSelector(state=>state.Add.count);
    const dispatch=useDispatch();
    const handleClick=()=>{
        
        dispatch(increment({add}));
        setAdd(addition);
        console.log(add);

    }
    return (
        <>

        <h1>Counter Page</h1>

        <button onClick={handleClick}>Add</button>


        </>
    )
}

export default Counter