import React from 'react'


import Offerts from '../components/Offerts'
import NewsProdutcs from '../components/NewsProdutcs'

import image from '../assets/img/CarouselBanner/1.png'
import Principal from '../components/Princial'

const Home = () => {


    return (
        <main className='flex flex-col  '>

            <Principal
                
            />

            <Offerts />
            <NewsProdutcs />

        </main>
    )
}

export default Home