import React, { useState } from 'react';
import axios from 'axios';

import { AiOutlineClose } from 'react-icons/ai';
import Input from '../../Input';
import Textarea from '../../Textarea';

export default function AddKaryashalaModal() {
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaType, setMediaType] = useState('audio'); // Default to audio
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const apiUrl = import.meta.env.VITE_API_URL;
    const handleMediaFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setMediaFile(selectedFile);
    };

    const handleThumbnailFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setThumbnailFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate form fields
        if (!mediaFile || !thumbnailFile || !title || !description) {
            setError('All fields are required');
            return;
        }
        // Submit form data
        const formData = new FormData();
        formData.append('media', mediaFile);
        formData.append('thumbnail', thumbnailFile);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('type', mediaType);

        try {
            const response = await axios.post(`${apiUrl}/karyashala/addkaryashala`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            if (response.status === 201) {
                onClose();
            } else {
                console.log("Something went wrong!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div >
            <div className=" p-8 rounded-md w-96 ">
                
                <h2 className="text-xl font-semibold mb-1">Add Karyashala</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <label htmlFor="title" className="block mb-1">Title:</label>
                        <Input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            error={error}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="description" className="block mb-1">Description:</label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            error={error}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="mediaFile" className="block mb-1">Choose {mediaType === 'audio' ? 'Audio' : 'Video'} File:</label>
                        <input
                            type="file"
                            id="mediaFile"
                            name="mediaFile"
                            accept={mediaType === 'audio' ? 'audio/*' : 'video/*'}
                            onChange={handleMediaFileChange}
                            className="mb-1"
                        />
                        <div>
                            <input
                                type="radio"
                                id="audio"
                                name="mediaType"
                                value="audio"
                                checked={mediaType === 'audio'}
                                onChange={() => setMediaType('audio')}
                            />
                            <label htmlFor="audio" className="ml-2 mr-4">Audio</label>
                            <input
                                type="radio"
                                id="video"
                                name="mediaType"
                                value="video"
                                checked={mediaType === 'video'}
                                onChange={() => setMediaType('video')}
                            />
                            <label htmlFor="video">Video</label>
                        </div>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="thumbnailFile" className="block mb-1">Choose Thumbnail File:</label>
                        <input
                            type="file"
                            id="thumbnailFile"
                            name="thumbnailFile"
                            accept="image/*"
                            onChange={handleThumbnailFileChange}
                            className="mb-1"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
                        Add Karyashala
                    </button>
                </form>
            </div>
        </div>
    );
}
