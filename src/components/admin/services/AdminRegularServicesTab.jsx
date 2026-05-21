import React, { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import regularServicesService from '../../../services/regularServicesService'

const CATEGORIES = [
  'Face & Skin',
  'Threading',
  'Waxing & Body Care',
  'Hands & Feet',
  'Nails',
  'Hair Treatments',
  'Hair Color'
]

const AdminRegularServicesTab = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingService, setEditingService] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    category: 'Face & Skin',
    price: '',
    status: 'Active',
    displayOrder: 0
  })

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    try {
      setLoading(true)
      const data = await regularServicesService.getAll()
      data.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
      setServices(data)
    } catch (err) {
      console.error('Failed to load regular services:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = (service = null) => {
    if (service) {
      setEditingService(service)
      setFormData(service)
    } else {
      setEditingService(null)
      setFormData({ name: '', category: 'Face & Skin', price: '', status: 'Active', displayOrder: services.length })
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const serviceData = {
        ...formData,
        displayOrder: Number(formData.displayOrder)
        // Price is kept as string in case of '₹500 / ₹800' formats, 
        // but if it's strictly numeric, we can parse it. The prompt example had 
        // '₹500 / ₹800' in original code, so let's keep it as string to allow text.
      }

      if (editingService) {
        await regularServicesService.update(editingService.id, serviceData)
      } else {
        await regularServicesService.create(serviceData)
      }
      handleCloseModal()
      loadServices()
    } catch (err) {
      console.error('Error saving regular service:', err)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Delete this service?')) {
      try {
        await regularServicesService.remove(id)
        loadServices()
      } catch (err) {
        console.error('Failed to delete:', err)
      }
    }
  }

  return (
    <div className="admin-tab-content">
      <div className="admin-page-header" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h3>Regular Services</h3>
          <p>Manage the main categorised salon services.</p>
        </div>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={20} />
          <span>Add Service</span>
        </button>
      </div>

      <div className="admin-table-container">
        {loading ? (
          <div className="empty-state">Loading...</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th className="actions-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.length > 0 ? (
                services.map(service => (
                  <tr key={service.id}>
                    <td>{service.displayOrder}</td>
                    <td className="font-medium">{service.name}</td>
                    <td><span className="category-badge">{service.category}</span></td>
                    <td>{service.price}</td>
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
                  <td colSpan="6" className="empty-state">No regular services found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

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
                <h3>{editingService ? 'Edit Service' : 'Add Service'}</h3>
                <button className="close-modal" onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-modal-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Service Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select name="category" value={formData.category} onChange={handleInputChange}>
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Price (Allows text like '₹500 / ₹800')</label>
                    <input type="text" name="price" value={formData.price} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select name="status" value={formData.status} onChange={handleInputChange}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Display Order</label>
                    <input type="number" name="displayOrder" value={formData.displayOrder} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="admin-modal-footer">
                  <button type="button" className="admin-btn-secondary" onClick={handleCloseModal}>Cancel</button>
                  <button type="submit" className="admin-btn-primary">Save</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminRegularServicesTab
