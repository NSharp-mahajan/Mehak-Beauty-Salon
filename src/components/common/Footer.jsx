import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Mehak Beauty Salon & Spa</h3>
          <p>Your destination for premium beauty and wellness services.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <MapPin size={18} />
              <span>123 Beauty Street, City</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 1234567890</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@mehaksalon.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul>
            <li>
              <Clock size={18} />
              <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
            </li>
            <li>
              <Clock size={18} />
              <span>Sunday: Closed</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Mehak Beauty Salon & Spa. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
