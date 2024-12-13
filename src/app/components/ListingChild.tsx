import React from 'react'
import Image from 'next/image'

const ListingChild = (props:any) => {
  return (
    <div className='flex  flex-col'>
        <div  className='my-5 relative w-full  h-[362px] m-auto'>
          <Image src ={props.image} alt="" fill className=' w-full h-full object-fill'/>

        </div>
        <div className='text-md  flex flex-col mb-2' >
           <h1> {props.category}</h1> 
          <h2>  {props.price} </h2>

        </div>
        
    </div>
  )
}

export default ListingChild