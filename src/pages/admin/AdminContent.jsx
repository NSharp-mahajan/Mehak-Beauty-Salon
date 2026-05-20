import React, { useState } from 'react'
import { Save, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './AdminContent.css'

const initialContentState = {
  hero: {
    badgeText: 'Premium Beauty & Wellness',
    mainHeading: 'Glow Naturally, Feel Beautiful',
    subHeading: 'Experience luxury salon, spa, bridal and beauty services designed to make every visit unforgettable.',
    primaryButtonText: 'Book Appointment',
    secondaryButtonText: 'Explore Services'
  },
  about: {
    sectionBadge: 'The Salon',
    heading: 'Where Elegance Meets Expertise',
    description: 'We believe every individual deserves to feel confident and beautiful. Mehak Salon & Spa offers premium services in a luxurious, relaxing atmosphere. Our highly trained professionals use top-tier products to give you the perfect look and an unforgettable experience.'
  },
  cta: {
    badgeText: 'Book Your Experience',
    heading: 'Your Luxury Beauty Journey Starts Here',
    description: 'From bridal elegance to relaxing spa therapies, let Mehak Salon & Spa bring out your confidence and beauty.',
    buttonText: 'Book Appointment'
  },
  contact: {
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email: 'info@mehaksalon.com',
    address: '123 Luxury Lane, Premium Area, New Delhi',
    openingHours: 'Mon - Sun: 10:00 AM - 8:00 PM',
    mapLink: 'https://maps.google.com'
  }
}

const AdminContent = () => {
  const [content, setContent] = useState(initialContentState)
  const [openSection, setOpenSection] = useState('hero')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    // In a real app, this would be an API call to save to Firebase
    console.log('Saved content:', content)
    
    // Show success message briefly
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  const toggleSection = (section) => {
    setOpenSection(prev => prev === section ? null : section)
  }

  const renderInput = (section, field, label, isTextarea = false) => {
    return (
      <div className="content-form-group">
        <label>{label}</label>
        {isTextarea ? (
          <textarea
            value={content[section][field]}
            onChange={(e) => handleInputChange(section, field, e.target.value)}
            rows="4"
          />
        ) : (
          <input
            type="text"
            value={content[section][field]}
            onChange={(e) => handleInputChange(section, field, e.target.value)}
          />
        )}
      </div>
    )
  }

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <div>
          <h2>Website Content Manager</h2>
          <p>Update text and basic details across the website without coding.</p>
        </div>
        <button className="admin-btn-primary save-all-btn" onClick={handleSave}>
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            className="content-success-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <CheckCircle size={20} />
            Website content saved successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="content-accordion">
        {/* Home Hero Section */}
        <div className={`accordion-item ${openSection === 'hero' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('hero')}>
            <h3>1. Home Page Hero</h3>
            {openSection === 'hero' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          <AnimatePresence>
            {openSection === 'hero' && (
              <motion.div 
                className="accordion-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <div className="content-form-grid">
                  {renderInput('hero', 'badgeText', 'Badge Text')}
                  {renderInput('hero', 'mainHeading', 'Main Heading')}
                  <div className="form-full-width">
                    {renderInput('hero', 'subHeading', 'Subheading', true)}
                  </div>
                  {renderInput('hero', 'primaryButtonText', 'Primary Button Text')}
                  {renderInput('hero', 'secondaryButtonText', 'Secondary Button Text')}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* About Section */}
        <div className={`accordion-item ${openSection === 'about' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('about')}>
            <h3>2. About Section</h3>
            {openSection === 'about' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          <AnimatePresence>
            {openSection === 'about' && (
              <motion.div 
                className="accordion-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <div className="content-form-grid">
                  {renderInput('about', 'sectionBadge', 'Section Badge')}
                  {renderInput('about', 'heading', 'Heading')}
                  <div className="form-full-width">
                    {renderInput('about', 'description', 'Description', true)}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <div className={`accordion-item ${openSection === 'cta' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('cta')}>
            <h3>3. Call To Action (Bottom)</h3>
            {openSection === 'cta' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          <AnimatePresence>
            {openSection === 'cta' && (
              <motion.div 
                className="accordion-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <div className="content-form-grid">
                  {renderInput('cta', 'badgeText', 'Badge Text')}
                  {renderInput('cta', 'heading', 'Heading')}
                  <div className="form-full-width">
                    {renderInput('cta', 'description', 'Description', true)}
                  </div>
                  {renderInput('cta', 'buttonText', 'Button Text')}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Details */}
        <div className={`accordion-item ${openSection === 'contact' ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => toggleSection('contact')}>
            <h3>4. Contact Details & Footer</h3>
            {openSection === 'contact' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          <AnimatePresence>
            {openSection === 'contact' && (
              <motion.div 
                className="accordion-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <div className="content-form-grid">
                  {renderInput('contact', 'phone', 'Phone Number')}
                  {renderInput('contact', 'whatsapp', 'WhatsApp Number')}
                  {renderInput('contact', 'email', 'Email Address')}
                  {renderInput('contact', 'openingHours', 'Opening Hours')}
                  <div className="form-full-width">
                    {renderInput('contact', 'address', 'Physical Address', true)}
                  </div>
                  <div className="form-full-width">
                    {renderInput('contact', 'mapLink', 'Google Maps Link')}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default AdminContent
