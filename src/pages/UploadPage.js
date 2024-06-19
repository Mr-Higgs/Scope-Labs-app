import React from 'react';
import CreateVideo from '../components/CreateVideo';
import "./UploadPage.scss"


// This is the UploadPage component. It is a functional component that renders a page
// allowing users to upload videos.
const UploadPage = () => {
  // The component returns a JSX element that represents the upload page.
  return (
    // The outermost div has a class of "upload" which is defined in the UploadPage.scss
    // file to style the upload page.
    <div className="upload">
      {/* The h1 element displays the title of the upload page. */}
      <h1 className="upload__page-title">Upload Video</h1>
      {/* The CreateVideo component is rendered with the className prop set to "createVideo"
          which is defined in the UploadPage.scss file to style the component. */}
      <CreateVideo className="createVideo"/>
    </div>
  );
};

export default UploadPage;
