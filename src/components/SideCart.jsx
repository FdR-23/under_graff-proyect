import React from 'react'

const SideCart = ({ toggleCart, setToggleCart }) => {
    return (
        <>
            <div className={`${toggleCart ? `z-10 fixed bg-gray-500/50 min-h-screen  w-full top-0 right-0 left-0 backdrop-blur-sm rela` : `hidden`} `}></div>

            <div className={`${toggleCart ? `w-[60%] sm:w-[50%] md:w-[40%]` : `w-0`} 
                    bg-slate-500 top-0  right-0  min-h-screen fixed transition-all duration-500 z-20`}>
                <button
                    className='absolute left -2 top-2'
                    onClick={() => setToggleCart(false)}>
                    cerrar
                </button>
                <div className={`${toggleCart  ? `relative` : `relative`}  relative  mt-10 bg-red-200 `}>

                    <div className='m-2 bg-slate-400  flex flex-col'>
                        <h3 className='text-xl font-medium text-white text-center border-b pb-2 mb-4'>Mi carrito</h3>



                        <div className='w-full h-[15rem] bg-gray-100'>

                        </div>





                        <div className=''>
                            <div className='flex flex-col py-2 border-b'>
                                <div className='flex flex-row  justify-between m-2'>
                                    <h5 className='font-medium text-white' >Sub total:</h5>
                                    <p className='text-xl font-bold text-white'> total</p>
                                </div>
                                <div className='flex flex-row  justify-between m-2'>
                                    <h5 className='font-medium text-white' >Envio:</h5>
                                    <p className='font-bold text-white'>ssub total</p>
                                </div>
                            </div>


                            <div className='flex flex-row  justify-between m-2'>
                                <h5 className='font-medium text-white' >Total:</h5>
                                <p className='font-bold text-white'>Total</p>
                            </div>

                            <button
                                className='p-2 my-2 font-bold  bg-white/40'
                            >Finalizar Compra
                            </button>
                        </div>




                    </div>

                </div>
            </div>

        </>
    )
}

export default SideCart