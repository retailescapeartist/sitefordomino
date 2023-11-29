// pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page-container">
      {/* Left Navigation Buttons */}
      <div className="nav-buttons left-buttons">
        <Link to="/schedule">Schedule</Link>
        <Link to="/game-library">Game Library</Link>
        <Link to="/clips-playlists">Clips & Playlists</Link>
        {/* Add more left navigation links as needed */}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="center-content">
          <h1>Welcome to Domino427's Homepage!</h1>
          
          {/* About Me Section */}
          <div className="about-me">
            <h2>About Me</h2>
            <p>
              No, I don't play Fortnite! Welcome home! Join us for some games, relax, and put up your feet!
            </p>
            <p>
              I was born and raised in Florida, so it's not my fault! I'm here to have fun, decompress, and make friends.
            </p>
            <p>
              I love medicine, science, cooking, movies, horror... we wind up talking about any and everything here.
              Twitch is my social life and way to stay sane living with a maga dad and mom with dementia.
            </p>
            <p>
              Thank you everyone for your patience with my health issues. Hard to stream long with shaky hands and pain.
              I cannot thank you enough for your support <span role="img" aria-label="Heart">❤️</span>
            </p>
          </div>
          <Link to="/computer-specs">
            <button className="computer-specs-button">View Computer Specs</button>
          </Link>
          {/* End of About Me Section */}
        </div>
      </div>
      {/* Right Navigation Buttons */}
      <div className="nav-buttons right-buttons">
        <Link to="/art-showcase">Art Showcase</Link>
        <Link to="/game-reviews">Game Reviews</Link>
        <Link to="/redemptions-list">Twitch Redemptions List</Link>
        {/* Add more right navigation links as needed */}
      </div>
    </div>
  );
};

export default HomePage;
