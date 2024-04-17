import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Karyashala() {
  const [karyashalas, setKaryashalas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [karyashalasPerPage] = useState(5); // Number of karyashalas per page
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useSelector((state) => state.admin);
  useEffect(() => {
    const fetchKaryashalas = async () => {
      try {
        const response = await axios.get(`${apiUrl}/karyashala/getallkaryashala`);
        setKaryashalas(response.data.karyashalas);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKaryashalas();
  }, []);

  // Logic for pagination
  const indexOfLastKaryashala = currentPage * karyashalasPerPage;
  const indexOfFirstKaryashala = indexOfLastKaryashala - karyashalasPerPage;
  const currentKaryashalas = karyashalas.slice(indexOfFirstKaryashala, indexOfLastKaryashala);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(karyashalas.length / karyashalasPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleDeleteKaryashala = async (id) => {
    try {
        // Assuming there's an endpoint to delete a karyashalas by its ID
        const response = await axios.delete(`${apiUrl}/karyashala/deletekaryashala/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        // Remove the deleted karyashalas from the state
        console.log(response);
        if(response.status===200){

          setKaryashalas(karyashalas.filter(karyashalas => karyashalas.id !== id));
        }
        else{
            alert("Could'nt delete")
        }
    } catch (error) {
        console.error(error);
        // setError('Failed to delete karyashalas');
        alert("could'nt delete podcasts");
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
          <h1 className="text-xl font-bold mb-4">Karyashala</h1>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">SNo.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Karyashala Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentKaryashalas.map((karyashala, index) => (
                <tr key={karyashala.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{indexOfFirstKaryashala + index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{karyashala.karyashala_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{karyashala.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                    <button
                      className="text-white bg-red-500 font-semibold py-2 px-4 rounded-md"
                      onClick={() => handleDeleteKaryashala(karyashala.id)}
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
              disabled={currentPage === Math.ceil(karyashalas.length / karyashalasPerPage)}
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
