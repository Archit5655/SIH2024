import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Icon and Dropdown */}
      <div className="hamburger" onClick={toggleDropdown}>
        &#9776; {/* This is the 3-lines hamburger icon */}
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li><a href="/donation">Donation</a></li>
          <li><a href="/networking-hub">Networking Hub</a></li>
          <li><a href="/job-portal">Job Portal</a></li>
          <li><a href="/alumni-diversity">Alumni Diversity</a></li>
          <li><a href="/success-stories">Success Stories</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/feedbacks-surveys">Feedbacks & Surveys</a></li>
        </ul>
      )}

      {/* Nav Links */}
      <ul className="nav-links">
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/career-page">Career Page</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>

      {/* Search and Buttons */}
      <div className="nav-actions">
        <input type="text" placeholder="Search..." />
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
