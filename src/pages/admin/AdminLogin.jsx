import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './AdminLogin.css'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    
    // Dummy authentication logic
    if (email === 'admin@mehak.com' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true')
      navigate('/admin/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="admin-login-wrapper">
      <motion.div 
        className="admin-login-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="admin-login-header">
          <div className="admin-login-logo">
            M<span>S</span>
          </div>
          <h2>Mehak Salon & Spa</h2>
          <p>Admin Panel</p>
        </div>

        <form onSubmit={handleLogin} className="admin-login-form">
          {error && <div className="admin-login-error">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mehak.com"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required 
            />
          </div>

          <button type="submit" className="admin-login-button">
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default AdminLogin
