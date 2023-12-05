import React, { useState } from 'react';
import Games from '../data.json';
import './GameLibraryPage.css';

const GameLibraryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState(Games);

  const handleSearch = () => {
    // Filter games based on the search term
    const filtered = Games.filter((game) => {
      const gameTitle = String(game.game).toLowerCase(); // Ensure game.game is a string
      return gameTitle.includes(searchTerm.toLowerCase());
    });
    setFilteredGames(filtered);
  };

  const handleReset = () => {
    // Reset the data back to its original state
    setSearchTerm('');
    setFilteredGames(Games);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Backspace' && searchTerm === '') {
      // Clear the search term when backspace is pressed and the search term is empty
      handleReset();
    }
  };

  return (
    <div className="game-library-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="card-container">
        {filteredGames.map((game) => (
          <div className="card" key={game.id}>
            <div className="card-body">
              <h5 className="card-title">{game.game}
              <br></br>
              {game.year}
              </h5>
              <p className="card-platform">{game.platform}</p>
              <p className="card-text">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLibraryPage;

/* "year": 2017,
   "game": "A Hat in Time",
   "platform": "steam",
   "finished": "",
   "started": "",
   "description"*/