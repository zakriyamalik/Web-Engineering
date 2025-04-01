import React, { useState } from "react";
import { BrowserRouter, Link, Routes,Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"

import Home from "../Pages/home";
import About from "../Pages/about";
import Login from "../Pages/Login";
import Layout from "../Pages/layout";
import UserProfile from "../Pages/userProfile";
import DashBoard from "../Pages/dashboard"


function Navbar(){
    const [auth,setAuth]=useState(false);
    return(
        <div>
            {/* <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Login">Login</Link> */}

            <BrowserRouter>
            
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="About" element={<About /> }/>
                <Route path="Home" element={<Home />}/>
                <Route path="Login" element={<Login setAuth={setAuth} />}/>
                <Route path="UserProfile/:data" element={<UserProfile/>}/>

                <Route

                path="/dashboard"

                element={
                    <PrivateRoute auth={auth}>
                        <DashBoard/>

                    </PrivateRoute>
                }

                />

               
                  </Route>

            </Routes>

            </BrowserRouter>
            {/* <p>Para</p>
            <Link to="Home">Home</Link> | 
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/contact">Contact</Link> */}
            
           
        </div>

    //      <nav>
    //     <Link to="/">Home</Link> | 
    //     <Link to="/about">About</Link> | 
    //     <Link to="/contact">Contact</Link>
    //   </nav>
    )
}

export default Navbar