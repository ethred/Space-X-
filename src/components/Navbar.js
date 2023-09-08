import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './styles/Navbar.css';
import logo from '../assets/planet.png';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <NavLink to="/" exact className="navbar-logo" activeClassName="active">
        <img
          src={logo}
          alt="Logo"
          width="40"
          height="40"
        />
        <span className="navbar-text">SpaceTravelers HUB</span>
      </NavLink>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Rockets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/missions" className="nav-link" activeClassName="active">
            Missions
          </NavLink>
        </li>
        <li>|</li>
        <li className="nav-item">
          <NavLink to="/mypage" className="nav-link" activeClassName="active">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
