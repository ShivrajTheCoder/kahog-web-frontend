import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function ChannelContainer() {
  const [channels, setChannels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [channelsPerPage] = useState(5); // Number of channels per page
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Dummy data for demonstration
    const dummyData = [
      {
        id: 1,
        channelName: "Channel A",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem asperiores minus magnam voluptatem perspiciatis modi? Quo, aut eligendi tenetur, explicabo, quasi animi culpa accusantium officiis suscipit harum ex quas?",
        interest: "Technology",
        creatorName: "Creator A"
      },
      {
        id: 2,
        channelName: "Channel B",
        description: "Description of Channel B",
        interest: "Travel",
        creatorName: "Creator B"
      },
      // Add more dummy data as needed
    ];

    // Simulate API call by setting state with dummy data
    setChannels(dummyData);
  }, []);

  // Get current channels
  const indexOfLastChannel = currentPage * channelsPerPage;
  const indexOfFirstChannel = indexOfLastChannel - channelsPerPage;
  const currentChannels = channels.slice(indexOfFirstChannel, indexOfLastChannel);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleApprove = async (id) => {
    // Implement approve logic here
    try {
      //change channel id
      const resp = await axios.put(`${apiUrl}/channels/approvechannel/1`, {
        isApproved: true
      });
      console.log(resp);
      if (resp.status === 200) {
        console.log(resp.data);
      }
      else {
        alert("Something went wrong");
      }
    }
    catch (error) {
      alert(error);
    }
    // console.log("Approved channel with ID:", id);
  };

  const handleDisapprove = (id) => {
    // Implement disapprove logic here
    console.log("Disapproved channel with ID:", id);
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
            <th className="border px-4 py-2">Creator Name</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentChannels.map(channel => (
            <tr key={channel.id}>
              <td className="border px-4 py-2">{channel.channelName}</td>
              <td className="border px-4 py-2 max-w-xs overflow-hidden">{channel.description}</td>
              <td className="border px-4 py-2">{channel.interest}</td>
              <td className="border px-4 py-2">{channel.creatorName}</td>
              <td className="border px-4 py-2 grid grid-cols-2">
                <button onClick={() => handleApprove(channel.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded mr-2">Approve</button>
                {/* <button onClick={() => handleDisapprove(channel.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded">Disapprove</button> */}
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
