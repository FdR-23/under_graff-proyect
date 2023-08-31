import React from 'react'
import priceFormater from '../../Util/PriceFormater';
import { useAppContext } from '../AppProvider'
import CartItem from './CartItem';
import { FiXCircle } from "react-icons/fi";

const SideCart = ({ toggleCart, setToggleCart }) => {

    const { cart } = useAppContext();
    const price = cart && cart.map((product) => product.price)
    const sumAllPrices = price.length === 0 ? 0 : price.reduce((acc, value) => acc + value, 0)

    return (
        <>
            <div
                className={`${toggleCart ? `z-10 fixed bg-indigo-900/50 min-h-screen  w-full top-0 right-0 left-0 backdrop-blur-sm ` : `hidden`} `}></div>

            <div id='journal-scroll'
                className={`${toggleCart ? `w-full sm:w-[50%] md:w-[45%]` : `w-0`} 
                    bg-indigo-950 top-0  right-0 h-full min-h-screen fixed transition-all duration-500 z-20 overflow-y-auto `}>
                <button
                    className='absolute right-4 top-2'
                    onClick={() => setToggleCart(false)}>
                    <FiXCircle className='w-6 h-6 text-white' />
                </button>

                <div className={`relative mt-10`}>
                    <div className='flex-col m-2 flex'>
                        <h3 className='text-2xl lg:text-3xl  text-white borderb-b pb-2 pl-4 
                        underline underline-offset-4 tracking-widest mb-4'>Productos</h3>
                        <div className='w-full min-h-16 '>
                            {cart && cart.map((product) =>
                                <CartItem
                                    key={product.id}
                                    productCart={product} />)}
                        </div>

                        <div className=''>
                            <div className='flex flex-col py-2 border-b'>
                                <div className='flex flex-row  justify-between m-2'>
                                    <h5 className='font-medium text-white' >Sub total:</h5>
                                    <p className='font-bold text-white'>{priceFormater(sumAllPrices)}</p>
                                </div>
                                <div className='flex flex-row  justify-between m-2'>
                                    <h5 className='font-medium text-white' >Costo del Envio:</h5>
                                    <p className='font-bold text-white'>0</p>
                                </div>
                            </div>


                            <div className='flex flex-row  justify-between m-2'>
                                <h5 className='font-medium text-white' >Total:</h5>
                                <p className='font-bold text-white text-xl'>{priceFormater(sumAllPrices)}</p>
                            </div>

                            <div className='flex justify-end'>
                                <button
                                    className='p-2 mr-2 my-2 bg-indigo-600 rounded-md shadow-sm 
                                    hover:bg-fuchsia-700 hover:shadow-md hover:shadow-white shadow-white 
                                    transition-all duration-150  ease-in  '>
                                    <span className='font-bold text-white'>Finalizar Compra</span>
                                </button>
                            </div>
                        </div>




                    </div>

                </div>
            </div>

        </>
    )
}

export default SideCart