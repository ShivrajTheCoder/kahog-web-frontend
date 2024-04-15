import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';
import Textarea from '../../Textarea';
import axios from 'axios';

export default function AddPathshalaModal({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [isAudio, setIsAudio] = useState(true); // Default to audio
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Determine file type and set isAudio accordingly
      const fileType = file.type.split('/')[0];
      setIsAudio(fileType === 'audio');
      if (fileType !== 'image') {
        setError('Thumbnail must be an image file');
        setThumbnail(null);
      } else {
        setThumbnail(file);
        setError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !mediaFile || !thumbnail) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('mediaFile', mediaFile);
    formData.append('isAudio', isAudio);
    formData.append('thumbnail', thumbnail);
    try {
      const response = await axios.post(`${apiUrl}/pathshala/addpathshala`, formData);
      console.log(response);
      if (response.status === 201) {
        onClose();
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-md w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none">
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Add Pathshala</h2>
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
          <Textarea
            label="Description"
            id="description"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={error}
          />
          <div className="mb-4">
            <label htmlFor="mediaFile" className="block mb-2">Choose Media File:</label>
            <input
              type="file"
              id="mediaFile"
              name="mediaFile"
              onChange={handleFileChange}
              className="mb-2"
            />
            <p className="text-sm text-gray-500">Upload {isAudio ? 'audio' : 'video'} file</p>
          </div>
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block mb-2">Choose Thumbnail:</label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2"
            />
            <p className="text-sm text-gray-500">Upload thumbnail image</p>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Add Pathshala
          </button>
        </form>
      </div>
    </div>
  );
}
