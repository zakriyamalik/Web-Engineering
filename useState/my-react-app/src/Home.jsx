
import { useState } from "react";
import { Movie } from "./Movie";

const Home =function(){
    
    let movieList = ["XYZ","ABC","QWERTY"]
    let [movieNames, setMovieNames] = useState(movieList); // Now our movie list is a part of react component state. and it will get updated if any change detected.
    let someCondition = true;
    
    
    const handleChange =(e,index) =>{
    console.log(e.target.value);
    movieList[0]="Terminator"; // it won't work because react will unable to detect the change you make in variables hence it will not re-render the component and will not show the changes in DOM.
     
    
    // movieNames[0]= "Terminator"
    // setMovieNames(movieNames)
    // The above setMovieNames will also not work but why? We should not change the state directly.

    // we will copy the state to new variable

    // let temp = movieNames;
    // temp[0]= "Terminator";
    // setMovieNames(temp);
    // The above will not work either

    // let temp = [...movieList] // we have to do deep copy not shallow copy. Previously temp was holding reference to our state but the now allocated with new memory.
    // temp[0]="Terminator"
    // setMovieNames(temp);
    // Now it will work.


    // let temp = [...movieList] // we have to do deep copy not shallow copy. Previously temp was holding reference to our state but the now allocated with new memory.
    // temp[index]= e.target.value //Now changing the text of title with input box
    // setMovieNames(temp);
    // Now it will work.
      


    //  console.log(movieList);

    }

    
    return <div>
      {
      someCondition && <h1> {movieList.map((val,index)=>{

        return <Movie key={index}  name={val} change={(event)=> handleChange(event, index)}  /> // Event is passed from child component from input text tag while index is available in map scope
          
     })}</h1>
     
    }
    
    
     
  </div>
  }


export default Home;