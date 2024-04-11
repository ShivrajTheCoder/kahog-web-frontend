import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Following() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get(`${apiUrl}/creator/getallapprovedcreators`);
        if (response.status === 200) {
          setMentors(response.data.creators);
        } else {
          console.error('Failed to fetch mentors:', response.statusText);
          setError('Error fetching mentors'); // Set generic error message
        }
      } catch (error) {
        console.error('Error fetching mentors:', error);
        setError('Error fetching mentors'); // Set generic error message
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="mx-20 my-10 px-4 py-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">You Currently Follow</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {mentors.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="rounded-lg shadow-md p-4">
              <img
                src="https://res.cloudinary.com/dushmacr8/image/upload/v1709833529/kj%20images/profile_n5q8mg.png"
                alt={mentor.username || 'Name'}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {mentor.username || 'Name'}
              </h3>
              <p className="text-base text-gray-600 mb-2">
                {mentor.position || 'Position'}
              </p>
              <p className="text-sm text-gray-600">{mentor.location || 'Location'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
