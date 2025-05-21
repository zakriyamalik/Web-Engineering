import React from 'react'
function ShowUser({name}){
     console.log("Rendering:", name);
     return(<>
      <li>
        
        <strong>
            {
                name
            }
        </strong>
    </li>
     
     
     </>)
   

}


export default React.memo( ShowUser)