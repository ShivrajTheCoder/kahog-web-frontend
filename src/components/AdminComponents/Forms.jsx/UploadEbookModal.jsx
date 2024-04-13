import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';

export default function UploadEbookModal({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ebookFile, setEbookFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleEbookFileChange = (e) => {
    const selectedEbookFile = e.target.files[0];
    setEbookFile(selectedEbookFile);
  };

  const handleCoverImageChange = (e) => {
    const selectedCoverImage = e.target.files[0];
    setCoverImage(selectedCoverImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !ebookFile || !coverImage || !category) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('ebookFile', ebookFile);
    formData.append('coverImage', coverImage);
    formData.append('category', category);
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
        <h2 className="text-xl font-semibold mb-4">Upload Ebook</h2>
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
          <label htmlFor="ebookFile" className="block mb-2">Choose Ebook File:</label>
          <input
            type="file"
            id="ebookFile"
            name="ebookFile"
            accept=".pdf"
            onChange={handleEbookFileChange}
            className="mb-4"
          />
          <label htmlFor="coverImage" className="block mb-2">Choose Cover Image:</label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            onChange={handleCoverImageChange}
            className="mb-4"
          />
          <Input
            label="Category"
            type="text"
            id="category"
            name="category"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={error}
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Upload Ebook
          </button>
        </form>
      </div>
    </div>
  );
}
