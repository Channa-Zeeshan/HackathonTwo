import React from 'react'
import Image from 'next/image'
import signup from '../../../public/signup.jpg'
import { CircleCheck } from 'lucide-react';

const Email = () => {
  return (
    <div className='font-thin'>
        <div  className='w-full h-[370px] relative lg:max-w[1440px] lg:max-h[244px] flex justify-center'>
            <div className='absolute top-0 -z-10'>
                <Image src={signup} alt='signup' className=' object-fill  lg:max-h-[444px] '></Image>

            </div>
            <div className='flex   item-center justify-between md:justify-center flex-col  md:py-16'>
          <div className='w-[329px] h-[230px] text-white md:w-[550px] md:my-12'>
            <div className='w-full h-[68px] text-white flex flex-col md:items-center md:justify-center md:text-center  my-6' >
            <h1 className='font-normal md:text-3xl leading-2 '> Join the club and get the benefits</h1>
            <p className='font-normal md:text-xl leading-2 '>Sign up for our newsletter and receive exclusive offers on new ranges, 
              sales, pop up stores and more</p>

            </div>
            <div className='py-9 md:flex md: justify-around w-full '>
              <div className='flex gap-3 mb-2'>  <span> < CircleCheck  className='bg-white text-black rounded-full'/></span> <span>Exclusive offers</span> </div>
              <div className=' flex gap-3 mb-2'>  <span> < CircleCheck  className='bg-white text-black rounded-full'/></span> <span>Free events</span> </div>
              <div className=' flex gap-3 mb-2'>  <span> < CircleCheck  className='bg-white text-black rounded-full'/></span> <span>Large discounts</span> </div>
               
            </div>
            <div className='w-full h-24 flex flex-row'>
              <input type='text' placeholder='your@email.com' value='1' className='h-12 w-[224px] md:w-[445px]' />  <button className='bg-[#2A254B] h-12 w-20'>Sign up</button>
            </div>
             
          </div>

        </div>


        </div>
        

    </div>
  )
}

export default Email