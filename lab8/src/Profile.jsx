import React, { useEffect, useState } from "react";

function Profile(){
    const [flage,setFlage]=useState(true);
    const [bgColor,setBg]=useState('white');

    function handlChange(){
        setFlage((prev)=>{
            let value=prev;
            setFlage(!value);
        })
        setBg((prev)=>{
           prev=prev==='white'?'blue':'white';
           setBg(prev)
        })

        
    }

    return (
        <div style={{background:bgColor}}>
            
            <h1>Name: Zakriya</h1>
            {
                flage &&  <p>Desc: Third Year student at FAST NU Lahore</p>
            }
           
            <button onClick={handlChange}>Show/Hide Desc</button>
        </div>
       
    )

}


export default Profile