import React from 'react';
import './Home.css';
import About from '../../components/About/About';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import Projects from '../../components/Projects/Projects'

/* Icon Imports */
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/linkedin'

const Home = ({isDarkMode}) => {
    return (
        <div>
            <div className='container'>
                <div className='container-content'>
                    {/* <div>
                        <img src='images\calgary_me.png' width={350} className='me'/>
                    </div> */}
                    <div className='heading firstname'>
                        Roland
                    </div>
                    <div className='heading lastname'>
                        Geli
                    </div>
                    <div className='typewriter'>
                        <TypingAnimation />
                    </div>
                    <div className='grouped-icons'>
                        <SocialIcon className='icon' bgColor={`${isDarkMode ? '#e7e7e7' : '#161616'}`} fgColor='transparent' url='www.linkedin.com/' href="https://www.linkedin.com/in/rolandgeli/" target="_blank" rel="noopener noreferrer"/>
                        <SocialIcon className='icon' bgColor={`${isDarkMode ? '#e7e7e7' : '#161616'}`} fgColor='transparent' url='www.github.com/' href="https://github.com/rj-devnation" target="_blank" rel="noopener noreferrer"/>
                        <a href='other\Roland_Geli_Developer_Resume.pdf' target='_blank' rel="noopener noreferrer">
                            <button className='resume-button icon' style={{backgroundColor: isDarkMode ? '#e7e7e7' : '#161616', color: isDarkMode ? '#161616' : '#e7e7e7'}}>Resume</button> 
                        </a>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div id='about'>
                    <About />
                </div>
            </div>

            <div className='container'>
                <div id='projects'>
                    <Projects />
                </div>
            </div>
        </div>
    );
};

  export default Home;