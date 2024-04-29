import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ChannelContainer() {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [channelsPerPage] = useState(5); // Number of channels per page
  const apiUrl = import.meta.env.VITE_API_URL;
  const { token } = useSelector((state) => state.admin);

  useEffect(() => {
    const fetchChannels = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/channels/getchannelsforapproval`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data.unapprovedChannels);
        setChannels(response.data.unapprovedChannels);
        setError(null);
      } catch (error) {
        setError(error.message);
        setChannels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, [apiUrl, token]);

  // Handle loading and error cases
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Get current channels
  const indexOfLastChannel = currentPage * channelsPerPage;
  const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
  const currentChannels = channels.slice(indexOfFirstChannel, indexOfLastChannel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleApprove = async (id) => {
    // Implement approve logic here
    try {
      const resp = await axios.put(`${apiUrl}/channels/approvechannel/${id}`, {
        isApproved: true
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.status === 200) {
        console.log(resp.data);
        // Update the channels state after approval by filtering out the approved channel
        setChannels(channels.filter(channel => channel.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='w-full mx-10'>
      <h1 className="text-2xl font-bold mb-4">Channels</h1>
      <table className="table-auto w-full bg-white ">
        <thead>
          <tr>
            <th className="border px-4 py-2">Channel Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Interest</th>
            <th className="border px-4 py-2">Creator Id</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentChannels.map(channel => (
            <tr key={channel.id}>
              <td className="border px-4 py-2">{channel.name}</td>
              <td className="border px-4 py-2 max-w-xs overflow-hidden">{channel.description}</td>
              <td className="border px-4 py-2">{channel.interest_id}</td>
              <td className="border px-4 py-2">{channel.owner_id}</td>
              <td className="border px-4 py-2 grid grid-cols-2">
                <button onClick={() => handleApprove(channel.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded mr-2">Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {channels.length > channelsPerPage && (
          <ul className="flex">
            {[...Array(Math.ceil(channels.length / channelsPerPage)).keys()].map(number => (
              <li key={number} className="mx-1">
                <button onClick={() => paginate(number + 1)} className="px-3 py-1 bg-blue-500 text-white rounded-md focus:outline-none">{number + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
