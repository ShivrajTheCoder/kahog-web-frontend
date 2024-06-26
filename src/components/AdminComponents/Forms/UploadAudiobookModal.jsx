import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Textarea from '../../Textarea'; // Import your custom Textarea component
import axios from 'axios';
import Input from '../../Input';
import { useSelector } from 'react-redux';

export default function UploadAudiobookModal() {
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
  const { token } = useSelector((state) => state.admin);
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

  const handleSubmit = async (e) => {
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
      const response = await axios.post(`${apiUrl}/audiobooks/addaudiobook`, formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      console.log(response);
      if (response.status === 201) {
        alert("Successfully added")

      }
      else {
        console.log("Something went wrong!");
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
    // onClose();
  };

  return (
    <div className=" ">
      <div className=" p-8 rounded-md w-96 ">
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
