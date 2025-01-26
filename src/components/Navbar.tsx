import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaAngleDown } from 'react-icons/fa'
import { IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
interface props {
    device: string | null,
    isDarkMode:boolean,
    setIsDarkMode:(value:boolean)=>void,
    show:Boolean,
    setShow:(value:boolean)=>void;
}
const Navbar: React.FC<props> = ({ device ,isDarkMode,setIsDarkMode,show,setShow}) => {
    

    return (
        <nav className={ `${isDarkMode?"border-b border-dark-icons":""} flex items-center justify-between px-5 sm:px-16 h-24 w-full`}>
            <div className='flex relative '>
                <img src={logo} alt="" className='w-9 sm:w-11' />
                <span className={`${isDarkMode?"text-white":""} text-2xl xs:text-3xl sm:text-4xl font-bold`}>
                    Assessment
                </span>
                <div className='text-xs sm:text-sm absolute -right-9 sm:-right-11 bg-green-400 px-1 text-white flex  items-center'>
                    <span>
                        PRO
                    </span>
                </div>
            </div>
            <div className={`${isDarkMode?"text-white":""} hidden lg:flex items-center text-xl font-medium`}>
                <Link to={'/blank'} className='flex items-center px-4'><span>About Us</span> <div className='text-2xl ms-1 font-light flex items-center'><i className='bx bxs-chevron-down'></i></div></Link>
                <Link to={'/blank'} className='flex items-center px-4'><span>Learn More</span> <div className='text-2xl ms-1 font-light flex items-center'><i className='bx bxs-chevron-down'></i></div></Link>
                <Link to={'/blank'} className=' px-4'>Privacy Policy</Link>
            </div>

            <div className=' flex items-center'>
                <button className='z-10 cursor-pointer' onClick={()=>{
                    console.log("yes");
                    
                    let theme = localStorage.getItem("theme");
                    if(theme==='dark') {
                        setIsDarkMode(false)
                        localStorage.setItem("theme", "light");
                    }
                    else {
                        setIsDarkMode(true);
                        localStorage.setItem("theme", "dark");
                    }
                }}>
                    {!isDarkMode?<i className='bx bx-moon text-2xl sm:text-3xl' ></i>:<i className={`bx bx-sun text-2xl sm:text-3xl ${isDarkMode?"text-white":""}`}></i>}
                </button>
                <button onClick={()=> setShow(!show)} className='ms-4 sm:ms-8 lg:hidden cursor-pointer'>
                    <i className={` bx bx-menu text-3xl sm:text-4xl ${isDarkMode?"text-white":""}`}></i>
                </button>
            </div>
        </nav>

    )
}

export default Navbar