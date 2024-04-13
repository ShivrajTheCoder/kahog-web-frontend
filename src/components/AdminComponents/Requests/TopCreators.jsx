import React, { useState, useEffect } from 'react';

export default function TopCreators() {
  const [topCreators, setTopCreators] = useState([]);

  useEffect(() => {
    // Dummy data for demonstration
    const dummyData = [
      {
        id: 1,
        name: "Creator A",
        numberOfVideos: 20,
        followers: 5000,
        numberOfChannels: 3,
        totalViews: 100000
      },
      {
        id: 2,
        name: "Creator B",
        numberOfVideos: 30,
        followers: 8000,
        numberOfChannels: 2,
        totalViews: 120000
      },
      {
        id: 3,
        name: "Creator B",
        numberOfVideos: 30,
        followers: 8000,
        numberOfChannels: 2,
        totalViews: 120000
      },
      // Add more dummy data as needed
    ];

    // Sort creators by total views in descending order
    const sortedCreators = dummyData.sort((a, b) => b.totalViews - a.totalViews);

    // Get the top 5 creators
    const topFiveCreators = sortedCreators.slice(0, 5);

    // Set state with top 5 creators
    setTopCreators(topFiveCreators);
  }, []);

  return (
    <div className='w-fit bg-[#14213d] p-5 rounded-md shadow-lg'>
      <h1 className='text-xl font-bold text-white mb-2'>Top Creators Of The Week</h1>
      <table className="table-auto w-fit text-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Number of Videos</th>
            <th className="border px-4 py-2">Followers</th>
            <th className="border px-4 py-2">Number of Channels</th>
            <th className="border px-4 py-2">Total Views</th>
          </tr>
        </thead>
        <tbody>
          {topCreators.map((creator, index) => (
            <tr key={creator.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{creator.name}</td>
              <td className="border px-4 py-2">{creator.numberOfVideos}</td>
              <td className="border px-4 py-2">{creator.followers}</td>
              <td className="border px-4 py-2">{creator.numberOfChannels}</td>
              <td className="border px-4 py-2">{creator.totalViews}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
