import React from 'react'
import { Link } from 'react-router-dom'

const NavList = ({ isDarkMode, show }: { isDarkMode: boolean, show: boolean }) => {
    return (
        <div className={`${isDarkMode ? "text-white bg-dark-primary" : " text-black bg-white border-gray-300 border-t"}  ${!show?"hidden":"flex flex-col items-start"} pt-5 border-e  lg:hidden items-center text-xl font-medium  w-64 h-[calc(100vh-96px)] z-50  absolute ps-4`}>
            <Link to={'/blank'} className='flex items-center px-4 my-4 '><span>About Us</span> <div className='text-2xl ms-1 font-light flex items-center'><i className='bx bxs-chevron-down'></i></div></Link>
            <Link to={'/blank'} className='flex items-center px-4 my-4'><span>Learn More</span> <div className='text-2xl ms-1 font-light flex items-center'><i className='bx bxs-chevron-down'></i></div></Link>
            <Link to={'/blank'} className=' px-4 my-4'>Privacy Policy</Link>
        </div>
    )
}

export default NavList