import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home1'

// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// let Footer = <h1>This is Footer 1</h1>


//document.getElementById('root').append(h1);
// createRoot(document.getElementById('root')).render(<Heading/>);

createRoot(document.getElementById('root')).render(<Home/>)
