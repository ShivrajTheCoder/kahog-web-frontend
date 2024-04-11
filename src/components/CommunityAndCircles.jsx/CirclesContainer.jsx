import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function CirclesContainer() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [circles, setCircles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const fetchCircles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/circles/getallcircles`);
        if (response.status === 200) {
          setCircles(response.data.circles);
        } else {
          setError('Failed to fetch circles');
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCircles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-4">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {circles.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {circles.map((circle) => (
            <div key={circle.id} className="rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/70"
                alt={circle.circle_name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {circle.circle_name}
              </h3>
              <p className="text-base text-gray-600 mb-2">
                Admin: ID {circle.admin_id}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Created: {new Date(circle.created_at).toLocaleDateString()}
              </p>
              {/* Additional details can be added here */}
              <button className="w-full bg-black text-white font-bold py-2 rounded-b-lg shadow-sm">
                Join Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
