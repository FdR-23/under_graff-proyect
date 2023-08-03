import React, { useState } from 'react'
import SideBar from './SideBar.jsx';
import SideCart from './SideCart.jsx';
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [toggleBar, setToggleBar] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);

    return (
        <header className=" sm:relative h-[100px] lg:h-[150px] box-border  bg-slate-400 
        sticky z-40 top-0 right-0 left-0 border-b-2 border-black">

            <div className='relative h-full flex  justify-center overflow-hidden'>

                <div className='bg-red-500  overflow-hidden
                 w-[16rem] h-full md:w-[20rem] lg:w-[32rem] flex justify-center items-center '>
                    <h1 className='w-full m-4  text-5xl lg:text-7xl bg-red-200 flex flex-col items-center -rotate-3 tracking-widest'>
                        Under
                        <span className='text-4xl lg:text-5xl tracking-normal'>Graff</span>
                    </h1>
                </div>


                <div className='absolute sm:hidden w-10 h-10 bg-black bottom-0 left-1'>
                    <button className='text-white' onClick={() => setToggleBar(true)}>
                        click
                    </button>
                    <SideBar
                        toggleBar={toggleBar}
                        setToggleBar={setToggleBar}
                    />
                </div>

                <div className='z-40 absolute w-10 h-10 bg-black  bottom-0 sm:top-1 right-1'>
                    <button className='text-white' onClick={() => setToggleCart(true)}>
                        click
                    </button>
                    <SideCart
                        toggleCart={toggleCart}
                        setToggleCart={setToggleCart}
                    />
                </div>

                <div className='relative bg-slate-500  hidden sm:flex  items-end  flex-1 '>
                    <ul className='flex bg-slate-100 flex-1 justify-end text-center items-end '>
                        <Link to={'/'}> <li className='text-sm sm:m-2 w-[6rem] lg:text-xl lg:font-semibold lg:m-2  '>Inicio</li></Link>
                        <Link to={'/products'}> <li className='text-sm sm:m-2 w-[6rem] lg:text-xl lg:font-semibold lg:m-2  '>Productos</li></Link>
                        <Link> <li className='text-sm sm:m-2 w-[6rem] lg:text-xl lg:font-semibold lg:m-2  '>Popular</li></Link>
                        <Link> <li className='text-sm sm:m-2 w-[6rem] lg:text-xl lg:font-semibold lg:m-2  '>Lastest</li></Link>
                    </ul>
                </div>

            </div>

        </header>
    )
}

export default NavBar