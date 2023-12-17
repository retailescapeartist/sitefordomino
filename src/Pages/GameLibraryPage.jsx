import React, { useState } from "react";
import GamesData from "../data.json";
import "./GameLibraryPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Controller from "../assets/img/icons8-game-controller-50.png";

const GameCard = ({ game }) => (
  <div className="card">
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
);

const GameLibraryPage = () => {
  const Games = GamesData["Game Library Data"];
  const [searchType, setSearchType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  const handleSearchType = (type) => {
    setSearchType(type);
  };

  const handleShowAllGames = () => {
    setSearchType("all");
    setSearchTerm("");
    setShowPopup(true);
    handleSearch("");
  };

  const handleShowFinishedGames = () => {
    setSearchType("finished");
    setShowPopup(true);

    setPopupContent(
      <div className="card-container">
        {Games.filter(
          (game) => game.finished && game.finished.trim() !== ""
        ).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    );
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

    setPopupContent(
      <div className="card-container">
        {filtered.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    );

    setShowIntro(false);
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      handleReset();
    } else {
      setShowPopup(true);
      handleSearch(newSearchTerm);
    }
  };

  const handleReset = () => {
    setSearchType("");
    setSearchTerm("");
    setShowPopup(false);
    setShowIntro(true);
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="game-library-container">
          <div className="search-bar">
            {!searchType && (
              <div>
                <button onClick={handleShowAllGames}>Show All Games</button>
                <button onClick={handleShowFinishedGames}>
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
                <div className="button-container">
                  <button onClick={() => handleSearch(searchTerm)}>
                    Search
                  </button>
                  <button onClick={handleReset}>Reset</button>
                </div>
              </div>
            )}
          </div>

          {showIntro && !searchType && (
            <div className="introductory-image">
              <img src={Controller} alt="controller" />
              <p>
                Welcome! Select a search type and start typing to search for
                games.
              </p>
            </div>
          )}

          {showPopup && (
            <div className="popup">
              <div className="popup-content">{popupContent}</div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GameLibraryPage;
