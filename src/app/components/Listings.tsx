import React from 'react'
import Image from 'next/image'
import pot from '../../../public/pots.jpg'
import clay from '../../../public/clay.jpg'
import light from '../../../public/light.jpg'
import chair from '../../../public/chair.jpg'
const Listings = () => {
  return (
    <div className='flex justify-center'>

    <div className='w-[390px] h=[744px] sm:w-[700px] md:w-full lg:w-[1440px] flex flex-col justify-around  m-auto'>

        <div className='grid grid-cols-2 md:grid-cols-4 m-2  sm:gap-5 lg:gap-4 w-full'>
            <div className='my-8'>
                <Image src={pot} alt='pot pic' className='w-[163px] h-[201px]   sm:w-[305px] sm:h-[375px]'></Image>
                <div className='w-[145px] h-[63px] mt-5 leading-9'>
                    <h1>Rustic Vase Set</h1>
                    <h1>£155</h1>
                </div>
            </div>

            <div className='my-8' >
                <Image src={light} alt='light' className='w-[163px] h-[201px]  sm:w-[305px] sm:h-[375px]'></Image>
                <div className='w-[145px] h-[63px] mt-5 leading-9'>
                    <h1>The Lucy Lamp</h1>
                    <h1>£399</h1>
                </div>
            </div>

            <div className='my-8' >
                <Image src={clay} alt='Vase' className='w-[163px] h-[201px]  sm:w-[305px] sm:h-[375px]'></Image>
                <div className='w-[145px] h-[63px] mt-5 leading-9'>
                    <h1>The Silky Vase</h1>
                    <h1>£125</h1>
                </div>
            </div>

            <div className='my-8' >
                <Image src={chair} alt='chair' className='w-[163px] h-[201px]  sm:w-[305px] sm:h-[375px]'></Image>
                <div className='w-[145px] h-[63px] mt-5 leading-9'>
                    <h1>The Dandy Chair</h1>
                    <h1>£250</h1>
                </div>
            </div>

        </div>

        <button className=' m-auto w-full sm:w-[190px] h-[64px] py-4 px-8 font-normal text-4 leading-6 bg-gray-100'> View Collection</button>

    </div>

    </div>
  )
}

export default Listings