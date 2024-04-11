import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/events/getallevents`);
        setEvents(response.data.events);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-20 px-4">
      {loading && <p className="text-center text-gray-500">Loading events...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <h1 className="text-xl font-bold my-10 mb-4">Events</h1>
      {events.length > 0 && (
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-10">
          {events.length > 0 && events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md "
            >
              <img
                src="data:image/jpeg;base64,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" // Replace with placeholder image URL
                alt="Event placeholder"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <button className="btn btn-primary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repudiandae consequuntur officia mollitia, dolor totam adipisci at recusandae distinctio odit. Architecto deserunt placeat itaque similique quasi nulla voluptas eaque fuga.</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
