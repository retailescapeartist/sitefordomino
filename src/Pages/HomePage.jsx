import './HomePage.css'
import React from 'react';
import { Link } from 'react-router-dom'
import domino from '../../src/assets/img/domino427-logo.png'

const HomePage = () => {
  return (
    <>
    <div className='home-container'>
      <div className='btns-left'>
        <ul className='btns-no-style'>
          <li>
            <Link to='/game-reviews'>
              <button className='btn btn-primary01'>Game Reviews</button>
            </Link>
            <Link to='/schedule'>
              <button className='btn btn-primary02'>Schedule</button>
            </Link>
            <Link to='/computer-specs'>
              <button className='btn btn-primary03'>Computer Specs</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className='main-img'>
          <div className='domino-imag'>
            <img src={domino} alt='' />
            <h1 className='profile-name'>Domino427</h1>
            <p className='profile-description'>Short Description</p>
          </div>
        </div>
        <div className='btns-right'>
        <ul className='btns-no-style'>
          <li>
            <Link to='/clips-playlists'>
              <button className='btn btn-primary04'>Clips & Playlists</button>
            </Link>
            <Link to='/art-showcase'>
              <button className='btn btn-primary05'>Art Showcase</button>
            </Link>
            <Link to='/game-library'>
              <button className='btn btn-primary06'>Game Library</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
    
  );
};

export default HomePage;
