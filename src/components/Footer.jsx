import React, { useState } from 'react'
import imgLogo from '../assets/img/Logo/Logo_1.png'

const Footer = () => {

    const [open, setOpen] = useState(false);
    const handletogle = () => {
        setOpen(!open)
    }
    return (
        <footer className='relative text-center'>


            <label
                onClick={() => handletogle()}
                className={`hidden lg:block ${open ? 'lg:bg-[#f7f7f7]' : 'lg:bg-[#fff] '}
             border-[#e6e6e6]
                    lg:border-[1px] lg:border-solid lg:border-[#e6e6e6] lg:text-[#666] lg:border-b-0 lg:cursor-pointer lg:px-[20px]
                    lg:h-[32px] lg:leading-[32px] lg:absolute translate-x-[-50%] lg:left-[50%] lg:bottom-[100%] lg:rounded-tr-[5px]
                     lg:rounded-tl-[5px] z-[1]  `}>
                Más información

            </label>

            <div className={`hidden lg:block ${open ? 'lg:max-h-[270px] ' : 'lg:max-h-0  lg:border-t-[0]'}
                 lg:bg-[#f7f7f7] lg:mt-0  lg:transition-all lg:duration-300
                  lg:overflow-hidden  lg:border-solid lg:border-[#e6e6e6] lg:relative
                  lg:flex `}>

                <div className='w-[40%] relative  flex items-center justify-center m-4'>
                <div className='w-[50%] p-4'>
                        <img
                            className='grayscale -rotate-12'
                            src={imgLogo} alt="" />
                    </div>
                    <div className='flex-1 '>
                        <h3 className='lg:text-[#333] lg:mb-[14px]' > </h3>
                    </div>
                  

                </div>

                <div className='w-auto  leading-[1.6] my-[46px] flex-grow bg-red-700'>
                    <h3 className='lg:text-[#333] lg:mb-[14px]' >SIGUE CONECTADO</h3>
                    <ul className='text-[#999] box-border'>
                    <FontAwesomeIcon icon={solid("facebook")} />
                        <li className='hover:underline cursor-pointer' >Developers</li>
                        <li className='hover:underline cursor-pointer' >Mercado Pago</li>
                        <li className='hover:underline cursor-pointer' >Mercado Shops</li>
                        <li className='hover:underline cursor-pointer' >Mercado Envíos</li>
                        <li className='hover:underline cursor-pointer' >Mercado Ads</li>
                    </ul>
                    
                </div>

                <div className='w-auto flex-shrink leading-[1.6] my-[46px] flex-grow bg-fuchsia-900'>
                    <h3 className='lg:text-[#333] lg:mb-[14px]' >Ayuda</h3>
                    <ul className='text-[#999] box-border'>
                        <li className='hover:underline cursor-pointer' >Comprar</li>
                        <li className='hover:underline cursor-pointer' >Vender</li>
                        <li className='hover:underline cursor-pointer' >Resolucón de problemas</li>
                        <li className='hover:underline cursor-pointer' >Centro de seguridad</li>
                    </ul>
                </div>





            </div>
            <p
                className={` ${open ? ' lg:block' : ' hidden '} text-[#666] text-[12px] mt-[2px]`}
            >Copyright © 2024 FdR-23</p>






        </footer>
    )
}

export default Footer