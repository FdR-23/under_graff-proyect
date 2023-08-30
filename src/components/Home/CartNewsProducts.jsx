import React, { useEffect, useState } from 'react'
import PriceFormater from '../../Util/constans/PriceFormater.js'
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppProvider.jsx';
const CartNewsProducts = ({ productId = undefined }) => {
    const { copyOfProducts } = useAppContext();
    const [toggle, setToggle] = useState(false);
    const [product, setProcut] = useState({
        id: undefined,
        image: undefined,
        name: undefined,
        price: undefined,

    });

    useEffect(() => {
        let findyProduct = copyOfProducts.find((element) => element.id === productId);
        if (findyProduct) {
            setProcut((prevState) => {
                return {
                    ...prevState,
                    id: findyProduct.id,
                    image: findyProduct.imagen[0],
                    name: findyProduct.nombre,
                    price: findyProduct.precio,
                }
            })
        }
    }, [productId])


    return (
        <div
            onMouseLeave={() => setToggle(false)}
            onMouseEnter={() => setToggle(true)}
            className='  
           w-[10rem]  h-[17rem]
           md:w-[11rem]  md:h-[20rem] md:mt-2
           lg:m-2  lg:w-[15rem] lg:h-[21rem]
           xl:h-[26rem] xl:w-[17rem]
           relative  overflow-hidden rounded-lg 
            shadow-sm shadow-fuchsia-950  hover:shadow-white hover:shadow-md transition-all duration-300 '>

            {/* skeleton */}
            <div className={`${!product?.image ? `flex justify-center items-center relative rounded-sm 
                    w-full h-full bg-gray-500  animate-pulse` : `hidden`}`}>
                <svg className="w-20 h-20 object-fill text-gray-900" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
            </div>

            <div className={`${!product?.image ? `hidden` : ` h-full relative`}`}>
                <div className={`h-full w-full `}>
                    <img className={`w-full h-full`}
                        src={product.image} alt={`${product.name}_news_product.img`} />
                </div>

                <div className={`h-14 absolute bottom-0 flex-col items-center w-full bg-black/50
                transition-all ease-in-out duration-500 `}>
                    <p className={` absolute left-1 top-2 text-white tracking-tighter skew-x-6 -rotate-2 
                      text-sm leading-3  md:text-base md:leading-3  lg:text-lg lg:leading-4`}>{product?.name}</p>
                    <p className={`text-xl text-white  absolute right-1 top-7`}>{PriceFormater(product?.price)}</p>
                </div>

                <div className={`${toggle ? `visible h-full ` : `invisible h-0`} flex absolute items-center justify-center w-full bg-white/50
                top-[50%] -translate-y-[50%] transition-all duration-[400ms] `}>

                    <Link to={`/products/details/${product?.id}`}
                        className={`${toggle ? `animate-alternate-reverse animate-ping -rotate-12 ` : `animate-jump-out animate-once`}
                                    animate-once animate-duration-200 animate-ease-linear text-2xl  hover:underline`}>
                        Ver detalle
                    </Link>
                </div>

            </div>

        </div>
    )
}



export default CartNewsProducts