import axios from 'axios';
import React, { useState } from 'react';

export default function LiveCard({ request }) {
    const [startTime, setStartTime] = useState(request.startTime);
    const [endTime, setEndTime] = useState(request.endTime);
    const apiUrl=import.meta.env.VITE_API_URL
    const handleStartTimeChange = (e) => {
        const newStartTime = e.target.value;
        setStartTime(newStartTime);
        // You can perform additional logic here if needed
    };

    const handleEndTimeChange = (e) => {
        const newEndTime = e.target.value;
        setEndTime(newEndTime);
        // You can perform additional logic here if needed
    };
    const handleApprove = async (id) => {
        console.log("Approved live request with ID:", id);
        console.log(startTime, endTime, "here are times");

        // Convert start and end time strings to Date objects
        const startDateTime = new Date(`2000-01-01T${startTime}`);
        const endDateTime = new Date(`2000-01-01T${endTime}`);

        // Calculate the time difference in minutes
        const timeDiff = (endDateTime - startDateTime) / (1000 * 60);

        // Check if start time is earlier than end time and there's at least a 15-minute gap
        if (startDateTime < endDateTime && timeDiff >= 15) {
            try {
                // change this live id hardcorded for now
                const resp=await axios.put(`${apiUrl}/lives/updateLiveEvent/1`, {
                    startTime: startTime,
                    endTime: endTime,
                    startDate: request.date,
                });
                console.log(resp.data);
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Invalid time range. Start time must be earlier than end time and have a gap of at least 15 minutes.");
            // You can display an error message to the user if needed
        }
    };


    return (
        <tr key={request.id}>
            <td className="border px-4 py-2">{request.creatorId}</td>
            <td className="border px-4 py-2">{request.date}</td>
            <td className="border px-4 py-2">
                <input
                    type="time"
                    value={startTime}
                    onChange={handleStartTimeChange}
                    className="border px-2 py-1"
                />
            </td>
            <td className="border px-4 py-2">
                <input
                    type="time"
                    value={endTime}
                    onChange={handleEndTimeChange}
                    className="border px-2 py-1"
                />
            </td>
            <td className="border px-4 py-2">
                <button onClick={() => handleApprove(request.id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2" >Approve</button>
                {/* <button onClick={() => handleDisapprove(request.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Disapprove</button> */}
            </td>
        </tr>
    );
}
