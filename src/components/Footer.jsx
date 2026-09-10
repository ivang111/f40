import React from 'react';
import { contactInfo } from '../data/content';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">F40</span>
          <p>Premium automotive appearance &amp; protection.<br />Deltona, Florida.</p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Our Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>{contactInfo.address}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} F40 Automotive. All rights reserved.</p>
        <div className="social-links">
          <a href={contactInfo.socials.instagram} rel="noopener noreferrer">Instagram</a>
          <a href={contactInfo.socials.facebook} rel="noopener noreferrer">Facebook</a>
          <a href={contactInfo.socials.tiktok} rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
