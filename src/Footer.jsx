import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <section>
      <footer className="footer-container">
        <div className="social-links">
          <a
            href="https://twitter.com/domino_427"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.tiktok.com/@domino_427?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            href="https://www.youtube.com/@domino427family"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://www.twitch.tv/domino427"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2023 Made by Retailescapeartist</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
