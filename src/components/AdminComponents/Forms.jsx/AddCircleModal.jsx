import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';

export default function AddCircleModal({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [interest, setInterest] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [img, setImg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !interest || !thumbnail || !img) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = {
      name,
      description,
      interest,
      thumbnail,
      img,
      isOpen
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
        <h2 className="text-xl font-semibold mb-4">Add Circle</h2>
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
          <Input
            label="Thumbnail"
            type="text"
            id="thumbnail"
            name="thumbnail"
            placeholder="Enter thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            error={error}
          />
          <Input
            label="Image"
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
            error={error}
          />
          <div className="flex items-center mt-2">
            <label htmlFor="isOpen" className="mr-2">Is Open?</label>
            <input
              type="checkbox"
              id="isOpen"
              name="isOpen"
              checked={isOpen}
              onChange={(e) => setIsOpen(e.target.checked)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Add Circle
          </button>
        </form>
      </div>
    </div>
  );
}
