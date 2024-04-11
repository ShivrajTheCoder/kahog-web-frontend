import React from 'react'
import PodcastContainer from '../components/PodcastComponents/PodcastContainer'
import CategoryCont from '../components/HomeComponents/CategoryCont'

export default function Podcasts() {
  return (
    <div className='mx-20 my-10'>
      <h1 className='text-xl font-bold my-5'>Podcasts</h1>
      <CategoryCont/>
      <PodcastContainer/>
    </div>
  )
}
