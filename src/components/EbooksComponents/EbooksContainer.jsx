import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EbooksContainer() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await axios.get(`${apiUrl}/ebooks/getallebooks`);
        if (response.status === 200) {
          setEbooks(response.data.ebooks);
        } else {
          console.error('Failed to fetch ebooks:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching ebooks:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEbooks();
  }, []);

  if (loading) {
    return <p className="text-center p-4">Loading...</p>;
  }

  if (error || ebooks.length === 0) {
    return <p className="text-center p-4">No ebooks found.</p>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="ebooks-container">
      <h1 className="text-xl font-bold  mb-4 my-10">All Ebooks</h1>  {/* Added heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {ebooks.map((ebook) => (
          <div key={ebook.id} className="ebook-card bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://res.cloudinary.com/dushmacr8/image/upload/v1707575265/kj%20images/cover_2_bgvidc.jpg"
              alt="Cover"
              className="w-full h-48 object-cover"
            />
            <div className="ebook-details p-4">
              <h2 className="title text-xl font-bold">{ebook.title}</h2>
              <p className="description text-gray-700">{ebook.description}</p>
              <p className="date text-gray-500">{formatDate(ebook.created_at)}</p>
              {/* Add more ebook details as needed */}
              <button className="bg-green-500 text-center w-full py-2 text-white font-semibold text-lg rounded-md">Read Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
