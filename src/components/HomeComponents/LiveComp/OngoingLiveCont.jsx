import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function OngoingLiveCont() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lives, setLives] = useState([]);

    useEffect(() => {
        setError(null);
        const fetchTopLives = async () => {
            try {
                const response = await axios.get(`${apiUrl}/lives/getTop5LiveEvents`);
                if (response.status === 200) {
                    setLives(response.data.top5LiveEvents);
                } else {
                    console.error('Failed to fetch top lives:', response.statusText);
                    setError('Failed to fetch top lives');
                }
            } catch (error) {
                console.error('Error fetching top lives:', error);
                setError('Error fetching top lives');
            } finally {
                setLoading(false);
            }
        }
        fetchTopLives();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='mx-20 my-10'>
            <h2 className="text-2xl font-bold mb-4">Ongoing Live Events</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {lives.map((live, index) => (
                    <div key={index} className="border rounded  shadow-md ">
                        <img src="https://res.cloudinary.com/dushmacr8/image/upload/v1707575264/kj%20images/audiocover3_oxgkjv.jpg" alt="Live event" className="w-full h-40 object-cover mb-4 rounded-t-md " />
                        <div className='p-4'>
                            <h3 className="text-lg font-semibold ">{live.topic}</h3>
                            <p className="text-gray-700 mb-5">{live.description}</p>
                            <Link to={`/live`} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md bottom-4 w-full block text-center">Join Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
