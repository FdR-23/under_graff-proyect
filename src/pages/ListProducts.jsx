import React, { useEffect, useState } from 'react'
import Product from '../components/ListProducts/Product';
import { useAppContext } from '../components/AppProvider';

import SideMenu from '../components/ListProducts/SideMenu';

import { FiMenu } from 'react-icons/fi';
import Filters from '../components/ListProducts/Filters/Filters';

const ListProducts = () => {
    const [toggleFilter, setToggleFilter] = useState(false);
    const [loading, setLoading] = useState(true);
    const { products, categories } = useAppContext();

    useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, [500])
    }, [products]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const categories = await GetAllCategories()
    //             dispatch({
    //                 type: TYPE.GET_ALL_CATEGORIES,
    //                 payload: categories
    //             });
    //             const data = await GetAllProducts();
    //             dispatch({
    //                 type: TYPE.GET_ALL_PRODUCTS,
    //                 payload: data
    //             });
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //             setLoading(false);
    //         }
    //     };
    //     if (products.length === 0 || categories.length === 0) {
    //         fetchProducts();
    //     } else {
    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 300)
    //     }
    // }, []);

    if (loading) {
        return <p>Loading</p>
    } else {
        return (
            <div className='max-w-screen-xl w-full mx-auto mb-2'>
                <div className='flex flex-col items-center overflow-visible w-full box-border'>

                    <div className='contents'>
                        <div className='block h-[90px] w-full'>
                        </div>
                    </div>

                    <div className='flex flex-col w-full items-center overflow-visible box-border rounded-sm'>

                        <div className='relative flex w-full mt-0   '>

                            <aside className='hidden md:flex md:flex-col md:min-w-[200px] md:w-60 px-4 box-borde overflow-hidden
                             bg-violet-950/60  rounded-sm rounded-r-none'>
                                <section className='flex flex-col w-full mt-12 overflow-hidden'>
                                    {categories && categories?.data.map((elemet, index) =>
                                        <Filters
                                            key={index}
                                            filters={elemet} />
                                    )}
                                </section>
                            </aside>

                            <div className='absolute  md:hidden w-10 h-10 top-2 left-6 overflow-hidden'>
                                <button className='h-full w-full border box-border rounded-lg overflow-hidden'
                                    onClick={() => setToggleFilter(true)}>
                                    <FiMenu className='w-full h-full stroke-slate-100/70 ' />
                                </button>
                                <SideMenu
                                    toggleFilter={toggleFilter}
                                    setToggleFilter={setToggleFilter}
                                />
                            </div>

                            <section className='flex-1 flex-col w-full box-border bg-violet-950/75 rounded-sm rounded-l-none'>
                                <div className='mb-6 mt-2 text-right '>
                                    <div className='inline-block w-max relative min-w-max ' >
                                        <div className='items-center inline-flex'>
                                            {/* <div className='flex h-full mb-[-1px] '>
                                            <div className='text-[#333] text-[14px] font-semibold leading-[1.7] mr-[6px] whitespace-nowrap'>Ordenar por</div>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>

                                <ol className='w-full flex flex-col  lg:flex-row lg:flex-wrap  '>
                                    {products && products?.map((product) =>
                                        <Product
                                            key={product.id}
                                            product={product} />
                                    )}
                                </ol>
                            </section>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default ListProducts