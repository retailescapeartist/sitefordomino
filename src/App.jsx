// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import SchedulePage from './Pages/SchedulePage';
import GameLibraryPage from './Pages/GameLibrary';
import ArtShowcasePage from './Pages/ArtShowcasePage';
import GameReviewsPage from './Pages/GameReviewsPage';
import RedemptionsListPage from './Pages/RedemptionsListPage';
import ClipsPlaylistsPage from './Pages/ClipsPlaylistsPage';
import ComputerSpecsPage from './Pages/ComputerSpecsPage';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/game-library" element={<GameLibraryPage />} />
          <Route path="/art-showcase" element={<ArtShowcasePage />} />
          <Route path="/game-reviews" element={<GameReviewsPage />} />
          <Route path="/redemptions-list" element={<RedemptionsListPage />} />
          <Route path="/clips-playlists" element={<ClipsPlaylistsPage />} />
          <Route path="/computer-specs" element={<ComputerSpecsPage />} />
          {/* Add routes for other pages */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
