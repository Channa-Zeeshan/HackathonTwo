import React from 'react'
import { Truck } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { Sprout } from 'lucide-react';
import FeatureChild from './FeatureChild';

const FeatureCard = () => {
    const items = [
        {
          icon: <Truck />,
          heading: 'Next day as standard',
          paragraph:' Order before 3pm and get your order the next day as standard',
        },
        {
            icon: <CircleCheck />,
            heading: 'Made by true artisans',
            paragraph:' Handmade crafted goods made with real passion and craftmanship',
          },
          {
            icon: <CreditCard />,
            heading: 'Unbeatable prices',
            paragraph:' For our materials and quality you won’t find better prices anywhere',
          },
          {
            icon: <Sprout />,
            heading: 'Recycled packaging',
            paragraph:' We use 100% recycled to ensure our footprint is more manageable',
          },
       
      ];
  return (
    <div className='flex  flex-col justify-center items-center h-max-[1052px] max-w-[1440px] mx-auto my-10 '>
        <h1 className='text-xl p-8'> What makes our brand different</h1>
        <div className='w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 m-auto'>

        {items.map((item,index)=>(
            <div className='bg-gray-200'>
                    <FeatureChild
                    key={index}
                    icon={item.icon}
                    heading={item.heading}
                    paragraph={item.paragraph} />
            </div>
        ))}
            
            

        </div>


        </div>
  )
}

export default FeatureCard