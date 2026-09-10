import React, { useRef, useEffect } from 'react';
import { servicesData } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

// Individual service row with its own scroll reveal (hooks must be at top level)
const ServiceItem = ({ service, index }) => {
  const ref = useScrollReveal();
  return (
    <a
      href="#contact"
      className="service-item reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className="service-num">0{index + 1}</span>
      <div className="service-meta">
        <h3 className="service-name">{service.title}</h3>
        <span className="service-tag">Request a Quote</span>
      </div>
      <p className="service-desc">{service.description}</p>
      <span className="service-arrow" aria-hidden="true">→</span>
    </a>
  );
};

const Services = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">OUR <span>SERVICES</span></h2>
        </div>

        <div className="services-list">
          {servicesData.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
