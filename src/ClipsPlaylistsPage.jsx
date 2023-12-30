import React from "react";
import "./ClipsPlaylistsPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReactPlayer from "react-player";

const ClipsPlaylistsPage = () => {
  return (
    <section>
      <Navbar />
      <div className="clips-playlists-container">
        <h1 className="page-title">Clips & Playlists</h1>
        <div className="clip-of-week">
          <h1 className="content-title">YouTube Clip of The Week</h1>
          <div className="clip-player">
            {/* YouTube video */}
            <ReactPlayer
              url="<https://www.youtube.com/shorts/rFUOuPIir8Q>"
              width="100%"
              volume="0"
              controls
            />
          </div>
        </div>
        <div className="twitch-clip-cards">
          <h3>Twitch Clip</h3>
          <p>
            Embeds had an issue, so Twitch clips can be accessed by clicking the
            titles below
          </p>
          <a
            className="TwitchLink"
            href="https://www.twitch.tv/domino427/clip/CooperativePowerfulFriseeArsonNoSexy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>When it just gets you</button>
          </a>
          <a
            className="TwitchLink"
            href="https://www.twitch.tv/domino427/clip/AmazonianCaringOtterPlanking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>When Domino picks up a controller</button>
          </a>
          <a
            className="TwitchLink"
            href="https://www.twitch.tv/domino427/clip/DepressedRelatedVelociraptorNononoCat-bsXUMMaBgOOC_7YC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Whoops</button>
          </a>
        </div>
        <div className="movies">
          <h1>Movies</h1>
          <ul>
            <li>Megamind</li>
            <li>Into The Woods</li>
            <li>Spiderman: No Way Home</li>
          </ul>
        </div>
        <div className="music">
          <h1>Music</h1>
          <ul>
            <li>The Hu</li>
            <li>Steampowered Giraffe</li>
            <li>Saint Paul and The Broken Bones</li>
          </ul>
        </div>
        <div className="movie-suggestion">
          <h1 className="content-title">Movie Suggestion</h1>
          <div className="clip-player">
            {/* Another YouTube video */}
            <ReactPlayer
              url="<https://www.youtube.com/watch?v=Yrn8jnsdhLA>"
              width="100%"
              volume="0"
              controls
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ClipsPlaylistsPage;
