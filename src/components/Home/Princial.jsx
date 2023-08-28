import React, { useState, useEffect } from 'react'
import image1 from '../../assets/img/CarouselBanner/1.png'
import image2 from '../../assets/img/CarouselBanner/2.webp'

const Principal = () => {


    const [images, setImages] = useState([image1, image2]);

    const [selectIndex, setSelectIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState((prev) => images ? images[0] : undefined);
    


   
    const selectImage = (images, next = true) => {
        const condition = next ? selectIndex < images.length - 1 : selectIndex > 0;
        const nextIndex = next ? (condition ? selectIndex + 1 : 0) : (condition ? selectIndex - 1 : images.length - 1)
        setSelectedImage(images[nextIndex]);
        setSelectIndex(nextIndex);
    }
    const previus = () => {
        selectImage(images, false)
    }
    const next = () => {
        selectImage(images)
    }


    return (
        <section className=' h-[calc(100vh-100px)]  lg:h-[calc(100vh-150px)]  w-full'>
            <div className='relative w-full h-full flex justify-center items-center'>

                <button className={`${!images ? 'hidden' : `absolute h-[80px] w-[80px] left-0 sm:left-4 lg:left-10 flex justify-center  opacity-40  items-center rounded-full 
                    bg-transparent top-[50%] -translate-y-[50%]  hover:opacity-80` } `}
                    onClick={() => previus()}>
                    <span >
                        <svg className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] xl:w-[150px] xl:h-[150px]' viewBox="0 0 24 24" fill="#030303"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z"></path></svg>
                    </span>
                </button>

                {/* Skeleton Img */}
                <div className={`${!images ? `flex justify-center items-center relative rounded-sm 
                    w-full h-[calc(100vh-100px)] sm:h-[calc(100vh-150px)] bg-gray-300  animate-pulse` : `hidden`}`}>
                    <svg className="w-20 h-20 object-fill" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>

                <div className={`${images ? 'overflow-hidden transition-all duration-700 h-full w-full' : 'hidden'}`}>
                    <img className='object-cover sm:object-fill h-full w-full'
                        src={selectedImage} alt={`${selectedImage}_PrincialBanner`} />
                </div>


                <button className={`${!images ? `hidden` : `absolute  right-0 sm:right-4 lg:right-10 flex justify-center h-[80px] w-[80px] opacity-40 items-center rounded-full 
                        bg-transparent top-[50%]  -translate-y-[50%]  rotate-180 hover:opacity-80`}`}
                    onClick={() => next()}>
                    <span >
                        <svg className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] xl:w-[150px] xl:h-[150px]'
                            viewBox="0 0 24 24" fill="#030303">
                            <path
                                d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z"></path></svg>
                    </span>

                </button>

            </div>

            <ul className='absolute bottom-4 right-[50%] m-0 translate-x-[50%] flex '>
                {/* {image && image.map((elemet, index) =>
                    <li key={index} className='flex'>
                        <button className={`${selectIndex === index ? 'bg-white shadow-button-hover-pagination' :
                            'bg-[#00000040] shadow-button-pagination '}
                        w-[6px] h-[6px] mx-[2px] rounded-[50%]`}
                            type="button">
                            <div className="absolute w-[1px] h-[1px] mr-[-1px] mb-[-1px] whitespace-nowrap overflow-hidden ">
                                {elemet}</div>
                        </button>
                    </li>
                )} */}
            </ul>

        </section >

    )
}

export default Principal