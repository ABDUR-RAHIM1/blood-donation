import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { MyState } from './State/State.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyState>
  ,
)
