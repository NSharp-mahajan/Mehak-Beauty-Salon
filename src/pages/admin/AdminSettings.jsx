import React, { useState, useEffect } from 'react'
import { Save, CheckCircle, Briefcase, Palette, Shield, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import settingsService from '../../services/settingsService'
import './AdminSettings.css'

const DEFAULT_SETTINGS = {
  business: {
    salonName: '', tagline: '', phone: '', whatsapp: '', email: '', address: '', openingHours: ''
  },
  branding: {
    logoUrl: '', primaryColor: '#000000', accentColor: '#000000', footerText: ''
  },
  admin: {
    adminName: '', adminEmail: '', password: ''
  },
  website: {
    enableBooking: true, showOffers: true, showCourses: true, maintenanceMode: false
  }
}

const AdminSettings = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      setLoading(true)
      const data = await settingsService.getById('main')
      if (data) {
        setSettings({
          business: { ...DEFAULT_SETTINGS.business, ...data.business },
          branding: { ...DEFAULT_SETTINGS.branding, ...data.branding },
          admin: { ...DEFAULT_SETTINGS.admin, ...data.admin },
          website: { ...DEFAULT_SETTINGS.website, ...data.website }
        })
      }
    } catch (err) {
      console.error('Failed to load settings:', err)
      setError('Failed to load settings.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleToggle = (section, field) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field]
      }
    }))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      await settingsService.create({ ...settings, id: 'main' })
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    } catch (err) {
      console.error('Failed to save settings:', err)
      setError('Failed to save settings. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const renderInput = (section, field, label, type = 'text', placeholder = '') => (
    <div className="settings-form-group">
      <label>{label}</label>
      <input
        type={type}
        value={settings[section][field] || ''}
        onChange={(e) => handleInputChange(section, field, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )

  const renderToggle = (section, field, label, description) => (
    <div className="settings-toggle-group">
      <div className="toggle-info">
        <label>{label}</label>
        <p>{description}</p>
      </div>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={!!settings[section][field]} 
          onChange={() => handleToggle(section, field)} 
        />
        <span className="slider round"></span>
      </label>
    </div>
  )

  if (loading) {
    return <div className="admin-page-container"><div className="admin-page-header"><h2>Loading settings...</h2></div></div>
  }

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <div>
          <h2>Settings</h2>
          <p>Configure business details, branding, and core website functionality.</p>
        </div>
        <button className="admin-btn-primary save-all-btn" onClick={handleSave} disabled={saving}>
          <Save size={20} />
          <span>{saving ? 'Saving...' : 'Save Settings'}</span>
        </button>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            className="settings-toast"
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
          >
            <CheckCircle size={20} />
            Settings saved successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {error && <div className="admin-login-error" style={{color: 'red', marginBottom: '1rem'}}>{error}</div>}

      <div className="settings-grid">
        {/* Business Profile */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Briefcase className="settings-icon" size={24} />
            <h3>Business Profile</h3>
          </div>
          <div className="settings-card-body">
            <div className="form-row">
              {renderInput('business', 'salonName', 'Salon Name')}
              {renderInput('business', 'tagline', 'Tagline')}
            </div>
            <div className="form-row">
              {renderInput('business', 'phone', 'Phone Number')}
              {renderInput('business', 'whatsapp', 'WhatsApp Number')}
            </div>
            {renderInput('business', 'email', 'Email Address', 'email')}
            {renderInput('business', 'address', 'Full Address')}
            {renderInput('business', 'openingHours', 'Opening Hours')}
          </div>
        </div>

        {/* Branding Settings */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Palette className="settings-icon" size={24} />
            <h3>Branding Settings</h3>
          </div>
          <div className="settings-card-body">
            {renderInput('branding', 'logoUrl', 'Logo URL', 'url', 'https://...')}
            <div className="form-row">
              <div className="settings-form-group">
                <label>Primary Color (Hex)</label>
                <div className="color-input-wrapper">
                  <input 
                    type="color" 
                    value={settings.branding.primaryColor || '#000000'}
                    onChange={(e) => handleInputChange('branding', 'primaryColor', e.target.value)}
                  />
                  <input 
                    type="text" 
                    value={settings.branding.primaryColor || '#000000'}
                    onChange={(e) => handleInputChange('branding', 'primaryColor', e.target.value)}
                  />
                </div>
              </div>
              <div className="settings-form-group">
                <label>Accent Color (Hex)</label>
                <div className="color-input-wrapper">
                  <input 
                    type="color" 
                    value={settings.branding.accentColor || '#000000'}
                    onChange={(e) => handleInputChange('branding', 'accentColor', e.target.value)}
                  />
                  <input 
                    type="text" 
                    value={settings.branding.accentColor || '#000000'}
                    onChange={(e) => handleInputChange('branding', 'accentColor', e.target.value)}
                  />
                </div>
              </div>
            </div>
            {renderInput('branding', 'footerText', 'Footer Copyright Text')}
          </div>
        </div>

        {/* Admin Account */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Shield className="settings-icon" size={24} />
            <h3>Admin Account</h3>
          </div>
          <div className="settings-card-body">
            {renderInput('admin', 'adminName', 'Admin Display Name')}
            {renderInput('admin', 'adminEmail', 'Login Email', 'email')}
            <div className="settings-form-group">
              <label>Change Password</label>
              <input 
                type="password" 
                value={settings.admin.password || ''}
                onChange={(e) => handleInputChange('admin', 'password', e.target.value)}
                placeholder="Leave blank to keep current password"
              />
            </div>
          </div>
        </div>

        {/* Website Controls */}
        <div className="settings-card">
          <div className="settings-card-header">
            <Globe className="settings-icon" size={24} />
            <h3>Website Controls</h3>
          </div>
          <div className="settings-card-body">
            {renderToggle(
              'website', 
              'enableBooking', 
              'Enable Online Booking', 
              'Allow customers to submit appointment requests.'
            )}
            <hr className="settings-divider" />
            {renderToggle(
              'website', 
              'showOffers', 
              'Show Offers Section', 
              'Display the active offers section on the homepage.'
            )}
            <hr className="settings-divider" />
            {renderToggle(
              'website', 
              'showCourses', 
              'Show Courses Section', 
              'Display the academy courses section.'
            )}
            <hr className="settings-divider" />
            {renderToggle(
              'website', 
              'maintenanceMode', 
              'Maintenance Mode', 
              'Temporarily hide the public site from visitors.'
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminSettings
