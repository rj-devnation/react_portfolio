import React, { useEffect, useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import { BsChevronCompactDown } from "react-icons/bs";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const skills = [
    {
        skill: 'React'
    },
    {
        skill: 'Python'
    },
    {
        skill: 'C#'
    },
    {
        skill: 'CSS3'
    },
    {
        skill: 'JavaScript'
    },
    {
        skill: 'Ruby'
    },
    {
        skill: 'Ruby on Rails'
    },
    {
        skill: 'Django'
    },
    {
        skill: 'GIT'
    },
    {
        skill: 'GitHub'
    },
    {
        skill: 'MySQL'
    },
    {
        skill: 'PostgresSQL'
    },
    {
        skill: 'TailwindCSS'
    },
    {
        skill: 'Bootstrap'
    },
]

function Home(){
    const [rotate, setRotate] = useState('')
    const [skillClass, setSkillClass] = useState('')
    const [hideSkills, setHideSkills] = useState('max-h-0 opacity-0 overflow-hidden hide')

    const handleSkills = () => {
        if(hideSkills.includes('hide')){
            setHideSkills('opacity-100 max-h-28 overflow-y-hidden transition-[max-height] duration-300 ease-in delay-150')
            setRotate('rotate-[-180deg]')
            console.log('skills shown')
        } else {
            setHideSkills('max-h-0 opacity-0 overflow-hidden hide')
            setRotate('')
            console.log('skills hidden')
        }
    };

    return(
        <>
            <Navbar />
            <div className='w-full h-screen pt-16 md:pt-[76px] lg:pt-[88px]'>
                <section id='hero' className='bg-gray-100'>
                    <div className='flex flex-col items-center text-center justify-center py-11 md:h-[843px] lg:h-[831px] mx-2 md:mx-0'>
                        <h1 className='text-5xl font-semibold z-[2] md:text-[64px]'>Roland Geli</h1>
                        <div className='relative w-72 h-6 bg-red-500 bottom-5 skew-x-[24deg] md:w-96 md:h-8 md:bottom-7'></div>
                        <p className='md:text-2xl'>A Full-Stack Web Developer who loves to explore his creativity through building websites.</p>
                        <div className='flex'>
                            <a href='#projects' className='bg-red-500 text-white uppercase font-semibold tracking-wider py-[13.44px] px-16 w-56 h-14 mt-5 rounded-md text-lg transition ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white drop-shadow-lg delay-150 duration-300'>
                                Projects
                            </a>
                        </div>
                    </div>
                </section>
                <section id='about'>
                    <div className='flex flex-col items-center text-center justify-center p-2 md:p-8 h-full mx-2 md:mx-0'>
                            <h1 className='text-5xl font-semibold z-[2] md:text-[64px]'>About</h1>
                            <div className='relative w-72 h-6 bg-red-500 bottom-5 skew-x-[24deg] md:w-96 md:h-8 md:bottom-7'></div>
                            <p className='md:text-[22px] md:mx-52 md:max-w-[800px] mb-10'>This is the section where you will get to know me, my current skills in terms of programming languages and technology that I use</p>
                            <div className='flex flex-col justify-between lg:flex-row min-w-[831px]: gap-8'>
                                <div className='flex flex-col w-full md:max-w-[410px] lg:max-w-[563px]'>
                                    <h2 className='mb-5 px-4 text-xl md:text-2xl font-bold text-left'>Get to know me!</h2>
                                    <div className='h-full tracking-wide'>
                                        <p className='px-4 md:text-xl text-left mb-3 z-[2]'>
                                            I graduated <span className='font-bold'>Business Information Technology at Red River College Polytechnic</span>. I intend to use my skills and knowledge in <span className='font-bold'>full stack development</span> and work towards a career that will allow me to grow as a developer and bring creativity to my work.
                                        </p>
                                        <p className='px-4 md:text-xl text-left'>
                                            I am looking for <span className='font-bold'>job</span> opportunities that allow me to learn and grow as a developer while being able to contribute to the team. If you have any opportunities that match my skillset, don't hesitate to <span className='font-bold'>contact me</span>.
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex flex-col hidden md:max-w-[440px] lg:max-w-[447px]'>
                                    <h2 className='mb-5 px-4 md:text-2xl font-bold text-left'>My Skills</h2>
                                    <ul className='flex flex-wrap gap-2 items-center px-4'>
                                        {skills.map(({skill}) => (
                                            <li className='bg-red-200 px-6 py-2 rounded-md shadow-md font-semibold text-lg'>{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                            <div className='relative top-6 flex w-full text-sm justify-center items-center flex-col md:hidden pb-3'>
                                <p>View Technical Skills</p>
                                <ul className={`flex flex-wrap gap-2 items-center justify-center ${hideSkills} w-full transition-[max-height] ease-out duration-300 px-4`}>
                                    <li className='bg-red-200 px-3 rounded-md'>React</li>
                                    <li className='bg-red-200 px-3 rounded-md'>Python</li>
                                    <li className='bg-red-200 px-3 rounded-md'>C#</li>
                                    <li className='bg-red-200 px-3 rounded-md'>HTML5</li>
                                    <li className='bg-red-200 px-3 rounded-md'>CSS</li>
                                    <li className='bg-red-200 px-3 rounded-md'>JavaScript</li>
                                    <li className='bg-red-200 px-3 rounded-md'>MongoDB</li>
                                    <li className='bg-red-200 px-3 rounded-md'>MySQL</li>
                                </ul>
                                <BsChevronCompactDown size={30} onClick={handleSkills} className={`${rotate} transition ease-in delay-[325ms] duration-0 w-full`}/>
                            </div>
                        </div>
                </section>
                <section id='projects' className='bg-gray-100'>
                    <div className='flex flex-col items-center text-center justify-center py-11 h-full mx-2 md:px-8'>
                        <h1 className='text-5xl font-semibold z-[2] md:text-[64px]'>Projects</h1>
                        <div className='relative w-72 h-6 bg-red-500 bottom-5 skew-x-[24deg] md:w-96 md:h-8 md:bottom-7'></div>
                        <div className='flex items-center justify-center w-[300px] md:w-[671px] md:mx-10 h-64 md:h-96 lg:w-[64rem] lg:h-[30rem] bg-gradient-to-t from-black to-zinc-700 rounded-xl drop-shadow-md'>
                            <p className='font-bold text-white text-2xl'>Coming Soon...</p>
                        </div>
                        <div className='flex'>
                            <a href='#projects' className='bg-red-500 text-white uppercase font-semibold tracking-wider py-[13.44px] px-16 w-56 h-14 mt-5 rounded-md text-lg transition ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white drop-shadow-lg delay-150 duration-300'>
                                View
                            </a>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className='flex flex-col p-3 px-5 bg-black w-full h-72 text-white'>
                        <div className='pt-4'>
                            <p className='text-lg md:text-2xl font-semibold uppercase'>Roland Geli</p>
                            <p className='text-sm md:text-lg mt-4'>A Full-Stack Web Developer who loves to explore his creativity through building websites.</p>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <p className='text-lg md:text-2xl font-semibold uppercase'>Socials</p>
                            <div className='flex gap-2 mt-4 text-xl md:text-2xl lg:text-[30px]'>
                                <Link to='https://www.linkedin.com/in/rolandgeli/' target='_blank' rel="noreferrer noopener">
                                    <FaLinkedin />
                                </Link>
                                <Link to='https://github.com/rj-devnation' target='_blank' rel="noreferrer noopener">
                                    <FaSquareGithub />
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-end mt w-full mt-10 mb-3'>
                            <div className='bg-gray-300 h-[1px] w-full'></div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )

}

export default Home;