import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Karyashala() {
  const [karyashalas, setKaryashalas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

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

  const handleJoinKaryashala = (karyashalaId) => {
    // Implement your logic to join a karyashala here
    console.log(`Joined karyashala with ID: ${karyashalaId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 bg-blue-500"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className='mx-20'>
          <h1 className="text-xl font-bold mb-4 ">Karyashala</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {karyashalas.map((karyashala) => (
              <div
                key={karyashala.id}
                className="shadow rounded overflow-hidden bg-white"
              >
                <img src="data:image/jpeg;base64,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" alt="" srcset="" className="w-full" /> {/* Added w-full for image width */}
                <div className="p-4">
                  <h2 className="text-xl font-bold">{karyashala.karyashala_name}</h2>
                  <p className="text-gray-700 mb-4">{karyashala.description}</p>
                  <button
                    className="bg-green-500 text-white hover:bg-green-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full"
                    onClick={() => handleJoinKaryashala(karyashala.id)}
                  >
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
