import React from 'react'

const Footer = ({isDark}:{isDark:Boolean}) => {
    return (
        <div className={ `${isDark?"bg-dark-primary border-dark-icons text-white":"border-gray-300"} px-8 w-full h-24 border-t-2  float-end flex items-center justify-center text-lg sm:text-xl font-bold text-gray-600`}>
            <span>
                Copyright © 2025
            </span>
        </div>
    )
}

export default Footer