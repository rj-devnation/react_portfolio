import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import Projects from '../../components/Projects/Projects'

/* Icon Imports */
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className='container'>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            <div className='section'>
                <div className='section-content'>
                    {/* <div>
                        <img src='images\calgary_me.png' width={350} className='me'/>
                    </div> */}
                    <div className='heading'>
                        Roland Geli
                    </div>
                    <div className='typewriter'>
                        <TypingAnimation />
                    </div>

                    <div className='grouped-icons'>
                        <div className='icon github-icon'>
                            <a href="https://github.com/rj-devnation" target="_blank" rel="noopener noreferrer" style={{color: `${isDarkMode ? '#e7e7e7' : '#161616'}`}}>
                                <FaGithubSquare className='github-icon icon'/>
                            </a>
                        </div>
                        <div className='icon linkedin-icon'>
                            <a href="https://www.linkedin.com/in/rolandgeli/" target="_blank" rel="noopener noreferrer" style={{color: `${isDarkMode ? '#e7e7e7' : '#161616'}`}}>
                                <FaLinkedin className='linkedin-icon icon'/>
                            </a>
                        </div>
                        <div className='icon'>
                            <a href='other\Roland_Geli_Developer_Resume.pdf' target='_blank' rel="noopener noreferrer">
                                <button className='resume-button' style={{backgroundColor: isDarkMode ? '#e7e7e7' : '#161616', color: isDarkMode ? '#161616' : '#e7e7e7'}}>Resume</button> 
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='section'>
                <div id='about'>
                    <About />
                </div>
            </div>

            <div className='section'>
                <div id='projects'>
                    <Projects />
                </div>
            </div>
        </div>
    );
};

  export default Home;