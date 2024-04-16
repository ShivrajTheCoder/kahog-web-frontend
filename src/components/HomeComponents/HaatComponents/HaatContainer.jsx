import React from 'react';

const data = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Jute Basket",
        description: "Handmade jute basket for storing various items.",
        price: 500 // Price in rupees
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Men's Shirt",
        description: "Stylish men's shirt made from high-quality fabric.",
        price: 799 // Price in rupees
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Pencil Set",
        description: "Set of colorful pencils for drawing and sketching.",
        price: 150 // Price in rupees
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Wall Clock",
        description: "Elegant wall clock to adorn your living space.",
        price: 899 // Price in rupees
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Basketball",
        description: "High-quality basketball for indoor and outdoor play.",
        price: 299 // Price in rupees
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Bracelet",
        description: "Beautiful bracelet made from premium materials.",
        price: 199 // Price in rupees
    }
];

export default function HaatContainer() {
    return (
        <div className="mx-20 my-10">
            <h1 className="text-2xl font-bold mb-4">Haat</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {data.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg grid grid-cols-3">
                        <img src={item.image} alt={item.name} className="w-full h-40 col-span-1 object-cover object-center" />
                        <div className="p-4 col-span-2">
                            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-gray-700">Price: ₹{item.price}</p>
                            <button className="mt-4 text-white font-bold py-2 px-4 bg-blue-500 rounded-sm w-full">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
