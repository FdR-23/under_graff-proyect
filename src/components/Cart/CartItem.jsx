import React from 'react';
import priceFormater from '../../Util/constans/PriceFormater';

import { useAppContext } from '../AppProvider.jsx'
import { TYPE } from '../../Reducer/actions';
const CartItem = ({ productCart }) => {
    const { id, name, stock, quantity, price, img_small } = productCart;
    const { dispatch } = useAppContext();

    const handeIncrement = (id) => {
        dispatch({
            type: TYPE.INCREMENT_PRODUCT_CART,
            payload: id
        });
        dispatch({
            type: TYPE.FIND_PRODUCT_BY_ID,
            payload: id
        });
    }
    const handeDecrement = (id) => {
        dispatch({
            type: TYPE.DECREMENT_PRODUCT_CART,
            payload: id
        });
        dispatch({
            type: TYPE.FIND_PRODUCT_BY_ID,
            payload: id
        });
    }

    const handleDeletItem = (id) => {
        dispatch({
            type: TYPE.DELETE_PRODUCT_CART,
            payload: id
        });
        dispatch({
            type: TYPE.FIND_PRODUCT_BY_ID,
            payload: id
        });
    }


    return (
        <article className='flex flex-col bg-purple-400 border-b mb-[1px] rounded-b-md relative'>
            <div className='flex flex-row h-full h-max-28 p-3 pb-1'>
                <div className=' w-20 h-20 overflow-hidden rounded-lg m-2 mr-4'>
                    <div className='w-full h-full'>
                        {img_small &&
                            <img
                                className='cursor-pointer w-full h-full object-cover'
                                src={img_small} alt={`${name}_small_img`} />}
                    </div>
                </div>

                <div className='flex flex-row flex-1 mt-2'>
                    <div className='w-full max-w-[220px]'>
                        <h2 className='m-auto text-lg font-bold'>{name}</h2>
                    </div>
                    <div className='flex flex-col mx-auto items-center' >
                        <div className='flex flex-row items-center  justify-between w-20 my-1 rounded-md overflow-hidden border  box-border '>
                            <button className='flex flex-col items-center  justify-center  w-7 h-7 border-r-2
                             border-purple-950 bg-indigo-700'
                                onClick={() => handeDecrement(id)} disabled={quantity === 1}>
                                <span className='text-2xl text-white'>−</span>
                            </button>
                            <span className='text-xl  text-white'>{quantity}</span>
                            <button className='flex flex-col items-center justify-center  w-7 h-7 border-l-2
                             border-purple-950 bg-indigo-700'
                                onClick={() => handeIncrement(id)} disabled={stock == 0}>
                                <span className='text-2xl text-white'>+</span>
                            </button>
                        </div>
                        <p className='text-xs sm:text-base'>Disponibles <span>({stock})</span></p>
                    </div >
                    <div className='mx-auto'>
                        <h3 className='text-xl font-bold'>{priceFormater(price)}</h3>
                    </div>
                </div>
            </div>
            <div className='m-1 mt-0 absolute bottom-1 right-3'>
                <button className='ml-5 text-xs  text-indigo-950 uppercase line-clamp-1 tracking-wider font-bold'
                    onClick={() => handleDeletItem(id)}
                >eliminar</button>
            </div>
        </article>
    )
}
export default CartItem