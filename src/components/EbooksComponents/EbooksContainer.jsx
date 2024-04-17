import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EbooksContainer() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [ebooksPerPage] = useState(5); // Number of ebooks per page

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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/ebooks/${id}`);
      if (response.status === 200) {
        setEbooks(ebooks.filter(ebook => ebook.id !== id));
      } else {
        console.error('Failed to delete ebook:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting ebook:', error);
      setError(error.message);
    }
  };

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

  // Logic for pagination
  const indexOfLastEbook = currentPage * ebooksPerPage;
  const indexOfFirstEbook = indexOfLastEbook - ebooksPerPage;
  const currentEbooks = ebooks.slice(indexOfFirstEbook, indexOfLastEbook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(ebooks.length / ebooksPerPage); i++) {
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
    <div className="ebooks-container p-10">
      <h1 className="text-xl font-bold mb-4 my-10">All Ebooks</h1>
      <table className="w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SNo.</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentEbooks.map((ebook, index) => (
            <tr key={ebook.id}>
              <td className="px-6 py-4 whitespace-nowrap border">{indexOfFirstEbook + index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap border">{ebook.title}</td>
              <td className="px-6 py-4 whitespace-nowrap border">{ebook.description}</td>
              <td className="px-6 py-4 whitespace-nowrap border">{formatDate(ebook.created_at)}</td>
              <td className="px-6 py-4 whitespace-nowrap border">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => handleDelete(ebook.id)}>Delete</button>
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
          disabled={currentPage === Math.ceil(ebooks.length / ebooksPerPage)}
          className="px-2 py-1 ml-2 bg-gray-200 text-gray-800 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
