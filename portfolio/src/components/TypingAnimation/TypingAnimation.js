import React, { useState, useEffect } from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter';
import './TypingAnimation.css';

const TypingAnimation = () => {

  return (
    <div >
        <div className='center'>
            <div className='name'>
                <h2>Roland Geli</h2>
                <Typewriter
                    words={['<Developer>', '<Problem Solver>', '<Web Designer>']}
                    loop={10}
                    typeSpeed={90}
                    deleteSpeed={100}
                    delaySpeed={1600}
                />
                <Cursor
                  cursorStyle={'_'}/>
            </div>
        </div>
    </div>
  );
};

export default TypingAnimation;