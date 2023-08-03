import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = ({ toggleBar, setToggleBar }) => {
    return (
        <>
            <div className={`${toggleBar ? `z-10 fixed  bg-gray-500/50 min-h-screen  w-full top-0 right-0 left-0 backdrop-blur-sm rela` : `hidden`} `}></div>

            <div className={`${toggleBar ? `w-[50%]` : `w-0`} 
                    bg-slate-500 top-0  left-0  min-h-screen fixed transition-all duration-500 z-20`}>
                <button
                    className='absolute right-2 top-2'
                    onClick={() => setToggleBar(false)}>
                    cerrar
                </button>

                <div className={`${toggleBar ? `relative` : `hidden`}  m-2  mt-20 `}>
                    <ul className='flex flex-col items-center  space-y-1'>
                        <Link> <li className='text-lg p-2 hover:underline'>Inicio</li></Link>
                        <Link> <li className='text-lg p-2 hover:underline'>Popular</li></Link>
                        <Link> <li className='text-lg p-2 hover:underline'>Lastest</li></Link>
                    </ul>
                </div>
            </div>
        </>









    )
}


export default SideBar