import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Textarea from '../../Textarea'; // Import your custom Textarea component
import axios from 'axios';
import Input from '../../Input';

export default function UploadAudiobookModal({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
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

  const handleAudioFileChange = (e) => {
    const selectedAudioFile = e.target.files[0];
    setAudioFile(selectedAudioFile);
  };

  const handleCoverImageChange = (e) => {
    const selectedCoverImage = e.target.files[0];
    setCoverImage(selectedCoverImage);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !audioFile || !coverImage || !category) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = new FormData();
    formData.append('title', name);
    formData.append('description', description);
    formData.append('audio', audioFile);
    formData.append('cover', coverImage);
    formData.append('categoryId', category);
    try {
      const response = await axios.post(`${apiUrl}/audiobooks/addaudiobook`, formData);
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
    // onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-md w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none">
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Upload Audiobook</h2>
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
          <label htmlFor="audioFile" className="block mb-2">Choose Audio File:</label>
          <input
            type="file"
            id="audioFile"
            name="audioFile"
            accept="audio/*"
            onChange={handleAudioFileChange}
            className="mb-4"
          />
          <label htmlFor="coverImage" className="block mb-2">Choose Cover Image:</label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            onChange={handleCoverImageChange}
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
            Upload Audiobook
          </button>
        </form>
      </div>
    </div>
  );
}
