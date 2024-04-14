import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';

export default function PostEventModal({ onClose }) {
  const [eventType, setEventType] = useState('text');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!description || (eventType !== 'text' && !file)) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('eventType', eventType);
    formData.append('description', description);
    if (eventType !== 'text') {
      formData.append('file', file);
    }
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
        <h2 className="text-xl font-semibold mb-4">Post Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="eventType" className="block mb-2">Event Type:</label>
            <select
              id="eventType"
              name="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="text">Text</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
              <option value="photo">Photo</option>
            </select>
          </div>
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
          {eventType !== 'text' && (
            <div className="mb-4">
              <label htmlFor="file" className="block mb-2">Choose File:</label>
              <input
                type="file"
                id="file"
                name="file"
                accept={eventType === 'audio' ? 'audio/*' : 'video/*,image/*'}
                onChange={handleFileChange}
                className="mb-2"
              />
              <p className="text-sm text-gray-500">Upload {eventType === 'audio' ? 'audio' : 'video/photo'} file</p>
            </div>
          )}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Post Event
          </button>
        </form>
      </div>
    </div>
  );
}
