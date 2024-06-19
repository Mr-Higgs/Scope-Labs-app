# Simple Web Application for Educational Videos

## Purpose

This task is designed to showcase my skills in web development, my ability to create a user-friendly and informative UI, and the organization and structure of code I write from scratch. This problem is left intentionally vague and open-ended in many regards because at Scope Labs, I will not always be given exact, precise, and detailed specifications for the functionality I will be implementing. I will often be responsible for making reasonable design decisions, and determining the precise spec for my work.

## The Problem

I am a software engineer, and I have been hired by an EdTech company to develop a simple web application that allows users to create, comment on, and watch educational videos. The application should interact with the given backend API and provide a seamless and engaging experience for users. The design and UI are up to me to create.

## Features

- **Video List**: Display a list of videos and allow users to select a video from the list.
- **Create Video**: Allow the user to create a new video object with a title, description, and a video URL.
- **Comments**: Enable users to comment on a video and view comments from other users.
- **Video Playback**: Open the videos in full screen with full playback functionality.
- **Playback Controls**: Include options for adjusting playback speed and volume.

## Technologies Used

- **Frontend**: React.js: React, React Router, Axios, ReactPlayer
- **Backend**: Node.js (proxy server) and Express.js
- **Styling**: SCSS with BEM methodology
- **HTTP Client**: Axios


## Getting Started

### Prerequisites

- Node.js
- npm or Yarn
- A running instance of the provided backend API

### Installation

1. Clone the repository:
   ```bash
   Educational Video Player
    - cd app https://github.com/Mr-Higgs/Scope-Labs-app.git
    - git clone https://github.com/Mr-Higgs/Scope-Labs-app.git
    - cd app

   ```

2. **Install dependencies:**
   ```bash
    npm install
       # or
    yarn install
   ```

3. **Start the backend proxy server:**
   ```bash
   node server.js
   ```
4. **Start the frontend development server:**
    ```bash
    npm start
        # or
    yarn start
   ```

5. **Open the web page in your browser:**
   ```bash
   http://localhost:3000
   ```

## Project Structure

FRONTEND
src/ - `src/`: Source code for the application
│
├── build/ - `build/`: Build artifacts
│   ├── static - `static/`: Static assets
│      └── js - `js/`: JavaScript files
│      └── css - `css/`: CSS files 
│      └── media - `media/`: Media files 
├── assets/ - `assets/`: Logos, icons, avatars, and images
│   ├── icons/ - `icons/`: SVG icons
│   ├── images/ - `images/`: PNG images
│   └── logo.png - `logo.png`: Logo for the application
│
├── components/ - `components/`: React components for various parts of the UI
│   ├── CommentList.js - `CommentList.js`
│   ├── CommentList.scss - `CommentList.scss`
│   ├── CreateComment.js - `CreateComment.js`
│   ├── CreateComment.scss - `CreateComment.scss`
│   ├── CreateVideo.js - `CreateVideo.js`
│   ├── CreateVideo.scss - `CreateVideo.scss`
│   ├── VideoDetail.js - `VideoDetail.js `
│   ├── VideoDetail.scss - `VideoDetail.scss`
│   └── VideoList.js - `VideoList.js`
│   └── VideoList.scss - `VideoList.scss`
│
├── pages/ - `pages/`: Pages for the application
│   ├── SingleVideoPage.js - `SingleVideoPage.js`
│   ├── SingleVideoPage.scss - `SingleVideoPage.scss`
│   ├── VideoListingsPage.js - `VideoListingsPage.js`
│   ├── VideoListingsPage.scss - `VideoListingsPage.scss`
│   ├── UploadPage.js - `UploadPage.js`
│   ├── UploadPage.scss - `UploadPage.scss`
│
├── context/ - `context/`: Facilitates state management for components in the application
│   ├── VideoContext.js - `VideoContext.js`
│
├── styles/ - `styles/`: SCSS files and partials for styling
│   ├── _variables.scss - `variables.scss`
│   ├── _mixins.scss - `mixins.scss`
│   ├── _base.scss - `base.scss`
│   ├── _buttons.scss - `buttons.scss`
│   ├── _layout.scss - `layout.scss`
│   ├── _components.scss - `components.scss`
│   └── main.scss - `main.scss`
│
├── App.js - `App.js`: Root component for the application
├── index.js - `index.js`: Main entry point for the application
 
 BACKEND - video-api - `video-api/`: Backend API - seperate from frontend
└── server.js - `server/`: API proxy for backend server
---


## Usage

### Viewing Videos
- Go to the home page to see a list of videos.
- Click on a video to view details and play it.
- Adjust playback speed and volume as needed.
- Enter full-screen mode for an immersive experience.

### Adding Comments
- Scroll down on the video detail page to see existing comments.
- Use the input field to add a new comment.

### Uploading Videos
- Navigate to the "Upload" page using the header button.
- Fill in the form with video details and submit.

### Searching for Videos
- Use the search bar in the header to filter videos by title.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

Project Structure
---



This README file provides a comprehensive guide to understanding, setting up, and contributing to the project. My goal is to create a functional and user-friendly educational video web application.


