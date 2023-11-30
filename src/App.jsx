// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import HomePage from './Pages/HomePage';
import SchedulePage from './Pages/SchedulePage';
import ArtShowcasePage from './Pages/ArtShowcasePage';
import GameReviewsPage from './Pages/GameReviewsPage';
import RedemptionsListPage from './Pages/RedemptionsListPage';
import ClipsPlaylistsPage from './Pages/ClipsPlaylistsPage';
import ComputerSpecsPage from './Pages/ComputerSpecsPage';
import GameLibraryPage from './Pages/GameLibraryPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

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

        <Footer />
      </div>
    </Router>
  );
};

export default App;
