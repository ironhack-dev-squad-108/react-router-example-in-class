// components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        {/* Add the class "active" when the URL is exactly "/" */}
        <li><NavLink to='/' exact>Home</NavLink></li>
        {/* Add the class "active" when the URL is starts with "/about" */}
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar