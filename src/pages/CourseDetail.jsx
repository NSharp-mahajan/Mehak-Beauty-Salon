import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, Users, Clock, Award, CheckCircle, ArrowRight, Sparkles, MessageCircle, GraduationCap, BookOpen, Target, Zap, Shield, TrendingUp } from 'lucide-react'
import './CourseDetail.css'

import hairsImg from '../assets/images/hairs.jpeg'
import makeupPracticeImg from '../assets/images/makeup practice.jpeg'
import nailArtImg from '../assets/images/nail Artt.jpeg'
import parlourLearningImg from '../assets/images/parlour learning.jpeg'
import selfCourseOneImg from '../assets/images/selfCourse_one.png'
import makeupPracticePng from '../assets/images/makeup practice.png'
import productLearningImg from '../assets/images/product learning.jpeg'
import classroomImg from '../assets/images/classroom.jpeg'
import facialImg from '../assets/images/facial.jpeg'

const courses = [
  {
    id: 'self-course',
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
    ],
    gallery: [selfCourseOneImg, hairsImg, makeupPracticeImg, nailArtImg, parlourLearningImg],
    story: {
      badge: 'Self Grooming',
      heading: 'Beauty Begins With Confidence',
      text: 'Self Course is designed to help learners build confidence through personal grooming, beauty understanding and self-care practices.',
      checklist: ['Skincare Routine', 'Makeup Basics', 'Product Understanding', 'Personal Styling']
    },
    learningJourney: [
      { id: '01', title: 'Makeup Basics', desc: 'Learn everyday makeup essentials.' },
      { id: '02', title: 'Skin Preparation', desc: 'Understand skincare preparation techniques.' },
      { id: '03', title: 'Product Knowledge', desc: 'Learn beauty products and usage.' },
      { id: '04', title: 'Hair Basics', desc: 'Introduction to styling and care.' },
      { id: '05', title: 'Practice Sessions', desc: 'Hands-on learning sessions.' }
    ],
    environment: {
      heading: 'Learn Inside A Professional Environment',
      text: 'Gain practical learning experience inside a salon environment with guided sessions and hands-on exposure.',
      points: ['Professional environment', 'Hands-on practice', 'Salon exposure', 'Guided sessions'],
      images: [selfCourseOneImg, nailArtImg]
    },
    timeline: ['Enroll', 'Foundation Learning', 'Practical Training', 'Assessment', 'Certification']
  },
  {
    id: 'basic-course',
    title: 'Basic Course',
    price: '₹30,000',
    duration: '1 Month',
    category: 'Beauty Foundation',
    rating: '4.9',
    students: '80+',
    certified: true,
    description: 'The Basic Course is designed for learners who want to build a strong foundation in beauty, skincare and salon services. The course combines theory, demonstrations and practical learning sessions.',
    learningPoints: [
      'Basic Makeup Techniques',
      'Skin Preparation',
      'Facial Basics',
      'Product Knowledge',
      'Salon Hygiene',
      'Client Handling',
      'Hair Basics',
      'Practical Sessions'
    ],
    includes: [
      'Hands-on Training',
      'Practice Sessions',
      'Professional Guidance',
      'Certification',
      'Beginner Friendly',
      'Salon Exposure'
    ],
    gallery: [productLearningImg, makeupPracticePng, facialImg, classroomImg, makeupPracticePng],
    story: {
      badge: 'Beauty Foundation',
      heading: 'Build A Strong Foundation',
      text: 'The Basic Course is designed for learners who want to build a strong foundation in beauty, skincare and salon services. The course combines theory, demonstrations and practical learning sessions.',
      checklist: ['Hands-on Training', 'Professional Guidance', 'Salon Exposure', 'Certification']
    },
    learningJourney: [
      { id: '01', title: 'Basic Makeup Techniques', desc: 'Learn fundamental makeup application.' },
      { id: '02', title: 'Skin Preparation', desc: 'Master skincare routines and prep.' },
      { id: '03', title: 'Facial Basics', desc: 'Understand core facial treatments.' },
      { id: '04', title: 'Product Knowledge', desc: 'Learn beauty products and usage.' },
      { id: '05', title: 'Client Handling', desc: 'Develop professional client skills.' }
    ],
    environment: {
      heading: 'Learn Inside A Professional Environment',
      text: 'Gain practical learning experience inside a salon environment with guided sessions and hands-on exposure.',
      points: ['Professional environment', 'Hands-on practice', 'Salon exposure', 'Guided sessions'],
      images: [classroomImg, makeupPracticePng]
    },
    timeline: ['Enroll', 'Foundation Learning', 'Practical Training', 'Assessment', 'Certification']
  },
  {
    id: 'advance-course',
    title: 'Advance Course',
    price: '₹50,000',
    duration: '2 Months',
    category: 'Professional Beauty Training',
    rating: '4.9',
    students: '100+',
    certified: true,
    description: 'The Advance Course is designed for learners who want to build professional-level skills in makeup, skin, salon services and client-ready beauty techniques. This course focuses on advanced practice, service confidence and real salon exposure.',
    learningPoints: [
      'Advanced Makeup Techniques',
      'Bridal Makeup Basics',
      'Party Makeup Looks',
      'Skin Analysis',
      'Facial & Treatment Knowledge',
      'Product Selection',
      'Professional Client Handling',
      'Salon Service Workflow',
      'Portfolio Practice'
    ],
    includes: [
      'Advanced Hands-on Training',
      'Live Demonstrations',
      'Practice Sessions',
      'Professional Guidance',
      'Certification',
      'Salon Environment Exposure',
      'Portfolio Building Support',
      'Client Handling Training'
    ],
    gallery: ['bridal makeup practice', 'advanced makeup training', 'facial treatment practice', 'salon service training', 'portfolio shoot practice'],
    timeline: ['Enroll', 'Advanced Foundation', 'Professional Practice', 'Portfolio Training', 'Assessment', 'Certification']
  },
  {
    id: 'nails-course',
    title: 'Nails Course',
    price: '₹25,000',
    duration: '1 Month',
    category: 'Nail Art & Extensions',
    rating: '4.8',
    students: '60+',
    certified: true,
    description: 'Learn professional nail styling, nail art and extension techniques with practical training sessions designed for aspiring nail artists.',
    learningPoints: [
      'Nail Preparation',
      'Gel Extensions',
      'Acrylic Nails',
      'Nail Art Basics',
      'Nail Finishing',
      'Nail Care',
      'Client Handling',
      'Practice Sessions'
    ],
    includes: [
      'Practical Learning',
      'Nail Kit Exposure',
      'Certification',
      'Extension Techniques',
      'Salon Environment',
      'Hands-on Practice'
    ],
    gallery: ['nail art', 'acrylic nails', 'extensions', 'training', 'manicure practice'],
    timeline: ['Enroll', 'Foundation Learning', 'Practical Training', 'Assessment', 'Certification']
  },
  {
    id: 'hair-course',
    title: 'Hair Course',
    price: '₹50,000',
    duration: '2 Months',
    category: 'Hair Styling & Treatments',
    rating: '4.8',
    students: '70+',
    certified: true,
    description: 'The Hair Course is created for learners who want to master professional hair styling, hair care, color basics and salon treatment techniques through guided practical training.',
    learningPoints: [
      'Hair Wash & Blow Dry',
      'Hair Styling Basics',
      'Hair Spa Techniques',
      'Hair Treatment Knowledge',
      'Hair Color Basics',
      'Root Touch-Up Basics',
      'Global Color Understanding',
      'Hair Sectioning',
      'Client Consultation',
      'Salon Hygiene'
    ],
    includes: [
      'Practical Hair Training',
      'Styling Practice',
      'Treatment Demonstrations',
      'Product Knowledge',
      'Certification',
      'Salon Exposure',
      'Beginner to Professional Guidance',
      'Client Handling Practice'
    ],
    gallery: ['hair styling practice', 'hair spa training', 'hair color learning', 'blow dry practice', 'salon hair training'],
    timeline: ['Enroll', 'Hair Basics', 'Styling Practice', 'Treatment Learning', 'Assessment', 'Certification']
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
  const course = courses.find(c => c.id === courseId)

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

  const story = course.story || {
    badge: course.category,
    heading: `Master ${course.title}`,
    text: course.description,
    checklist: course.includes.slice(0, 4)
  }

  const learningJourney = course.learningJourney || course.learningPoints.map((pt, i) => ({
    id: `0${i + 1}`.slice(-2),
    title: pt,
    desc: `Learn professional ${pt.toLowerCase()} techniques.`
  })).slice(0, 5)

  const environment = course.environment || {
    heading: 'Professional Salon Training',
    text: 'Gain practical learning experience inside a professional salon environment.',
    points: ['Hands-on practice', 'Live demonstrations', 'Professional guidance', 'Salon exposure']
  }

  return (
    <div className="course-detail-page">
      {/* Course Gallery Hero (Editorial 3-Image Layout) */}
      <motion.section
        className="course-gallery-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="gallery-editorial-container">
          <motion.div
            className="gallery-large-left"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.8 }}
          >
            {course.gallery[0].includes('.') || course.gallery[0].includes('/') ? (
              <img src={course.gallery[0]} alt="Course Main" className="real-gallery-image parallax-img" />
            ) : (
              <div className="gallery-placeholder">
                <Sparkles size={32} />
                <span>{course.gallery[0]}</span>
              </div>
            )}
          </motion.div>
          <div className="gallery-stacked-right">
            {course.gallery.slice(1, 3).map((item, index) => (
              <motion.div
                key={index}
                className="gallery-small-stacked"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                {item.includes('.') || item.includes('/') ? (
                  <img src={item} alt={`Gallery ${index}`} className="real-gallery-image parallax-img" />
                ) : (
                  <div className="gallery-placeholder small">
                    <Sparkles size={20} />
                    <span>{item}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Course Story Section (About-inspired) */}
      <section className="course-story-section">
        <div className="story-container">
          <div className="story-images-left single-image">
            {course.gallery.slice(1, 2).map((item, index) => (
              <motion.div 
                key={index}
                className={`story-img-wrapper img-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {item.includes('.') || item.includes('/') ? (
                  <img src={item} alt={`Story ${index}`} className="real-gallery-image" />
                ) : (
                  <div className="gallery-placeholder small">
                    <Sparkles size={20} />
                    <span>{item}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="story-content-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="category-badge">{story.badge}</span>
            <h2 className="story-heading">{story.heading}</h2>
            <div className="story-divider"></div>
            <p className="story-text">{story.text}</p>
            
            <ul className="story-checklist">
              {story.checklist.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <CheckCircle size={20} className="check-icon" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

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

      {/* What You Will Learn (Journey) */}
      <section className="learning-journey-section">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap size={32} />
          <h2>What You Will Learn</h2>
        </motion.div>
        
        <div className="journey-alternating-list">
          {learningJourney.map((step, index) => (
            <motion.div
              key={index}
              className={`journey-card ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="journey-number">{step.id}</div>
              <div className="journey-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Environment */}
      <section className="learning-environment-section">
        <div className="environment-container">
          <motion.div 
            className="environment-content-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="env-heading">{environment.heading}</h2>
            <div className="story-divider"></div>
            <p className="env-text">{environment.text}</p>
            <div className="env-points-grid">
              {environment.points.map((point, index) => (
                <div key={index} className="env-point">
                  <div className="point-dot"></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="environment-images-right">
            {(environment.images || course.gallery.slice(3, 5)).map((item, index) => (
              <motion.div 
                key={index}
                className={`env-img-wrapper img-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {item.includes('.') || item.includes('/') ? (
                  <img src={item} alt={`Environment ${index}`} className="real-gallery-image" />
                ) : (
                  <div className="gallery-placeholder small">
                    <Sparkles size={20} />
                    <span>{item}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
          {course.timeline.map((stepTitle, index) => {
            const icons = [MessageCircle, BookOpen, Target, Shield, Award, TrendingUp]
            const StepIcon = icons[index % icons.length]
            return (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="timeline-number">Step {index + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <StepIcon size={24} />
                  </div>
                  <h3 className="timeline-title">{stepTitle}</h3>
                </div>
                {index < course.timeline.length - 1 && <div className="timeline-connector"></div>}
              </motion.div>
            )
          })}
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
