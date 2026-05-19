import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Scissors, Droplet, Clock, Star, Crown, X, ChevronRight, Gem, Flame, Palette } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Services.css'
import servicesBg from '../assets/images/services.png'

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('face-skin')
  const [activeSubCategory, setActiveSubCategory] = useState('treatments')

  const regularServices = {
    'face-skin': {
      name: 'Face & Skin',
      services: [
        { id: 1, name: 'Face Bleach', price: 100 },
        { id: 2, name: 'Basic Bleach', price: 150 },
        { id: 3, name: 'Clean Up', price: 250 },
        { id: 4, name: 'Basic Facial', price: 700 },
        { id: 5, name: 'Skin Tightening Facial', price: 1200 },
        { id: 6, name: 'D-Tan Treatment', price: 800 },
        { id: 7, name: 'Lotus Facial', price: 1500 },
        { id: 8, name: 'Biotique Facial', price: 1500 },
        { id: 9, name: 'Biotique Treatment Facial', price: 2500 },
        { id: 10, name: 'Potli Facial with Hydra', price: 3500 },
      ],
    },
    threading: {
      name: 'Threading',
      services: [
        { id: 11, name: 'Full Face Threading', price: 60 },
      ],
    },
    'waxing-body': {
      name: 'Waxing & Body Care',
      services: [
        { id: 12, name: 'Full Arms Wax', price: 300 },
        { id: 13, name: 'Full Legs Wax', price: 500 },
        { id: 14, name: 'Full Body Wax', price: 3500 },
        { id: 15, name: 'Body Polishing', price: 1500 },
      ],
    },
    'hands-feet': {
      name: 'Hands & Feet',
      services: [
        { id: 16, name: 'Basic Manicure / Pedicure', price: 800 },
        { id: 17, name: 'Premium Manicure / Pedicure', price: 1500 },
      ],
    },
    nails: {
      name: 'Nails',
      services: [
        { id: 18, name: 'Full Tip Nail Extensions', price: 1000 },
        { id: 19, name: 'Gel Nail Extensions', price: 1500 },
        { id: 20, name: 'Acrylic Nails', price: 2500, trending: true },
        { id: 21, name: 'Nail Accessories / Nail Art Add-ons', price: 0, extraCharges: true },
        { id: 22, name: 'Gel Nail Paint (Hands Only)', price: 500 },
      ],
    },
    hair: {
      name: 'Hair',
      hasSubCategories: true,
      subCategories: {
        treatments: {
          name: 'Treatments',
          services: [
            { id: 23, name: 'Smoothing (Mid Length)', price: 3500 },
            { id: 24, name: 'Keratin (Mid Length)', price: 2500 },
            { id: 25, name: 'Botoliss Treatment', price: 5000 },
            { id: 26, name: 'K9 Botox Treatment', price: 4000, popular: true },
            { id: 27, name: 'Nanoplasty Treatment', price: 4000, popular: true },
            { id: 28, name: 'Basic Hair Spa', price: 800 },
            { id: 29, name: 'Shea Hair Filler Treatment', price: 1500 },
            { id: 30, name: 'Kanpeki Hair Ritual Therapy', price: 1800 },
            { id: 31, name: 'Hair Scalp Treatment', price: 1200 },
          ],
        },
        'hair-color': {
          name: 'Hair Color',
          services: [
            { id: 32, name: 'Root Touch-Up Hair Color', price: '₹500 / ₹800' },
            { id: 33, name: 'Global Hair Color', price: 2500 },
            { id: 34, name: 'Highlights (Per Foil)', price: 250 },
            { id: 35, name: 'Fashion Shade Color', price: 3000, startingPrice: true },
          ],
        },
      },
    },
  }

  const categories = Object.keys(regularServices)

  const quickOffers = [
    { id: 1, name: 'Only Clean Up', price: 150, icon: <Scissors size={24} /> },
    { id: 2, name: 'Full Facial', price: 450, icon: <Droplet size={24} /> },
    { id: 3, name: 'Wax Full Arms', price: 200, icon: <Sparkles size={24} /> },
    { id: 4, name: 'Wax Full Legs', price: 400, icon: <Sparkles size={24} /> },
    { id: 5, name: 'Manicure + Pedicure', price: 500, icon: <Crown size={24} /> },
  ]

  const packages = [
    {
      id: 1,
      price: 599,
      name: 'Essential Glow',
      services: ['Bleach', 'Facial', 'Full Threading'],
      featured: false,
    },
    {
      id: 2,
      price: 799,
      name: 'Radiance Package',
      services: ['Bleach', 'Facial', 'D-Tan', 'Anti-aging', 'Whitening', 'Headwash', 'Full Threading'],
      featured: true,
    },
    {
      id: 3,
      price: 1199,
      name: 'Luxury Spa',
      services: ['Bleach', 'Biotique', 'Cosmixia', 'Manicure', 'Pedicure', 'Threading'],
      featured: false,
    },
    {
      id: 4,
      price: 1799,
      name: 'Ultimate Pamper',
      services: ['Bleach', 'O3 Facial', 'Biotique Treatment Facial', 'Hydrox', 'Full Arms Wax', 'Manicure / Pedicure', 'Headwash', 'Full Threading'],
      featured: false,
    },
  ]

  const hairOffers = [
    { id: 1, name: 'Head Wash Shoulder Length', price: 100, detail: '' },
    { id: 2, name: 'Head Wash Long Length', price: 150, detail: '' },
    { id: 3, name: 'Hair Spa', price: 400, detail: '' },
    { id: 4, name: 'Treatment Hair Spa', price: 999, detail: '' },
    { id: 5, name: 'Smoothing / Rebonding Mid Length', price: 3000, detail: 'Mid Length' },
    { id: 6, name: 'Keratin Mid Length', price: 2500, detail: 'Mid Length' },
    { id: 7, name: 'Mano Plastia', price: 3999, detail: 'Mid Length' },
    { id: 8, name: 'Botox Treatment', price: 3499, detail: 'Mid Length' },
    { id: 9, name: 'Cutting', price: 299, detail: '' },
    { id: 10, name: 'Global Hair Color', price: 1799, detail: '' },
    { id: 11, name: 'Highlights / Streak', price: 150, detail: '' },
    { id: 12, name: 'Root Touch Up', price: 500, detail: '' },
  ]

  const featuredHairOffers = hairOffers.slice(0, 4)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  return (
    <div className="services-page">
      {/* Offer Hero Section */}
      <motion.section
        className="offer-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="offer-hero-bg" style={{ backgroundImage: `url(${servicesBg})` }}></div>
        <div className="hero-content">
          <motion.div
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Clock size={16} />
            <span>Limited Time Offer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Special Summer Beauty Offers
          </motion.h1>

          <motion.p
            className="hero-subheading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Enjoy premium salon, facial, waxing, hair and care packages at exclusive seasonal prices.
          </motion.p>

          <motion.div
            className="date-pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Star size={14} />
            <span>15 May – 30 May</span>
          </motion.div>

          <motion.button
            className="hero-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Offer Now
          </motion.button>
        </div>
      </motion.section>

      {/* Quick Beauty Offers Section */}
      <section className="quick-offers-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Quick Beauty Offers
        </motion.h2>

        <motion.div
          className="offers-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {quickOffers.map((offer) => (
            <motion.div
              key={offer.id}
              className="offer-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="offer-icon">{offer.icon}</div>
              <h3 className="offer-name">{offer.name}</h3>
              <div className="offer-price">₹{offer.price}</div>
              <button className="book-link">Book Now</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Full Packages Section */}
      <section className="packages-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Premium Packages
        </motion.h2>

        <motion.div
          className="packages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {pkg.featured && (
                <div className="popular-badge">
                  <Star size={14} />
                  <span>Popular</span>
                </div>
              )}
              <div className="package-price">₹{pkg.price}</div>
              <h3 className="package-name">{pkg.name}</h3>
              <ul className="package-services">
                {pkg.services.map((service, index) => (
                  <li key={index}>
                    <Sparkles size={12} />
                    {service}
                  </li>
                ))}
              </ul>
              <button className="package-button">Book Package</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Hair Offers Section */}
      <section className="hair-offers-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hair Care Offers
        </motion.h2>

        <motion.div
          className="hair-offers-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredHairOffers.map((offer) => (
            <motion.div
              key={offer.id}
              className="hair-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <h3 className="hair-name">{offer.name}</h3>
              <div className="hair-price">₹{offer.price}</div>
              <button className="hair-book-button">Book Now</button>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="explore-more-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
        >
          Explore More Hair Offers
          <ChevronRight size={18} />
        </motion.button>
      </section>

      {/* Hair Offers Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-button"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="modal-header">
                <h2 className="modal-title">All Hair Offers</h2>
                <p className="modal-subtitle">
                  Explore our complete range of professional hair care, styling and treatment offers.
                </p>
              </div>

              <div className="modal-offers-grid">
                {hairOffers.map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    className="modal-offer-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <div className="modal-offer-info">
                      <h3 className="modal-offer-name">{offer.name}</h3>
                      {offer.detail && (
                        <span className="modal-offer-detail">{offer.detail}</span>
                      )}
                    </div>
                    <div className="modal-offer-right">
                      <div className="modal-offer-price">₹{offer.price}</div>
                      <button className="modal-offer-book">Book Now</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular Salon Services Section */}
      <section className="regular-services-section">
        <motion.div
          className="regular-services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Salon Menu</span>
          </div>
          <h2 className="section-title">Regular Beauty Services</h2>
          <p className="section-subheading">
            Explore our everyday salon, skin, waxing and care services with transparent pricing.
          </p>
        </motion.div>

        <motion.div
          className="category-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {regularServices[category].name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="services-list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {regularServices[activeCategory].hasSubCategories ? (
              <>
                <motion.div
                  className="sub-category-tabs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {Object.keys(regularServices[activeCategory].subCategories).map((subCat) => (
                    <motion.button
                      key={subCat}
                      className={`sub-category-tab ${activeSubCategory === subCat ? 'active' : ''}`}
                      onClick={() => setActiveSubCategory(subCat)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {subCat === 'treatments' ? <Flame size={14} /> : <Palette size={14} />}
                      {regularServices[activeCategory].subCategories[subCat].name}
                    </motion.button>
                  ))}
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSubCategory}
                    className="hair-services-grid"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {regularServices[activeCategory].subCategories[activeSubCategory].services.map((service, index) => (
                      <motion.div
                        key={service.id}
                        className="hair-service-card"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      >
                        <div className="hair-service-info">
                          <div className="hair-service-name-wrapper">
                            <h3 className="hair-service-name">{service.name}</h3>
                            {service.popular && (
                              <span className="popular-badge">
                                <Star size={10} />
                                Popular
                              </span>
                            )}
                          </div>
                          <span className="hair-service-subcategory">
                            {regularServices[activeCategory].subCategories[activeSubCategory].name}
                          </span>
                        </div>
                        <div className="hair-service-right">
                          {service.startingPrice ? (
                            <span className="starting-price-badge">Starting Price</span>
                          ) : (
                            <div className="hair-service-price">
                              {typeof service.price === 'string' ? service.price : `₹${service.price}`}
                            </div>
                          )}
                          <button className="hair-service-book-btn">Book Now</button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              regularServices[activeCategory].services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`service-row ${activeCategory === 'nails' ? 'nail-service' : ''}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="service-info">
                    <div className="service-name-wrapper">
                      <h3 className="service-name">{service.name}</h3>
                      {service.trending && (
                        <span className="trending-badge">
                          <Star size={10} />
                          Trending
                        </span>
                      )}
                    </div>
                    <span className="service-category">{regularServices[activeCategory].name}</span>
                  </div>
                  <div className="service-right">
                    {service.extraCharges ? (
                      <span className="extra-charges-badge">Extra Charges Apply</span>
                    ) : (
                      <div className="service-price-badge">₹{service.price}</div>
                    )}
                    <button className="service-book-btn">Book Now</button>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  )
}

export default Services
