import React from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'

const NavList = ({ isDarkMode, show }: { isDarkMode: boolean, show: boolean }) => {
    return (
        <div className={`${isDarkMode ? "text-white bg-dark-primary" : " text-black bg-white border-gray-300 border-t"}  ${!show ? "hidden" : "flex flex-col items-start"} pt-5 border-e  lg:hidden items-center text-xl font-medium  w-64 h-[calc(100vh-96px)] z-50  absolute ps-4`}>
            <button className=' px-4 my-4 relative group focus:outline-none'>
                <div className='flex items-center'><span>About Us</span> <div className='text-2xl ms-1 font-light flex items-center'><i className='bx bxs-chevron-down'></i></div></div>
                <div className='hidden group-focus:block group-hover:block'>
                    <DropDown list={['Contacts', 'Our Story']} isDark={isDarkMode} />
                </div>
            </button>
            <button className=' px-4 my-4 relative group focus:outline-none'>
                <div className='flex items-center'><span>Learn More</span> <div className='text-2xl ms-1 font-light flex items-center'><i className='bx bxs-chevron-down'></i></div></div>
                <div className=' hidden group-focus:block group-hover:block'>
                    <DropDown list={['FAQ', 'Testimonials']} isDark={isDarkMode}/>
                </div>
            </button>
            <Link to={'/blank'} className=' px-4 my-4'>Privacy Policy</Link>
        </div>
    )
}

export default NavList