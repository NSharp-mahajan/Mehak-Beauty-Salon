import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, Users, Clock, Award, CheckCircle, ArrowRight, Sparkles, MessageCircle, GraduationCap, BookOpen, Target, Zap, Shield, TrendingUp } from 'lucide-react'
import './CourseDetail.css'

const courses = [
  {
    id: 1,
    title: 'Self Course',
    price: '₹15,000',
    duration: '2 Weeks',
    category: 'Personal Grooming',
    rating: '4.8',
    students: '120+',
    certified: true,
    description: 'A personal grooming course designed to help learners understand everyday beauty, makeup basics, skincare routine and self-styling techniques with practical guidance.',
    learningPoints: [
      'Makeup Basics',
      'Skin Preparation',
      'Personal Grooming',
      'Product Knowledge',
      'Hair Styling Basics',
      'Practice Sessions'
    ],
    includes: [
      'Hands-on training',
      'Professional guidance',
      'Practice-based learning',
      'Certificate after completion',
      'Salon environment exposure',
      'Beginner-friendly sessions'
    ]
  },
  {
    id: 2,
    title: 'Basic Course',
    price: '₹30,000',
    duration: '1 Month',
    category: 'Beauty Foundation',
    rating: '4.9',
    students: '250+',
    certified: true,
    description: 'Build a strong foundation in beauty fundamentals with hands-on training and expert mentorship. Learn essential techniques for facials, waxing, threading, and basic hair care.',
    learningPoints: [
      'Facial Techniques',
      'Waxing Methods',
      'Threading Skills',
      'Basic Hair Care',
      'Skin Analysis',
      'Client Consultation'
    ],
    includes: [
      'Hands-on training',
      'Professional guidance',
      'Practice-based learning',
      'Certificate after completion',
      'Salon environment exposure',
      'Beginner-friendly sessions'
    ]
  },
  {
    id: 3,
    title: 'Advance Course',
    price: '₹50,000',
    duration: '2 Months',
    category: 'Professional Training',
    rating: '5.0',
    students: '500+',
    certified: true,
    description: 'Elevate your expertise with advanced techniques and specialized beauty artistry skills. Perfect for aspiring professionals. Master advanced facials, chemical peels, hair treatments, and bridal makeup.',
    learningPoints: [
      'Advanced Facials',
      'Chemical Peels',
      'Hair Treatments',
      'Bridal Makeup',
      'Color Correction',
      'Advanced Techniques'
    ],
    includes: [
      'Hands-on training',
      'Professional guidance',
      'Practice-based learning',
      'Certificate after completion',
      'Salon environment exposure',
      'Beginner-friendly sessions'
    ]
  },
  {
    id: 4,
    title: 'Nails Course',
    price: '₹25,000',
    duration: '1 Month',
    category: 'Nail Art & Extensions',
    rating: '4.8',
    students: '180+',
    certified: true,
    description: 'Learn professional nail art, extensions, and care techniques for stunning nail designs. Master gel nails, acrylics, nail art, and nail health.',
    learningPoints: [
      'Nail Extensions',
      'Gel Nails',
      'Acrylic Nails',
      'Nail Art Design',
      'Nail Health Care',
      'Client Consultation'
    ],
    includes: [
      'Hands-on training',
      'Professional guidance',
      'Practice-based learning',
      'Certificate after completion',
      'Salon environment exposure',
      'Beginner-friendly sessions'
    ]
  },
  {
    id: 5,
    title: 'Hair Course',
    price: '₹50,000',
    duration: '2 Months',
    category: 'Hair Styling & Treatments',
    rating: '4.9',
    students: '310+',
    certified: true,
    description: 'Master hair styling, cutting, coloring, and treatments for all hair types and textures. Learn advanced hair techniques including keratin, smoothing, and creative styling.',
    learningPoints: [
      'Hair Cutting',
      'Hair Coloring',
      'Keratin Treatment',
      'Smoothing Techniques',
      'Creative Styling',
      'Hair Health Analysis'
    ],
    includes: [
      'Hands-on training',
      'Professional guidance',
      'Practice-based learning',
      'Certificate after completion',
      'Salon environment exposure',
      'Beginner-friendly sessions'
    ]
  }
]

const trainingSteps = [
  { id: 1, title: 'Consultation', icon: MessageCircle },
  { id: 2, title: 'Foundation Learning', icon: BookOpen },
  { id: 3, title: 'Practical Training', icon: Target },
  { id: 4, title: 'Assessment', icon: Shield },
  { id: 5, title: 'Certification', icon: Award }
]

const CourseDetail = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const course = courses.find(c => c.id === parseInt(courseId))

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="not-found">
          <h2>Course Not Found</h2>
          <button onClick={() => navigate('/courses')} className="back-button">
            Back to Courses
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="course-detail-page">
      {/* Course Gallery Hero */}
      <motion.section
        className="course-gallery-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="gallery-container">
          <motion.div
            className="gallery-main-image"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="gallery-placeholder">
              <Sparkles size={32} />
              <span>Beauty Training</span>
            </div>
          </motion.div>
          <div className="gallery-grid">
            {['Makeup Practice', 'Hair Training', 'Nails Art', 'Salon Learning'].map((label, index) => (
              <motion.div
                key={index}
                className="gallery-small-image"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="gallery-placeholder small">
                  <Sparkles size={20} />
                  <span>{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Course Main Information */}
      <section className="course-info-section">
        <div className="info-container">
          <motion.div
            className="info-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="category-badge">{course.category}</span>
            <h1 className="course-title">{course.title}</h1>
            <p className="course-description">{course.description}</p>
            
            <div className="course-stats">
              <div className="stat-item">
                <Star size={18} fill="#C6A16E" color="#C6A16E" />
                <span>{course.rating} Rating</span>
              </div>
              <div className="stat-item">
                <Users size={18} />
                <span>{course.students} Enrolled</span>
              </div>
              <div className="stat-item">
                <Clock size={18} />
                <span>{course.duration}</span>
              </div>
              {course.certified && (
                <div className="stat-item">
                  <Award size={18} />
                  <span>Certified</span>
                </div>
              )}
            </div>

            <div className="course-actions">
              <motion.button
                className="enroll-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                className="whatsapp-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                Ask on WhatsApp
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="info-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="price-card">
              <div className="price-label">Course Price</div>
              <div className="price-value">{course.price}</div>
              <div className="price-duration">{course.duration}</div>
              {course.certified && (
                <div className="certification-badge">
                  <Award size={20} />
                  <span>Certified Course</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="learn-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap size={32} />
          <h2>What You Will Learn</h2>
        </motion.div>
        <div className="learning-grid">
          {course.learningPoints.map((point, index) => (
            <motion.div
              key={index}
              className="learning-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="learning-icon">
                <Zap size={24} />
              </div>
              <span className="learning-text">{point}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Course Includes */}
      <section className="includes-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BookOpen size={32} />
          <h2>Course Includes</h2>
        </motion.div>
        <div className="includes-list">
          {course.includes.map((item, index) => (
            <motion.div
              key={index}
              className="include-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle size={20} className="check-icon" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Process */}
      <section className="training-process-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TrendingUp size={32} />
          <h2>Training Process</h2>
        </motion.div>
        <div className="timeline">
          {trainingSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="timeline-number">Step {step.id}</div>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <step.icon size={24} />
                </div>
                <h3 className="timeline-title">{step.title}</h3>
              </div>
              {index < trainingSteps.length - 1 && <div className="timeline-connector"></div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="cta-icon"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles size={48} />
          </motion.div>
          <h2>Ready to Begin Your Beauty Career?</h2>
          <p>Join Mehak Salon & Spa and learn professional beauty skills in a premium salon environment.</p>
          <div className="cta-buttons">
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default CourseDetail
