import React from 'react'
import Image from 'next/image'
import clay from '../../../public/clay.jpg'
import plant from '../../../public/plant.jpeg'
import { Button } from '@/components/ui/button'


const ShoppingCart = () => {
    return (
        <div className='bg-[#F9F9F9] h-full max-w-[1444px] m-auto'>
            <div className='w-11/12 md:w-10/12 m-auto'>
                <div className='text-2xl my-8'>
                    <h1> Your shopping cart</h1>
                </div>
                <div className='hidden md:flex justify-between my-3 text-2xl'> 
                    <h1>Product</h1>
                    <h1>Quantity</h1>
                    <h1> Total</h1>
                    </div>
                <div className='md:w-full md:flex border-y-2 items-center'>
                    <div className='flex flex-row  justify-between md:justify-start  md:gap-14 md:w-1/2'>
                        <div className='max-w-[170px] max-h-[300px]' >
                            <Image src={clay} alt='' className='object-contain' />
                        </div>
                        <div className='flex flex-col max-w-[170px] md:h-full max-h-[300px] md:w-full'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg'>Graystone Vase</h1>
                                <h2> A timeless ceramic vase with a tri color grey glaze.</h2>
                                <h2>£85</h2>
                            </div>
                            <div className='md:hidden flex justify-center'>
                                <button className=' h-8 text-gray-600'> - </button> <button className=' h-8 px-8'> 1 </button><button className=' h-8 text-gray-600'> + </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 md:flex justify-between hidden '>
                        <div className='text-right'> 
                        <div className=' flex justify-center'>
                                <button className=' h-8 text-gray-600'> - </button> <button className=' h-8 px-8'> 1 </button><button className=' h-8 text-gray-600'> + </button>
                            </div>
                        
                        </div>
                        <div><h1>£85</h1></div>

                    </div>
                </div>

                <div className='md:w-full md:flex my-8 border-b-2 items-center'>
                    <div className='flex flex-row  justify-between md:justify-start  md:gap-14 md:w-1/2'>
                        <div className='max-w-[170px] max-h-[300px]' >
                            <Image src={plant} alt='' className='object-contain' />
                        </div>
                        <div className='flex flex-col max-w-[170px] md:h-full max-h-[300px] md:w-full justify-between'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg'>Basic White Vase</h1>
                                <h2> Beautiful and simple this is one for the classics</h2>
                                <h2>£85</h2>
                            </div>
                            <div className='md:hidden flex justify-center'>
                                <button className=' h-8 text-gray-600'> - </button> <button className=' h-8 px-8'> 1 </button><button className=' h-8 text-gray-600'> + </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 md:flex justify-between hidden '>
                        <div className='text-right'> 
                            <div className=' flex justify-center'>
                                <button className=' h-8 text-gray-600'> - </button> <button className=' h-8 px-8'> 1 </button><button className=' h-8 text-gray-600'> + </button>
                            </div></div>
                        <div><h1>£85</h1></div>

                    </div>
                </div>
                <div className='text-[#4E4D93] flex flex-col  items-end'>
                    <h1 className='text-xl flex gap-3'> <p>Subtotal</p> <p>£210</p></h1>
                    <p> Taxes and shipping are calculated at checkout</p>
                    <button className=' bg-[#2A254B] text-white w-full text-xl p-4 my-4 md:w-48 md:justify-end'>Go to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart