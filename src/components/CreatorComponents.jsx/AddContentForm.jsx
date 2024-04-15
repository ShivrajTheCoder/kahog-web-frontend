import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../Input';
import Textarea from '../Textarea';

export default function AddContentForm() {
  const [contentType, setContentType] = useState('video'); // Initial content type
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catError, setCatError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setError(null);

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/category/getallcategories`);
        if (response.status === 200) {
          setCategories(response.data.categories);
        } else {
          setCatError("Couldn't fetch categories");
        }
      } catch (error) {
        console.error(error);
        setCatError("Failed to fetch categories"); // Provide a more informative error message
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'contentType':
        setContentType(value);
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

  const handleMediaFileChange = (e) => {
    const selectedMediaFile = e.target.files[0];
    setMediaFile(selectedMediaFile);
  };

  const handleThumbnailChange = (e) => {
    const selectedThumbnail = e.target.files[0];
    setThumbnail(selectedThumbnail);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!title || !description || !mediaFile || !thumbnail || !category) {
      setError('All fields are required');
      return;
    }
    // Determine if the media file is a video
    const isVideo = mediaFile.type.startsWith('video/');
    // Submit form data
    const formData = new FormData();
    formData.append('name', title);
    formData.append('description', description);
    formData.append('mediaFile', mediaFile);
    formData.append('thumbnail', thumbnail);
    formData.append('categoryId', category);
    formData.append('isVideo', isVideo);
    formData.append('authorId', 2);
    try {
      const response = await axios.post(`${apiUrl}/podcasts/uploadpodcast`, formData);
      console.log(response);
      if (response.status === 201) {
        // Reset form after successful submission
        setTitle('');
        setDescription('');
        setMediaFile(null);
        setThumbnail(null);
        setCategory('');
        setError('');
        alert("Content uploaded successfully!");
      } else {
      alert("Something went wrong!");
      }
    } catch (error) {
      alert(error);
    }
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
      <Input
        label="Title"
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleInputChange}
        placeholder="Enter title"
        error={error}
      />
      <Textarea
        label="Description"
        id="description"
        name="description"
        value={description}
        onChange={handleInputChange}
        placeholder="Enter description"
        error={error}
      />
      <label htmlFor="mediaFile" className="block text-gray-700">
        Choose Media File (Audio or Video):
      </label>
      <input
        type="file"
        id="mediaFile"
        name="mediaFile"
        accept="audio/*,video/*"
        onChange={handleMediaFileChange}
      />
      <label htmlFor="thumbnail" className="block text-gray-700">
        Choose Thumbnail:
      </label>
      <input
        type="file"
        id="thumbnail"
        name="thumbnail"
        accept="image/*"
        onChange={handleThumbnailChange}
      />
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <>
          {categories.length > 0 ? (
            <div className="flex flex-col">
              <label htmlFor="category" className="text-gray-700">
                Select Category:
              </label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.category_name}</option>
                ))}
              </select>
            </div>
          ) : (
            <p>No categories available</p>
          )}
        </>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-black w-fit text-white py-2 px-4 rounded-md"
      >
        Upload Podcast
      </button>
    </form>
  );
}
