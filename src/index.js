import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer} from 'react-toastify';


import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
<ToastContainer />
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)