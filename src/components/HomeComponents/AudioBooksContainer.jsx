import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AudioBooksContainer() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [audiobooks, setAudioBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [audiobooksPerPage] = useState(5); // Number of audiobooks per page

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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/audioBooks/${id}`);
      if (response.status === 200) {
        setAudioBooks(audiobooks.filter(audiobook => audiobook.id !== id));
      } else {
        console.error('Failed to delete audiobook:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting audiobook:', error);
      setError(error.message);
    }
  };

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

  // Logic for pagination
  const indexOfLastAudiobook = currentPage * audiobooksPerPage;
  const indexOfFirstAudiobook = indexOfLastAudiobook - audiobooksPerPage;
  const currentAudioBooks = audiobooks.slice(indexOfFirstAudiobook, indexOfLastAudiobook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(audiobooks.length / audiobooksPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPagination = pageNumbers.map(number => (
    <button
      key={number}
      className={`px-2 py-1 mr-2 ${currentPage === number ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-md`}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </button>
  ));

  return (
    <div className="audiobooks-container p-10 bg-white">
      <h1 className="text-xl font-bold mb-4 my-10">All Audiobooks</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">#</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentAudioBooks.map((audiobook, index) => (
            <tr key={audiobook.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{indexOfFirstAudiobook + index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{audiobook.title}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{audiobook.description}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{formatDate(audiobook.created_at)}</td>
              <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                <button className="text-white font-semibold bg-red-500 py-2 px-4 rounded-md" onClick={() => handleDelete(audiobook.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5 flex justify-end">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 mr-2 bg-gray-200 text-gray-800 rounded-md"
        >
          Previous
        </button>
        {renderPagination}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(audiobooks.length / audiobooksPerPage)}
          className="px-2 py-1 ml-2 bg-gray-200 text-gray-800 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
