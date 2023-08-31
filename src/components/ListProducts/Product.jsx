import React from 'react'
import PriceFormater from '../../Util/PriceFormater.js'
import { Link } from 'react-router-dom'
import { FavoriteProductsSvg } from '../../Util/FavoriteProductsSvg.jsx'
const Product = ({ product }) => {

    return (
        <li className='flex lg:w-[48%] m-2'>
            <div className='flex w-full box-border  '>
                <div className='rounded-md flex flex-row py-5 bg-slate-200 relative w-full h-52 hover:shadow-boxProduct '>

                    <div className='rounded flex-shrink-0  overflow-hidden px-4 w-40  h-40 box-content'>
                        <Link to={`/products/details/${product.id}`}>
                            <div className='w-full h-full overflow-hidden rounded-md'>
                                {product.img_small &&
                                    <img
                                        className='cursor-pointer w-full h-full object-cover'
                                        src={product.img_small} alt={`${product.nombre}_small_img`} />}
                            </div>
                        </Link>
                    </div>


                    <div className='flex flex-col w-full  relative'>
                        <div className='absolute -left-2 mb-[10px]  flex w-full max-h-[100px] h-full items-center justify-center'>
                            <h2 className='pt-5 text-md sm:text-2xl  
                            leading-[1.3] text-center -skew-y-6  tracking-wider'>
                                {product.nombre}
                            </h2>
                        </div>

                        <div className='flex flex-wrap relative w-full mt-auto justify-end pr-4'>
                            <div className='flex flex-col relative '>
                                <div className='flex flex-col box-border '>
                                    <span className='text-[#211232]  text-4xl leading-[1.25]'>
                                        {product.precio && PriceFormater(product.precio)}
                                    </span>
                                </div>
                                <div>
                                    <div className={`${product.precio > 10 ? 'block w-full' : 'invisible'}`}>
                                        <div className='flex flex-wrap justify-end fo
                                                        after:mb-[-3px] after:block after:h-0 after:w-0'>
                                            <p className='text-[14px] leading-[1] mr-[10px] text-[#00a650]'>
                                                Envío gratis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className='w-10 h-10 absolute flex justify-center items-center cursor-pointer top-1 right-1' >
                        <FavoriteProductsSvg />
                    </div>

                </div>



            </div>
        </li >
    )
}

export default Product