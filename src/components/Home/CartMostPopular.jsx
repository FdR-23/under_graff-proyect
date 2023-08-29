import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const CartMostPopular = ({ image = undefined, category = undefined }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div
            onMouseLeave={() => setToggle(false)}
            onMouseEnter={() => setToggle(true)}
            className='  
           w-[20rem]  h-[20rem]
           sm:w-full sm:h-[20rem] sm:m-2
           md:w-[14rem]  md:h-[20rem] 
           lg: lg:w-[18rem] lg:h-[24rem]
           xl:w-[20rem]  xl:h-[28rem] 
           overflow-hidden  rounded-md transition delay-75 duration-500 relative 
           hover:shadow-md hover:shadow-indigo-950'>

            <div
                className={`${!image ? `flex justify-center items-center   
                   w-full h-full bg-gray-500 ` : `hidden`}`}>
                <svg className="w-20 h-20 object-cover text-gray-900" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
            </div>

            <div
                className={`${image ? toggle ? ` bottom-0 cursor-pointer h-full bg-gray-500/40`
                    : `bottom-0  bg-gray-300/40 h-[40px] lg:h-[60px] ` : `hidden`}
                   absolute z-10  w-full left-[50%]  -translate-x-[50%] transition-all ease-in duration-300`}>
                <Link to={`/products?categories=${category}`}>
                    <h4 className={`${toggle ? `text-4xl rotate-12 text-slate-100  `
                        : `text-xl lg:text-2xl`} h-full flex justify-center items-center 
                    transition-all  ease-in duration-[400ms]`}>
                        {category}
                    </h4>
                </Link>
            </div>


            <img
                className={`${image && toggle ? `-rotate-2 scale-125 ` : ``} 
                transition ease-in-out duration-500 delay-150 w-full h-full`}
                src={image}
                alt={`${image}_most_popular`} />

        </div>
    )
}

export default CartMostPopular