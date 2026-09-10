import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo image */}
          <a href="#" className="logo" onClick={closeMenu} aria-label="F40 — Home">
            <img
              src="/assets/logo-f40.jpeg"
              alt="F40 Automotive"
              className="logo-img"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Our Work</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#contact" className="btn-primary">Get a Quote</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Navigation */}
      <nav className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <img
          src="/assets/logo-f40.jpeg"
          alt="F40 Automotive"
          className="mobile-nav-logo"
        />
        <a href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</a>
        <a href="#work" className="mobile-nav-link" onClick={closeMenu}>Our Work</a>
        <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
        <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
        <a href="#contact" className="btn-primary" onClick={closeMenu} style={{ marginTop: '1rem' }}>Get a Quote</a>
      </nav>
    </>
  );
};

export default Header;
