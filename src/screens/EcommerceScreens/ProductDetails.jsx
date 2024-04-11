import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const star = <IoStarSharp />;
const halfStar = <FaStarHalf />;
const emptyStar = <CiStar />; // Empty star icon

const ProductDetails = () => {
  const product = {
    id: 6,
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
    name: "Bracelet",
    price: 199,
    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni inventore beatae placeat magnam atque sint vero aperiam iure, ducimus, odio quas ipsa enim rem. Quia minima vel dolore nihil fugit?",
    review: 4.5,
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(star);
    }

    if (hasHalfStar) {
      stars.push(halfStar);
    }

    while (stars.length < 5) {
      stars.push(emptyStar);
    }

    return (
      <div className="flex items-center">
        {stars.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col  my-10 mx-20">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <img src={product.image} alt={product.name} className="w-full h-72 rounded-lg object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-lg text-gray-600 mb-4">₹{product.price}</p>
            <div className="flex items-center mb-4">
              {renderStars(product.review)}
              <span className="text-gray-600 ml-2">(23)</span>
            </div>
            <p className="text-base text-gray-600 mb-4">{product.about}</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-sm">
              Order Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
