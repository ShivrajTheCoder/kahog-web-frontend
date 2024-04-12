import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ChannelContainer() {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(() => {
    setError(null);
    const fetchChannels = async () => {
      try {
        const response = await axios.get(`${apiUrl}/channels/getcreatorchannels/1`);
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          setChannels(response.data.channels);
        } else {
          setError('Failed to fetch channels: ' + response.statusText); // Set error message
        }
      } catch (error) {
        console.error('Error fetching channels:', error);
        setError('Error fetching channels: ' + error.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error || channels?.length === 0) {
    return <div className="text-center p-4">No Channels found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-5">Your Channels</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {channels.map((channel) => (
          <div key={channel.id} className="shadow-md rounded-lg overflow-hidden">
            <img src="data:image/jpeg;base64,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" alt={channel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2>{channel.name}</h2>
              <p className="text-gray-600">{channel.description}</p>
              <p className='mb-2'>Interest</p>
              <Link to={`/uploadcontent/1`} className="bg-black text-white font-bold py-2 px-4 rounded-md w-full">Add Content</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
