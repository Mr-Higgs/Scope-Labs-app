import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import './VideoDetail.scss';


// This component displays the details of a specific video. It fetches the video data from the API and renders it along with various controls and information.
const VideoDetail = ({ videoId }) => {
  // State variables to hold the video data, error message, playback rate, and volume.
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const videoRef = useRef(null);

  // UseEffect hook to fetch the video data from the API when the videoId prop changes.
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        // Send a GET request to the API with the videoId parameter to fetch the video data.
        const response = await axios.get('https://take-home-assessment-423502.uc.r.appspot.com/api/videos/single', { params: { video_id: videoId } });
        console.log('API Response:', response.data); // Debug log

        // Extract the video data from the response and update the video state.
        const videoData = response.data.video;
        if (videoData) {
          console.log('Setting video:', videoData);
          setVideo(videoData);
        } else {
          setError('Video data not found');
        }
      } catch (error) {
        console.error('Error fetching video:', error);
        setError(`Failed to fetch video: ${error.message}`);
      }
    };
    fetchVideo();
  }, [videoId]);

  // Function to handle full screen mode.
  const handleFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(videoRef.current.wrapper);
    }
  };

  // Function to handle playback speed change.
  const handlePlaybackSpeed = (e) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  // Function to handle volume change.
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  // Function to format the timestamp.
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { 
      year: '2-digit', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    };
    return date.toLocaleString('en-US', options);
  };

  // Render the video details if there is an error or video data is not available yet.
  if (error) {
    return <div>{error}</div>;
  }

  if (!video) {
    return <div>Loading...</div>;
  }

  // Render the video player, video details, and comments.
  return (
    <div>
      {/* Render the video player */}
      <ReactPlayer 
        ref={videoRef}
        url={video.video_url} 
        controls 
        width="auto"
        playbackRate={playbackRate}
        volume={volume}/>

      {/* Render the video details */}
      <div className="videodescription">
        <h2 className="videodescription__title">
          {video.title}
        </h2>

        {/* Button to toggle full screen mode */}
        <button className="button-gold" onClick={handleFullScreen}>Full Screen</button>

        {/* Render the video metadata */}
        <div className="videodescription__tab">
          <div className="videodescription__tab-container">
            <p className="videodescription__tab-container-channel">By {video.user_id}</p>
            <p className="videodescription__tab-container-timestamp">{formatDate(video.created_at)}</p>
          </div>

          {/* Render the playback speed and volume controls */}
          <div className="videodescription__tab-container">
            <label>
              Playback:
              <select className="videodescription__tab-container-views" onChange={handlePlaybackSpeed} defaultValue="1">
                <option value="0.5">0.5x</option>
                <option value="1">1x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>
            </label>
            
            <p className="videodescription__tab-container-likes">
              Volume: <input type="range" min="0" max="1" step="0.1" onChange={handleVolumeChange} defaultValue="1" />
            </p>
          </div>
        </div>

        {/* Render the video description */}
        <p className="videodescription__description">{video.description}</p>

        {/* Render the comment count */}
        <h4 className="videodescription__title-label">{video.num_comments} Comment(s)</h4>
      </div>
    </div>
  );
};

export default VideoDetail;
