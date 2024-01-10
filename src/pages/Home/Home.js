import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import ContactFormAPI from '../../components/ContactForm/ContactFormAPI';

/* Icon Imports */
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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

    const backToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }
    
    return (
        <div >
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
                                        <button className='resume-button'>Resume</button> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section' id='about'>
                    <div className='section-content'>
                        <div className='about'>
                            <div className='heading'>
                                About
                            </div>
                            <div className='about-me'>
                                <span className='intro-name'>Hi, I'm <span className='accent name'>Roland</span>.</span>
                                <div className='intro-description-container'>
                                    <span className='intro-description'><p>I graduated <span className='accent'>Business Information Technology</span> at <span className='accent'>Red River College Polytechnic</span>. I intend to use my skills and knowledge in full stack development and work towards a career that will allow me to grow as a developer and bring creativity to my work.</p></span>
                                </div>
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
                            <div className='projects'>Coming Soon...</div>
                        </div>
                    </div>
                </div>

                <div className='section contact' id='contact'>
                    <div className='section-content'>
                        <h2 className='connect heading'><p><span className='accent'>Connect</span> with me</p></h2>
                            <ContactFormAPI isDarkMode={isDarkMode}/>
                    </div>
                </div>

                <div className='footer'>
                    <div className='footer-button' onClick={backToTop}>
                        <div className='arrow-button'>
                            <SlArrowUp />
                        </div>
                        <button style={{cursor: 'pointer'}}>Scroll to Top</button>
                    </div>
                </div>
            </div>
            <div className='construction'>
                <div>
                    Website under construction
                </div>
            </div>
        </div>
    );
};

  export default Home;