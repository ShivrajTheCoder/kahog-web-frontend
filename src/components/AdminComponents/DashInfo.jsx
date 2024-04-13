import React from 'react'

export default function DashInfo() {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className=' text-center w-40 bg-gray-300 p-5 rounded-tl-md '>
        <h4 className='text-[#14213d] font-bold  text-lg'>Creators</h4>
        <p className='text-[#14213d] font-bold  text-lg'>32</p>
      </div>
      <div className=' text-center text-white w-40 bg-[#14213d] p-5 rounded-tr-md '>
        <h4 className='text-white font-bold  text-lg' >Originals</h4>
        <p className='text-white font-bold  text-lg'>10</p>
      </div>
      <div className=' text-center text-white w-40 bg-[#14213d] p-5 rounded-bl-md '>
        <h4 className='text-white font-bold  text-lg'>Books</h4>
        <p className='text-white font-bold  text-lg'>50</p>
      </div>
      <div className=' text-center w-40 bg-gray-300 p-5 rounded-br-md '>
        <h4 className='text-[#14213d] font-bold  text-lg'>Shop Items</h4>
        <p className='text-[#14213d] font-bold  text-lg'>10</p>
      </div>
    </div>
  )
}
