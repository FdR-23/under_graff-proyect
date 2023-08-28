import React, { useEffect } from 'react'

import MostPopular from '../components/Home/MostPopular'
import NewsProdutcs from '../components/Home/NewsProdutcs'
import Principal from '../components/Home/Princial'

const Home = () => {

    return (
        <main className='flex flex-col  '>
            <Principal />
            <MostPopular />
            <NewsProdutcs />
        </main>
    )
}

export default Home