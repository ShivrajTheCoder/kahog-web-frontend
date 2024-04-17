import React from 'react'
import { FaVideo } from "react-icons/fa";
import { MdAudiotrack } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
export default function DashboardHome() {
  return (
    <div className='px-20 py-10'>
      <h1 className='font-bold text-2xl text-gray-400' >Dashboard</h1>
      <section className='grid grid-cols-4 my-5 gap-5'>
        <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
          <div className=' flex flex-col mr-5 w-full'>
            <h3 className='text-lg font-semibold text-blue-400'>Total Videos</h3>
            <div className='my-3 font-bold text-xl text-gray-400'>13</div>
          </div>
          <FaVideo size={50} color='#adb5bd' />
        </div>
        <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
          <div className=' flex flex-col mr-5 w-full'>
            <h3 className='text-lg font-semibold text-blue-400'>Total Audios</h3>
            <div className='my-3 font-bold text-xl text-gray-400'>13</div>
          </div>
          <MdAudiotrack size={50} color='#adb5bd' />
        </div>
        <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
          <div className=' flex flex-col mr-5 w-full'>
            <h3 className='text-lg font-semibold text-blue-400'>Audio Books</h3>
            <div className='my-3 font-bold text-xl text-gray-400'>13</div>
          </div>
          <FaPlay size={40} color='#adb5bd' />
        </div>
        <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
          <div className=' flex flex-col mr-5 w-full'>
            <h3 className='text-lg font-semibold text-blue-400'>E Books</h3>
            <div className='my-3 font-bold text-xl text-gray-400'>13</div>
          </div>
          <FaBook  size={50} color='#adb5bd' />
        </div>
        <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
          <div className=' flex flex-col mr-5 w-full'>
            <h3 className='text-lg font-semibold text-blue-400'>Users</h3>
            <div className='my-3 font-bold text-xl text-gray-400'>13</div>
          </div>
          <FaUser size={50} color='#adb5bd' />
        </div>
        <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
          <div className=' flex flex-col mr-5 w-full'>
            <h3 className='text-lg font-semibold text-blue-400'>Orders</h3>
            <div className='my-3 font-bold text-xl text-gray-400'>13</div>
          </div>
          <FaVideo size={50} color='#adb5bd' />
        </div>
        <div className='flex items-center rounded-md shadow-md bg-white p-5 w-full border-l-4 border-blue-400'>
          <div className=' flex flex-col mr-5 w-full'>
            <h3 className='text-lg font-semibold text-blue-400'>Total Videos</h3>
            <div className='my-3 font-bold text-xl text-gray-400'>13</div>
          </div>
          <FaShoppingCart size={50} color='#adb5bd' />
        </div>
        
      </section>
    </div>
  )
}
