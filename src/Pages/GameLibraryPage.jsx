import React, { useState } from "react";
import Games from "../data.json";
import "./GameLibraryPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Controller from "../assets/img/icons8-game-controller-50.png";

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const GameLibraryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [showIntro, setShowIntro] = useState(true); // Added state for introductory image

  const handleSearch = (searchTerm) => {
    // Filter games based on the search term
    const filtered = Games.filter((game) => {
      const gameTitle = String(game.game).toLowerCase();
      return gameTitle.includes(searchTerm.toLowerCase());
    });

    // Show a popup with live search results as cards
    setShowPopup(true);
    setPopupContent(
      <div className="card-container">
        {filtered.length === 0 ? (
          <p>No matching games found.</p>
        ) : (
          filtered.map((game) => (
            <div className="card" key={game.id}>
              <div className="card-body">
                <h5 className="card-title">
                  {game.game}
                  <br />
                  {game.year}
                </h5>
                <p className="card-platform">{game.platform}</p>
                <p className="card-text">{game.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    );

    // Hide the introductory image when the user starts typing
    setShowIntro(false);
  };

  const handleReset = () => {
    // Clear the search term and hide the popup
    setSearchTerm("");
    setShowPopup(false);
    // Show the introductory image again
    setShowIntro(true);
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      // If the search term is empty, reset and hide the popup
      handleReset();
    } else {
      // Otherwise, perform live search
      handleSearch(newSearchTerm);
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="game-library-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button onClick={() => handleSearch(searchTerm)}>Search</button>
            <button onClick={handleReset}>Reset</button>
          </div>

          <div
            className="introductory-image"
            style={{ display: showIntro ? "block" : "none" }}
          >
            {/* Your introductory image and text go here */}
            <img src={Controller} alt="Introductory Image" />
            <p>Welcome! Start typing to search for games.</p>
          </div>

          {/* Show the live search results */}
          {showPopup && (
            <Popup content={popupContent} onClose={() => setShowPopup(false)} />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GameLibraryPage;
