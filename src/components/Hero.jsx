import React, { useEffect, useState } from 'react';
import { contactInfo } from '../data/content';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay to allow page to paint before starting entrance
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000"
          alt="Premium Automotive Finish — F40"
          fetchPriority="high"
        />
      </div>

      {/* Cinematic overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container">
        <div className="hero-content">
          <span className={`hero-eyebrow reveal${loaded ? ' visible' : ''}`}>
            Automotive Protection &amp; Appearance
          </span>

          <h1 className={`hero-title reveal reveal-delay-1${loaded ? ' visible' : ''}`}>
            PROTECT THE FINISH.<br />
            ELEVATE THE LOOK.
          </h1>

          <p className={`hero-subtitle reveal reveal-delay-2${loaded ? ' visible' : ''}`}>
            Professional vehicle appearance and protection services in {contactInfo.address}.
            Specializing in Wraps, PPF, Ceramic Coatings, and Paint Correction.
          </p>

          <div className={`hero-actions reveal reveal-delay-3${loaded ? ' visible' : ''}`}>
            <a href="#contact" className="btn-primary">Get a Quote</a>
            <a href="#work" className="btn-secondary">View Our Work</a>
          </div>

          <div className={`hero-location reveal reveal-delay-4${loaded ? ' visible' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {contactInfo.address}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`hero-scroll reveal reveal-delay-5${loaded ? ' visible' : ''}`} aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
