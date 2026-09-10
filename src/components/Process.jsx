import React from 'react';
import { processData } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

const Process = () => {
  const headerRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  return (
    <section className="section-padding process-section">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">OUR <span>PROCESS</span></h2>
        </div>

        <div className="process-timeline reveal" ref={timelineRef}>
          {processData.map(item => (
            <div className="process-step" key={item.step}>
              <div className="step-number">{item.step}</div>
              <div className="step-title">{item.title}</div>
              <p className="step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
