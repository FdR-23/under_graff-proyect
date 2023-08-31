import React, { useEffect } from 'react'

import { TYPE } from '../../../Reducer/actions';
import { useAppContext } from '../../AppProvider'
import {  useSearchParams } from 'react-router-dom';
import { FilterCategories } from '../../../Services/Request';

const Filters = ({ filters }) => {
    const { dispatch } = useAppContext();
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('categories');

    
    useEffect(() => {
        FilterCategories(query)
            .then((category) => {
                dispatch({
                    type: TYPE.FILTER_BY_CATEGORIES,
                    payload: category
                });
            })
    }, [query])


    return (
        <div className='py-4 w-full block '>
            <div className='text-xl md:text-2xl leading-[1.25] mb-3  tracking-widest skew-x-3 text-white/50 '>
                {filters && filters.name.charAt(0).toUpperCase() + filters.name.slice(1)}
            </div>
            <ul className='m-0 p-0'>
                {filters?.values && filters?.values.map((value, index) =>
                    <li key={index}
                        className='mb-2 flex flex-nowrap'>
                        <button className='pl-3' onClick={() => setSearchParams({ categories: value.nombre })}>
                            <span className='text-base md:text-lg hover:underline hover:font-semibold'
                            >{value.nombre}</span>
                        </button>
                    </li>
                )}
            </ul>
        </div >
    )
}

export default Filters

