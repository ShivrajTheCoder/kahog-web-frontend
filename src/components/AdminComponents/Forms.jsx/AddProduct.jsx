import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';


export default function AddProduct({ onClose }) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!productName || !price || !description || !image) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);
    // Example: You can send formData to backend API here
    // After successful submission, you can close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-md w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none">
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Product Name"
            type="text"
            id="productName"
            name="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            error={error}
          />
          <Input
            label="Price"
            type="text"
            id="price"
            name="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={error}
          />
          <Input
            label="Description"
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={error}
          />
          <label htmlFor="image" className="block mb-2">Choose Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
