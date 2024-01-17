import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import './App.css';
import './assets/fonts/fonts.css'
// import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;
