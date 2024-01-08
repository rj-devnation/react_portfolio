import React, { useState } from 'react';
import '../../pages/Home/Home.css'
import { SlArrowDown } from "react-icons/sl";



const About = () => {
    const [showTech, setShowTech] = useState(false);
    
    const toggleShowTech = () => {
        setShowTech(!showTech)
    }

    return (
        <div className='section'>
            <div className='section-content about'>
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
    )
};

export default About;