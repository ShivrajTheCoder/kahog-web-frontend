import React, { useState, useEffect } from 'react';

export default function ChannelContainer() {
  const [channels, setChannels] = useState([]);

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

  const handleApprove = (id) => {
    // Implement approve logic here
    console.log("Approved channel with ID:", id);
  };

  const handleDisapprove = (id) => {
    // Implement disapprove logic here
    console.log("Disapproved channel with ID:", id);
  };

  return (
    <div className='w-full mt-4'>
      {/* <h1>Channels</h1> */}
      <table className="table-auto w-full">
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
          {channels.map(channel => (
            <tr key={channel.id}>
              <td className="border px-4 py-2">{channel.channelName}</td>
              <td className="border px-4 py-2 max-w-xs overflow-hidden">{channel.description}</td>
              <td className="border px-4 py-2">{channel.interest}</td>
              <td className="border px-4 py-2">{channel.creatorName}</td>
              <td className="border px-4 py-2 grid grid-cols-2">
                <button onClick={() => handleApprove(channel.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded mr-2">Approve</button>
                <button onClick={() => handleDisapprove(channel.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded">Disapprove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
