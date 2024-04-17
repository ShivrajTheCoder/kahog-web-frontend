import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';
import Textarea from '../../Textarea'; // Import your custom Textarea component
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function AddInterestModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState(''); // State for description
  const [error, setError] = useState('');
  const {token}=useSelector((state)=>state.admin);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    // Validate form fields
    if (!name || !description) {
      setError(' All fields are required');
      return;
    }
    // Submit form data
    const formData = {
      name,
      description // Include description in formData
    };
    try {
      const response = await axios.post(`${apiUrl}/interests/addinterest`, formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      console.log(response.data);
      alert("Interest added");
      // onClose();
    } catch (error) {
      console.log(error.response.data.message);
      alert("Interst coundn't be added")
    }
    onClose();
  };

  return (
    <div >
      <div className=" p-8 rounded-md w-96 ">
        <h2 className="text-xl font-semibold mb-4">Add Interest</h2>
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
          <Textarea // Use your custom Textarea component for description
            label="Description" // Label for description field
            id="description" // ID for description field
            name="description" // Name for description field
            placeholder="Enter description" // Placeholder for description field
            value={description} // Value of description
            onChange={(e) => setDescription(e.target.value)} // onChange handler for description
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Add Interest
          </button>
        </form>
      </div>
    </div>
  );
}
