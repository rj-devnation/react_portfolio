import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

function Navbar(){
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='font-bold'>
            <div className='z-[99] flex fixed md:hidden justify-end items-center w-full bg-white h-16 pr-4'>
                <AiOutlineMenu onClick={handleNav} size={24}/>
            </div>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden'>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} />
                            <span className='pl-4'>About</span>
                        </a>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                    ''
                )}
                <div className='md:block hidden z-10 fixed w-full'>
                    <div className='flex justify-between items-center py-2 px-12 bg-white md:h-[76px] lg:h-[88px]'>
                        <a href='#main' className='px-7'>
                            RJ
                        </a>
                        <div className='flex justify-between items-center w-92 h-full'>
                            <a href='#main' className='px-7'>
                                Home
                            </a>
                            <a href='#main' className='px-7'>
                                About
                            </a>
                            <a href='#main' className='px-7'>
                                Projects
                            </a>
                            <a href='#main' className='px-7'>
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Navbar;