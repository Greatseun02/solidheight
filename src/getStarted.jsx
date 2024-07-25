import React from 'react'
import GetStartedForm from './components/getStartedForm'
import Container from './components/Container'

export default function GetStarted() {
  return (
    <div id='get-started' className='bg-bgLight py-10 text-link '>

    <Container>
        <p className='text-center font-bold tracking-widest text-lg '>GET STARTED</p>
        <h2 className='text-center mt-3 font-light text-[36px]'>Find your vacation home</h2>
        <p className='text-center mt-3 mb-8'>Fill the form below and we would get back to you.</p>
        <GetStartedForm>

        </GetStartedForm>
        </Container>   
    </div>
  )
}
