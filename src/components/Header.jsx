import React, { useRef } from 'react'
import Hamburger from "../assets/hamburger.svg"
import Logo from "../assets/logo.png"
import Container from './Container'

export default function Header() {
  const toggled = useRef(null)
  function toggle(){
      toggled.current.classList.toggle("hidden")
      toggled.current.classList.toggle("flex")
  }
  return (
    <Container className=''>
      <div className="rounded-lg px-5 bg-white grid grid-cols-2 py-4  xl:grid-cols-12 items-center">
          <img src={Logo} className='w-16'>

          </img>
          <div className='grid justify-end xl:hidden'>
              <div onClick={toggle} className='rounded-md border-2 border-black px-3 py-2'>
                  <img className=' w-3 ' src={Hamburger}></img>
              </div>
                  
          </div>
          <div ref={toggled} className=' col-span-2 gap-3 pt-10 hidden  flex-col justify-center text-center xl:justify-end  xl:pt-0  xl:flex xl:flex-row xl:items-center xl:col-span-10'>
              <div className='gap-3 xl:gap-10 flex flex-col xl:flex-row mx-auto xl:items-center text-lg text-[#555555]'>
                  <a className='hover:text-primaryBlue' href='#home'>Home</a>
                  <a className='hover:text-primaryBlue' href='#about'>About</a>
                  <a className='hover:text-primaryBlue' href='#services'>Services</a>
                  <a className='hover:text-primaryBlue' href='#get-started'>Get Started</a>
                  <a className='hover:text-primaryBlue' href='#contact'>Contact</a>
              </div>
          </div>
    
      </div>
    </Container>
  
  )
}
