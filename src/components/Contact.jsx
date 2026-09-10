import React, { useState } from 'react';
import { contactInfo } from '../data/content';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const headerRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', vehicle: '', service: '', message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to WhatsApp, EmailJS, or CRM backend
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left column: info */}
          <div>
            <div className="section-header reveal" ref={headerRef}>
              <span className="section-label">Contact Us</span>
              <h2 className="section-title">GET A <span>QUOTE</span></h2>
            </div>
            <p className="contact-desc">
              Ready to protect and elevate your vehicle? Reach out for a personalized
              consultation and quote. We serve Deltona, FL and surrounding areas.
            </p>

            <div className="info-items">
              <div className="info-item">
                <h4>Location</h4>
                <p>{contactInfo.address}</p>
              </div>
              <div className="info-item">
                <h4>Phone / WhatsApp</h4>
                <p>{contactInfo.phone}</p>
              </div>
              <div className="info-item">
                <h4>Email</h4>
                <p>{contactInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group row">
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="(000) 000-0000"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="vehicle">Vehicle *</label>
              <input
                id="vehicle"
                type="text"
                name="vehicle"
                placeholder="Year, Make, Model"
                required
                value={formData.vehicle}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="service">Service Interested In *</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled>Select a service...</option>
                <option value="Vehicle Wrap">Vehicle Wrap</option>
                <option value="PPF">Paint Protection Film (PPF)</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Paint Correction">Paint Correction</option>
                <option value="Detailing">Professional Detailing</option>
                <option value="Not Sure">Not Sure / Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your vehicle and goals..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary form-submit">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
