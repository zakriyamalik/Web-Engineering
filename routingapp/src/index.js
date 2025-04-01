import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './component/Navbar'
import Home from './Pages/home';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Home />
  // <Login />
  // <BrowserRouter>
  // <Routes>
  // <Route index element={<Navbar/>}/>
  // </Routes>

  // </BrowserRouter>
  <Navbar/>


  // <About/>

  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
