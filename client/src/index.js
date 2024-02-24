import React from 'react';
import ReactDOM from 'react-dom/client';
// import './style/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom' //navbar mai jo routes hoge vo sabko single page mai render karega isliye hume browser router use karna padega
import {AuthProvider} from './context/auth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);

