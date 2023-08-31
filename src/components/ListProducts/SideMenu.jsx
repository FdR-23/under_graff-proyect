import React from 'react'
import { FiXCircle } from "react-icons/fi";
import Filters from './Filters/Filters';
import { filters } from '../../Util/filters.js'
const SideMenu = ({ toggleFilter, setToggleFilter }) => {
    return (
        <>
            <div className={`${toggleFilter ? `z-10 fixed  bg-indigo-900/50 min-h-screen  
            w-full top-0 right-0 left-0 backdrop-blur-sm ` : `hidden`} `}></div>

            <div className={`${toggleFilter ? `w-[40%] sm:w-[30%]` : `w-0`} 
            bg-slate-500 top-[100px]  left-0  min-h-screen fixed transition-all duration-300 z-20 `}>
                <button
                    className='absolute right-2 top-4'
                    onClick={() => setToggleFilter(false)}>
                    <FiXCircle className='w-6 h-6' />
                </button>

                <div className={`${toggleFilter ? `relative` : `hidden`}  m-2  mt-12 `}>
                    <section className='flex flex-col w-full '>
                        {filters && filters.map((elemet, index) =>
                            <Filters
                                key={index}
                                filters={elemet} />
                        )}
                    </section>
                </div>
            </div>
        </>
    )
}

export default SideMenu