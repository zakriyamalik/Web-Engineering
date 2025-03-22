import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Counter from './counter';
import { useState } from 'react';


function App() {
  const [name,setName]=useState();
  function handleChange(event){
    setName(event.target.value)
    console.log("In handle change"+name)
  }

  return (
    
    <div className="App">
      
    {/* <Header/> */}
    <input
    type='text'
    onChange={handleChange}
    placeholder='Enter Page name'
    ></input>

    <Counter name1={name}/>
    </div>
  );
}

export default App;
