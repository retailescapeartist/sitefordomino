import React from 'react';
import './ClipsPlaylistsPage.css';

const ClipsPlaylistsPage = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Our Twitch Channel</h1>
        {/* Twitch Stream Box */}
        <div className="twitch-stream-box">
          {/* Replace 'your_twitch_channel' with your actual Twitch channel name */}
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section">
        {/* Clip of the Week */}
        <div className="section">
          <h2>Clip of The Week</h2>
          <div className="video-box">
            {/* Add your embedded video here */}
          </div>
        </div>

        {/* Clips Gallery */}
        <div className="section">
          <h2>Clips Gallery</h2>
          <div className="gallery">
            {/* Add your clip images with appropriate paths */}
            <img src="path/to/clip1.jpg" alt="Clip 1" />
            <img src="path/to/clip2.jpg" alt="Clip 2" />
            {/* Add more clip images as needed */}
          </div>
        </div>

        {/* Movies Gallery */}
        <div className="section">
          <h2>Movies Gallery</h2>
          <div className="gallery">
            {/* Add your movie images with appropriate paths */}
            <img src="path/to/movie1.jpg" alt="Movie 1" />
            <img src="path/to/movie2.jpg" alt="Movie 2" />
            {/* Add more movie images as needed */}
          </div>
        </div>

        {/* Music Gallery */}
        <div className="section">
          <h2>Music Gallery</h2>
          <div className="gallery">
            {/* Add your music images with appropriate paths */}
            <img src="path/to/music1.jpg" alt="Music 1" />
            <img src="path/to/music2.jpg" alt="Music 2" />
            {/* Add more music images as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipsPlaylistsPage;
