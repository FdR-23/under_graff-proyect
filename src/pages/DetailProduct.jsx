import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loading from '../components/Loading.jsx'
import VisaCredito from '../assets/img/Tarjetas/VisaCredito.svg'
import MCCredito from '../assets/img/Tarjetas/MCCredito.svg'
import TarjetaNaranja from '../assets/img/Tarjetas/TarjetaNaranja.svg'
import VisaDebito from '../assets/img/Tarjetas/VisaDebito.svg'
import MCDebito from '../assets/img/Tarjetas/MCDebito.svg'
import PagoFacil from '../assets/img/Tarjetas/PagoFacil.svg'
import RapiPago from '../assets/img/Tarjetas/RapiPago.svg'
import priceFormater from '../Util/PriceFormater.js'
import GuiaTalle from '../assets/img/Talles/guia_talle_details.png'

import { TYPE } from '../Reducer/actions'

import { useAppContext } from '../components/AppProvider'
import '../index.css'

import { PiRuler } from "react-icons/pi";


const DetailProduct = () => {
  const params = useParams();
  let { id } = params
  const { dispatch, product } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState(1);

  const [imgSelected, setImgSelected] = useState(product?.imagen[0])
  const [magnifyStyle, setMagnifyStyle] = useState({ backgroundImage: `url(${imgSelected})` })

  useEffect(() => {
    dispatch({
      type: TYPE.FIND_PRODUCT_BY_ID,
      payload: id
    })
    setLoading(false)
  }, [])

  useEffect(() => {
    setImgSelected(product?.imagen[0])
  }, [product])

  //ZOOM IMAGE
  useEffect(() => {
    setMagnifyStyle({ backgroundImage: `url(${imgSelected})` })
  }, [imgSelected])


  const SubmitAddCart = (e) => {
    e.preventDefault();
    if (product?.stock === 0) {
      return
    } else {
      const item = {
        id,
        name: product?.nombre,
        stock: product?.stock - input,
        quantity: input,
        price: product?.precio,
        img_small: product?.img_small,
      }
      dispatch({
        type: TYPE.ADD_TO_CART,
        payload: item
      });
    }
    dispatch({
      type: TYPE.FIND_PRODUCT_BY_ID,
      payload: id
    });
    setInput(1)
  }

  const handleMouseMove = (e) => {
    const { target, offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    const yPercent = (offsetY / offsetHeight) * 100;
    const xPercent = (offsetX / offsetWidth) * 100;

    setMagnifyStyle((prev) => ({
      ...prev,
      display: `block`,
      top: `${offsetY - 80}px`, //son width: 200px(eso esta en index.css) - 100px
      left: `${offsetX - 50}px`,
      backgroundPosition: `${xPercent}% ${yPercent}%`
    }))
  }

  const handleMouseLeave = (e) => {
    setMagnifyStyle((prev) => ({ ...prev, display: `none` }))
  }

  if (!Boolean(product)) {
    return <Loading />;

  } {
    return (
      <div className='max-w-screen-xl w-full  mx-auto mb-2'>

        <div className='bg-gray-300 min-w-[800px] rounded box-border mt-10'>
          <div className='relative flex flex-row-reverse flex-wrap pb-10 box-border'>

            <div className='ml-12 max-w-[368px] w-[368px] basis-0 flex-grow flex-shrink
            relative min-w-[325px] pr-6 mt-16 space-y-2'>

              <div className='border border-solid border-[#0000001a] rounded-lg text-[14px] p-4 w-full 
                  flex flex-row flex-wrap bg-gray-100'>

                <div className='w-full box-border '>
                  <div className='mb-2 mr-10'>
                    <span className='text-[#0000008c] text-[14px] font-bold whitespace-pre-wrap '>Nuevo</span>
                  </div>
                  <div className='flex'>
                    <h1 className='flex-auto text-[22px]  mb-2 mr-7 leading-[1.18]  break-words'>
                      {product?.nombre}
                    </h1>
                    <div className='relative'>
                      {/* <button className=' absolute right-1 '>
                        <svg className='w-[22px] h-[22px] stroke-[#820e55] ' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.975 2c-2.235.116-4.365 1.203-5.82 2.89C.7 6.57 0 8.786 0 11c0 1.938.697 3.816 1.646 5.46.95 1.644 2.19 3.077 3.5 4.394 2.824 2.833 6.08 5.232 9.622 7.09.145.076.32.076.464 0 3.543-1.858 6.798-4.257 9.622-7.09 1.31-1.317 2.55-2.75 3.5-4.393C29.304 14.817 30 12.94 30 11c0-2.22-.7-4.428-2.154-6.11C26.39 3.202 24.26 2.115 22.026 2c-1.516-.078-3.045.286-4.362 1.04-1.097.626-1.975 1.558-2.664 2.614-.69-1.056-1.567-1.988-2.664-2.615C11.02 2.285 9.49 1.92 7.976 2zm.05 1c1.32-.068 2.665.25 3.813.906 1.148.656 2.107 1.652 2.72 2.824.186.36.698.36.885 0 .612-1.172 1.57-2.168 2.72-2.824 1.147-.656 2.49-.974 3.812-.906 1.942.1 3.837 1.062 5.115 2.54C28.37 7.023 29 9 29 11c0 1.73-.628 3.43-1.512 4.96-.885 1.535-2.064 2.904-3.342 4.186-2.686 2.697-5.788 4.975-9.146 6.766-3.358-1.79-6.46-4.07-9.146-6.766-1.278-1.282-2.457-2.65-3.342-4.185C1.628 14.43 1 12.73 1 11c0-2 .63-3.978 1.91-5.46C4.188 4.063 6.083 3.1 8.025 3z" /></svg>
                      </button> */}
                    </div>
                  </div>
                </div>



                <div className='w-full flex flex-row flex-wrap box-border '>
                  <div className='text-[#000000e6] inline-block  font-light mt-4 ' >
                    <div className='flex justify-start items-center translate-x-[-1px] '>
                      <span className='text-[32px] lg:text-[50px] mt-1 ml-[4px]  leading-[1]'>
                        {product?.precio && priceFormater(product?.precio)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='mt-5 w-full flex flex-row flex-wrap'>
                  <p className='font-semibold text-[16px]  text-[#000000e6]'>
                    Stock disponible
                  </p>
                </div>


                <div className='mt-4 w-full flex flex-row flex-wrap'>
                  <div className='text-[#000000e6]'>
                    <div className='flex items-center  w-full relative top-[-1px] dropdown '>

                      <span className='leading-[1]'>
                        <span className='text-[#000000e6] text-[14px]  block float-left '>Cantidad:</span>
                        <span className='text-[#000000e6] text-[14px]  ml-1 whitespace-nowrap block float-left'>
                          {input} unidad
                        </span>

                        <button className='ml-[6px] align-bottom block float-left dropdown-bottom '>
                          <svg className=' hover:rotate-180 transition-all duration-500 mr-[2px]' width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                            <path d="M4 9L12 17L20 9" stroke="#820e55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        {/* dropdown */}
                        <ul className="dropdown-content z-[1] w-32 bg-base-100 m-2  rounded-sm flex flex-col flex-wrapre
                            relative border shadow-lg shadow-gray-500/30 left-10 top-2">
                          <li className={`${product?.stock >= 1 ? 'block' : 'hidden'} h-[32px] p-2 pl-3 cursor-pointer  
                            border-l-2 hover:border-l-2   hover:border-[#820e55] hover:bg-gray-200/50
                            text-[#000000e6] text-[15px] font-medium  block float-left`}>
                            <button onClick={() => setInput(1)}>1 unidad</button>
                          </li>
                          <li className={`${product?.stock >= 2 ? 'block' : 'hidden'} h-[32px] p-2 pl-3 cursor-pointer  
                            border-l-2 hover:border-l-2   hover:border-[#820e55] hover:bg-gray-200/50
                            text-[#000000e6] text-[15px] font-medium  block float-left`}>
                            <button onClick={() => setInput(2)}>2 unidad</button>
                          </li>
                          <li className={`${product?.stock >= 3 ? 'block' : 'hidden'} h-[32px] p-2 pl-3 cursor-pointer  
                            border-l-2 hover:border-l-2   hover:border-[#820e55] hover:bg-gray-200/50
                            text-[#000000e6] text-[15px] font-medium  block float-left`}>
                            <button onClick={() => setInput(3)}>3 unidad</button>
                          </li>
                        </ul>

                      </span>
                      <span className='text-[#0000008c] text-[11px] font-bungee ml-[6px] overflow-hidden text-ellipsis  w-auto'>
                        ({product?.stock} disponibles)
                      </span>

                    </div>
                  </div>
                </div>


                {product?.talla &&
                  <div className="w-full my-2 font-b">
                    <div >
                      <p className="text-lg">Talle:
                      </p>
                    </div>
                    <div className=" w-full flex flex-row justify-between my-2 ml-1">
                      <div className=" w-9 h-8 p-2 px-3 rounded-md   flex items-center justify-center border-2 
                                border-[#820e55] hover:shadow-sm hover:shadow-[#820e55]  hover:font-semibold
                                transition-all duration-150">
                        <p>{product.talla}</p>
                      </div>
                    </div>
                    <div >
                      {/* Modal Talle*/}
                      <input type="checkbox" id="guide_waist" className="modal-toggle" />
                      <div className="modal">
                        <div className=" absolute w-[55rem] rounded-xl overflow-hidden">
                          <img src={GuiaTalle} alt="guide_waist" />
                        </div>
                        <label className="modal-backdrop " htmlFor="guide_waist">Close</label>
                      </div>

                      <label htmlFor="guide_waist" >
                        <div className='flex items-center mt-2 cursor-pointer w-fit'>
                          <PiRuler className='w-4 h-4 mx-1 fill-[#820e55]' />
                          <span className="font-bold text-sm  text-[#820e55]">Guía de talles</span>
                        </div>
                      </label>
                    </div>
                  </div>}


                <div className='mt-[26px] w-full'>
                  <div className='w-full box-border'>
                    <div >
                      {/* <button className='w-full bg-[#3483fa] border-transparent text-white 
                          rounded-md inline-block text-[16px] font-semibold h-12 px-6 text-center 
                          hover:bg-[#2968c8] hover:transition-colors hover:duration-400'>
                      <span className='relative top-[-1px] flex h-full justify-center items-center'>Comprar ahora</span>
                    </button> */}
                      <form onSubmit={SubmitAddCart}>
                        <button disabled={product.stock <= 0 ? true : false} className={`disabled:opacity-60 disabled:shadow-none w-full mt-[8px] bg-[#951a667e] border-transparent text-[#820e55] 
                          rounded-md inline-block text-[16px] font-bold h-12 px-6 text-center active:shadow-md active:shadow-[#951a667e]`}>
                          <span className='relative top-[-1px] flex h-full justify-center items-center'>
                            {product.stock <= 0 ? 'Agotado' : 'Agregar al carrito'}
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>


              </div>
              <div className='border border-solid border-[#0000001a] rounded-lg text-[14px] p-4 w-full 
                  flex flex-col flex-wrap bg-gray-100 font-bungee'>
                <div className='p-2'>
                  <h3 className='text-lg'>Medios de pago</h3>

                  <div className='mt-4 pl-2 text-base'>
                    <p>Tarjetas de crédito</p>
                    <p className='text-xs text-[#0000008c]'>¡Mismo precio en cuotas con bancos seleccionados!</p>
                    <div className='flex mt-1 space-x-4'>
                      <img src={VisaCredito} alt="VisaCredito" />
                      <img src={MCCredito} alt="MCCredito" />
                      <img src={TarjetaNaranja} alt="TarjetaNaranja" />
                    </div>
                  </div>

                  <div className='mt-4 pl-2 text-base'>
                    <p>Tarjetas de débito</p>
                    <div className='flex mt-1 space-x-4'>
                      <img src={VisaDebito} alt="VisaDebito" />
                      <img src={MCDebito} alt="MCDebito" />
                    </div>
                  </div>

                  <div className='mt-4 pl-2 text-base'>
                    <p>Efectivo</p>
                    <div className='flex mt-1 space-x-4'>
                      <img src={PagoFacil} alt="PagoFacil" />
                      <img src={RapiPago} alt="RapiPago" />
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div className='w-full pb-10 box-border basis-0 flex-grow flex-shrink  '>
              <div className='flex flex-row flex-wrap box-border '>
                <div className='basis-0 flex-shrink flex-grow-[2] w-full box-border '>
                  <div className='flex flex-row flex-wrap box-border '>
                    <div className='mb-[68px] w-full h-full min-h-[500px] relative box-border'>

                      <div className='h-auto w-full ml-8 mt-16 ml absolute'>
                        {product && product.imagen.map((img, index) => {
                          if (index < 5) {
                            return (
                              <div key={index} className='block mb-2'>
                                <label className='relative'>
                                  <div className={`rounded cursor-pointer
                                      inline-flex  overflow-hidden relative left-6
                                       ${img === imgSelected ? 'border-[#820e55] border-[2px] shadow-sm shadow-[#dd75b5]'
                                      : 'border border-solid border-[#00000040] '} bg-white `}>
                                    <div className='h-20 w-20 p-[2px]   box-border'>
                                      <img className='object-contain h-full w-full' src={img} alt={img.alt}
                                        onClick={() => setImgSelected(img)} />
                                    </div>
                                  </div>
                                </label>

                                {/* esta es la imagnea mostrar  */}
                                <figure className='left-[50%] -translate-x-[50%] w-[600px] flex text-center 
                                  bg-white h-full m-2 p-4 min-h-[600px] absolute top-0 justify-center '>
                                  <div className='w-[500px]  overflow-hidden cursor-none'>
                                    <img className='w-full h-full object-contain box-border '
                                      src={imgSelected} alt={`${imgSelected}_alt`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
                                    <div className='magnify' style={magnifyStyle}></div>
                                  </div>
                                </figure>
                              </div>)
                          }
                        })}
                      </div>

                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>



      </div >
    )
  }
}
export default DetailProduct