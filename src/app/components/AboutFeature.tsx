import React from 'react'
import Image from 'next/image'
import room from '../../../public/room.jpeg'

const AboutFeature = () => {
    return (
        <div className='max-w-[1444px] md:h-[603px]  m-auto'>
            <div className='w-11/12 flex flex-col md:flex-row m-auto  h-full bg-gray-200'>
                <div className='w-full md:w-1/2 h-[360px] md:h-full'>
                    <Image src={room} alt='' className='object-cover h-full ' />

                </div>
                <div className='w-full md:w-1/2 md:p-16 p-4'>

                    <div className=' w-full h-full md:h-1/2  flex flex-col gap-8'>
                        <h1 className=' font-bold text-xl'>Our service isn’t just personal, it’s actually hyper personally exquisite</h1>
                        <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                        <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    </div>
                    <div className=' w-full   flex items-end md:h-1/2 py-6 border-2'>
                    <button className='w-full md:w-44 p-5 bg-white '>Get in Touch </button>
                    </div>
                </div>
                      </div>
        </div>
    )
}

export default AboutFeature