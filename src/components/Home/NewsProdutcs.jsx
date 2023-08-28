import React from 'react'
import CartNewsProducts from './CartNewsProducts'

const NewsProdutcs = () => {

    return (
        <section
            id="NewsProdutcs"
            className='w-full h-full lg:h-screen flex flex-col bg-[#9a6db7]'>
            <div className=' h-[100px] lg:h-[150px] flex justify-center items-center'>
                <h2 className='text-3xl sm:text-4xl  lg:text-6xl font-rust_g  tracking-wider skew-y-3 -skew-x-6'>
                    Recien llegadoss
                </h2>
            </div>

            <div className='flex-1 overflow-hidden '>
                <div className='flex flex-row gap-4 mb-4 p-2 justify-evenly flex-wrap sm:gap-2
                lg:max-w-screen-xl lg:flex-nowrap md:m-auto md:my-4  '>
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