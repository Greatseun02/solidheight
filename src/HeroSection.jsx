import React from 'react'
import Header from './components/Header'
import Container from './components/Container'

export default function HeroSection() {
  return (

    <div id='home' className='bg-black bg-opacity-[0.6] pt-4 hero pb-10'>
        <Header/>
        <Container className="text-white text-center mt-32">
          <div>
              <h1 className='text-[48px] font-bold leading-[56.8px] w-[95%] mx-auto mt-10'>
                Making property selling and renting easier in Lagos
              </h1>
              <p className=' opacity-[0.8]'>With our all-in-one platform, easily list, market and manage your Lagos properties while we connect you with quality tenants and buyers.</p>
              <div className='mt-5 mb-10 flex gap-2 justify-center'>
                <a target="_blank" href='https://forms.gle/Vr4KstWQkYSgdc59A'><button className='px-8 py-3 bg-white text-primary font-medium rounded-md '>Join App WaitList</button></a>
                <a href='#get-started'><button className='px-8 py-3 bg-black  border-[1px]  text-white font-medium rounded-md '>Get Started</button></a>
              </div>
          </div>
          <div>
            <img></img>
          </div>     
        </Container>

    </div>
  )
}
