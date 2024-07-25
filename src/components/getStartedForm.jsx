import React, { useRef } from 'react'

export default function GetStartedForm() {
    const paragraph = useRef(null)
    function handleSubmit (event){
        event.preventDefault()
        event.target.reset()
        
        paragraph.current.classList.remove("hidden")

        setTimeout(()=>{paragraph.current.classList.add("hidden")}, 5000)
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form'>
            <p className='mb-5'>Select one of the following</p>
            <div className='radio '>
                <input required className='' id='user' name='user' type="radio"></input>
                <label htmlFor='user'>I am a buyer</label>
            </div>
            <div className='radio'>
                <input required id='user' name='user' type="radio"></input>
                <label htmlFor='user'>I am a seller</label>

            </div>
            <div className='radio'>
                <input required id='user' name='user' type="radio"></input>
                <label htmlFor='user'>I am an agent or broker</label>
            </div>
        </div>
        <div className='input'>
            <label htmlFor="name">Full Name *</label>
            <input required name='name' id='name' type='text'
            
            >
            </input>
        </div>
        <div  className='input'>
            <label htmlFor='email'>Email *</label>
            <input required id='email' name='email' type='email'

            ></input>
        </div>
        <div  className='input'>
            <label htmlFor='phone'>Phone *</label>
            <input required id='phone' name='phone' type='tel'

            ></input>
        </div>
        <div  className='input mb-10'>
            <label>What location are you looking to own a vacation home?</label>
            <input id='location' name='location' type='text'

            ></input>
        </div>
        <p ref={paragraph} className='hidden mb-2 font-bold '>Thank you for your response. We would get back to you soon.</p>
        <button type='submit' className='mb-20 w-full text-white bg-primary py-5 font-bold text-xl'>
            Submit
        </button>
        
    </form>
  )
}
