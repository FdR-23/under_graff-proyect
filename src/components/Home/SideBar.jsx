import React from 'react'
import { Link } from 'react-router-dom'
import { FiXCircle } from "react-icons/fi";

const SideBar = ({ toggleBar, setToggleBar }) => {
    return (
        <>
            <div className={`${toggleBar ? `z-10 fixed  bg-indigo-900/50 min-h-screen  w-full top-0 right-0 left-0 backdrop-blur-sm rela` : `hidden`} `}></div>

            <div className={`${toggleBar ? `w-[50%]` : `w-0`} 
                    bg-indigo-950 top-0  left-0  min-h-screen fixed transition-all duration-500 z-20`}>
                <button
                    className='absolute right-2 top-2'
                    onClick={() => setToggleBar(false)}>
                    <FiXCircle className='w-6 h-6 text-white' />
                </button>

                <div className={`${toggleBar ? `relative` : `hidden`}  m-2  mt-20 `}>
                    <ul className='flex flex-col items-center  space-y-1 text-white'>
                        <Link to={'/'}>
                            <li className='text-xl p-2 hover:underline'>Inicio</li>
                        </Link>
                        <Link to={'/products'} onClick={() => setToggleBar(false)}>
                            <li className='text-xl p-2 hover:underline'>Productos</li>
                        </Link>
                        <a href="#MostPopular" onClick={() => setToggleBar(false)}
                            className={location.pathname !== "/products" ? 'visible' : 'invisible'}>
                            <li className='text-xl p-2 hover:underline'>Popular</li>
                        </a>
                        <a href="#NewsProdutcs" onClick={() => setToggleBar(false)}
                            className={location.pathname !== "/products" ? 'visible' : 'invisible'}>
                            <li className='text-xl p-2 hover:underline'>Lastest</li>
                        </a>
                    </ul>
                </div>
            </div>
        </>









    )
}


export default SideBar