import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Our Alumni Association platform connects graduates from around the globe, providing opportunities for networking, mentorship, and celebrating success stories.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/job-portal">Job Portal</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Lovely Professional University, Phagwara, Punjab</li>
            <li><i className="fas fa-phone-alt"></i> +91 9876543210</li>
            <li><i className="fas fa-envelope"></i> alumni@example.com</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Alumni Association. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
