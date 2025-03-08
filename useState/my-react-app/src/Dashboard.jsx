import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
// import header from './Header'
// import footer from './Footer'
// import taskItems from './Taskitems.jsx'

function FavouriteColor(){
    const [color,setColor]=useState("red");
    return <h1>My favourite color is {color}!</h1>
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<FavouriteColor/>)