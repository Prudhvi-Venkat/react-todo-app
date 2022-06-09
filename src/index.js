import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from './data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={data} />
  </React.StrictMode>
);