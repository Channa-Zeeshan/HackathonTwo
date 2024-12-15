import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';

import Image from 'next/image';
import linkedIn from '../../../public/Logo--linkedin.png'
const Footer = () => {
  return (
    <div className='font-thin max-w-[1440px] m-auto'>
        <div className='w-full h-[668px] md:h-[400px] bg-[#2A254B] text-white flex flex-col justify-evenly p-8 md:flex-row'>
            <div className='flex flex-row justify-between gap-16'>
                 <div className=' md:flex md:flex-col gap-6 '> 
                <ul className='list-none flex-col text-xl font-normal' >Categories</ul>
                <li className='list-none text-lg'>Crockery</li>
                <li className='list-none text-lg'> Furniture</li>
                <li className='list-none text-lg'>Homeware</li>
                <li className='list-none text-lg'> Plant pots</li>
                <li className='list-none text-lg'> Chairs</li>
                <li className='list-none text-lg'> Crockery</li>
            </div> 
            <div className=' md:flex md:flex-col gap-6 '> 
                <ul className='list-none flex-col text-xl font-normal '>
                    Menu
                </ul>
                <li className='list-none text-lg'>New arrivals</li>
                <li className='list-none text-lg'>Best Sellers</li>
                <li className='list-none text-lg'>Recently Viewed</li>
                <li className='list-none text-lg'>Popular ths Week</li>
                <li className='list-none text-lg'> All Products</li>
            </div>
            
            </div>
            <div className=' md:flex md:flex-col gap-6 '> 
                <ul className='list-none flex-col font-normal text-xl'>
                   WebPage Sections
                </ul>
                <li className='list-none text-lg'><Link href='/home' > Home</Link> </li>
                <li className='list-none text-lg'><Link href='/allproducts' > All Products</Link></li>
                <li className='list-none text-lg'><Link href='/listingproduct' > Product Listing</Link></li>
                <li className='list-none text-lg'><Link href='/shopingcart' > Shopping Cart</Link></li>
                <li className='list-none text-lg'><Link href='/about' > About Us</Link></li>
            </div>
            <div className='flex  flex-col justify-center' >
                <h1> Join our mailing list</h1>
                <div className='w-full h-24 flex flex-row'>
              <input type='text' placeholder='your@email.com'  className='h-12 w-[340px] md:w-[445px] bg-[#FFFFFF26]' />  <button className='bg-white h-12 w-20 text-black font-normal'>Sign up</button>
            </div>

         
            
            </div>
            

            
            </div>
            <hr className='sm:w-11/12'></hr>
            <div className='flex justify-center text-center sm:w-full md:p-5 bg-[#2A254B] text-white sm:justify-between m-auto  '> <h1>Copyright 2022 Avion LTD </h1>
             <div className='md:flex text-2xl hidden md:visible gap-8 '>
             <FaLinkedin />
             <FaFacebookSquare />
             <FaInstagramSquare />
             <FaSkype />
             <FaTwitter />
             <FaPinterest />
             </div>

            </div>
           
    </div>
  )
}

export default Footer