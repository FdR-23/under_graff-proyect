import React from 'react'
import CartNewsProducts from './CartNewsProducts'

const NewsProdutcs = () => {

    return (
        <section
            id="NewsProdutcs"
            className='w-full h-full lg:h-screen flex flex-col'>
            <div className='h-[120px] lg:h-[200px] flex justify-center items-center  pt-10 lg:pt-20'>
                <h2 className='text-4xl sm:text-5xl  lg:text-7xl font-rust_g  tracking-wider skew-y-3 skew-x-12 text-fuchsia-900'>
                    Recien llegados
                </h2>
            </div>

            <div className='my-auto '>
                <div className='flex flex-row gap-4 mb-4 p-2 justify-evenly flex-wrap 
                                sm:gap-2 md:m-auto lg:max-w-screen-xl lg:flex-nowrap '>
                    <CartNewsProducts
                        productId={'bb726e23-0231-4dc8-8088-fd04a258bb7b'} />
                    <CartNewsProducts
                        productId={'d9dc21fa-848a-44f1-90fd-5a7c704c969a'} />
                    <CartNewsProducts
                        productId={'d2ecbbb5-8e83-46da-95d5-562549beee32'} />
                    <CartNewsProducts
                        productId={'905ff25c-268b-40e0-842f-5f9e66f8f7ff'} />
                </div>
            </div>
        </section>
    )
}
export default NewsProdutcs