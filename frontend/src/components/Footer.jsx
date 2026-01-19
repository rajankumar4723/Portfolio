import React from 'react';
import '../styles/Footer.css';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope, 
  FaArrowUp, 
  FaCloud, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      {/* Decorative Wave Transition */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand/About Column */}
          <div className="footer-brand">
            <h2 className="footer-logo">RAJAN<span>.</span></h2>
            <p className="footer-bio">
              Certified AWS Cloud Engineer specializing in architecting 
              resilient, serverless ecosystems and high-availability 
              infrastructure.
            </p>
            <div className="social-pills">
              <a href="https://linkedin.com/in/rajan-modanwal" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/your-profile" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="mailto:rajandev55555@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Cloud Stack</a></li>
              <li><a href="#contact">Hire Me</a></li>
            </ul>
          </div>

          {/* Contact/Action Column */}
          <div className="footer-cta">
            <h3>Let's Connect</h3>
            <div className="contact-info">
              <p><FaMapMarkerAlt className="icon" /> Uttar Pradesh, India</p>
              <p><FaEnvelope className="icon" /> rajandev55555@gmail.com</p>
            </div>
            <button className="back-to-top" onClick={scrollToTop}>
              <FaArrowUp /> Back to Top
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Rajan Modanwal. Built with <FaCloud className="aws-icon" /> AWS & React.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;