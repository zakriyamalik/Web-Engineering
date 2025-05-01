import { useNavigate } from "react-router-dom";
import { useParams,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect} from "react"
function Examples(){

     const id=useParams();



     const count = useSelector((state) => state.store.concept_data); 
     const dispatch=useDispatch();
     console.log("Count is ",count);
     // const [text,setText]=useState([]);
     useEffect(()=>{
         fetch("ConceptsData.txt")
         .then((res)=>res.json())
         .then((data)=> 
             {
                 // const lines=data.split("},");
                 // setText(data);
                 dispatch({
                     type:"LOAD_CONCEPTS",
                     payload:data
                 })
             })
         .catch((err) => console.error("Error loading concept data:", err));
     },[dispatch])
     console.log("Data is ",count);
     console.log("ID of the object is ",id);
     //  const location=useLocation();
     //  const item=location.state;
      const concept=count.find((item,index) =>(
      item.id===id.conceptId
      
       ) )

       console.log("Concepts are ",concept.examples)

       const examples=concept.examples





    //  const location=useLocation();
    //  const item=location.state;
    //  const examples=location.state.examples;


     console.log("Examples in examples are ",examples);
     const navigate=useNavigate();
     
    return(
        <div>
            This is an example
          {  
           examples.map(example=>(
            <li key={example}>{example}</li>
           )
           
           
           )
           }
           <br></br>
           <br></br>
            {/* <Link to={`/Concepts/contentDetailPage/${id.conceptId}`} state={location}>
               Back
              </Link>  */}

                    <button onClick={() => navigate(-1)}>
                        ← Back
                        </button>
    </div>
    )
}


export default Examples