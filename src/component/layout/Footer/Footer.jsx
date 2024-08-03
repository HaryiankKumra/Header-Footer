import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-logo">
            <img src="/logo.png" alt="ISTE Logo" />
          </div>
          <div className="footer-links">
            <a href="/link1">Home</a>
            <a href="/link2">Contact us</a>
            <a href="/link3">Team</a>
            <a href="/link4">Event</a>
            {/* <a href="/link5">Link Five</a> */}
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/ISTE.Thapar/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/iste_tiet/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            
            <a href="https://in.linkedin.com/company/iste-thapar" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-policy">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookies Settings</a>
        </div>
        <p>© 2024 ISTE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
