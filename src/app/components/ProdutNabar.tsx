import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const ProdutNabar = () => (
    <div className='max-w-[1444px] m-auto'>
        <div className='w-11/12 m-auto md:hidden flex justify-between gap-2 mt-3' >
            <button className='flex bg-gray-200 p-4 w-full justify-center items-center gap-2'>Filters <FaCaretDown /></button>
            <button className='flex bg-gray-200 p-4 w-full justify-center items-center gap-2'>Sorting <FaCaretDown /></button>
        </div>

        <div className='hidden md:flex  w-11/12 m-auto justify-between'>
            <div className='w-6/12 flex'>
            <button className='flex  p-4 w-full justify-center items-center gap-1'>Category <FaCaretDown /></button>
            <button className='flex  p-4 w-full justify-center items-center gap-1'>Produt Type <FaCaretDown /></button>
            <button className='flex  p-4 w-full justify-center items-center gap-1'>Price <FaCaretDown /></button>
            <button className='flex  p-4 w-full justify-center items-center gap-1'>Brand <FaCaretDown /></button>
            </div>
            
            <div className='w-4/12 flex justify-center items-center'>
            <h1 className='w-32'> Sorting by :</h1>
            <button className='flex  p-4 w-full justify-center items-center gap-2'>Date Added <FaCaretDown /></button>
            </div>

        </div>
    </div>
)

export default ProdutNabar