import React from 'react';
import './Home.css';
import About from '../../components/About/About';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import Projects from '../../components/Projects/Projects'

const Home = () => {
    return (
        <div>
            <div className='name-container'>
                <TypingAnimation />
            </div>

            <About />

            <div className='project-container'>
                <div id='projects'>
                    <Projects />
                </div>
            </div>
        </div>
    );
};

  export default Home;