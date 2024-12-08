import React from 'react'
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='w-[390px]  h-[69px] flex justify-between p-2 m-auto sm:hidden'>
            <div> Avion</div>
            <div className='flex justify-between gap-3'>
                <span> <Search /></span>
                <span><Menu /></span>
            </div>
        </div>
    <div className='  hidden sm:block  sm:w-full  h-[132px]  px-6  font-sans text-slate-600 m-auto'>
        <div className='  py-4 flex justify-between  border-b-2 w-full'>
        <div> <Search /> </div>
       <div > <p className=' font-normal text-2xl'>Avion </p> </div>
       <div className='flex gap-4'>
         <span> <ShoppingCart /> </span>
         <span>  <CircleUserRound /> </span>
       
         </div>

        
        </div>
       
        <div className='flex justify-center py-5'>
            <ul className='flex justify-between w-[675px]  h-[22px]'>
                <li>Plant pots</li>
                <li>Ceramics</li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li>
            </ul>
            </div>

    </div>
    </div>
  )
}
