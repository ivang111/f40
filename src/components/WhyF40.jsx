import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const WhyF40 = () => {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="section-padding why-section">
      <div className="container">
        <div className="why-header reveal" ref={headerRef}>
          <h2 className="why-statement">
            DRIVEN BY<br />EXCELLENCE
          </h2>
          <p className="why-intro">
            We exist to provide premium automotive protection and enhancement.
            Every vehicle receives meticulous attention, ensuring the highest standard
            of presentation and longevity.
          </p>
        </div>

        <div className="why-grid reveal" ref={gridRef}>
          <div className="why-item">
            <div className="why-num">01</div>
            <h3>PRECISION</h3>
            <p>Every installation begins with careful preparation and attention to detail.</p>
          </div>
          <div className="why-item">
            <div className="why-num">02</div>
            <h3>PROTECTION</h3>
            <p>Solutions designed to help preserve the appearance of your vehicle.</p>
          </div>
          <div className="why-item">
            <div className="why-num">03</div>
            <h3>CRAFTSMANSHIP</h3>
            <p>Professional execution focused on clean, refined finishes.</p>
          </div>
          <div className="why-item">
            <div className="why-num">04</div>
            <h3>PERSONALIZED SERVICE</h3>
            <p>Recommendations based on the vehicle and the client's goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyF40;
