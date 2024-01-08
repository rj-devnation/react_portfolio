import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import Projects from '../../components/Projects/Projects'

/* Icon Imports */
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { SlArrowDown } from "react-icons/sl";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };

    const [showTech, setShowTech] = useState(false);
    
    const toggleShowTech = () => {
        setShowTech(!showTech)
    }
    
    return (
        <div className='container'>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            <div className='section landing'>
                <div className='section-content'>
                    <div>
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
            </div>

            <div className='section' id='about'>
                <div className='section-content about'>
                    <div>
                        <div className='heading'>
                            About
                        </div>
                        <div className='about-me'>
                            <span className='intro-name'>Hi, I'm Roland.</span>
                            <span className='intro-description'><p>I graduated <span className='graduated'>Business Information Technology</span> at Red River College Polytechnic. I intend to use my skills and knowledge in full stack development and work towards a career that will allow me to grow as a developer and bring creativity to my work.</p></span>
                        </div>

                        <div className='tech-section'>
                            <div className='view-tech' >
                                View Technical Skills
                            </div>
                            <div className='arrow-button'>
                                <SlArrowDown onClick={toggleShowTech}/>
                            </div>
                            <div className={`tech-skills ${showTech ? 'show' : ''}`}>
                                <ul>
                                    <li>React.js</li>
                                    <li>JavaScript</li>
                                    <li>HTML 5</li>
                                    <li>CSS</li>
                                    <li>Python</li>
                                    <li></li>
                                    <li>CSS</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section' id='projects'>
                <div className='section-content'>
                    <div>
                        <div className='heading'>Projects</div>
                        <div>Coming Soon...</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

  export default Home;