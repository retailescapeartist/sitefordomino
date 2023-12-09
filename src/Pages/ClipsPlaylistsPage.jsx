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
            {/* Add your clip player content here */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wizCyAaMutw?si=Sf_mSfSwQI6jpHYm"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div>
              <h3>Twitch Clip</h3>
              <p>
                embeds had an issue, so twitch clips can be accessed by clicking
                the titles below
              </p>
              <a
                className="TwitchLink"
                href="https://clips.twitch.tv/FlaccidCloudyFlamingoDatBoi-kZF3U23pJ3n_MyMI"
                target="blank"
              >
                {" "}
                <button>Twitch Clip</button>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="movies">
          <h1>Movies</h1>
          <li>Avatar</li>
          <li>Avengers: Endgame</li>
          <li>Titanic</li>
        </div>
        <div className="music">
          <h1>Music</h1>
          <li>The Hu</li>
          <li>Steampowered Giraffe</li>
          <li>Saint Paul and The Broken Bones</li>
        </div>
        <div className="movie-suggestion">
          <h1 className="content-title">Movie Suggestion</h1>
          <div className="clip-player">
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
