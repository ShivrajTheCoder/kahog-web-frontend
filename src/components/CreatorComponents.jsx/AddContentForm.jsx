import React, { useState } from 'react';

export default function AddContentForm() {
  const [contentType, setContentType] = useState('video'); // Initial content type
  const [interest, setInterest] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'contentType':
        setContentType(value);
        break;
      case 'interest':
        setInterest(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'title':
        setTitle(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Submitted content:', {
      contentType,
      interest,
      description,
      title,
    });
    // Reset form after submission (optional)
    setContentType('video');
    setInterest('');
    setDescription('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-200 p-10 rounded-md shadow-lg">
      <div className="flex items-center">
        <label htmlFor="contentType" className="mr-2 text-gray-700">
          Content Type:
        </label>
        <select
          id="contentType"
          name="contentType"
          value={contentType}
          onChange={handleInputChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="video">Video</option>
          <option value="audio">Audio</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Enter content title"
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="interest" className="mb-2 text-gray-700">
          Interest:
        </label>
        <input
          type="text"
          id="interest"
          name="interest"
          value={interest}
          onChange={handleInputChange}
          placeholder="Enter content interest"
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
          placeholder="Describe your content"
          rows={4}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 w-fit text-white font-bold py-2 px-4 rounded-md"
      >
        Submit Content
      </button>
    </form>
  );
}
