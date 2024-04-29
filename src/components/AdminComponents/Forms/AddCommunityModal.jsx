import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Textarea from '../../Textarea'; // Import your custom Textarea component
import Input from '../../Input';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function AddCommunityModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [interestId, setInterestId] = useState('');
  const [error, setError] = useState('');
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useSelector((state) => state.admin);
  useEffect(() => {
    setError(null);
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
        setError("Failed to fetch interests"); // Provide a more informative error message
      } finally {
        setLoading(false);
      }
    };
    fetchInterests();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name || !description || !interestId) {
      setError('All fields are required');
      return;
    }
    // Submit form data
    const formData = {
      name,
      description,
      interestId,
    };
    try {
      const response = await axios.post(`${apiUrl}/communities/addcommunity`, formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      console.log(response);
      if (response.status === 201) {
        // onClose();
        alert("Community created")
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <div className=" p-8 rounded-md w-96 ">

        <h2 className="text-xl font-semibold mb-4">Add Community</h2>
        {loading ? (
          <p>Loading interests...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
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
              <label htmlFor="interest" className="block mb-2">Interest:</label>
              <select
                id="interest"
                name="interest"
                value={interestId}
                onChange={(e) => setInterestId(e.target.value)}
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select Interest</option>
                {interests.map(interest => (
                  <option key={interest.id} value={interest.id}>{interest.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
              Add Community
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
