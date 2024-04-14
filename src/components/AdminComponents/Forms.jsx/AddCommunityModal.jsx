import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';

export default function AddCommunityModal({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [interest, setInterest] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !interest) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = {
      name,
      description,
      interest
    };
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
        <h2 className="text-xl font-semibold mb-4">Add Community</h2>
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
          <Input
            label="Interest"
            type="text"
            id="interest"
            name="interest"
            placeholder="Enter interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            error={error}
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Add Community
          </button>
        </form>
      </div>
    </div>
  );
}
