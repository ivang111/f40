import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const FinalCTA = () => {
  const contentRef = useScrollReveal();

  return (
    <section className="final-cta">
      {/* Background */}
      <div className="final-cta-bg">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=2000"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>
      <div className="final-cta-overlay" aria-hidden="true" />

      <div className="container">
        <div className="reveal" ref={contentRef}>
          <span className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            Get Started Today
          </span>
          <h2 className="cta-title">
            READY TO TRANSFORM<br />YOUR VEHICLE?
          </h2>
          <p className="cta-subtitle">
            Professional appearance. Professional protection. Professional results.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn-primary">Request a Quote</a>
            <a href="#" className="btn-secondary">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
