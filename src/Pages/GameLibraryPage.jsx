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
  const [searchType, setSearchType] = useState(""); // "all" or "finished"
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  const handleSearchType = (type) => {
    setSearchType(type);
  };

  const handleSearch = (newSearchTerm) => {
    const filterCondition = (game) => {
      const gameTitle = String(game.game).toLowerCase();
      const isCompleted = game.finished && game.finished.trim() !== "";

      if (searchType === "all") {
        return gameTitle.includes(newSearchTerm.toLowerCase());
      } else if (searchType === "finished") {
        return gameTitle.includes(newSearchTerm.toLowerCase()) && isCompleted;
      }

      return false;
    };

    const filtered = Games.filter(filterCondition);

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

    setShowIntro(false);
  };

  const handleReset = () => {
    setSearchType("");
    setSearchTerm("");
    setShowPopup(false);
    setShowIntro(true);
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      handleReset();
    } else {
      handleSearch(newSearchTerm);
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="game-library-container">
          <div className="search-bar">
            {!searchType && (
              <div>
                <button onClick={() => handleSearchType("all")}>
                  Show All Games
                </button>
                <button onClick={() => handleSearchType("finished")}>
                  Show Finished Games
                </button>
              </div>
            )}
            {searchType && (
              <div className="search-input">
                <input
                  type="text"
                  placeholder={`Search ${
                    searchType === "finished" ? "finished" : ""
                  } games by title`}
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button onClick={() => handleSearch(searchTerm)}>Search</button>
                <button onClick={handleReset}>Reset</button>
              </div>
            )}
          </div>

          <div
            className="introductory-image"
            style={{ display: showIntro ? "block" : "none" }}
          >
            <img src={Controller} alt="controller" />
            <p>
              Welcome! Select a search type and start typing to search for
              games.
            </p>
          </div>

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
