import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AudioBooksContainer() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [audiobooks, setAudioBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAudioBooks = async () => {
      try {
        const response = await axios.get(`${apiUrl}/audioBooks/getAllAudioBooks`);
        if (response.status === 200) {
          setAudioBooks(response.data.audios);
        } else {
          console.error('Failed to fetch audiobooks:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching audiobooks:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAudioBooks();
  }, []);

  if (loading) {
    return <p className="text-center p-4">Loading...</p>;
  }

  if (error || audiobooks.length === 0) {
    return <p className="text-center p-4">No audiobooks found.</p>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="audiobooks container mx-auto p-4">
      <h1 className="text-xl font-bold  mb-4">All Audiobooks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {audiobooks.map((audiobook) => (
          <div
            key={audiobook.id}
            className="audiobook-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src="https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg"
              alt="Cover"
              className="w-full h-48 object-cover"
            />
            <div className="audiobook-details p-4 flex-grow">
              <h2 className="title text-xl font-bold">{audiobook.title}</h2>
              <p className="description text-gray-700">{audiobook.description}</p>
              <p className="date text-gray-500">{formatDate(audiobook.created_at)}</p>
              {/* Add more audiobook details as needed */}
              <button className="text-white font-semibold bg-green-500 py-2 w-full text-center rounded-md">Listen Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
