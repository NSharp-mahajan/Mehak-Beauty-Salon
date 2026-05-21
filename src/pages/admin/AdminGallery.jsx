import React, { useState, useEffect } from 'react'
import { Plus, Search, Edit2, Trash2, X, Image as ImageIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import galleryService from '../../services/galleryService'
import './AdminGallery.css'

const CATEGORIES = ['All', 'Bridal Makeup', 'Hair Styling', 'Spa Therapy', 'Skin Care', 'Salon Interior', 'Beauty Courses', 'Party Makeup', 'Lehenga Collection']

const AdminGallery = () => {
  const [galleryItems, setGalleryItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('All')
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Bridal Makeup',
    url: '',
    alt: '',
    status: 'Active'
  })

  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadGallery()
  }, [])

  const loadGallery = async () => {
    try {
      setLoading(true)
      const data = await galleryService.getAll()
      setGalleryItems(data)
    } catch (err) {
      console.error('Failed to load gallery:', err)
      setError('Failed to load gallery.')
    } finally {
      setLoading(false)
    }
  }

  // Handlers
  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item)
      setFormData(item)
    } else {
      setEditingItem(null)
      setFormData({ 
        title: '', category: 'Bridal Makeup', url: '', alt: '', status: 'Active' 
      })
    }
    setError('')
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingItem(null)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    
    try {
      if (editingItem) {
        await galleryService.update(editingItem.id, formData)
        setGalleryItems(prev => prev.map(img => img.id === editingItem.id ? { ...formData, id: img.id } : img))
      } else {
        const newImg = await galleryService.create(formData)
        setGalleryItems(prev => [...prev, newImg])
      }
      handleCloseModal()
    } catch (err) {
      console.error('Error saving image:', err)
      setError('Failed to save image.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await galleryService.remove(id)
        setGalleryItems(prev => prev.filter(img => img.id !== id))
      } catch (err) {
        console.error('Failed to delete image:', err)
        alert('Failed to delete image.')
      }
    }
  }

  // Filtering
  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <div>
          <h2>Gallery Manager</h2>
          <p>Upload and manage website portfolio images.</p>
        </div>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={20} />
          <span>Upload Image</span>
        </button>
      </div>

      {/* Filters */}
      <div className="admin-filters-bar">
        <div className="search-wrapper">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by title..." 
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

      {/* Gallery Grid */}
      <div className="admin-gallery-grid">
        {loading ? (
          <div className="empty-gallery-state">Loading gallery...</div>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="admin-gallery-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="gallery-card-img-wrapper">
                {item.url ? (
                  <img src={item.url} alt={item.alt || item.title} />
                ) : (
                  <div className="gallery-placeholder">
                    <ImageIcon size={40} />
                  </div>
                )}
                <div className={`gallery-card-status ${(item.status || 'Active').toLowerCase()}`}>
                  {item.status || 'Active'}
                </div>
                <div className="gallery-card-actions">
                  <button className="action-btn edit-solid" onClick={() => handleOpenModal(item)}>
                    <Edit2 size={16} />
                  </button>
                  <button className="action-btn delete-solid" onClick={() => handleDelete(item.id)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="gallery-card-content">
                <span className="gallery-card-category">{item.category}</span>
                <h4 className="gallery-card-title">{item.title}</h4>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="empty-gallery-state">
            <ImageIcon size={48} opacity={0.2} />
            <p>No images found matching your filters.</p>
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
                <h3>{editingItem ? 'Edit Image Details' : 'Upload New Image'}</h3>
                <button className="close-modal" onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="admin-modal-form">
                {error && <div className="admin-login-error" style={{color: 'red', marginBottom: '1rem'}}>{error}</div>}
                <div className="form-group full-width">
                  <label>Image URL</label>
                  <input 
                    type="url" 
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                  {formData.url && (
                    <div className="image-preview-small">
                      <img src={formData.url} alt="Preview" onError={(e) => e.target.style.display='none'} />
                    </div>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Image Title</label>
                    <input 
                      type="text" 
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g. Bridal Look 2024"
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
                    <label>Alt Text (SEO)</label>
                    <input 
                      type="text" 
                      name="alt"
                      value={formData.alt}
                      onChange={handleInputChange}
                      placeholder="e.g. Traditional red bridal lehenga makeup"
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

                <div className="admin-modal-footer">
                  <button type="button" className="admin-btn-secondary" onClick={handleCloseModal} disabled={saving}>
                    Cancel
                  </button>
                  <button type="submit" className="admin-btn-primary" disabled={saving}>
                    {saving ? 'Saving...' : (editingItem ? 'Save Changes' : 'Upload Image')}
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

export default AdminGallery
