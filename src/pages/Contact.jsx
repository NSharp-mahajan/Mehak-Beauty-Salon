import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-blob contact-blob-1"></div>
        <div className="contact-blob contact-blob-2"></div>
        <div className="contact-blob contact-blob-3"></div>
        
        <div className="contact-hero-content">
          <span className="hero-badge">Get in Touch</span>
          <h1>Contact Us</h1>
          <p className="hero-subheading">
            We'd love to hear from you. Book an appointment, ask us any questions, or simply drop by to say hello.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-main">
        <div className="contact-container">
          
          {/* Info & Map Side */}
          <div className="contact-info-wrapper">
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon-box">
                  <MapPin className="info-icon" />
                </div>
                <div className="info-text">
                  <h3>Visit Us</h3>
                  <p>X84C+X2 Dhariwal<br/>Punjab, India</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon-box">
                  <Phone className="info-icon" />
                </div>
                <div className="info-text">
                  <h3>Call Us</h3>
                  <p>+91 98765 43210<br/>+91 98765 43211</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box">
                  <Mail className="info-icon" />
                </div>
                <div className="info-text">
                  <h3>Email Us</h3>
                  <p>info@mehakbeautysalon.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box">
                  <Clock className="info-icon" />
                </div>
                <div className="info-text">
                  <h3>Working Hours</h3>
                  <p>Mon - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe 
                src="https://maps.google.com/maps?q=X84C%2BX2%20Dhariwal%2C%20Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mehak Beauty Salon Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2>Send a Message</h2>
              <p>Fill out the form below and we will get back to you shortly.</p>
            </div>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Interested Service</label>
                <select id="service">
                  <option value="">Select a service</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="hair">Hair Styling & Color</option>
                  <option value="skin">Skin Care & Facials</option>
                  <option value="nails">Nail Art & Extensions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <Send className="submit-icon" size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
