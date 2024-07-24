import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/telegram.png" alt="Telegram" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" />
        </a>
      </div>
      <p>&copy; 2024 Travel Guide</p>
    </footer>
  );
};

export default Footer;