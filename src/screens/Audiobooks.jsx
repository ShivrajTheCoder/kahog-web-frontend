import React from 'react'
import AudioBooksContainer from '../components/HomeComponents/AudioBooksContainer'
import CategoryCont from '../components/HomeComponents/CategoryCont'

export default function Audiobooks() {
  return (
    <div className='mx-20 my-10'>
      <h1 className='text-xl font-bold my-5'>Audiobooks</h1>
      <CategoryCont/>
      <AudioBooksContainer/>
    </div>
  )
}
