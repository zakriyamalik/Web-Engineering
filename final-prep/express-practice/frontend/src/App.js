import  Home  from './home';
import AddUser from "./AddUser";
import Login from './loginpage';
import DeleteUser from './DeleteUser';
import UpdateUser from './Updateuser';
import PrivateRoute from './PrivateRoute';
import {Routes,Route } from "react-router"
import './App.css';

function App() {
  return (

     <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/DeleteUser" element={<DeleteUser/>}></Route>
                <Route path="/AddUser" element={<AddUser/>}/>
                 <Route path="/home" 
                  element={
                  <PrivateRoute>
                 <Home/>
                 </PrivateRoute>
                  }
                 />
                 <Route path='/updateUser' element={<UpdateUser/>}>

                 </Route>
            </Routes>
             
  );
}

export default App;
