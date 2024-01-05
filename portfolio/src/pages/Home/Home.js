import React from 'react';
import './Home.css';
import About from '../../components/About/About';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import Projects from '../../components/Projects/Projects'

const Home = () => {
    return (
        <div>
            <div id='home'>
                <div className='name-container'>
                    <TypingAnimation />
                </div>
            </div>
            <div className='about-container'>
                <div id='about'>
                    <About />
                </div>
            </div>
            <div className='project-container'>
                <div id='projects'>
                    <Projects />
                </div>
            </div>
        </div>
    );
};

  export default Home;