import React, { useState } from 'react';
import axios from 'axios';
import './CreateComment.scss';

/**
 * CreateComment component allows users to create comments for a given video.
 * It uses React hooks to manage state and makes API calls to create comments.
 *
 * Props:
 * - videoId: The ID of the video for which comments are being created.
 */
const CreateComment = ({ videoId }) => {
  // State hooks to store the content of the comment, error, and success message.
  const [content, setContent] = useState(''); // The content of the comment being created.
  const [error, setError] = useState(null); // Any error that occurs during comment creation.
  const [success, setSuccess] = useState(null); // Success message to display after comment creation.
 
  /**
   * Handle form submission event.
   * Send a POST request to the API to create a new comment.
   * Update the state based on the response.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    setError(null); // Reset the error state.
    setSuccess(null); // Reset the success state.
    try {
      // Send a POST request to the API to create a new comment.
      const response = await axios.post('https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments', {
        video_id: videoId, // The ID of the video for which the comment is being created.
        user_id: 'jerry_pierre', // The user ID of the comment creator (hardcoded for this example).
        content // The content of the comment.
      });
      console.log('Comment created:', response.data); // Debug log.
      setSuccess('Comment created successfully'); // Update the success state.
      setContent(''); // Reset the comment content state.
    } catch (error) {
      console.error('Error creating comment:', error); // Log the error.
      setError('Failed to create comment'); // Update the error state.
    }
  };

  return (

    <section className="commentinput">


      <form onSubmit={handleSubmit} className="commentinput__tab-container">

        <div>
          <h5 className="commentinput__tab-label">JOIN THE CONVERSATION</h5>

          <input className="commentinput__tab-container-input" 
          type="text" 
          value={content} // The content of the comment being created.
          onChange={(e) => setContent(e.target.value)} // Update the comment content state when the input changes.
          placeholder='Add a new comment'/> // Placeholder text for the input.
        </div>

        <button type="submit" className="commentinput__tab-container-button">
          Add Comment
        </button>
        {/* // Display the error message if there is an error. */}
        {error && <div className="error-message">{error}</div>} 
        {/* // Display the success message if the comment was created successfully. */}
        {success && <div className="success-message">{success}</div>} 
        
      </form>
    </section>

    
  );
};

export default CreateComment;
