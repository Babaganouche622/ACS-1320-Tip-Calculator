import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App/App';
import Calculator from './components/Calculator/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
