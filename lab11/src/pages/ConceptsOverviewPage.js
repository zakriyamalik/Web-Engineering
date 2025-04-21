import React from 'react';
import { Link } from 'react-router-dom';
import { conceptsData } from '../data/conceptsData';

export default function ConceptsOverviewPage() {
  return (
    <div>
      <h1>Concepts Overview</h1>
      <ul>
        {conceptsData.map(concept => (
          <li key={concept.id}>
            <Link to={concept.id}>{concept.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}





// import { legacy_createStore } from 'redux';
// import { Link } from 'react-router-dom';
// import { conceptsData } from '../data/conceptsData';
// import { useSelector } from 'react-redux';
//  const CONCEPT_REDUCER="CONCEPT_REDUCER"
//  const concept_reducer=()=>({
//   type:CONCEPT_REDUCER,
// })
// const initialState=[conceptsData];
// function conceptReducer(state=initialState,action){
//   switch(action.type)
//   {
//     case "CONCEPT_REDUCER":
//       return state;
//     default:
//     return state;
//   }
  
// }


// const store=legacy_createStore(conceptReducer);




// export default function ConceptsOverviewPage() {
  
// const concepts=useSelector((state)=>state.conceptReducer.concepts);

//   return (
//     <div>
//       <h1>Concepts Overview</h1>
//       <ul>
//         {concepts.map(concept => (
//           <li key={concept.id}>
//             <Link to={concept.id}>{concept.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
