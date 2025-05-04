import React from 'react';
import '../styles/Footer.css'; // Import the CSS file
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <h2>MyPortfolio</h2>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="contact">
          <p>Email: your.email@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
