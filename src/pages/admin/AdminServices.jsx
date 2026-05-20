import React, { useState } from 'react'
import { Plus, Search, Edit2, Trash2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './AdminServices.css'

const CATEGORIES = ['All', 'Hair', 'Makeup', 'Spa', 'Bridal', 'Courses']

const initialServices = [
  { id: 1, name: 'Bridal Makeup', category: 'Bridal', price: 15000, status: 'Active', description: 'Complete bridal makeup package including hair styling and draping.' },
  { id: 2, name: 'Advanced Haircut', category: 'Hair', price: 1200, status: 'Active', description: 'Premium haircut by senior stylist.' },
  { id: 3, name: 'Keratin Treatment', category: 'Hair', price: 4500, status: 'Active', description: 'Smoothing treatment for frizzy hair.' },
  { id: 4, name: 'Gold Facial', category: 'Spa', price: 2500, status: 'Active', description: 'Luxury facial for glowing skin.' },
  { id: 5, name: 'Basic Makeup Course', category: 'Courses', price: 30000, status: 'Inactive', description: '1 month basic makeup training.' }
]

const AdminServices = () => {
  const [services, setServices] = useState(initialServices)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('All')
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingService, setEditingService] = useState(null)
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Hair',
    price: '',
    status: 'Active',
    description: ''
  })

  // Handlers
  const handleOpenModal = (service = null) => {
    if (service) {
      setEditingService(service)
      setFormData(service)
    } else {
      setEditingService(null)
      setFormData({ name: '', category: 'Hair', price: '', status: 'Active', description: '' })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingService(null)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingService) {
      // Update existing
      setServices(prev => prev.map(s => s.id === editingService.id ? { ...formData, id: s.id } : s))
    } else {
      // Add new
      const newService = {
        ...formData,
        id: Date.now(), // Dummy ID generation
        price: Number(formData.price)
      }
      setServices(prev => [...prev, newService])
    }
    handleCloseModal()
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(prev => prev.filter(s => s.id !== id))
    }
  }

  // Filtering
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === 'All' || service.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <div>
          <h2>Services Manager</h2>
          <p>Manage all salon services, prices, and availability.</p>
        </div>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={20} />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Filters */}
      <div className="admin-filters-bar">
        <div className="search-wrapper">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search services..." 
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

      {/* Data Table */}
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Category</th>
              <th>Price (₹)</th>
              <th>Status</th>
              <th className="actions-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <tr key={service.id}>
                  <td className="font-medium">{service.name}</td>
                  <td><span className="category-badge">{service.category}</span></td>
                  <td>₹{service.price.toLocaleString()}</td>
                  <td>
                    <span className={`status-badge ${service.status.toLowerCase()}`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="actions-col">
                    <button className="action-btn edit" onClick={() => handleOpenModal(service)}>
                      <Edit2 size={18} />
                    </button>
                    <button className="action-btn delete" onClick={() => handleDelete(service.id)}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="empty-state">No services found.</td>
              </tr>
            )}
          </tbody>
        </table>
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
                <h3>{editingService ? 'Edit Service' : 'Add New Service'}</h3>
                <button className="close-modal" onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-modal-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Service Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Bridal Package"
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
                    <label>Price (₹)</label>
                    <input 
                      type="number" 
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g. 1500"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select name="status" value={formData.status} onChange={handleInputChange}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Description</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Short description of the service..."
                    rows="3"
                  ></textarea>
                </div>

                <div className="admin-modal-footer">
                  <button type="button" className="admin-btn-secondary" onClick={handleCloseModal}>
                    Cancel
                  </button>
                  <button type="submit" className="admin-btn-primary">
                    {editingService ? 'Save Changes' : 'Add Service'}
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

export default AdminServices
