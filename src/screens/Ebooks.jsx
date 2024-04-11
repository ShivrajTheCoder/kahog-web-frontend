import React from 'react'
import CategoryCont from '../components/HomeComponents/CategoryCont'
import EbooksContainer from '../components/EbooksComponents/EbooksContainer'

export default function Ebooks() {
  return (
    <div className='mx-20 my-10'>
      <h1 className='text-xl font-bold my-5'>Ebooks</h1>
      <CategoryCont/>
      <EbooksContainer/>
    </div>
  )
}
