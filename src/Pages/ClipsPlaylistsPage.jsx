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
          <iframe src="https://clips.twitch.tv/embed?clip=FastSavoryCobraPermaSmug&parent=http://localhost:3000/clips-playlists" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section">
        {/* Clip of the Week */}
        <div className="section">
          <h2>Clip of The Week</h2>
          <div className="video-box">
            {/* Add your embedded video here */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BaYUM6W5fxI?si=K_Fgf-C2aeYIeWBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
