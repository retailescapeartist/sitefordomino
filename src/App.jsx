// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import SchedulePage from "./SchedulePage";
import ArtShowcasePage from "./ArtShowcasePage";
import GameReviewsPage from "./GameReviewsPage";
import RedemptionsListPage from "./RedemptionsListPage";
import ClipsPlaylistsPage from "./ClipsPlaylistsPage";
import ComputerSpecsPage from "./ComputerSpecsPage";
import GameLibraryPage from "./GameLibraryPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/art-showcase" element={<ArtShowcasePage />} />
          <Route path="/game-reviews" element={<GameReviewsPage />} />
          <Route path="/redemptions-list" element={<RedemptionsListPage />} />
          <Route path="/clips-playlists" element={<ClipsPlaylistsPage />} />
          <Route path="/computer-specs" element={<ComputerSpecsPage />} />
          <Route path="/game-library" element={<GameLibraryPage />} />
          {/* Add routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
