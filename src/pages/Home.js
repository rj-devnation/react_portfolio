import React, { useEffect, useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import { BsChevronCompactDown } from "react-icons/bs";

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
                        <h1 className='text-5xl font-semibold z-[2]'>Roland Geli</h1>
                        <div className='relative w-72 h-6 bg-red-500 bottom-5 skew-x-[24deg]'></div>
                        <p>A Full-Stack Web Developer who loves to explore his creativity through building websites.</p>
                        <div className='flex'>
                            <a href='#projects' className='bg-red-500 text-white uppercase font-semibold tracking-wider py-[13.44px] px-16 w-56 h-14 mt-5 rounded-md text-lg transition ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white drop-shadow-lg delay-150 duration-300'>
                                Projects
                            </a>
                        </div>
                    </div>
                </section>
                <section id='about'>
                    <div className='flex flex-col items-center text-center justify-center py-8 md:h-[843px] lg:h-[831px] mx-2 md:mx-0'>
                            <h1 className='text-5xl font-semibold z-[2]'>About</h1>
                            <div className='relative w-72 h-6 bg-red-500 bottom-5 skew-x-[24deg]'></div>
                            <p className='mt-5 px-4'>I graduated Business Information Technology at Red River College Polytechnic. I intend to use my skills and knowledge in full stack development and work towards a career that will allow me to grow as a developer and bring creativity to my work.
                            </p>
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
                                <BsChevronCompactDown size={30} onClick={handleSkills} className={`${rotate} transition ease-in duration-0 w-full`}/>
                            </div>
                        </div>
                </section>
                <section id='hero' className='bg-gray-100'>
                    <div className='flex flex-col items-center text-center justify-center py-11 md:h-[843px] lg:h-[831px] mx-2 md:mx-0'>
                        <h1 className='text-5xl font-semibold z-[2]'>Projects</h1>
                        <div className='relative w-72 h-6 bg-red-500 bottom-5 skew-x-[24deg]'></div>
                        <div className='flex items-center justify-center w-96 h-64 bg-gradient-to-t from-black to-zinc-700 rounded-xl'>
                            <p className='font-bold text-white text-2xl'>Coming Soon...</p>
                        </div>
                        <div className='flex'>
                            <a href='#projects' className='bg-red-500 text-white uppercase font-semibold tracking-wider py-[13.44px] px-16 w-56 h-14 mt-5 rounded-md text-lg transition ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white drop-shadow-lg delay-150 duration-300'>
                                View
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}

export default Home;