import React, { useState } from 'react'
import SideBar from './Home/SideBar.jsx';
import SideCart from './Cart/SideCart.jsx';
import { Link, useLocation } from 'react-router-dom'
import { FiShoppingCart, FiMenu } from "react-icons/fi";

import logo from '../assets/img/Logo/Logo_1.png'
import { useAppContext } from './AppProvider.jsx';


const Navbar1 = () => {
    const [toggleBar, setToggleBar] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);
    const location = useLocation()
    const { cart } = useAppContext();
    const countAllItems = cart.reduce((acc, value) => {
        return acc = acc + value.quantity
    }, 0);


    return (
        <header
            id="NavBar"
            className=" sm:relative h-[100px] lg:h-[150px] box-border
        sticky z-40 top-0 right-0 left-0 border-b-2 border-indigo-950">

            <div className='relative h-full flex box-border  justify-center bg-indigo-950 '>

                {/* <div className='bg-red-500  overflow-hidden
                 w-[16rem] h-full md:w-[20rem] lg:w-[32rem] flex justify-center items-center '>
                    <h1 className='w-full m-4  text-5xl lg:text-7xl bg-red-200 flex flex-col items-center -rotate-3 tracking-widest'>
                        Under
                        <span className='text-4xl lg:text-5xl tracking-normal'>Graff</span>
                    </h1>
                </div> */}

                <div className='w-[18rem] md:w-[20rem] lg:w-[32rem] m-1 sm:m-0 items-center'>
                    <img
                        className='w-full h-full object-contain bg-white -rotate-2 sm:rotate-0 sm:m-0 -hue-rotate-15 p-2 m-2 rounded-sm'
                        src={logo} alt="" />
                </div>


                <div className={` ${toggleBar === true ? 'z-50' : 'z-40'} absolute bottom-0 left-2  sm:hidden`}>
                    <button className='text-white' onClick={() => setToggleBar(true)}>
                        <FiMenu className={`transition-all duration-150 hover:scale-110 w-7 h-7`} />
                    </button>
                    <SideBar
                        toggleBar={toggleBar}
                        setToggleBar={setToggleBar}
                    />
                </div>

                <div className='z-40 absolute bottom-0 right-2 sm:top-8 sm:right-4 '>

                    <div className={`${countAllItems === 0 ? 'hidden' : 'w-3 h-3 absolute -top-2 left-3 '}
                    flex items-center justify-center`}>
                        <span
                            className={`${countAllItems === 0 ? 'hidden' : 'text-white text-normal   '}`}>
                            {countAllItems}
                        </span>
                    </div>

                    <button className='text-white ' onClick={() => setToggleCart(true)}>
                        <FiShoppingCart className='w-7 h-7 transition-all duration-150  hover:scale-110' />
                    </button>
                    <SideCart
                        toggleCart={toggleCart}
                        setToggleCart={setToggleCart}
                    />
                </div>

                <div className='relative  hidden sm:flex  items-end  flex-1'>
                    <ul className='flex flex-1 justify-end text-center items-end mx-4 sm:space-x-4 mb-1'>
                        <Link to={'/'}>
                            <li className='text-sm text-white w-auto lg:text-xl opacity-60 
                              transition-all duration-150 hover:opacity-100 hover:scale-110 '>Inicio</li>
                        </Link>
                        <Link to={'/products'}>
                            <li className='text-sm text-white w-auto lg:text-xl opacity-60 
                              transition-all duration-150 hover:opacity-100 hover:scale-110 '>Productos</li>
                        </Link>
                        <a href="#MostPopular"
                            className={location.pathname === "/" ? 'visible' : 'invisible'}>
                            <li className='text-sm text-white w-auto lg:text-xl opacity-60 
                              transition-all duration-150 hover:opacity-100 hover:scale-110 '>Popular</li>
                        </a>

                        <a href="#NewsProdutcs"
                            className={location.pathname === "/" ? 'visible ' : 'invisible'}>
                            <li className='text-sm text-white w-auto lg:text-xl opacity-60 
                              transition-all duration-150 hover:opacity-100 hover:scale-110 '>Lastest</li>
                        </a>
                    </ul>
                </div>

            </div>

        </header >
    )
}

export default Navbar1