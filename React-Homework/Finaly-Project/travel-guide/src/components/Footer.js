import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
      <p>&copy; 2024 Travel Guide</p>
    </footer>
  );
};

export default Footer;
