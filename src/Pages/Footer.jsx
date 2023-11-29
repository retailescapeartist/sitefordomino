import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://twitter.com/Domino427" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.tiktok.com/@domino427" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
        <a href="https://www.youtube.com/user/Domino427" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
        <a href="https://www.twitch.tv/domino427" target="_blank" rel="noopener noreferrer">
          Twitch
        </a>
        {/* Add more social links as needed */}
      </div>
      <p>&copy; 2023 Domino427. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
