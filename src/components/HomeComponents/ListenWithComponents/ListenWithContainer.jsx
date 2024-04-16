import React from 'react';
import PodcastCard from '../../PodcastComponents/PodcastCard';


const data = [
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-6_tusovr.jpg",
        id: 1,
    },
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-4_fo1yx6.jpg",
        id: 2,
    },
    // {
    //     image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-5_vhawaz.jpg",
    //     id: 3,
    // },
    // {
    //     image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575266/kj%20images/episodes-2_attb17.jpg",
    //     id: 4,
    // },
];

export default function ListenWithContainer() {
    return (
        <div className='my-10 mx-20'>
            <h2 className="text-2xl font-bold mb-4">Listen With KahoG</h2>
            <div className="grid grid-cols-1">    
                {data.map(item => (
                    <PodcastCard key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
}
