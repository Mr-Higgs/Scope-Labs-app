import React from 'react';
import VideoDetail from '../components/VideoDetail';
import CommentList from '../components/CommentList';
import CreateComment from '../components/CreateComment';
import VideoList from '../components/VideoList';
import './SingleVideoPage.scss'

// This is the SingleVideoPage component. It is a functional component that takes
// a single prop, `match`, which is an object containing the URL parameters.
// The `videoId` parameter is extracted from `match.params`.
const SingleVideoPage = ({ match }) => {
  // Extract the `videoId` parameter from `match.params`.
  const { videoId } = match.params;

  // Return a JSX element that represents the SingleVideoPage.
  return (
    // The outermost div has a class of "videoPage" which is defined in the
    // SingleVideoPage.scss file to style the page.
    <div className="videoPage">
      {/* The first div has a class of "videoPage__container" which is defined in
          the SingleVideoPage.scss file to style the container for the video
          detail, create comment, and comment list. */}
      <div className="videoPage__container">
        {/* The VideoDetail component is rendered with the `videoId` prop set to
            the extracted `videoId` parameter. */}
        <VideoDetail videoId={videoId} />
        {/* The CreateComment component is rendered with the `videoId` prop set to
            the extracted `videoId` parameter. */}
        <CreateComment videoId={videoId} />
        {/* The CommentList component is rendered with the `videoId` prop set to
            the extracted `videoId` parameter. */}
        <CommentList videoId={videoId} />
      </div>
    
      {/* The second div has a class of "videoPage__container-section" which is
          defined in the SingleVideoPage.scss file to style the container for the
          video list. */}
      <div className="videoPage__container-section">
        {/* The VideoList component is rendered with no props. */}
        <VideoList />
      </div>
    </div>
  );
};

export default SingleVideoPage;
