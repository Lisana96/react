import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo"> ✈️ Lisana Tours</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/bookings">My Bookings</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">My Profile</Link>
      </div>
    </nav>
  );
}
