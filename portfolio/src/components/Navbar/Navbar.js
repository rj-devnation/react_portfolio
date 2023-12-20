import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav>
        <ul>
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