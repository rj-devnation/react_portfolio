import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({isDarkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
  
    if (aboutSection) {
      const aboutSectionHeight = aboutSection.clientHeight;
      const viewportHeight = window.innerHeight;
  
      window.scrollTo({
        top: aboutSection.offsetTop - (viewportHeight - aboutSectionHeight) / 2,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
  
    if (projectsSection) {
      const projectsSectionHeight = projectsSection.clientHeight;
      const viewportHeight = window.innerHeight;
  
      window.scrollTo({
        top: projectsSection.offsetTop - (viewportHeight - projectsSectionHeight) / 2,
        behavior: 'smooth',
      });
    }
  };

  // Apply dark mode styles when the theme changes
  useEffect(() => {
    
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

    return (
        <div className={`navbar ${isDarkMode ? 'dark' : 'light'}`} style={{borderRadius: showMenu ? '30px' : '60px'}}>

            <div className='mode-label'>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </div>
            
            <label className='switch'>
              <input type='checkbox' checked={isDarkMode} onChange={toggleDarkMode}/>
              <span className='slider round'></span>
            </label>

          <div className='logo'><Link to="/" onClick={scrollToTop} className='nav-link'>&lt; rjg &gt;</Link></div>
          <div className={`menu ${showMenu ? 'show' : ''}`}>
            <Link to="/" onClick={scrollToAbout} className='nav-link'>About</Link>
            <Link to="/" onClick={scrollToProjects} className='nav-link'>Projects</Link>
            <a className='nav-link' href="https://www.linkedin.com/in/rolandgeli/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className='nav-link' href="#" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
    );
  };
  
  export default Navbar;