import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({list,isDark}:{list:string[],isDark:Boolean}) => {
    return (
        <div className={`${isDark?"bg-dark-primary border-dark-icons text-white":"border-gray-400 bg-white"}  flex flex-col border mt-5  rounded-2xl `}>
            {
                list.map((data,ind)=>{
                    return(
                        <Link to={'/blank'} key={ind} className='py-2 px-4 text-xl border-b border-gray-400 last:border-0'>{data}</Link>
                    )
                })
            }
        </div>
    )
}

export default DropDown