import React from "react";
import "./ClipsPlaylistsPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wizCyAaMutw?si=Sf_mSfSwQI6jpHYm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
            href="https://clips.twitch.tv/FlaccidCloudyFlamingoDatBoi-kZF3U23pJ3n_MyMI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Twitch Clip</button>
          </a>
        </div>
        <div className="movies">
          <h1>Movies</h1>
          <ul>
            <li>Avatar</li>
            <li>Avengers: Endgame</li>
            <li>Titanic</li>
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
            <iframe
              width="400"
              height="315"
              src="https://www.youtube.com/embed/XJMuhwVlca4?si=Cl26NUE4_VlqW79P"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ClipsPlaylistsPage;
