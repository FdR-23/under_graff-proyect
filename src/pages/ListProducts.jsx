import React from 'react'
import Product from '../components/Product';
import { useAppContext } from '../components/AppProvider';

const ListProducts = () => {

    const { products } = useAppContext();




    return (
        <div className='max-w-screen-xl w-full mx-auto bg-red-900'>

            <div className='flex flex-col items-center overflow-visible w-full box-border '>

                <div className='contents'>
                    <div className='block h-[90px] w-full bg-red-100 '>

                    </div>
                </div>

                <div className='flex flex-col w-full items-center overflow-visible box-border'>


                    <div className='flex w-full mt-0 px-4'>
                        <aside className=' w-60 pr-[14px] box-border bg-black'>

                            {/* <div>
                            <ol className='leading-[1.45] font-normal mb-4'></ol>
                            <h2 className='block relative text-[#333] text-[26px] font-semibold leading-[30px] '>
                                {products.query[0].toUpperCase() + products.query.slice(1)}
                            </h2>
                        </div>
                        <div className='items-center flex mb-4 mt-1 box-border  '>
                            <span className='w-max relative bottom-[2px] text-[14px] font-light leading-[1.29] '>
                                {products.paging.total} resultados
                            </span>
                        </div>

                        <section className='flex flex-wrap w-full'>
                            {products.filters && products.filters.map((elemet, index) =>
                                <FiltersSelected
                                    key={index}
                                    filters={elemet} />
                            )}
                        </section>

                        <section className='clear-both mt-9 block '>
                            {filterAvailable && filterAvailable.map((elemet, index) =>
                                <FilterAvailable
                                    key={index}
                                    filters={elemet} />
                            )}
                        </section> */}

                        </aside>


                        <section className='flex-1 flex-col w-full box-border bg-red-200'>
                            <div className='mb-6 mt-2 text-right '>
                                <div className='inline-block w-max relative min-w-max ' >
                                    <div className='items-center inline-flex'>
                                        <div className='flex h-full mb-[-1px] '>
                                            <div className='text-[#333] text-[14px] font-semibold leading-[1.7] mr-[6px] whitespace-nowrap'>Ordenar por</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ol className='w-full flex flex-wrap  '>
                                {products && products.map((product) =>
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

export default ListProducts