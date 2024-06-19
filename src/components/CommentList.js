import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommentList.scss';
import placeholder from '../assets/images/placeholder-image-icon-12.jpg'

/*
  CommentList component displays a list of comments for a given video.
  It fetches comments from the API and displays them in a list.
 
- The ID of the video for which comments are being fetched.
- The JSX element displaying the list of comments.
 */
const CommentList = ({ videoId }) => {
    // State hooks to store the comments and any error that occurs during fetching.
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    // useEffect hook to fetch comments from the API when the component mounts or when the videoId changes.
    useEffect(() => {
        // Async function to fetch comments from the API.
        const fetchComments = async () => {
            try {
                // Make a GET request to the comments API endpoint, passing the videoId as a parameter.
                const response = await axios.get('https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments', { params: { video_id: videoId } });
                console.log('API Response:', response.data); // Debug log

                // Extract the comments array from the response data.
                const commentArray = response.data.comments;

                // Check if the extracted comments array is an array.
                if (Array.isArray(commentArray)) {
                    console.log('Setting comments:', commentArray);
                    // Update the comments state with the extracted comments array.
                    setComments(commentArray);
                } else {
                    // If the comments data is not an array, set the error state.
                    setError('Comments data is not an array');
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
                // If there's an error fetching comments, set the error state.
                setError(`Failed to fetch comments: ${error.message}`);
            }
        };
        // Call the fetchComments function when the component mounts or when the videoId changes.
        fetchComments();
    }, [videoId]);

    // If there's an error, display it.
    if (error) {
        return <div className="error">{error}</div>;
    }

    // If there are no errors, display the list of comments.
    return (
        <div className="commentdisplay">
            {/* Map over the comments array and display each comment in a list item. */
            comments.map(comment => (
                <div className="commentdisplay__comment" key={comment.id} >
                    <img
                        className="commentdisplay__comment-image"
                        src={placeholder} // Use a placeholder image for the avatar.
                        alt="Avatar" />
                    <div className="commentdisplay__comment-column">
                        <h4 className="commentdisplay__comment-column-content-name">
                            {comment.user_id} // Display the user ID of the comment author.
                        </h4>
                        <p className="commentdisplay__comment-column-text">{comment.content}</p> // Display the content of the comment.
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
