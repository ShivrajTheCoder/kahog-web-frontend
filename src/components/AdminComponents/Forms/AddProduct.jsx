import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';
import axios from 'axios';

export default function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catError, setCatError] = useState(null);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(''); // State to store the selected category ID
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setError(null);

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/shop/getshopcategories`);
        console.log(response.data.categories, 'here are categories');
        if (response.status === 200) {
          setCategories(response.data.categories);
        }
        else {
          setCatError("Couldn't fetch categories");
        }
      } catch (error) {
        console.error(error);
        setCatError('Failed to fetch categories'); // Provide a more informative error message
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!productName || !price || !description || !image || !categoryId) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('categoryId', categoryId); // Append category ID to form data
    formData.append('image', image);
    try {
      const response = await axios.post(`${apiUrl}/shop/addproduct`, formData);
      console.log(response);
      if (response.status === 200) {

        onClose();
      }
      else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError("Something went wrong!");
      console.log(error);
    }
    // onClose();
  };

  return (
    <div className=" ">
      <div className=" p-8 rounded-md w-96">
  
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
          <label htmlFor="categoryId" className="block mb-2">Select Category:</label>
          <select
            id="categoryId"
            name="categoryId"
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
            className="mb-4"
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
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
