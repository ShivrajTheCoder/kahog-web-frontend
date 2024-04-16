import React from 'react'
import VideoPodcastCard from '../PodcastComponents/VideoPodcastCard'

export default function RecentPodcastsContainer() {
    return (
        <section className='mx-20 py-10'>
            <h1 className="text-2xl font-bold mb-4">Latest Video Podcasts</h1>
            <div className=' grid grid-cols-4 gap-5'>
                <VideoPodcastCard />
                <VideoPodcastCard />
                <VideoPodcastCard />
                <VideoPodcastCard />
            </div>
        </section>
    )
}
