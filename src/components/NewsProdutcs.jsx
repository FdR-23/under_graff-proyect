import React from 'react'
import CartNewsProducts from './CartNewsProducts'

const NewsProdutcs = () => {
    return (
        <section className='w-full  h-full md:h-screen flex flex-col'>
            <div className='h-[100px] bg-slate-500 lg:h-[150px]'> <h2> NewsProdutcs</h2></div>


            <div className='flex flex-wrap sm:flex-nowrap sm:flex-grow flex-grow m-2 justify-evenly items-center gap-2 '>
                <CartNewsProducts image={undefined} />
                <CartNewsProducts image={undefined} />
                <CartNewsProducts image={undefined} />
                <CartNewsProducts image={undefined} />
            </div>



        </section>
    )
}

export default NewsProdutcs