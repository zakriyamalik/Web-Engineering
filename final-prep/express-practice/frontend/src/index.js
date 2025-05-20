import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Home  from './home';
import reportWebVitals from './reportWebVitals';
import AddUser from "./AddUser"
import { NavLink } from "react-router"
import {Link} from "react-router"
import { BrowserRouter,Routes,Route } from "react-router"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
       <BrowserRouter>
        
        <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/AddUser" element={<AddUser/>}/>
           
        </Routes>
                    
        </BrowserRouter>


 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
