import React from 'react';
import './Header.css';

const Header = () => {
  // Define the handleClick function
  const handleClick = () => {
    alert('Contact Us button clicked!');
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="/home" className="nav-link">HOME</a>
        <a href="/event" className="nav-link">EVENT</a>
        <div className="team-dropdown">
          <a href="/team" className="nav-link">TEAM ▼</a>
          <div className="dropdown-content">
            <a href="/team/link1">E.B</a>
            <a href="/team/link2">E.C</a>
            <a href="/team/link3">CORE</a>
          </div>
        </div>
      </div>
      <div className="header-center">
        <div className="header-logo">
          <img src="/ISTE Thapar Chapter Logo blue.png" alt="ISTE Logo" />
        </div>
      </div>
      <div className="header-right">
        <button className="header-button" onClick={handleClick}>
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
