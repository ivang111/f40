import React, { useState } from 'react';
import { galleryData } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const categories = ['All', ...new Set(galleryData.map(item => item.category))];

  const filteredData = activeFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <section id="work" className="section-padding gallery-section">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">FEATURED <span>WORK</span></h2>
        </div>

        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid reveal" ref={gridRef}>
          {filteredData.map(item => (
            <div className="gallery-item" key={item.id}>
              <img
                src={item.image}
                alt={`${item.category} — ${item.title}`}
                loading="lazy"
              />
              <div className="gallery-overlay" aria-hidden="true">
                <span className="gallery-cat">{item.category}</span>
                <h4 className="gallery-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
