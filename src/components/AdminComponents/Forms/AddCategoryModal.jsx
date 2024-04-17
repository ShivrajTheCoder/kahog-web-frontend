import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function AddCategoryModal() {
  const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useSelector((state) => state.admin);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name);
    setError(null);
    // Validate form fields
    if (!name) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = {
      categoryName: name,
      // description
    };
    // Example: You can send formData to backend API here
    // After successful submission, you can close the modal
    try {
      const response = await axios.post(`${apiUrl}/category/addcategory`, formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if(response.status===201){
          setName('');
          alert("categroy added")
        }
      onClose();
    } catch (error) {
      console.log(error.response.data.message ? error.response.data.message : "something went wrong!" );
      alert("Category not added!");
    }
  };

  return (
    <div >
      <div className=" p-8 rounded-md w-96 ">

        <h2 className="text-xl font-semibold mb-4">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error}
          />
          {/* <Input
            label="Description"
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={error}
          /> */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}
