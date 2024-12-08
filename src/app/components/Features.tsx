import React from 'react'
import { Truck } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { Sprout } from 'lucide-react';

const Features = () => {
  return (
    <div className='font-thin'>
        <div className='max-w-[390px] max-h-[1052px] m-auto sm:max-w-[1440px] sm:flex sm:flex-col sm:max-h-[476px] items-center '>

          <div className='max-w-[274px] max-h-[56px] my-7'>
          <h4 className='font-normal text-lg leading-12'> What makes our brand <br className='sm:hidden'/>different</h4>
        </div>  


        <div className=' sm:max-w-[1440] columns-1 sm:mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4'>

        <div className=' max-w-[342px] max-h-[196px] sm:max-w[209px] sm:max-h[148px] bg-gray-100 px-6 py-9 mb-4 sm:mr-4'>
            <div className='w-[294px] [124px]'>
            <div> <Truck /></div>
            <h1 className='font-normal text-lg leading-12 my-3'>Next day as standard</h1>
            <p className='font-normal text-sm leading-6'>Order before 3pm and get your order the next day as standard</p>
            </div>
            

            
        </div>
        <div className=' max-w-[342px] max-h-[196px] sm:max-w[209px] sm:max-h[148px] bg-gray-100 px-6 py-9 mb-4 sm:mr-4'>
            <div className='w-[294px] [124px]'>
            <div> <CircleCheck /></div>
            <h1 className='font-normal text-lg leading-12 my-3'>Made by true artisans</h1>
            <p className='font-normal text-sm leading-6'>Handmade crafted goods made with real passion and craftmanship</p>
            </div>
            

            
        </div>
        <div className=' max-w-[342px] max-h-[196px] sm:max-w[209px] sm:max-h[148px] bg-gray-100 px-6 py-9 mb-4 sm:mr-4'>
            <div className='w-[294px] [124px]'>
            <div> <CreditCard /></div>
            <h1 className='font-normal text-lg leading-12 my-3'>Unbeatable prices</h1>
            <p className='font-normal text-sm leading-6'>For our materials and quality you won’t find better prices anywhere</p>
            </div>
            

            
        </div>
        <div className=' max-w-[342px] max-h-[196px] sm:max-w[209px] sm:max-h[148px] bg-gray-100 px-6 py-9 mb-4 sm:mr-4'>
            <div className='w-[294px] [124px]'>
            <div> <Sprout /></div>
            <h1 className='font-normal text-lg leading-12 my-3'>Recycled packaging</h1>
            <p className='font-normal text-sm leading-6'>We use 100% recycled to ensure our footprint is more manageable</p>
            </div>

        </div>
        </div>


    </div>
    </div>
  )
}

export default Features