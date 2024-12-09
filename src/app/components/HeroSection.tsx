import React from 'react'
import Image from 'next/image'
import background from '../../../public/heropic.jpg'






const HeroSection = () => {
    return (
        <div className=' max-w-[1440px] m-auto '>
            <div className='sm:relative sm:w-full w-[300px] h-[640px] sm:h-[704px] sm:flex-row  justify-center items-center m-auto'>
                <div className=' flex w-full justify-around sm:h-full items-center '>
                    <div> </div>
                    <div className=' mb-5  max-w-[630px] sm:h-[444px] h-[350px] bg-white text-black flex flex-col justify-around sm:p-6 '>

                        <div className='  flex flex-col  sm:w-[513px] sm:h-[137px] sm:gap-[20px] w-full px-3' >
                            <h2 className=' font-normal sm:leading-[44.8px] text-2xl sm:text-[32px] leading-12'> Luxury homeware for people who love timeless design quality</h2>
                            <p className=' invisible sm:visible '> Shop the new Spring 2022 collection today</p>
                            <p  className='sm:hidden text-sm leading-9'>With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
                        </div>
                        <div className=' w-full'>
                            <button className='mb-16 w-full sm:w-[190px] h-[64px] py-4 px-8 font-normal text-4 leading-6 bg-gray-300'> View Collection</button>
                        </div>


                    </div>
                </div>
                <div className=' sm:absolute w-full overflow-hidden sm:max-w-full   sm:h-[704px]  sm:top-0 sm:left-0 sm:-z-10 m-auto  ' >
                    
                <Image src={background} alt='background' className=' sm:h-[704px] object-cover  w-full overflow-hidden'></Image>

                </div>
            </div>


        </div>
    )
}

export default HeroSection