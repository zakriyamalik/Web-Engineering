import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect} from "react"
import { Link } from "react-router-dom";
function ContentDetailPage(){

    const  id =useParams();



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



     if(concept.name!=null && concept.description!=null){
        return (
        
            <div>
              <ul>        
               {
               <li>
                {concept.name}
               </li>          
               }  
               {
                 <li>
                 {concept.description}
                </li>
               }
            </ul>
    
    
            <Link to={`/Concepts/contentDetailPage/${concept.id}/Examples`} state={concept}>
                    Examples
                  </Link> 
            </div>
            
        )
     }
     else
     {
        return (
        
            <div>
              <ul>        
               {
               <li>
                {concept.state.name}
               </li>          
               }  
               {
                 <li>
                 {concept.state.description}
                </li>
               }
            </ul>
    
    
            <Link to={`/Concepts/contentDetailPage/${concept.state.id}/Examples`} state={concept.state}>
                    Examples
                  </Link> 
            </div>
            
        )
     }

   
}


export default ContentDetailPage