import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const data = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Jute Basket",
        price: 500 // Price in rupees
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Men's Shirt",
        price: 799 // Price in rupees
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Pencil Set",
        price: 150 // Price in rupees
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Wall Clock",
        price: 899 // Price in rupees
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Basketball",
        price: 299 // Price in rupees
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
        name: "Bracelet",
        price: 199 // Price in rupees
    }
];

const ProductsContainer = ({ home }) => {
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    
//   const apiUrl = 'YOUR_API_URL'; // Replace with your actual API URL

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/shop/getshop`);
//         if (response.status === 200) {
//           setProducts(response.data.shops); // Assuming "shops" is the key in the response data
//         } else {
//           console.error('Failed to fetch products:', response.statusText);
//           setError("Error while fetching");
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

  const navigateDetails = () => {
    // Handle product details navigation (implement based on your needs)
    console.log('Navigate to product details');
  };

  const renderedProducts = products.map((product) => (
    <div key={product.id} className="flex flex-col mb-10 items-center justify-center rounded-md shadow-lg p-5">
      <img
        className="w-full h-48 object-cover  mb-4"
        src={product.image}
        alt={product.name}
      />
      <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
      <p className="text-base font-light text-gray-600">₹{product.price}</p>
      <Link
        to={`/productdetails`} // Dynamic route with product ID
        className="text-white bg-red-500 focus:ring-4 focus:ring-opacity-50 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-sm transform hover:scale-105 transition duration-150 ease-in-out mt-2"
      >
        View Details
      </Link>
    </div>
  ));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Category Name</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {renderedProducts}
      </div>
    </div>
  );
};

export default ProductsContainer;
