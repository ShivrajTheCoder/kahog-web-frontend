import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
    name: "Jute Basket",
    price: 500, // Price in rupees
    description: "Handcrafted jute basket, perfect for storage or decor."
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dushmacr8/image/upload/v1710399228/kj%20images/haat_images/juitebasket_sv88sa.webp",
    name: "Men's Shirt",
    price: 799, // Price in rupees
    description: "Stylish and comfortable shirt for men, available in various sizes and colors."
  },
  // Add more products as needed
];

const ProductsContainer = ({ home }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Number of products per page

  // Logic for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPagination = pageNumbers.map(number => (
    <button
      key={number}
      className={`px-2 py-1 mr-2 ${currentPage === number ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-md`}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </button>
  ));

  return (
    <div className="container mx-auto px-10 py-10 bg-white">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Category Name</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Product Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Price (₹)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{indexOfFirstProduct + index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                <button className="text-white bg-red-500 font-semibold py-2 px-4 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 mr-2 bg-gray-200 text-gray-800 rounded-md"
        >
          Previous
        </button>
        {renderPagination}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / productsPerPage)}
          className="px-2 py-1 ml-2 bg-gray-200 text-gray-800 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsContainer;
