import React from 'react'
import TestomonialCard from '../components/testimonialCard'

const Main = ()=>{
    return (
        <>
            <div className='flex items-center gap-10 flex-col'>
                <div>
                    <h3 className='text-2xl font-bold'>TESTIMONIALS</h3>
                    <h4 className='text-md font-semibold text-gray-500'>Lorem ipsum dolor sit amet.</h4>
                </div>
                <div className='flex gap-10'>
                    <TestomonialCard/>
                    <TestomonialCard/>
                    <TestomonialCard/>
                </div>
            </div>
            
            
        </>
    )
}

export default Main;