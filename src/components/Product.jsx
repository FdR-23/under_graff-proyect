import React from 'react'
import PriceFormater from '../Util/constans/PriceFormater.js'
const Product = ({ product }) => {

    // leDetailProduct = (id) => {
    //     navigate(`/product_details/${id}`);
    // }

    // lo de img
    // onClick={() => handleDetailProduct(product.id)}
    console.log(product)

    return (
        <li className='flex lg:w-[48%] [&>div>div>div>div>svg]:hover:visible m-2
        border-b border-solid border-[#eee] '>
            <div className='flex w-full box-border '>
                <div className='rounded-tr-md rounded-tl-md
                flex flex-row  py-5 relative w-full 
                bg-white '>

                    <div className='rounded flex-shrink-0 text-[1px] h-40 m-0 overflow-hidden
                    px-4 w-40 box-content'>
                        <div className=' w-[160px] h-[160px]  overflow-hidden rounded-md'>
                            {product.img_small &&
                                <img
                                    className='cursor-pointer w-full h-full  object-fill  '
                                    src={product.img_small} alt={`${product.nombre}_small_img`} />}
                        </div>
                    </div>


                    <div className='flex flex-col w-full mr-2'>

                        <div className='flex flex-col flex-shrink-0 mb-[10px] w-full'>
                            <h2 className='text-[#333] text-[20px] font-light leading-[1.3]
                            overflow-hidden text-ellipsis break-words'>
                                {product.nombre}
                            </h2>
                        </div>

                        <div className='flex flex-wrap relative w-full '>

                            <div className='w-[45%] inline-block relative align-top '>

                                <div className='mb-[12px] items-start flex-col '>
                                    <div className='flex flex-col justify-center items-start box-border '>

                                        <div className='flex items-center'>
                                            <span className='text-[#333] flex text-[24px] font-normal leading-[1.25] mr-2'>
                                                <span className='float-left'>
                                                    <span>
                                                        {product.precio &&
                                                            PriceFormater(product.precio)}
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                {product.precio > 35 ?
                                    <div className='block mb-[12px] w-full 
                                before:block before:h0 before:w-0 before:mt-[-2px] '>
                                        <div className='flex flex-wrap items-start
                                    after: mb-[-3px] after:block after:h-0 after:w-0'>
                                            <p className='text-[14px] leading-[1] mr-[10px] text-[#00a650] font-semibold'>
                                                Envío gratis
                                            </p>
                                        </div>
                                    </div> : <div></div>
                                }



                            </div>


                        </div>
                    </div>



                    <div className='absolute right-4 bottom-4 '>
                        <div className='w-10 h-10 relative flex justify-center items-center cursor-pointer' >
                            <svg className='w-[20px] h-[20px] stroke-[#3483fa] invisible'
                                viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.975 2c-2.235.116-4.365 1.203-5.82 2.89C.7 6.57 0 8.786 0 11c0 1.938.697 3.816 1.646 5.46.95 1.644 2.19 3.077 3.5 4.394 2.824 2.833 6.08 5.232 9.622 7.09.145.076.32.076.464 0 3.543-1.858 6.798-4.257 9.622-7.09 1.31-1.317 2.55-2.75 3.5-4.393C29.304 14.817 30 12.94 30 11c0-2.22-.7-4.428-2.154-6.11C26.39 3.202 24.26 2.115 22.026 2c-1.516-.078-3.045.286-4.362 1.04-1.097.626-1.975 1.558-2.664 2.614-.69-1.056-1.567-1.988-2.664-2.615C11.02 2.285 9.49 1.92 7.976 2zm.05 1c1.32-.068 2.665.25 3.813.906 1.148.656 2.107 1.652 2.72 2.824.186.36.698.36.885 0 .612-1.172 1.57-2.168 2.72-2.824 1.147-.656 2.49-.974 3.812-.906 1.942.1 3.837 1.062 5.115 2.54C28.37 7.023 29 9 29 11c0 1.73-.628 3.43-1.512 4.96-.885 1.535-2.064 2.904-3.342 4.186-2.686 2.697-5.788 4.975-9.146 6.766-3.358-1.79-6.46-4.07-9.146-6.766-1.278-1.282-2.457-2.65-3.342-4.185C1.628 14.43 1 12.73 1 11c0-2 .63-3.978 1.91-5.46C4.188 4.063 6.083 3.1 8.025 3z" /></svg>
                        </div>
                    </div>

                </div>

            </div>
        </li >
    )
}

export default Product