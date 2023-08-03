import React from 'react'
import CartNewsProducts from './CartNewsProducts'

import imagePrueba from '../assets/img/Products/Jackets/9a.jpg'

const NewsProdutcs = () => {
    return (
        <section className='w-full h-full lg:h-screen flex flex-col'>

            <div className=' h-[100px] lg:h-[150px] flex justify-center items-center'>
                <h2 className='text-3xl sm:text-4xl  lg:text-6xl'>
                    NewsProdutcs
                </h2>
            </div>

            <div className='flex-1 overflow-hidden '>
                <div className='flex flex-row gap-4 mb-4 p-2 justify-evenly flex-wrap sm:gap-2
                lg:max-w-screen-xl lg:flex-nowrap md:m-auto md:my-4  '>
                    <CartNewsProducts
                        image={imagePrueba}
                        product={'Campera'}
                        price={5300} />
                    <CartNewsProducts
                        image={imagePrueba}
                        product={'Campera'}
                        price={2300} />
                    <CartNewsProducts
                        image={imagePrueba}
                        product={'Pantalones'}
                        price={500} />
                    <CartNewsProducts
                        image={imagePrueba}
                        product={'Sombrero'}
                        price={8000} />
                </div>
            </div>
        </section>
    )
}
export default NewsProdutcs