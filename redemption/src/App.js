import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Concept from './Concept';
import About from './About';
import Layout from './Layout';
import ContentDetailPage from './contentDetailPage';
import Examples from './Examples';
import NotFound from './NotFound'

function App() {
  return (
   
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/concept' element={<Concept/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/concepts/contentDetailPage/:conceptId' element={<ContentDetailPage/>}/>
    <Route path='/concepts/contentDetailPage/:conceptId/Examples' element={<Examples/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Route>

   </Routes>

  );
}

export default App;
