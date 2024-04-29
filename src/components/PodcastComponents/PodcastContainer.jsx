import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function PodcastContainer() {
    const [categoryId, setCategoryId] = useState(6);
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [podcastsPerPage] = useState(5); // Number of podcasts per page
    const apiUrl = import.meta.env.VITE_API_URL;
    const { token } = useSelector((state) => state.admin);
    useEffect(() => {
        const fetchPodcasts = async () => {
            setError(null); // Clear any previous error

            try {
                const response = await axios.get(`${apiUrl}/podcasts/getallpodcasts`);
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
    const handleApprove = async (id) => {
        try {
            const resp = await axios.put(
                `${apiUrl}/podcasts/approvepodcast/${id}`,
                { isApproved: true },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (resp.status === 200) {
                // console.log(resp.data);
                // Update the podcast state after approval by updating the isApproved status
                setPodcasts(podcasts.map(podcast => {
                    if (podcast.id === id) {
                        return { ...podcast, isApproved: true };
                    }
                    return podcast;
                }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            // Assuming there's an endpoint to delete a podcast by its ID
            const response = await axios.delete(`${apiUrl}/podcasts/deletepodcast/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            // Remove the deleted podcast from the state
            console.log(response);
            if (response.status === 200) {

                setPodcasts(podcasts.filter(podcast => podcast.id !== id));
            }
            else {
                alert("Could'nt delete")
            }
        } catch (error) {
            console.error(error);
            // setError('Failed to delete podcast');
            alert("could'nt delete podcasts");
        }
    };

    // Logic for pagination
    const indexOfLastPodcast = currentPage * podcastsPerPage;
    const indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
    const currentPodcasts = podcasts.slice(indexOfFirstPodcast, indexOfLastPodcast);

    const renderPodcasts = () => {
        if (loading) {
            return <tr><td colSpan="5" className="text-center p-4">Loading podcasts...</td></tr>;
        }

        if (error) {
            return <tr><td colSpan="5" className="text-center p-4 text-red-500">Error: {error}</td></tr>;
        }

        if (!currentPodcasts.length) {
            return <tr><td colSpan="5" className="text-center p-4">No podcasts found in this category.</td></tr>; // Handle empty category
        }

        return currentPodcasts.map((podcast, index) => (
            <tr key={podcast.id}>
                <td className="px-4 py-2 text-center border">{indexOfFirstPodcast + index + 1}</td>
                <td className="px-4 py-2 text-center border">{podcast.name}</td>
                <td className="px-4 py-2 text-center border">Satish</td>
                <td className="px-4 py-2 text-center border">{podcast.description.slice(0, 50)}...</td>
                <td className="px-4 py-2 text-center border flex flex-col">
                    <button className='bg-red-600 text-white text-sm font-bold py-1 px-2 rounded-md' onClick={() => handleDelete(podcast.id)}>Delete</button>
                    {
                        !podcast.isApproved && <button className='bg-green-600 text-white text-sm font-bold py-1 px-2 rounded-md mt-2' onClick={() => handleApprove(podcast.id)}>Approve </button>
                    }

                </td>
            </tr>
        ));
    };

    // Logic for pagination controls
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(podcasts.length / podcastsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPagination = pageNumbers.map(number => (
        <button
            key={number}
            className={`px-2 py-1 mr-2 ${currentPage === number ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-md`}
            onClick={() => setCurrentPage(number)}
        >
            {number}
        </button>
    ));

    return (
        <div className='py-10 px-10'>
            <h1 className='text-xl font-bold my-5'>Podcasts for All</h1>
            <table className="w-full border-collapse border border-gray-400">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Serial No</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Podcast Name</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Creator Name</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Description</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {renderPodcasts()}
                </tbody>
            </table>
            <div className="mt-5 flex justify-end">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2 py-1 mr-2 bg-gray-200 text-gray-800 rounded-md"
                >
                    Previous
                </button>
                {renderPagination}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === Math.ceil(podcasts.length / podcastsPerPage)}
                    className="px-2 py-1 ml-2 bg-gray-200 text-gray-800 rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
