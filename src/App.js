import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import './App.css';
import './assets/fonts/fonts.css'
import Contact from './pages/Contact/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route path="/" exact element={<Home isDarkMode={isDarkMode}/>} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
