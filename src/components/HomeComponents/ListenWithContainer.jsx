import React from 'react';

const data = [
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-6_tusovr.jpg",
        id: 1,
    },
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-4_fo1yx6.jpg",
        id: 2,
    },
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/episodes-5_vhawaz.jpg",
        id: 3,
    },
    {
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1707575266/kj%20images/episodes-2_attb17.jpg",
        id: 4,
    },
];

export default function ListenWithContainer() {
    return (
        <div className='my-10 mx-20'>
            <h2 className="text-2xl font-bold mb-4">Listen With KahoG</h2>
            <div className="grid grid-cols-4 gap-4">    
                {data.map(item => (
                    <div key={item.id} className="max-w-xs rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={item.image} alt="Episode" />
                        <div className="px-6 py-4 relative">
                            <div className="font-bold text-xl mb-2">Episode Title</div>
                            <p className="text-gray-700 text-base">
                                This is a dummy description for the episode.
                            </p>
                            <button className="absolute bottom-0 left-0 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Listen Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
