// import React from 'react';
// import { Link } from 'react-router-dom';
// import { conceptsData } from '../data/conceptsData';

// export default function ConceptsOverviewPage() {
//   return (
//     <div>
//       <h1>Concepts Overview</h1>
//       <ul>
//         {conceptsData.map(concept => (
//           <li key={concept.id}>
//             <Link to={concept.id}>{concept.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { conceptsData } from '../data/conceptsData';
import { useSelector } from 'react-redux';
const [conceptState,setConceptState]=useState(conceptsData);
 const CONCEPT_REDUCER="CONCEPT_REDUCER"
 const initialState=[conceptState];
 const concept_reducer=()=>({
  type:CONCEPT_REDUCER,
})
function conceptReducer(state=initialState,action){
  return state;
}


const store=createStore(conceptReducer);
const concepts=[]
const conceptData=()=>{
  concepts=useSelector((state)=>state.conceptReducer.concepts)
}




export default function ConceptsOverviewPage() {
  return (
    <div>
      <h1>Concepts Overview</h1>
      <ul>
        {concepts.map(concept => (
          <li key={concept.id}>
            <Link to={concept.id}>{concept.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
