import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Install react-datepicker package
import "react-datepicker/dist/react-datepicker.css";
export default function ApplyForLive() {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState(new Date()); // Initial date and time
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null); // Holds uploaded thumbnail file

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

  const handleDateChange = (date) => {
    setDateTime(date);
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Live stream application:', {
      title,
      dateTime,
      description,
      thumbnail, // Will be a File object
    });
    // Reset form after submission (optional)
    setTitle('');
    setDateTime(new Date());
    setDescription('');
    setThumbnail(null);
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
      <div className="flex flex-col">
        <label htmlFor="dateTime" className="mb-2 text-gray-700">
          Date & Time :
        </label>
        <DatePicker
          id="dateTime"
          selected={dateTime}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="yyyy-MM-dd HH:mm"
          minDate={new Date()} // Only allow future dates
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
        <label htmlFor="thumbnail" className="px-3 py-2 rounded-md border border-gray-300 w-fit bg-white text-black">
          Choose thumbnail
        </label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          onChange={handleThumbnailChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden"
        />
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
