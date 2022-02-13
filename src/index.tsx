import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store/store';
//import "uikit/dist/css/uikit.min.css"; // дефолтные стили uikit
import "uikit/dist/js/uikit.min.js";

//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);