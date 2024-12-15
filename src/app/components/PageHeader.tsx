import React from 'react'

const PageHeader = () => {
  return (
    <div className='max-w-[1444px] m-auto p-6 '>
        <div className='w-11/12 md:w-10/12 m-auto flex flex-col md:flex-row justify-center gap-4 items-center'>
        <div className='w-full md:w-2/3 text-3xl leading-relaxed'>
        <h1>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
        </div>
        <div className='w-full md:w-1/3 flex justify-end '>
        <button className='w-full md:w-48 bg-gray-300 p-4'> View our Products</button></div>

        </div>

    </div>
  )
}

export default PageHeader