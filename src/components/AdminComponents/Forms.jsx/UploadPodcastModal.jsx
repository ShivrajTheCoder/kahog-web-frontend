import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';


export default function UploadPodcastModal({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleMediaFileChange = (e) => {
    const selectedMediaFile = e.target.files[0];
    setMediaFile(selectedMediaFile);
  };

  const handleThumbnailChange = (e) => {
    const selectedThumbnail = e.target.files[0];
    setThumbnail(selectedThumbnail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !mediaFile || !thumbnail || !category) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('mediaFile', mediaFile);
    formData.append('thumbnail', thumbnail);
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
        <h2 className="text-xl font-semibold mb-4">Upload Podcast</h2>
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
          <label htmlFor="mediaFile" className="block mb-2">Choose Media File (Audio or Video):</label>
          <input
            type="file"
            id="mediaFile"
            name="mediaFile"
            accept="audio/*,video/*"
            onChange={handleMediaFileChange}
            className="mb-4"
          />
          <label htmlFor="thumbnail" className="block mb-2">Choose Thumbnail:</label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            accept="image/*"
            onChange={handleThumbnailChange}
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
            Upload Podcast
          </button>
        </form>
      </div>
    </div>
  );
}
