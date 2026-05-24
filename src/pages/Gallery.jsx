import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/common/SEO'
import galleryService from '../services/galleryService'
import Skeleton from '../components/common/Skeleton'
import './Gallery.css'

const Gallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [categories, setCategories] = useState(['All'])
  const [selectedImage, setSelectedImage] = useState(null)

  const handleFilterChange = (cat) => {
    setFilter(cat)
    window.scrollTo({ top: 200, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await galleryService.getAll()
        // Filter out inactive images
        const activeImages = data.filter(img => img.status !== 'Inactive')
        setImages(activeImages)
        
        // Extract unique categories
        const cats = ['All', ...new Set(activeImages.map(img => img.category))]
        setCategories(cats)
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <div className="gallery-page">
      <SEO 
        title="Gallery | Mehak Beauty Salon" 
        description="Explore our portfolio of bridal makeup, hair styling, and salon transformations at Mehak Beauty Salon."
      />

      <header className="gallery-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A glimpse into our world of beauty and transformations
        </motion.p>
      </header>

      <div className="gallery-container">
        {/* Category Filter */}
        <div className="category-filters">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="gallery-item-skeleton">
                <Skeleton height="300px" width="100%" />
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            layout
            className="gallery-grid"
          >
            <AnimatePresence mode='popLayout'>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="image-wrapper">
                    <img src={image.url} alt={image.alt || image.title} loading="lazy" />
                    <div className="image-overlay">
                      <h3>{image.title}</h3>
                      <span>{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredImages.length === 0 && (
          <div className="no-images">
            <p>No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-lightbox" onClick={() => setSelectedImage(null)}>&times;</button>
              <img src={selectedImage.url} alt={selectedImage.alt || selectedImage.title} />
              <div className="lightbox-info">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
