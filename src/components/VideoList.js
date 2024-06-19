import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { VideoContext } from '../contexts/VideoContext';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './VideoList.scss'

// VideoList component displays a list of videos fetched from the API.
const VideoList = () => {
  // Use the VideoContext to access the videos state and the setVideos function.
  const { videos, setVideos } = useContext(VideoContext);
  
  // State variable to hold any error that occurs during fetching.
  const [error, setError] = useState(null);
  
  // Use the useHistory hook to access the browser history.
  const history = useHistory();

  // useEffect hook to fetch videos from the API when the component mounts.
  useEffect(() => {
    // Async function to fetch videos from the API.
    const fetchVideos = async () => {
      try {
        // Send a GET request to the videos API endpoint, passing the user_id parameter.
        const response = await axios.get('https://take-home-assessment-423502.uc.r.appspot.com/api/videos', { params: { user_id: 'john_smith' } });
        
        // Access the videos array within the response object.
        const videoArray = response.data.videos;
        
        // Check if the extracted videos array is an array.
        if (Array.isArray(videoArray)) {
          // Update the videos state with the extracted videos array.
          setVideos(videoArray);
        } else {
          // If the videos data is not an array, set the error state.
          setError('Videos data is not an array');
        }
      } catch (error) {
        // If there's an error fetching videos, set the error state.
        setError(`Failed to fetch videos: ${error.message}`);
      }
    };
    // Call the fetchVideos function when the component mounts.
    fetchVideos();
  }, [setVideos]);

  // If there's an error, display it.
  if (error) {
    return <div>{error}</div>;
  }

  // Function to handle video click and navigate to the video detail page.
  const handleVideoClick = (videoId) => {
    history.push(`/video/${videoId}`);
  };

  // Render the video list.
  return (
    <div className="video-list">
      {videos.map(video => (
        <div key={video.id} 
             className="video-list__card" 
             onClick={() => handleVideoClick(video.id)}>
          <h3 className="video-list__card-title">{video.title}</h3>
          <ReactPlayer 
            className='video-list__card-thumbnail'
            url={video.video_url} 
            controls 
            width="auto" 
            height="auto"
          />
          <div className='video-list__card-details'>
            <p>By: </p>
            <p>{video.user_id}</p>
          </div>
          <div className='video-list__card-details'>
            <p>Number of comments:</p>
            <p>{video.num_comments}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
