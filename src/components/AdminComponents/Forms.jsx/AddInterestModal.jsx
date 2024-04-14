import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';

export default function AddInterestModal({ onClose }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name) {
      setError('Name field is required');
      return;
    }
    // Submit form data
    const formData = {
      name
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
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Add Interest
          </button>
        </form>
      </div>
    </div>
  );
}
