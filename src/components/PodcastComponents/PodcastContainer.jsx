import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PodcastContainer() {
    const [categoryId, setCategoryId] = useState(6);
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchPodcasts = async () => {
            setError(null); // Clear any previous error

            try {
                const response = await axios.get(`${apiUrl}/podcasts/getpodcastsbycategory/${categoryId}`);
                // console.log(response.data.podcasts, 'here are podcasts');
                setPodcasts(response.data.podcasts);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch podcasts'); // Informative error message
            } finally {
                setLoading(false);
            }
        };

        fetchPodcasts();
    }, [categoryId]); // Re-fetch on category ID change

    const renderPodcasts = () => {
        if (loading) {
            return <div className="text-center p-4">Loading podcasts...</div>;
        }

        if (error) {
            return <div className="text-center p-4 text-red-500">Error: {error}</div>;
        }

        if (!podcasts.length) {
            return <div className="text-center p-4">No podcasts found in this category.</div>; // Handle empty category
        }

        return podcasts.map((podcast) => (
            <div key={podcast.id} className="podcast-card p-4 mb-4 shadow-md rounded-lg">
                <img src="https://media.istockphoto.com/id/1432904272/photo/teenager-boy-recording-podcast-at-home.jpg?s=1024x1024&w=is&k=20&c=ApF-6nIjvXt_i1sAuy4dLNXV-5Hag70SikownEXubUo=" alt={podcast.name}  />
                <h2 className="text-xl font-bold mb-2">{podcast.name}</h2>
                <h2 className="text-lg mb-2">Satish Kumar</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum voluptate ab laudantium modi, tenetur sint nemo fugit, porro ratione assumenda, nesciunt soluta eaque exercitationem! Modi, molestias. Ex, consequuntur ipsam!</p>
                <button className='w-full bg-red-600 text-white text-lg font-bold py-2 rounded-md'>Listen Now</button>
            </div>
        ));
    };

    return (
        <div className='my-10' >
            <h1 className='text-xl font-bold my-5'>Podcasts for All</h1>
            <section className="grid grid-cols-3 gap-12 ">
                {renderPodcasts()}
            </section>
        </div>
    );
}
