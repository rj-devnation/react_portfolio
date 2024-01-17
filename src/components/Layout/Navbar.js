import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import smoothscroll from 'smoothscroll-polyfill'
import { Link } from 'react-router-dom'

function Navbar(){
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    smoothscroll.polyfill()

    const scrollToSection = (section) => (e) => {
        e.preventDefault()
        const targetSection = document.getElementById(section)

        if(targetSection){
            const navbarHeight = document.getElementById('navbar').offsetHeight
            const scrollOffset = targetSection.offsetTop - navbarHeight

            if(nav){
                setNav(false)
            }

            window.scrollTo({
                top: scrollOffset / 1.1 ,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className='font-bold'>
            <div id='navbar' className='z-[99] flex fixed md:hidden justify-end items-center w-full bg-white h-16 pr-4 shadow-sm'>
                <AiOutlineMenu onClick={handleNav} size={24}/>
            </div>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden'>
                        <a href='/' className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <Link to='/#about' onClick={scrollToSection('about')} className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} />
                            <span className='pl-4'>About</span>
                        </Link>
                        <Link to='/#projects' onClick={scrollToSection('projects')} className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Projects</span>
                        </Link>
                        <Link to='/#contact' onClick={scrollToSection('contact')} className='w-[75%] flex justify-center items-center rounded-md shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </Link>
                    </div>
                ) : (
                    ''
                )}
                <div id='navbar' className='md:block hidden z-10 fixed w-full'>
                    <div className='flex justify-between items-center py-2 px-12 bg-white shadow-sm md:h-[76px] lg:h-[88px]'>
                        <Link to='#main' className='px-7 cursor-default'>
                        &#91; RJ &#93;
                        </Link>
                        <div className='flex justify-between items-center w-92 h-full'>
                            <a href='/' className='px-7'>
                                Home
                            </a>
                            <Link to='/#about' onClick={scrollToSection('about')} className='px-7'>
                                About
                            </Link>
                            <Link to='/#projects' onClick={scrollToSection('projects')} className='px-7'>
                                Projects
                            </Link>
                            <Link to='/#contact' onClick={scrollToSection('contact')} className='px-7'>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Navbar;