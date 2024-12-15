import React from 'react'
import Image from 'next/image'
import table from '../../../public/table.jpeg'

const TableBackground = () => {
  return (
    <div className='max-w-[1444px] m-auto  relative  h-[300px] flex justify-center md:justify-between items-center md:items-end '>
        <div className='absolute top-0  w-full  h-full -z-10 '>
            <Image src={table} alt='' fill className=' object-cover '/>

        </div>
        <h1 className='text-white text-4xl flex items-end p-4 md:pl-9'> All Products </h1>
    </div>
  )
}

export default TableBackground