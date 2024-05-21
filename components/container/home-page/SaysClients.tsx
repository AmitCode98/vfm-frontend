import React from 'react'
import Marquee from 'react-fast-marquee'

export default function SaysClients() {
  return (
    <div className='text-[150px] xl:text-[200px] font-bold uppercase bg-violet-300'>
       <Marquee autoFill >
       <h1 className='flex gap-10'>Clients<span className='text-white text-shadow '>says.</span></h1>
       </Marquee>
    </div>
  )
}
