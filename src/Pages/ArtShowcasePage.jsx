// ArtShowcasePage.jsx

import React, { useState } from 'react';
import './ArtShowcasePage.css';

const ArtShowcasePage = () => {
  const [flipped, setFlipped] = useState([]);

  // Function to toggle the flip state for a specific artwork
  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="art-showcase-container">
      {artworks.map((artwork, index) => (
        <div
          key={index}
          className={`art-item ${flipped[index] ? 'flipped' : ''}`}
          onClick={() => handleFlip(index)}
        >
          <div className="front">
            <img src={artwork.image} alt={`Artwork ${index + 1}`} />
          </div>
          <div className="back">
            <p>{artwork.description}</p>
            <p>By {artwork.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const artworks = [
  {
    image: 'https://via.placeholder.com/300', // Placeholder image URL
    description: 'Description for Artwork 1.',
    artist: 'Artist 1',
  },
  {
    image: 'https://via.placeholder.com/300', // Placeholder image URL
    description: 'Description for Artwork 2.',
    artist: 'Artist 2',
  },
  // Add more artworks as needed
];

export default ArtShowcasePage;
