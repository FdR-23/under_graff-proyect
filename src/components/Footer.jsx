import React, { useState } from 'react'
import Logo from '../assets/img/Logo/LogoSinFondo.png'

import IconFacebookSvg from '../Util/Icons/IconFacebookSvg.jsx'
import IconInstagramSvg from '../Util/Icons/IconInstagramSvg.jsx'
import IconxTwitterSvg from '../Util/Icons/IconxTwitterSvg.jsx'

const Footer = () => {

    const [open, setOpen] = useState(true);
    const handletogle = () => {
        setOpen(!open)
    }
    return (
        <footer className='relative text-center bg-gray-700'>
            {/* 

            <label
                onClick={() => handletogle()}
                className={`hidden lg:block ${open ? 'lg:bg-[#f7f7f7]' : 'lg:bg-[#fff] '}
             border-[#e6e6e6]
                    lg:border-[1px] lg:border-solid lg:border-[#e6e6e6] lg:text-[#666] lg:border-b-0 lg:cursor-pointer lg:px-[20px]
                    lg:h-[32px] lg:leading-[32px] lg:aFbsolute translate-x-[-50%] lg:left-[50%] lg:bottom-[100%] lg:rounded-tr-[5px]
                     lg:rounded-tl-[5px] z-[1]  `}>
                Más información

            </label> */}

            <div className={`flex items-center justify-around  overflow-hidden relative h-full py-6  lg:h-[180px]`}>

                <div className='relative  flex items-center justify-center flex-1'>
                    <div className='w-[90%] flex justify-center '>
                        <div className='w-full scale-125 sm:scale-100 lg:w-[50%] relative -rotate-12 p-4 bg-red'>
                            <div className='absolute bg-white w-full h-full blur-lg sm:blur-md -top-0 right-0'></div>
                            <a href="#NavBar">
                                <img
                                    className='grayscale  hover:grayscale-0 
                                  transition-all duration-500 hover:scale-105'
                                    src={Logo} alt="Logo_footer" />
                            </a>
                        </div>
                    </div>
                    <div className='hidden '>
                        <h3 className='lg:text-[#333] lg:mb-[14px]' > </h3>
                    </div>


                </div>

                <div className='flex-1 h-full  flex flex-col items-center justify-center'>
                    <div className='lg:mt-4 h-[20%]'>
                        <h3 className='text-[#999] text-xs lg:text-base' >SIGUE CONECTADO</h3>
                    </div>
                    <div className='flex lg:justify-center h-full m-2'>
                        <IconFacebookSvg
                            className='fill-slate-300 w-7 h-7 m-2 hover:scale-125 transition-all duration-200 cursor-pointer' />
                        <IconInstagramSvg
                            className='fill-slate-300 w-7 h-7 m-2 hover:scale-125 transition-all duration-200 cursor-pointer' />
                        <IconxTwitterSvg
                            className='fill-slate-300 w-7 h-7 m-2 hover:scale-125 transition-all duration-200 cursor-pointer' />
                    </div>
                </div>

                <div className='flex-1 h-full flex flex-col items-center justify-center'>
                    <div className='lg:mt-4  h-[20%]'>
                        <h3 className='text-[#999] text-xs lg:text-base'>¿NECESITAS AYUDA?</h3>
                    </div>
                    <ul className='h-full text-white '>
                        <li className='text-sm hover:scale-125 transition-all duration-200 cursor-pointer'>lorem</li>
                        <li className='text-sm hover:scale-125 transition-all duration-200 cursor-pointer'>lorem</li>
                        <li className='text-sm hover:scale-125 transition-all duration-200 cursor-pointer'>lorem</li>
                    </ul>
                </div>


            </div>

            <p className={` block text-[#666]  text-xs mt-[2px] absolute bottom-0 left-[50%] -translate-x-[50%]`}>
                Copyright © 2024 FdR-23
            </p>





        </footer >
    )
}

export default Footer