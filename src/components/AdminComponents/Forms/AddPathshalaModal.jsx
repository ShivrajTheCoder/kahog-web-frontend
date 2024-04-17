import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';
import Textarea from '../../Textarea';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function AddPathshalaModal({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [isAudio, setIsAudio] = useState(true); // Default to audio
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState('');
  const { token } = useSelector((state) => state.admin);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleMediaFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Determine file type and set isAudio accordingly
      const fileType = file.type.split('/')[0];
      setIsAudio(fileType === 'audio');
      setMediaFile(file);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Set thumbnail
      setThumbnail(file);
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
      const response = await axios.post(`${apiUrl}/pathshala/addpathshala`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 201) {
        alert('Successfully added');
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong!');
    }
  };

  return (
    <div>
      <div className=" p-8 rounded-md w-96 ">
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
            <label htmlFor="mediaFile" className="block mb-2">
              Choose Media File:
            </label>
            <input
              type="file"
              id="mediaFile"
              name="mediaFile"
              onChange={handleMediaFileChange}
              className="mb-2"
            />
            <p className="text-sm text-gray-500">Upload {isAudio ? 'audio' : 'video'} file</p>
          </div>
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block mb-2">
              Choose Thumbnail:
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              accept="image/*"
              onChange={handleThumbnailChange}
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
