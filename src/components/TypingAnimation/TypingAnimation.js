import React from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter';
import './TypingAnimation.css';

const TypingAnimation = () => {

  return (
      <div>
            <Typewriter
                words={['<Developer>', '<Problem Solver>', '<Web Designer>']}
                loop={10}
                typeSpeed={90}
                deleteSpeed={100}
                delaySpeed={1600} />
            <Cursor
              cursorStyle={'_'}/>
      </div>
  );
};

export default TypingAnimation;
