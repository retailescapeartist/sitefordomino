import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import dominologo from "../../src/assets/img/domino427-logo-no-dominos.png";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar">
        <img src={dominologo} alt="domino"></img>
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
    </section>
  );
};

export default Navbar;
