import React from 'react'
import Image from 'next/image'
import bedroom from '../../../public/bedroom.jpg'

const ProductCard = () => {
  return (
    <div>

        <div className='  max-w-[1440px] h-[628px] flex flex-col   m-auto justify-evenly items-center  mt-12 sm:flex-row '>
            <div className='w-[342px] lg:w-[634px] h-[281px] lg:h-[478px] bg-[#2A254B] text-white p-8 flex flex-col justify-between'>
                <div className='flex flex-col w-[278]  lg:w-[495px] h-[103] lg:h-[100px] justify-between'>
            <h1 className='font-normal text-[20px] lg:text-3xl leading-4 pt-3'  > It started with a small idea</h1>
            <p className='font-normal text-[12px] lg:text-xl leading-4 mt-9'> A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                </div>
                <button className='bg-[#F9F9F926]  h-12 w-full lg:w-36'> View Collection</button>

            </div>
            <div>
                <Image src={bedroom} alt="bedroom" className='w-[342px] h-[259px] lg:w-[634px] lg:h-[478px]'></Image>
            </div>

        </div>
    </div>
  )
}

export default ProductCard