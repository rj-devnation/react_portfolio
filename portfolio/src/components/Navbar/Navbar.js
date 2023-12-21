import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className='nav-items'>
          <li className='nav-name'>
            Roland.dev
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://github.com/rj-devnation" target="_blank" rel="noopener noreferrer">
                Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rolandgeli/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;