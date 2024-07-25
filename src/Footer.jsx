import React from 'react'
import Container from './components/Container'

export default function Footer() {
  return (
    <div id='contact' className='py-5 bg-primary'>
        <Container className="text-white">
            <p className='font-semibold text-[24px] mb-5'>Contact Information</p>
            <p className='mb-4'>3, Omosola Adeleke Street, Kosofe, Lagos, Nigeria</p>
            <p>+234 9064576893</p>
            <div className='py-3 mt-4'>
                <p className='font-semibold text-[24px]'>Links</p>
                <div className='grid gap-3 pt-4 xl:flex'>
                    <a className='hover:text-primaryBlue' href='#home'>Home</a>
                  <a className='hover:text-primaryBlue' href='#about'>About</a>
                  <a className='hover:text-primaryBlue' href='#services'>Services</a>
                  <a className='hover:text-primaryBlue' href='#get-started'>Get Started</a>
                  <a className='hover:text-primaryBlue' href='#contact'>Contact</a>
                </div>
            </div>
        </Container>
        <p className='mt-4 text-center text-[#555555] text-sm'>
            ©2024 SolidHeight.
        </p>
    </div>
  )
}
