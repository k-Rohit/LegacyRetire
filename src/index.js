import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Resource from './components/Resource/Resource';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    </Router>
);