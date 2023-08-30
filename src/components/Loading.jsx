import React from 'react'
import { DotPulse } from '@uiball/loaders'

const Loading = () => {
    return (
        <div className='flex h-screen'>
            <div className=' m-auto space-x-3 text-center flex  items-end -skew-y-6'>
                <span className='text-2xl  lg:text-5xl'>Loading</span>
                <DotPulse  size={32} color="#1e1b4b" />
            </div>
        </div>
    )
}

export default Loading