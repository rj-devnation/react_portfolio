import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import './App.css';
import './assets/fonts/fonts.css'
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
