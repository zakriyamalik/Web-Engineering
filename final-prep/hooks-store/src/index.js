import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';
import FetchList from './FetchList';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //    <Counter />
  // </Provider>
   <FetchList/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
