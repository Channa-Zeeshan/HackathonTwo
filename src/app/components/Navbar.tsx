import React from 'react'
import Link from 'next/link';
import {  Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className='max-w-[1440px] flex justify-center m-auto items-center'>
      <div className='w-full  h-[69px] flex justify-between p-2 m-auto sm:hidden'>
        <div className='w-1/2'> Avion</div>
        <div className='flex justify-end gap-3 w-1/2'>
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
            <li> <Link href='/home' > Home</Link> </li>
            <li><Link href='/allproducts' > All Products</Link></li>
            <li><Link href='/listingproduct' > Product Listing</Link></li>
            <li><Link href='/shopingcart' > Shopping Cart</Link></li>
            <li><Link href='/about' > About Us</Link></li>
            <li><Link href='/#' > Contact Us</Link></li>
            
          </ul>
        </div>

      </div>
    </div>
  )
}
