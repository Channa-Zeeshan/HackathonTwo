import React from 'react'
import Image from 'next/image'
import signup from '../../../public/signup.jpg'
import { CircleCheck } from 'lucide-react';

const Email = () => {
  return (
    <div className='font-thin block bg-[#F9F9F9] text-black max-w-[1440px] md:h-[550px] m-auto p-10'>
        <div  className='   w-11/12 bg-white md:h-[444px] flex justify-center items-center m-auto'>
            
            <div className='flex  md:w-6/12 item-center justify-center text-center  flex-col  m-auto md:py-5 '>
          <div className='w-[329px]  md:w-[550px] '>
            <div className='w-full h-[68px]flex flex-col md:items-center md:justify-center md:text-center  my-6' >
            <h1 className='font-normal  text-xl md:text-3xl leading-2 '> Join the club and get the benefits</h1>
            <p className='font-normal  text:sm md:text-lg  '>Sign up for our newsletter and receive exclusive offers on new ranges, 
              sales, pop up stores and more</p>

            </div>
            <div className='py-2 md:flex  justify-around w-full font-normal'>
              <div className='flex gap-3 mb-1'>  <span> < CircleCheck  className='bg-white text-black rounded-full'/></span> <span>Exclusive offers</span> </div>
              <div className=' flex gap-3 mb-1'>  <span> < CircleCheck  className='bg-white text-black rounded-full'/></span> <span>Free events</span> </div>
              <div className=' flex gap-3 mb-1'>  <span> < CircleCheck  className='bg-white text-black rounded-full'/></span> <span>Large discounts</span> </div>
               
            </div>
            <div className='w-full h-24 flex flex-row font-normal '>
              <input type='text' placeholder='your@email.com'   className='h-12  bg-slate-100 w-[224px] md:w-[445px]' />  <button className='bg-[#2A254B] text-white h-12 w-20'>Sign up</button>
            </div>

        </div >
       
             
          </div>

        </div>
        

    </div>
  )
}

export default Email