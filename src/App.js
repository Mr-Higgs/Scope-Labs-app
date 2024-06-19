import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoListingsPage from './pages/VideoListingsPage';
import SingleVideoPage from './pages/SingleVideoPage';
import UploadPage from './pages/UploadPage';
import VideoProvider from './contexts/VideoContext';
import './App.scss';  // Import SCSS file for app-specific styles
import logo from './assets/logo/FULL_LOGO_COLOR.png';

// The App component is the main component of the application. It sets up the routing for the different pages of the application.
const App = () => {
  // The function returns a JSX element that represents the entire application.
  return (
    // The VideoProvider component is used to provide the video context to its descendants. It is used to manage the state of the videos.
    <VideoProvider>
      {/* The Router component from react-router-dom is used to set up the routing for the different pages of the application. */}
      <Router>
        {/* The header component contains the logo and the search bar. */}
        <header className="header">
          {/* The logo is an image that redirects to the home page when clicked. */}
          <img src={logo} alt="Logo" className="logo" onClick={() => window.location.href='/'}/>
          {/* The search bar is a text input with a search icon. */}
          <div className="search-bar">
            <input type="text" placeholder="Search videos..." />
            <i className="search-icon fa fa-search"></i>
          </div>
          {/* The upload button is a button that redirects to the upload page when clicked. */}
          <button className="upload-button" onClick={() => window.location.href='/upload'}>Upload</button>
        </header>
        {/* The Switch component is used to render only the first <Route> or <Redirect> that matches the location. */}
        <Switch>
          {/* The Route component renders the VideoListingsPage component when the path is "/" and the path is exactly matched. */}
          <Route path="/" exact component={VideoListingsPage} />
          {/* The Route component renders the SingleVideoPage component when the path is "/video/:videoId" and the path is exactly matched. The :videoId parameter is extracted from the URL. */}
          <Route path="/video/:videoId" component={SingleVideoPage} />
          {/* The Route component renders the UploadPage component when the path is "/upload" and the path is exactly matched. */}
          <Route path="/upload" component={UploadPage} />
        </Switch>
      </Router>
    </VideoProvider>
  );
};

export default App;


