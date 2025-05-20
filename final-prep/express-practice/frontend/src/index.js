import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Home  from './home';
import Login from './loginpage';
import reportWebVitals from './reportWebVitals';
import AddUser from "./AddUser";
import DeleteUser from './DeleteUser';
import App from './App'
import { BrowserRouter,Routes,Route } from "react-router"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    //    <BrowserRouter>
        
    //     <Routes>
    //        <Route path="/" element={<Home/>}/>
    //         <Route path="/AddUser" element={<AddUser/>}/>
    //         <Route path="/DeleteUser" element={<DeleteUser/>}></Route>
           
    //     </Routes>
                    
    //     </BrowserRouter>
    <BrowserRouter>

    <App/>
    </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
