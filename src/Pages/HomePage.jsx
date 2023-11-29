import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <section>
    <div className='hero-section'>
          <h1>Welcome to Domino's Stack!</h1>
          <img src='https://picsum.photos/200/300' alt='domino'></img>
        </div>
    </section>
    <div className='container'>
      <div className='buttons-container'>
        <div className='buttons-container-left'>
          <button className='button'><Link to="/game-reviews">Game Reviews</Link></button>
          <button className='button'><Link to="/schedule">Schedule</Link></button>
          <button className='button'><Link to="/computer-specs">Computer Specs</Link></button>
        </div>
        <div className='buttons-container-right'>
          <button className='button'><Link to="/art-showcase">Art Showcase</Link></button>
          <button className='button'><Link to="/clips-playlists">Clips & Playlists</Link></button>
          <button className='button'><Link to="/art-showcase">Game Library</Link></button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default HomePage;
