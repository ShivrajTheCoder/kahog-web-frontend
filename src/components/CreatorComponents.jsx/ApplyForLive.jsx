import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function ApplyForLive() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailName, setThumbnailName] = useState('');
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const response = await axios.get(`${apiUrl}/interests/getallinterests`);
        if (response.status === 200) {
          setInterests(response.data.interests);
        } else {
          setError("Couldn't fetch interests");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch interests");
      } finally {
        setLoading(false);
      }
    };
    fetchInterests();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleThumbnailChange = (event) => {
    const selectedFile = event.target.files[0];
    setThumbnail(selectedFile);
    setThumbnailName(selectedFile.name);
  };

  const handleInterestChange = (event) => {
    setSelectedInterest(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedStartTime = startTime.toLocaleTimeString('en-US', { hour12: false });
    const formattedEndTime = endTime.toLocaleTimeString('en-US', { hour12: false });

    const formData = new FormData();
    formData.append('topic', title);
    formData.append('start_date', formattedStartDate);
    formData.append('start_time', formattedStartTime);
    formData.append('end_time', formattedEndTime);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    formData.append('owner_id', 2);
    formData.append('interest', selectedInterest); // Include the selected interest ID

    try {
      const response = await axios.post(`${apiUrl}/lives/addlive`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Live stream application submitted:', response.data);
      } else {
        console.error('Failed to submit live stream application:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting live stream application:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-200 p-10 rounded-md shadow-lg">
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 text-gray-700">
          Live Stream Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Enter live stream title"
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className='grid grid-cols-3' >
        <div className="flex flex-col">
          <label htmlFor="startDate" className="mb-2 text-gray-700">
            Start Date:
          </label>
          <DatePicker
            id="startDate"
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="startTime" className="mb-2 text-gray-700">
            Start Time:
          </label>
          <DatePicker
            id="startTime"
            selected={startTime}
            onChange={handleStartTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="HH:mm"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endTime" className="mb-2 text-gray-700">
            End Time:
          </label>
          <DatePicker
            id="endTime"
            selected={endTime}
            onChange={handleEndTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="HH:mm"
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2 text-gray-700">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Describe your live stream"
          rows={4}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="interest" className="mb-2 text-gray-700">
          Choose Interest:
        </label>
        <select
          id="interest"
          name="interest"
          value={selectedInterest}
          onChange={handleInterestChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? (
            <option value="">Loading Interests...</option>
          ) : error ? (
            <option value="">Error Fetching Interests</option>
          ) : (
            interests.map((interest) => (
              <option key={interest.id} value={interest.id}>
                {interest.name}
              </option>
            ))
          )}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="livethumbnail" className="px-3 py-2 rounded-md border border-gray-300 w-fit bg-white text-black">
          Choose thumbnail
        </label>
        <input
          type="file"
          id="livethumbnail"
          name="thumbnail"
          accept="image/*"
          onChange={handleThumbnailChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden"
        />
        {thumbnailName && <span className="px-3 py-2 rounded-md border border-gray-300">{thumbnailName}</span>}
      </div>
      <button
        type="submit"
        className="bg-black w-fit text-white font-bold py-2 px-4 rounded-md"
      >
        Apply for Live Stream
      </button>
    </form>
  );
}
