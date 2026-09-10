import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const contentRef = useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=1200"
            alt="F40 Studio — Professional Automotive Services in Deltona, Florida"
            loading="lazy"
          />
        </div>

        <div className="about-content reveal" ref={contentRef}>
          <span className="section-label">Our Story</span>
          <h2 className="about-statement">
            BUILT FOR<br />THOSE WHO<br />CARE.
          </h2>
          <p className="about-text">
            We specialize in automotive appearance and protection services in Deltona, Florida.
            Our focus is on delivering premium results through careful preparation, professional
            techniques, and high-quality materials.
          </p>
          <p className="about-text">
            Whether you're looking to transform your vehicle's look with a wrap, protect the
            factory paint with PPF, or enhance the gloss with ceramic coating, we treat every
            vehicle with the respect and precision it deserves.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
