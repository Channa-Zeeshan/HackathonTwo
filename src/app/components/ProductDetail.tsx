import React from 'react'
import Image from 'next/image'
import chairpic from '../../../public/chaiirpic.jpeg'

const ProductDetail = () => {
  return (
    <div className='max-w-[1444px] max-h-full md:h-[700px] my-2 flex flex-col md:flex-row  m-auto text-gray-500'>
        <div className='md:w-1/2  w-full'>
        <Image src={chairpic} alt='' className='object-cover w-full h-full' />
        </div>

        <div className=' w-full md:w-1/2'> 
         <div className='  w-full h-full md:p-14 p-4 '>
            <div className='mb-8'> <h1 className='text-3xl mb-4 '> The Dandy Chair</h1>  <h2 className='text-xl'> £250</h2>
            </div>

            <div>
                <h1 className='text-lg mb-4'> Product Description</h1>
                <p>
                A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </p>
                <ul className='list-disc p-10'>
                    <li> Premium Material</li>
                    <li> Handmade Upholstery</li>
                    <li> Quality timeless classic</li>
                </ul>
            </div>
            <div>
                <h1> Dimensions</h1>
                <div className='flex w-full md:w-1/2 justify-between mt-4'>

                <div className='w-1/3 text-center'> <h1 className='mb-2'>Height</h1>     <h1>110cm</h1>   </div>  
                <div className=' border-x-2  w-1/3 text-center'> <h1 className='mb-2'> Width</h1>     <h1>75cm</h1>   </div> 
                <div className=' w-1/3 text-center'> <h1 className='mb-2'> Depth</h1>     <h1>50cm</h1>   </div> 

                </div>
            </div>


            <div className='mt-5 md:flex justify-between items-center md:w-full'>
                <h1 className='mb-3 '> Quantity</h1>
                <div className='w-11/2 md:w-1/4 mx-auto flex bg-gray-200 p-3 text-lg'> <button className='w-2/5 md:text-right'> +</button> <input type='text' value='1' className='text-center w-1/5 bg-inherit' />    <button className='w-2/5 text-left'> - </button></div>
                <div className='md:h-1/2 flex justify-end'>
                    <button className='px-5 w-11/2 mx-auto  py-5 mt-3 w-full bg-[#2A254B] text-white'> Add to Cart</button>
                </div>


            </div>
            
         </div>
        </div>



        <div>

        </div>

    </div>
  )
}

export default ProductDetail