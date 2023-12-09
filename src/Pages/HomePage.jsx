import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import domino from "../../src/assets/img/domino427-logo.png";
import twitch from "../../src/assets/img/twitch_icon.png";
import twitter from "../../src/assets/img/twitter_social_icon.png";
import youtube from "../../src/assets/img/youtube_play_video_icon.png";
import tiktok from "../../src/assets/img/tiktok_logo_social media_icon.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="home-container">
          <div className="btns-left">
            <ul className="btns-no-style">
              <li>
                <Link to="/game-reviews">
                  <button className="btn btn-primary01">Game Reviews</button>
                </Link>
                <Link to="/schedule">
                  <button className="btn btn-primary02">Schedule</button>
                </Link>
                <Link to="/computer-specs">
                  <button className="btn btn-primary03">Computer Specs</button>
                </Link>
                <Link to="https://twitter.com/domino_427" target="_blank">
                  <button className="btn btn-primary06">
                    <span>Twitter</span>
                    <img src={twitter} alt="TikTok Icon" />
                  </button>
                </Link>
                <Link
                  to="https://www.tiktok.com/@domino_427?lang=en"
                  target="_blank"
                >
                  <button className="btn btn-primary06">
                    <span>TikTok</span>
                    <img src={tiktok} alt="TikTok Icon" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="main-img">
            <div className="domino-img">
              <img src={domino} alt="" />
              <h1 className="profile-name">Domino427</h1>
              <p className="profile-description">
                My name is after the bounty hunter, though I could use some
                pizza and luck. I'm a Floridian against my will, come rescue me
                and send snow! I loved working in pediatrics and mental health,
                but hated the politics. Now I love gaming with all of you!
                (**no, still no fortnite**)
              </p>
            </div>
          </div>
          <div className="btns-right">
            <ul className="btns-no-style">
              <li>
                <Link to="/clips-playlists">
                  <button className="btn btn-primary04">
                    Clips & Playlists
                  </button>
                </Link>
                <Link to="/art-showcase">
                  <button className="btn btn-primary05">Art Showcase</button>
                </Link>
                <Link to="/redemptions-list">
                  <button className="btn btn-primary06">Twitch Redeems</button>
                </Link>
                <Link to="https://www.twitch.tv/domino427" target="_blank">
                  <button className="btn btn-primary06">
                    <span>Twitch</span>
                    <img src={twitch} alt="TikTok Icon" />
                  </button>
                </Link>
                <Link
                  to="https://www.youtube.com/@domino427family"
                  target="_blank"
                >
                  <button className="btn btn-primary06">
                    <span>YouTube</span>
                    <img src={youtube} alt="TikTok Icon" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;

/* button build <span>TikTok</span>
<span><img src={tiktok} alt='tiktok'></img></span>*/
