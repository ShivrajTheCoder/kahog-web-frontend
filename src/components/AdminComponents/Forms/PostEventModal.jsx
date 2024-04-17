import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Textarea from '../../Textarea'; // Import your custom Textarea component
import Input from '../../Input';
import axios from 'axios'; // Import axios
import { useSelector } from 'react-redux';

export default function PostEventModal() {
  const [eventType, setEventType] = useState('audio');
  const [eventName, setEventName] = useState(''); // New state for event name
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;
  const {token}=useSelector((state)=>state.admin);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const getFileAcceptType = () => {
    if (eventType === 'video') {
      return 'video/*';
    } else if (eventType === 'photo') {
      return 'image/*';
    }
    // Default to 'audio/*'
    return 'audio/*';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!eventName || !description || !file) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('name', eventName); // Append event name to form data
    formData.append('type', eventType);
    formData.append('description', description);
    formData.append('event', file);
    try {
      const response = await axios.post(`${apiUrl}/events/addevent`, formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 201) {
        alert("Successfully added")
      } else {
        console.log("Something went wrong!");
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="">
      <div className=" p-8 rounded-md w-96 ">
      
        <h2 className="text-xl font-semibold mb-4">Post Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="eventName" className="block mb-2">Event Name:</label>
            <Input
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              error={error}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block mb-2">Event Type:</label>
            <select
              id="eventType"
              name="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="audio">Audio</option>
              <option value="video">Video</option>
              <option value="photo">Photo</option>
            </select>
          </div>
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
            <label htmlFor="file" className="block mb-2">Choose File:</label>
            <input
              type="file"
              id="file"
              name="file"
              accept={getFileAcceptType()}
              onChange={handleFileChange}
              className="mb-2"
            />
            <p className="text-sm text-gray-500">Upload {eventType === 'video' ? 'video' : 'photo'} file</p>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Post Event
          </button>
        </form>
      </div>
    </div>
  );
}
