import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

/**
 * VideoProvider is a React component that provides a context for the
 * entire application. It uses the useState hook to manage the state of
 * two variables: videos and comments.
 *
 * The videos state is an array that will hold the list of videos fetched
 * from the API. The comments state is an array that will hold the list of
 * comments for each video.
 *
 * The useState hook returns an array with two elements: the current state
 * value and a function to update the state value. The useState hook is
 * called twice to initialize the videos and comments state variables.
 *
 * The VideoProvider component returns a context provider component that
 * wraps its children components. The value prop of the context provider
 * component is an object that contains the videos and comments state
 * variables and their respective setter functions. The children components
 * can access these state variables and setter functions through the
 * VideoContext object.
 *
 * @param {Object} props - The props object that contains the children
 * components.
 * @return {JSX.Element} - The context provider component that wraps the
 * children components.
 */
export const VideoProvider = ({ children }) => {
  // Initialize the videos state with an empty array.
  const [videos, setVideos] = useState([]);
  // Initialize the comments state with an empty array.
  const [comments, setComments] = useState([]);

  // Return the context provider component that wraps the children components.
  return (
    // The value prop of the context provider component is an object that
    // contains the videos and comments state variables and their respective
    // setter functions.
    <VideoContext.Provider
      value={{
        // The videos state variable.
        videos,
        // The setter function for the videos state variable.
        setVideos,
        // The comments state variable.
        comments,
        // The setter function for the comments state variable.
        setComments
      }}
    >
      {/* The children components that can access the videos and comments
      state variables and setter functions through the VideoContext object. */}
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
