import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

<Provider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
</Provider>