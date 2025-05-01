import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react"
function Concept(){
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

    return (
        <>
        <div>
            <p>
                This is Concept page 
            </p>
            <ul>        
           {
            count.map((item,index) =>
                
             (
              <li key={index}>
             <Link to={`/Concepts/contentDetailPage/${item.id}`} state={item}>
                {item.name}
              </Link> 
              
              </li>
              ))
           }  
        </ul>
           
        </div>

        


       
        <Link to="/" >Back </Link>


        </>
    )
}


export default Concept