import React, { useState } from 'react'
import { Plus, Search, Edit2, Trash2, X, Calendar, Tag, Percent } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './AdminOffers.css'

const CATEGORIES = ['All', 'Seasonal', 'Hair', 'Facial', 'Packages']

const initialOffers = [
  { id: 1, title: 'Special Summer Offer', category: 'Seasonal', offerPrice: 1999, originalPrice: 3500, status: 'Active', featured: true, startDate: '2026-05-01', endDate: '2026-08-31', description: 'Complete summer refresh package including hydration facial, detan, and basic haircut.' },
  { id: 2, title: 'Glow Package', category: 'Packages', offerPrice: 699, originalPrice: 1200, status: 'Active', featured: false, startDate: '2026-05-01', endDate: '2026-12-31', description: 'Basic clean up, threading, and arms waxing.' },
  { id: 3, title: 'Beauty Package', category: 'Packages', offerPrice: 799, originalPrice: 1500, status: 'Active', featured: false, startDate: '2026-05-01', endDate: '2026-12-31', description: 'Advanced facial, full face threading, and half legs waxing.' },
  { id: 4, title: 'Premium Package', category: 'Packages', offerPrice: 1199, originalPrice: 2200, status: 'Active', featured: false, startDate: '2026-05-01', endDate: '2026-12-31', description: 'O3+ Facial, full body waxing, and basic manicure.' },
  { id: 5, title: 'Luxury Package', category: 'Packages', offerPrice: 1799, originalPrice: 3000, status: 'Inactive', featured: false, startDate: '2026-01-01', endDate: '2026-04-30', description: 'Bridal glow facial, spa manicure/pedicure, and full body polishing.' },
  { id: 6, title: 'Hair Spa Offer', category: 'Hair', offerPrice: 999, originalPrice: 1800, status: 'Active', featured: false, startDate: '2026-05-15', endDate: '2026-06-15', description: 'Loreal deep conditioning hair spa with 15 mins relaxing head massage.' }
]

const AdminOffers = () => {
  const [offers, setOffers] = useState(initialOffers)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('All')
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingOffer, setEditingOffer] = useState(null)
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Seasonal',
    offerPrice: '',
    originalPrice: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Active',
    featured: false
  })

  // Handlers
  const handleOpenModal = (offer = null) => {
    if (offer) {
      setEditingOffer(offer)
      setFormData(offer)
    } else {
      setEditingOffer(null)
      setFormData({ 
        title: '', category: 'Seasonal', offerPrice: '', originalPrice: '', 
        description: '', startDate: '', endDate: '', status: 'Active', featured: false 
      })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingOffer(null)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // If setting as featured, we might want to un-feature others, but for now allow multiple or keep simple
    
    if (editingOffer) {
      setOffers(prev => prev.map(o => o.id === editingOffer.id ? { ...formData, id: o.id } : o))
    } else {
      const newOffer = {
        ...formData,
        id: Date.now(),
        offerPrice: Number(formData.offerPrice),
        originalPrice: Number(formData.originalPrice)
      }
      setOffers(prev => [newOffer, ...prev])
    }
    handleCloseModal()
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this offer?')) {
      setOffers(prev => prev.filter(o => o.id !== id))
    }
  }

  const toggleStatus = (id) => {
    setOffers(prev => prev.map(o => {
      if (o.id === id) {
        return { ...o, status: o.status === 'Active' ? 'Inactive' : 'Active' }
      }
      return o
    }))
  }

  // Filtering
  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === 'All' || offer.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <div>
          <h2>Offers Manager</h2>
          <p>Manage seasonal offers, packages, and active promotions.</p>
        </div>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={20} />
          <span>Create Offer</span>
        </button>
      </div>

      {/* Filters */}
      <div className="admin-filters-bar">
        <div className="search-wrapper">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search offers..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="category-filter">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              className={`filter-chip ${filterCategory === cat ? 'active' : ''}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Offers Grid */}
      <div className="admin-offers-grid">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((offer, index) => (
            <motion.div 
              key={offer.id}
              className={`admin-offer-card ${offer.featured ? 'featured' : ''} ${offer.status === 'Inactive' ? 'inactive-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {offer.featured && <div className="featured-badge"><Tag size={12} /> Featured Offer</div>}
              
              <div className="offer-card-header">
                <span className="category-badge">{offer.category}</span>
                <span className={`status-badge ${offer.status.toLowerCase()}`}>
                  {offer.status}
                </span>
              </div>
              
              <div className="offer-card-body">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-desc">{offer.description}</p>
                
                <div className="offer-pricing">
                  <div className="price-tag">
                    <span className="current-price">₹{offer.offerPrice}</span>
                    {offer.originalPrice && (
                      <span className="original-price">₹{offer.originalPrice}</span>
                    )}
                  </div>
                  {offer.originalPrice && offer.offerPrice < offer.originalPrice && (
                    <div className="discount-pill">
                      <Percent size={12} />
                      {Math.round(((offer.originalPrice - offer.offerPrice) / offer.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>
                
                <div className="offer-validity">
                  <Calendar size={14} />
                  <span>Valid: {offer.startDate || 'Now'} - {offer.endDate || 'Ongoing'}</span>
                </div>
              </div>
              
              <div className="offer-card-footer">
                <button 
                  className={`toggle-status-btn ${offer.status === 'Active' ? 'disable' : 'enable'}`}
                  onClick={() => toggleStatus(offer.id)}
                >
                  {offer.status === 'Active' ? 'Disable Offer' : 'Enable Offer'}
                </button>
                <div className="card-actions-right">
                  <button className="action-btn edit" onClick={() => handleOpenModal(offer)}>
                    <Edit2 size={18} />
                  </button>
                  <button className="action-btn delete" onClick={() => handleDelete(offer.id)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="empty-state-card">
            <Tag size={48} opacity={0.2} />
            <p>No offers found matching your filters.</p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="admin-modal-overlay">
            <motion.div 
              className="admin-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <div className="admin-modal-header">
                <h3>{editingOffer ? 'Edit Offer' : 'Create New Offer'}</h3>
                <button className="close-modal" onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-modal-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Offer Title</label>
                    <input 
                      type="text" 
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g. Summer Special"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select name="category" value={formData.category} onChange={handleInputChange}>
                      {CATEGORIES.filter(c => c !== 'All').map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Offer Price (₹)</label>
                    <input 
                      type="number" 
                      name="offerPrice"
                      value={formData.offerPrice}
                      onChange={handleInputChange}
                      placeholder="e.g. 699"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Original Price (₹) - Optional</label>
                    <input 
                      type="number" 
                      name="originalPrice"
                      value={formData.originalPrice}
                      onChange={handleInputChange}
                      placeholder="e.g. 1200"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input 
                      type="date" 
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input 
                      type="date" 
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Description</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Details about the package/offer..."
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Status</label>
                    <select name="status" value={formData.status} onChange={handleInputChange}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                      />
                      Mark as Featured Offer
                    </label>
                  </div>
                </div>

                <div className="admin-modal-footer">
                  <button type="button" className="admin-btn-secondary" onClick={handleCloseModal}>
                    Cancel
                  </button>
                  <button type="submit" className="admin-btn-primary">
                    {editingOffer ? 'Save Changes' : 'Create Offer'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminOffers
