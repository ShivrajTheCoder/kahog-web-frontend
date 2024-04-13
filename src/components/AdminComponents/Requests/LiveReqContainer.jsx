import React, { useState, useEffect } from 'react';

export default function LiveReqContainer() {
  const [liveRequests, setLiveRequests] = useState([]);

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

  const handleApprove = (id) => {
    // Implement approve logic here
    console.log("Approved live request with ID:", id);
  };

  const handleDisapprove = (id) => {
    // Implement disapprove logic here
    console.log("Disapproved live request with ID:", id);
  };

  const handleStartTimeChange = (id, newStartTime) => {
    // Implement logic to update start time
    console.log("Updated start time for live request with ID:", id, "to", newStartTime);
  };

  const handleEndTimeChange = (id, newEndTime) => {
    // Implement logic to update end time
    console.log("Updated end time for live request with ID:", id, "to", newEndTime);
  };

  return (
    <div className='my-4'>
      {/* <h1>Live Requests</h1> */}
      <table className="table-auto w-full">
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
          {liveRequests.map(request => (
            <tr key={request.id}>
              <td className="border px-4 py-2">{request.creatorId}</td>
              <td className="border px-4 py-2">{request.date}</td>
              <td className="border px-4 py-2">
                <input
                  type="time"
                  value={request.startTime}
                  onChange={(e) => handleStartTimeChange(request.id, e.target.value)}
                  className="border px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="time"
                  value={request.endTime}
                  onChange={(e) => handleEndTimeChange(request.id, e.target.value)}
                  className="border px-2 py-1"
                />
              </td>
              <td className="border px-4 py-2">
                <button onClick={() => handleApprove(request.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Approve</button>
                <button onClick={() => handleDisapprove(request.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Disapprove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
