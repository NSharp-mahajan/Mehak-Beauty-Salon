import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, BookOpen, CheckCircle, ArrowRight, Sparkles, TrendingUp, Shield, Clock } from 'lucide-react'
import './Courses.css'

const courses = [
  {
    id: 1,
    title: 'Self Course',
    price: '₹15,000',
    duration: 'Duration: Flexible',
    certified: true,
    description: 'Master personal grooming and beauty techniques for self-enhancement with professional guidance.',
    featured: false
  },
  {
    id: 2,
    title: 'Basic Course',
    price: '₹30,000',
    duration: 'Duration: Flexible',
    certified: true,
    description: 'Build a strong foundation in beauty fundamentals with hands-on training and expert mentorship.',
    featured: false
  },
  {
    id: 3,
    title: 'Advance Course',
    price: '₹50,000',
    duration: 'Duration: Flexible',
    certified: true,
    description: 'Elevate your expertise with advanced techniques and specialized beauty artistry skills.',
    featured: true
  },
  {
    id: 4,
    title: 'Nails Course',
    price: '₹25,000',
    duration: 'Duration: Flexible',
    certified: true,
    description: 'Learn professional nail art, extensions, and care techniques for stunning nail designs.',
    featured: false
  },
  {
    id: 5,
    title: 'Hair Course',
    price: '₹50,000',
    duration: 'Duration: Flexible',
    certified: true,
    description: 'Master hair styling, cutting, coloring, and treatments for all hair types and textures.',
    featured: false
  }
]

const features = [
  {
    id: 1,
    title: 'Professional Training',
    icon: GraduationCap,
    description: 'Learn from certified industry experts with years of practical experience.'
  },
  {
    id: 2,
    title: 'Industry Guidance',
    icon: TrendingUp,
    description: 'Get career guidance and placement support to grow in the beauty industry.'
  },
  {
    id: 3,
    title: 'Hands-on Practice',
    icon: Users,
    description: 'Work on real clients and models to build confidence and expertise.'
  },
  {
    id: 4,
    title: 'Certification Support',
    icon: Award,
    description: 'Receive recognized certifications to boost your professional credibility.'
  }
]

const timelineSteps = [
  { id: 1, title: 'Enroll', icon: CheckCircle },
  { id: 2, title: 'Training', icon: BookOpen },
  { id: 3, title: 'Practice', icon: Users },
  { id: 4, title: 'Certification', icon: Award },
  { id: 5, title: 'Professional Growth', icon: TrendingUp }
]

const Courses = () => {
  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
        
        <div className="hero-container">
          <div className="hero-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-badge">Professional Beauty Academy</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-heading"
            >
              Transform Passion Into Profession
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subheading"
            >
              Join our beauty and grooming programs designed to help you master industry skills with professional guidance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-buttons"
            >
              <button className="cta-button primary">Explore Courses</button>
              <button className="cta-button secondary">Enroll Now</button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-right"
          >
            <div className="hero-image-card">
              <div className="image-placeholder">
                <span>Premium Academy Image</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Showcase Section */}
      <section className="course-showcase">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="showcase-header"
        >
          <h2 className="showcase-title">Our Professional Courses</h2>
          <p className="showcase-subtitle">Premium beauty programs designed for aspiring professionals and enthusiasts.</p>
        </motion.div>

        <div className="courses-masonry">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`course-card ${course.featured ? 'featured' : ''}`}
            >
              <div className="course-image-container">
                <div className="course-image-placeholder">
                  <span>Course Image</span>
                </div>
                <div className="course-overlay"></div>
              </div>
              
              <div className="course-content">
                <div className="course-badges">
                  <span className="price-badge">{course.price}</span>
                  {course.certified && (
                    <span className="certified-badge">
                      <Shield size={14} />
                      Certified
                    </span>
                  )}
                </div>
                
                <h3 className="course-title">{course.title}</h3>
                
                <div className="course-duration">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                
                <p className="course-description">{course.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="enroll-button"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Learn With Us Section */}
      <section className="why-learn-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="why-learn-header"
        >
          <h2 className="why-learn-title">Why Choose Mehak Academy</h2>
          <p className="why-learn-subtitle">Experience premium beauty education with industry-leading expertise.</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section className="learning-journey">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="journey-header"
        >
          <h2 className="journey-title">Your Learning Journey</h2>
          <p className="journey-subtitle">A clear path from enrollment to professional success.</p>
        </motion.div>

        <div className="timeline-container">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="timeline-step"
            >
              <div className="timeline-icon">
                <step.icon size={24} />
              </div>
              <div className="timeline-content">
                <span className="step-number">Step {step.id}</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              {index < timelineSteps.length - 1 && <div className="timeline-connector"></div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="premium-cta">
        <div className="cta-background">
          <div className="cta-overlay"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="cta-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cta-icon"
          >
            <Sparkles size={48} />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="cta-title"
          >
            Start Your Beauty Journey Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cta-subtitle"
          >
            Learn, practice and grow with professional beauty education.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="cta-buttons"
          >
            <button className="cta-button primary">Enroll Now</button>
            <button className="cta-button secondary">Contact Us</button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Courses
