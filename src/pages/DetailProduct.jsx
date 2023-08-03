import React, { useEffect, useState } from 'react'

import imgs from '../assets/img/Products/Jackets/1b.jpg'

import VisaCredito from '../assets/img/Tarjetas/VisaCredito.svg'
import MCCredito from '../assets/img/Tarjetas/MCCredito.svg'
import TarjetaNaranja from '../assets/img/Tarjetas/TarjetaNaranja.svg'
import VisaDebito from '../assets/img/Tarjetas/VisaDebito.svg'
import MCDebito from '../assets/img/Tarjetas/MCDebito.svg'
import PagoFacil from '../assets/img/Tarjetas/PagoFacil.svg'
import RapiPago from '../assets/img/Tarjetas/RapiPago.svg'


import '../index.css'

const DetailProduct = () => {
  let img = [imgs]
  let imgSelected = undefined
  let item = undefined
  let id = undefined

  const [magnifyStyle, setMagnifyStyle] = useState({ backgroundImage: `url(${imgs})` })


  const handleMouseMove = (e) => {
    const { target, offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    const yPercent = (offsetY / offsetHeight) * 100;
    const xPercent = (offsetX / offsetWidth) * 100;

    setMagnifyStyle((prev) => ({
      ...prev,
      display: `block`,
      top: `${offsetY - 55}px`, //son width: 200px(eso esta en index.css) - 100px
      left: `${offsetX + 35}px`,
      backgroundPosition: `${xPercent}% ${yPercent}%`
    }))
  }
  
  const handleMouseLeave = (e) => {
    setMagnifyStyle((prev) => ({ ...prev, display: `none` }))
  }


  return (
    <div className='max-w-screen-xl w-full  mx-auto'>

      <div className='bg-white min-w-[800px] rounded box-border mt-10'>
        <div className='relative flex flex-row-reverse flex-wrap pb-10 box-border'>

          <div className='ml-12 max-w-[368px] w-[368px] basis-0 flex-grow flex-shrink
            relative min-w-[325px] pr-6 mt-16 space-y-2'>



            <div className='border border-solid border-[#0000001a] rounded-lg text-[14px] p-4 w-full 
                  flex flex-row flex-wrap'>

              <div className='w-full box-border'>
                <div className='mb-2 mr-10'>
                  <span className='text-[#0000008c] text-[14px] font-normal whitespace-pre-wrap'>Nuevo</span>
                </div>
                <div className='flex'>
                  <h1 className='flex-auto text-[22px] mb-2 mr-7 leading-[1.18]  break-words'>
                    aca va el titulo
                  </h1>
                  <div className='relative'>
                    <button className=' absolute right-1 '>
                      <svg className='w-[22px] h-[22px] stroke-[#3483fa]  ' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M7.975 2c-2.235.116-4.365 1.203-5.82 2.89C.7 6.57 0 8.786 0 11c0 1.938.697 3.816 1.646 5.46.95 1.644 2.19 3.077 3.5 4.394 2.824 2.833 6.08 5.232 9.622 7.09.145.076.32.076.464 0 3.543-1.858 6.798-4.257 9.622-7.09 1.31-1.317 2.55-2.75 3.5-4.393C29.304 14.817 30 12.94 30 11c0-2.22-.7-4.428-2.154-6.11C26.39 3.202 24.26 2.115 22.026 2c-1.516-.078-3.045.286-4.362 1.04-1.097.626-1.975 1.558-2.664 2.614-.69-1.056-1.567-1.988-2.664-2.615C11.02 2.285 9.49 1.92 7.976 2zm.05 1c1.32-.068 2.665.25 3.813.906 1.148.656 2.107 1.652 2.72 2.824.186.36.698.36.885 0 .612-1.172 1.57-2.168 2.72-2.824 1.147-.656 2.49-.974 3.812-.906 1.942.1 3.837 1.062 5.115 2.54C28.37 7.023 29 9 29 11c0 1.73-.628 3.43-1.512 4.96-.885 1.535-2.064 2.904-3.342 4.186-2.686 2.697-5.788 4.975-9.146 6.766-3.358-1.79-6.46-4.07-9.146-6.766-1.278-1.282-2.457-2.65-3.342-4.185C1.628 14.43 1 12.73 1 11c0-2 .63-3.978 1.91-5.46C4.188 4.063 6.083 3.1 8.025 3z" /></svg>
                    </button>
                  </div>
                </div>
              </div>



              <div className='w-full flex flex-row flex-wrap box-border '>
                <div className='text-[#000000e6] inline-block  font-light mt-4 ' >

                  <div className='flex justify-start items-center translate-x-[-1px] '>
                    <span className='text-[#000000e6] text-[36px] font-normal leading-[1] inline-flex items-baseline  '>
                      <span className='pr-[6px] '>$</span>
                      {/* esto se puede cambiar */}
                      <span >{item?.base_price && handleInteger(item?.base_price)}</span>
                      <span className='text-[18px] mt-1 self-start ml-[1px]'>{item?.base_price && handleDecimal(item?.base_price)}</span>
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
                  <div className='flex max-w-[275px] relative top-[-1px]'>
                    <button className='leading-[1]'>
                      <span className='text-[#000000e6] text-[16px] font-normal block float-left'>Cantidad:</span>
                      <span className='text-[#000000e6] text-[16px] font-semibold ml-1 whitespace-nowrap block float-left'>1 unidad</span>
                      <span className='ml-[6px] align-bottom block float-left '>
                        <svg className=' mr-[2px] align-bottom' width="18px" height="18px" viewBox="0 0 24 24" fill="none">
                          <path d="M4 9L12 17L20 9" stroke="#3483fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>

                    </button>
                    <span className='text-[#0000008c] text-[14px] font-normal ml-[6px] overflow-hidden text-ellipsis whitespace-nowrap w-auto'>
                      (6 disponibles)</span>

                  </div>
                </div>
              </div>

              <div className='mt-[26px] w-full'>
                <div className='w-full box-border'>
                  <div >
                    {/* <button className='w-full bg-[#3483fa] border-transparent text-white 
                          rounded-md inline-block text-[16px] font-semibold h-12 px-6 text-center 
                          hover:bg-[#2968c8] hover:transition-colors hover:duration-400'>
                      <span className='relative top-[-1px] flex h-full justify-center items-center'>Comprar ahora</span>
                    </button> */}
                    <button className='w-full mt-[8px] bg-[#4189e626] border-transparent text-[#3483fa] 
                          rounded-md inline-block text-[16px] font-semibold h-12 px-6 text-center '>
                      <span className='relative top-[-1px] flex h-full justify-center items-center'>Agregar al carrito</span>
                    </button>
                  </div>
                </div>

              </div>


            </div>
            <div className='border border-solid border-[#0000001a] rounded-lg text-[14px] p-4 w-full 
                  flex flex-col flex-wrap'>
              <div className='p-2'>
                <h3 className='text-lg'>Medios de pago</h3>

                <div className='mt-4 pl-2 text-base'>
                  <p>Tarjetas de crédito</p>
                  <p className='text-sm text-[#0000008c]'>¡Mismo precio en cuotas con bancos seleccionados!</p>
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

          <div className='w-full pb-10 box-border basis-0 flex-grow flex-shrink '>
            <div className='flex flex-row flex-wrap box-border '>
              <div className='basis-0 flex-shrink flex-grow-[2] w-full box-border '>
                <div className='flex flex-row flex-wrap box-border '>
                  <div className='mb-[68px] w-full h-full min-h-[500px] relative box-border'>

                    <div className='h-auto w-full ml-8 mt-16 ml absolute'>
                      {/* hay que modificar las imagenes */}
                      {img && img.map((img, index) => {
                        if (index < 5) {
                          return (
                            <div className='block mb-2'>
                              <label className='relative'>
                                <div className={`rounded cursor-pointer
                                      inline-flex  overflow-hidden relative left-6
                              ${img === imgSelected ? 'border-solid border-[#820e55] border-[2px]'
                                    : 'border border-solid border-[#00000040] '}`}>

                                  <div className='h-20 w-20 p-[2px]   box-border'>
                                    <img className='object-contain h-full w-full' src={img} alt={img.alt}
                                      onClick={() => handleClick(img)} />
                                  </div>
                                </div>
                              </label>

                              {/* esta es la imagnea mostrar  */}
                              <figure className='left-[50%] -translate-x-[50%] w-[600px] flex text-center 
                                  bg-white h-full m-2 p-4 min-h-[500px] absolute top-0 justify-center '>
                                <div className='w-[500px] flex justify-center cursor-none'>
                                  <img className='object-contain box-border'
                                    src={img} alt={img.alt} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
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



    </div>
  )
}

export default DetailProduct