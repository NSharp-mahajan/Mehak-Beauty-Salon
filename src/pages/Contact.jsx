import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';
import settingsService from '../services/settingsService';
import Skeleton from '../components/common/Skeleton';

const Contact = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await settingsService.getMainSettings();
        setSettings(data);
      } catch (error) {
        console.error("Failed to load settings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const business = settings?.business || {
    address: 'X84C+X2 Dhariwal, Punjab, India',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43211',
    email: 'info@mehakbeautysalon.com',
    openingHours: 'Mon - Sun: 10:00 AM - 8:00 PM'
  };

  if (loading) {
    return (
      <div className="contact-page" style={{ paddingTop: '100px', display: 'flex', gap: '40px', padding: '100px 5%' }}>
        <div style={{ flex: 1 }}>
          <Skeleton className="skeleton-card" style={{ height: '100px', marginBottom: '20px' }} />
          <Skeleton className="skeleton-card" style={{ height: '100px', marginBottom: '20px' }} />
          <Skeleton className="skeleton-card" style={{ height: '100px', marginBottom: '20px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <Skeleton className="skeleton-card" style={{ height: '400px' }} />
        </div>
      </div>
    );
  }

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
                  <p>{business.address}</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon-box">
                  <Phone className="info-icon" />
                </div>
                <div className="info-text">
                  <h3>Call Us</h3>
                  <p>{business.phone}<br/>{business.whatsapp && business.whatsapp !== business.phone ? business.whatsapp : ''}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box">
                  <Mail className="info-icon" />
                </div>
                <div className="info-text">
                  <h3>Email Us</h3>
                  <p>{business.email}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-box">
                  <Clock className="info-icon" />
                </div>
                <div className="info-text">
                  <h3>Working Hours</h3>
                  <p>{business.openingHours}</p>
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
