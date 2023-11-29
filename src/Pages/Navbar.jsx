import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src='https://picsum.photos/200/300' alt='domino'></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/game-library">Game Library</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;