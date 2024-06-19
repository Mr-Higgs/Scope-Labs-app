import React from 'react';
import VideoList from '../components/VideoList';

/**
 * VideoListingsPage component.
 * This component represents the page where a list of videos is displayed.
 * 
 * @returns {JSX.Element} The VideoListingsPage component.
 */
const VideoListingsPage = () => {
  // Return a JSX element that represents the VideoListingsPage.
  return (
    // The outermost div has a class of "main-content" which is defined in the
    // VideoListingsPage.scss file to style the main content of the page.
    <div className="main-content">
      {/* The VideoList component is rendered without any props. */}
      <VideoList />
    </div>
  );
};

export default VideoListingsPage;
