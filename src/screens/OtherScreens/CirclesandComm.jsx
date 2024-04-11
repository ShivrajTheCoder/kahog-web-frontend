import React from 'react'
import CommunityContainer from '../../components/CommunityAndCircles.jsx/CommunityContainer'
import CirclesContainer from '../../components/CommunityAndCircles.jsx/CirclesContainer'

export default function CirclesandComm() {
    return (
        <section className='mx-20'>
            {/* <h1 className='text-xl font-bold my-5'>Communites</h1> */}
            <CommunityContainer />
            <h1 className='text-xl font-bold my-5'>Circles</h1>
            <CirclesContainer />
        </section>
    )
}
