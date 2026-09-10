import React, { useState } from 'react';
import { faqData } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollReveal();
  const accordionRef = useScrollReveal();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
        </div>

        <div className="faq-accordion reveal" ref={accordionRef}>
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-answer" role="region">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
