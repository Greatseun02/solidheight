import React from 'react'
import Container from './components/Container'

export default function About() {
  return (
    <div id='about' className='bg-bgLight '>
    <Container className="py-14 text-center">
        <div>
            <div>
                <p className='text-center text-primary'>Co-own that dream vacation home.</p>
                <h2 className='mt-6 text-[42px] font-bold leading-[50.4px] px-10'>Simplifying co-ownership in Nigeria today. </h2>     
            </div>
            <div className='pt-5 px-10'>
                <p className='leading-[26px]'>
                    Solidheight is a startup on a mission to make buying, selling, renting and managing properties in Lagos a breeze. We understand the hassle many face when dealing with real estate and aim to solve that with our all-in-one platform.
                </p>
                <a href='#get-started'><button className='px-8 py-3 bg-primary text-white font-medium rounded-md mt-5 '>Get Started</button></a>
            </div>
        </div>
        <div className='bg-primary py-10 text-white grid grid-cols-2 gap-y-7 rounded-lg mt-10 about-details xl:grid-cols-4'>
            <div className='border-r-[1px] border-bgLight '>
                <h3 className='font-bold text-[32px]'>1000+</h3>
                <p className='font-semibold text-[24px] opacity-80'>Duplexes</p>
            </div>
            <div className='xl:border-r-[1px] xl:border-bgLight '>
                <h3 className='font-bold text-[32px]'>1000+</h3>
                <p  className='font-semibold text-[24px]  opacity-80'>Apartments</p>
            </div>
            <div className='border-r-[1px] border-bgLight '>
                <h3 className='font-bold text-[32px]'>100+</h3>
                <p className='font-semibold text-[24px]  opacity-80'>Villas</p>
            </div>
            <div>
                <h3 className='font-bold text-[32px]'>500+</h3>
                <p className='font-semibold text-[24px]  opacity-80'>Beach houses</p>
            </div>
        </div>
    </Container>
    </div>
  )
}
