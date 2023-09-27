import React from 'react';
import '../styles/navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <>
      <nav>
        <div className="logoContainer">
          <img src={logo} alt="Logo" className="Logo" />
          <h1>Space Traveler&apos;s Hub</h1>
        </div>
        <div className="linksContainer">
          <ul className="list">
            <li>
              <NavLink to="/">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions">Missions</NavLink>
            </li>
            <li>
              <NavLink to="/myprofile">| &nbsp; &nbsp; My Profile</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
