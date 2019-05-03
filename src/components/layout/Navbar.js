import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <header>
      <nav className="nav-main">
        <ul>
          <li><NavLink to="/geolocation">Geolocation</NavLink></li>
          <li><NavLink to="/text-editor">TextEditor</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
