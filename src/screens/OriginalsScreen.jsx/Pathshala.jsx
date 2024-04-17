import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Pathshala() {
  const [pathshalas, setPathshalas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pathshalasPerPage] = useState(5); // Number of pathshalas per page
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useSelector((state) => state.admin);
  useEffect(() => {
    const fetchPathshalas = async () => {
      try {
        const response = await axios.get(`${apiUrl}/pathshala/getallpathshala`);
        setPathshalas(response.data.pathshalas);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPathshalas();
  }, []);

  // Logic for pagination
  const indexOfLastPathshala = currentPage * pathshalasPerPage;
  const indexOfFirstPathshala = indexOfLastPathshala - pathshalasPerPage;
  const currentPathshalas = pathshalas.slice(indexOfFirstPathshala, indexOfLastPathshala);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pathshalas.length / pathshalasPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleDeletePathshala = async (id) => {
    try {
        // Assuming there's an endpoint to delete a pathshalas by its ID
        const response = await axios.delete(`${apiUrl}/pathshala/deletepathshala/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        // Remove the deleted pathshalas from the state
        console.log(response);
        if(response.status===200){

          setPathshalas(pathshalas.filter(pathshalas => pathshalas.id !== id));
        }
        else{
            alert("Could'nt delete")
        }
    } catch (error) {
        console.error(error);
        // setError('Failed to delete pathshalas');
        alert("could'nt delete pathshala");
    }
};

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
    <div className="container mx-auto px-10 py-10 bg-white">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 bg-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div>
          <h1 className="text-xl font-bold mb-4">Pathshala</h1>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Pathshala</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Pathshala Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPathshalas.map((pathshala, index) => (
                <tr key={pathshala.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{indexOfFirstPathshala + index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{pathshala.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{pathshala.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                    <button
                      className="text-white bg-red-500 font-semibold py-2 px-4 rounded-md"
                      onClick={() => handleDeletePathshala(pathshala.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
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
              disabled={currentPage === Math.ceil(pathshalas.length / pathshalasPerPage)}
              className="px-2 py-1 ml-2 bg-gray-200 text-gray-800 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
