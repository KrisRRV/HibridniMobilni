import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profiles from './Profiles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<React.StrictMode><App /></React.StrictMode>} />
      <Route path="/Profiles" element={<React.StrictMode><Profiles /></React.StrictMode>} />
    </Routes>
  </Router>
);
