import React from 'react'


import MostPopular from '../components/MostPopular'
import NewsProdutcs from '../components/NewsProdutcs'

import Principal from '../components/Princial'

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