import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Textarea from '../../Textarea'; // Import your custom Textarea component
import axios from 'axios';
import Input from '../../Input';

export default function UploadPodcastModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
        // console.log(response.data.categories, 'here are categories');
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
    if (!name || !description || !mediaFile || !thumbnail || !category) {
      setError('All fields are required');
      return;
    }
    // Determine if the media file is a video
    const isVideo = mediaFile.type.startsWith('video/');
    // Submit form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('authorId', 1); // Assuming authorId is always 1
    formData.append('mediaFile', mediaFile);
    formData.append('thumbnail', thumbnail);
    formData.append('categoryId', category);
    formData.append('isVideo', isVideo);
    try {
      const response = await axios.post(`${apiUrl}/podcasts/uploadpodcast`, formData);
      console.log(response);
      if (response.status === 201) {
        onClose();

      }
      else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className=" p-8 rounded-md w-96 relative">
        {/* <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none">
          <AiOutlineClose size={24} />
        </button> */}
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
          <Textarea // Use your custom Textarea component
            label="Description"
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
          {loading ? (
            <p>Loading categories...</p>
          ) : (
            <>
              {categories.length > 0 ? (
                <div className="mb-4">
                  <label htmlFor="category" className="block mb-2">Select Category:</label>
                  <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded-md"
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
          {catError && <p className="text-red-500">{catError}</p>}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
            Upload Podcast
          </button>
        </form>
      </div>
    </div>
  );
}
