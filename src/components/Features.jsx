import React from 'react'
import Container from './Container'

import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { ImExit } from "react-icons/im";



export default function Features() {
    const cards = [
        {
            id:1,
            title:"Financing and Investment",
            paragraph:"We offer shared mortgage services, structured investment plans, financial advice, and tax planning to help you smoothly finance, optimize, and manage the tax implications of your co-owned vacation home.",
            icon:<GiTakeMyMoney />
        },
        {
            id:2,
            title:"Property Management",
            paragraph:"We provide comprehensive property management services including regular upkeep, repairs, cleaning, and utilities management to ensure your co-owned vacation home is always in top condition.",
            icon:<IoMdHome />
        },
        {
            id:3,
            title:"Scheduling and Booking",
            paragraph:"In our flagship product we offer an online booking system, conflict resolution services, and usage analytics to streamline scheduling and maximize the enjoyment of your co-owned vacation home.",
            icon:<RiCalendarScheduleFill />
        },
        {
            id:4,
            title:"Exit Strategies",
            paragraph:"We provide structured buyout options, resale services, and regular market valuations to facilitate smooth and informed exits from your co-owned vacation home investment.",
            icon:<ImExit />
        }
    ]
    function Card({icon, title, paragraph}){
        return(
            <div className='flex gap-5 text-left '>
                <p className='text-4xl text-[#555555]'>{icon}</p>
                <div className='grid gap-3 pr-105 '>
                    <h3 className='font-bold text-xl '>{title}</h3>
                    <p>{paragraph}</p>
                </div>
            </div>
        )
    }
  return (
    <div id='services' className=' text-center py-10'>
        <Container>
            <h2 className='text-[42px] font-light mb-3'>Our Services</h2>
            <p className='px-10'>
                We offer premium services that makes co-owing easier and worth it. With the perks and benefits we offer you
                stand a chance to get that dream vacation house you deserve without stress.
            </p>
            <div className='pt-10 gap-10 grid '>
                {
                    cards.map(
                        card=>
                        <Card icon={card.icon} key={card.id} title={card.title} paragraph={card.paragraph}/>
                    )
                }
            </div>
        </Container>
    </div>
  )
}
