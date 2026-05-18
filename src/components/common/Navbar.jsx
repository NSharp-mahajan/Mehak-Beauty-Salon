import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo/logo2.png'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Mehak Beauty Salon & Spa" className="logo-image" />
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="navbar-cta"><a href="/contact" className="book-button">Book Appointment</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
