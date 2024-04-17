import React, { useState, useEffect } from 'react';
import LiveCard from './LiveCard';

export default function LiveReqContainer() {
  const [liveRequests, setLiveRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(5); // Number of requests per page

  useEffect(() => {
    // Dummy data for demonstration
    const dummyData = [
      {
        id: 1,
        creatorId: "123",
        date: "2024-04-13",
        startTime: "09:00",
        endTime: "11:00"
      },
      {
        id: 2,
        creatorId: "456",
        date: "2024-04-14",
        startTime: "10:00",
        endTime: "12:00"
      },
      // Add more dummy data as needed
    ];

    // Simulate API call by setting state with dummy data
    setLiveRequests(dummyData);
  }, []);

  // Get current requests
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = liveRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='py-10 px-10'>
      <h1 className='my-3 font-bold text-xl'>Live Requests</h1>
      <table className="table-auto w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">Creator ID</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Start Time</th>
            <th className="border px-4 py-2">End Time</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRequests.map(request => (
            <LiveCard key={request.id} request={request} />
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {liveRequests.length > requestsPerPage && (
          <ul className="flex">
            {[...Array(Math.ceil(liveRequests.length / requestsPerPage)).keys()].map(number => (
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
