import React, { useState } from 'react'
import Navbar from "./Navbar"
import GraphSection from "./GraphSection"
import Footer from "./Footer"
import NavList from './NavList'

const Home = () => {
    const [device,setDevice] = useState<string>('desktop');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [show,setShow]  = useState(false);
    return (
        <div className={ `flex flex-col min-h-screen h-full justify-between ${isDarkMode?"bg-dark-primary dark":""} ${show?"overflow-clip":""} `}>
            <div className='w-full'>
                <div className='z-50 w-full h-auto shadow-lg fixed'>
                    <Navbar device={device} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} show={show} setShow={setShow} />
                    <NavList isDarkMode={isDarkMode} show={show} />
                </div>
                <div className='mb-64 mt-16'>
                    <GraphSection device={device} setDevice={setDevice} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>
            </div>
            <Footer isDark={isDarkMode}/>
        </div>
    )
}

export default Home