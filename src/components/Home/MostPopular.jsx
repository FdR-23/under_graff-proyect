import React from 'react'
import CartMostPopular from './CartMostPopular'
import image1 from '../../assets/img/MostPopular/1.jpg'
import image2 from '../../assets/img/MostPopular/2.jpg'
import image3 from '../../assets/img/MostPopular/3.jpg'

const MostPopular = () => {

    return (
        <section
            id="MostPopular"
            className='w-full h-full lg:h-screen flex flex-col  bg-[#d5c4e1]'>

            <div className=' h-[100px] lg:h-[150px] flex justify-center items-center'>
                <h2 className='text-3xl sm:text-4xl  lg:text-6xl font-rust_g  tracking-wider -skew-y-3 -skew-x-6'>
                    DESTACADOS
                </h2>
            </div>

            <div className='overflow-hidden lg:flex-grow'>
                <div className='flex flex-col mb-5 px-2 pt-2 gap-4 sm:gap-2 lg:pt-0 sm:flex-row 
                             h-full w-full  justify-evenly items-center'>
                    <CartMostPopular
                        image={image1}
                        category={'Accesorios'} />
                    <CartMostPopular
                        image={image2}
                        category={'Camperas'} />
                    <CartMostPopular
                        image={image3}
                        category={'Pantalones'} />
                </div>
            </div>
        </section>
    )
}

export default MostPopular