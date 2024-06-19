import React, { useState } from 'react';
import axios from 'axios';

// CreateVideo component is a form that allows users to create a new video.
const CreateVideo = () => {
    // UseState hooks to manage state for userId, title, description, videoUrl, error, and success messages.
    const [userId, setUserId] = useState(''); // The user ID of the creator of the video.
    const [title, setTitle] = useState(''); // The title of the video.
    const [description, setDescription] = useState(''); // The description of the video.
    const [videoUrl, setVideoUrl] = useState(''); // The URL of the video.
    const [error, setError] = useState(null); // Any error that occurs during video creation.
    const [success, setSuccess] = useState(null); // Success message to display after video creation.

    // Function to handle form submission.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        try {
            // Send a POST request to the API to create a new video.
            const response = await axios.post('https://take-home-assessment-423502.uc.r.appspot.com/api/videos', { 
                user_id: userId, // The user ID of the creator of the video.
                title, // The title of the video.
                description, // The description of the video.
                video_url: videoUrl // The URL of the video.
            });
            console.log('Video created:', response.data); // Debug log.
            setSuccess('Video created successfully'); // Update the success state.
            setUserId(''); // Reset the user ID state.
            setTitle(''); // Reset the title state.
            setDescription(''); // Reset the description state.
            setVideoUrl(''); // Reset the video URL state.
        } catch (error) {
            console.error('Error creating video:', error); // Log the error.
            setError(`Failed to create video: ${error.message}`); // Update the error state.
        }
    };

    return (
        // Render a form that allows users to create a new video.
        <form onSubmit={handleSubmit} className="createVideo">
            <div className="createVideo-input" >
                <input className="createVideo-input" type="text" value={userId} placeholder="USER" onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div className="createVideo-input">
                <input className="createVideo-input" type="text" value={title} placeholder="TITLE" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="createVideo-input">
                <input className="createVideo-input" type="text" value={description} placeholder="DESCRIPTION" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="createVideo-input">
                <input className="createVideo-input" type="text" value={videoUrl} placeholder="URL" onChange={(e) => setVideoUrl(e.target.value)} />
            </div>
            <div className="createVideo-input">
                <button className="createVideo-input-button-gold" type="submit">Upload</button>
            </div>
            
            {error && <div className="error">{error}</div>}
            {success && <div>{success}</div>}
        </form>
    );
};

export default CreateVideo;
