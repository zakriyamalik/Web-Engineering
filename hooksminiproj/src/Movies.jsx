import React,{useEffect, useRef,useMemo, useState} from "react";
import axios from "axios"
import MovieItem from "./MovieItem";

function Movies(){


    const [movies,setmovies]= useState([]);
    const [search,setSearch]= useState("");
    const [filteredProducts,setFilterdProducts]= useState([]);
    const [selectedProduct,setSelectedProduct]=useState(null);

    const refer=useRef();



     useEffect(()=>{
            axios.get("https://fakestoreapi.com/products")
            .then(response=>{
                console.log(response.data)
                setmovies(response.data)
                
                
            })
            .catch(error=>{
                console.log(error)
            })
        },[selectedProduct])


        useEffect(()=>{
            console.log("search   ",search)
            setFilterdProducts( movies.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase())));
            console.log("In search filtered products are \n",filteredProducts);
            console.log("Next   ")
        },[movies,search])
        useEffect(()=>{
            if(refer.current)
            {
                refer.current.focus();
                console.log(" refer.current.focus()  ", refer.current.focus())
            }
            else
            {
                console.log("No current ref");
            }
           
        },[])

        const memoizedfunction=useMemo(()=>{
            if(!selectedProduct)
                return null;
           return ( <MovieItem 
            category={selectedProduct.category} 
            description={selectedProduct.description} 
            price={selectedProduct.price}
            />);
            
        },[selectedProduct])


        function handleMovieDesc(product){
            setSelectedProduct(product);
           }
    function handleChange(e){
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    return (
        <>
        <input type="text" placeholder="Enter Movie name " ref={refer} value={search} onChange={handleChange}/>
        <ul>
            {console.log("The products are \t",filteredProducts)}
            {filteredProducts.map((product)=>(
          <li onClick={()=>handleMovieDesc(product)} key={product.id}>{product.title}</li>
            )
        )}
        </ul>
        {
        
        // selectedProduct &&
        // <MovieItem 
        // category={selectedProduct.category} 
        // description={selectedProduct.description} 
        // price={selectedProduct.price}
        // />
        {memoizedfunction}


        }
        </>

    )
}


export default Movies