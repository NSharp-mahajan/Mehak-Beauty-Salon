import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Droplets, ShieldCheck, HeartHandshake, Scissors, UserCheck, Star, Quote } from 'lucide-react';
import './About.css';
import contentService from '../services/contentService';
import galleryService from '../services/galleryService';
import testimonialsService from '../services/testimonialsService';
import Skeleton from '../components/common/Skeleton';

const About = () => {
  const [content, setContent] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // To ensure the page scrolls to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchData = async () => {
      try {
        const [contentData, galleryData, testimonialsData] = await Promise.all([
          contentService.getMainContent(),
          galleryService.getAll(),
          testimonialsService.getAll()
        ]);
        
        setContent(contentData);
        setGallery(galleryData);
        setTestimonials(testimonialsData.filter(t => t.status === 'Approved'));
      } catch (err) {
        console.error("Failed to load about data:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="about-page" style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', gap: '40px', padding: '100px 5%' }}>
        <Skeleton className="skeleton-card" style={{ height: '50vh' }} />
        <Skeleton className="skeleton-title" style={{ width: '40%', margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: '20px' }}>
          {[1,2,3].map(n => <Skeleton key={n} className="skeleton-card" style={{ height: '300px' }} />)}
        </div>
      </div>
    );
  }

  // Fallbacks
  const aboutContent = content?.about || {
    sectionBadge: 'Since 1997',
    heading: 'Redefining Beauty & Confidence Since 1997',
    description: 'An elegant sanctuary where artistry meets self-care. Step into a world of refined elegance. At Mehak Salon & Spa, we craft unforgettable beauty experiences tailored to unveil your most confident self.'
  };

  const displayTestimonials = testimonials;

  const displayGallery = gallery;

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="hero-blur-blob blob-1"></div>
          <div className="hero-blur-blob blob-2"></div>
        </div>
        
        <div className="about-hero-container">
          <div className="hero-left-content">
            <span className="luxury-badge">{aboutContent.sectionBadge || 'About Us'}</span>
            <h1 className="hero-heading">{aboutContent.heading || 'Redefining Beauty & Confidence'}</h1>
            <p className="hero-intro">
              {aboutContent.description}
            </p>
            <div className="hero-cta-group">
              <Link to="/contact" className="premium-btn primary">
                Book Luxury Experience <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="premium-btn secondary">
                Explore Services
              </Link>
            </div>
          </div>
          
          <div className="hero-right-visuals">
            <div className="hero-image-wrapper primary-image">
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" alt="Mehak Salon" />
            </div>
            <div className="hero-image-wrapper secondary-image">
              <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80" alt="Luxury Spa Setup" />
            </div>
            <div className="floating-card experience-card">
              <Sparkles className="icon-gold" size={24} />
              <div className="card-text">
                <strong>25+ Years</strong>
                <span>Of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER STORY SECTION */}
      <section className="founder-story">
        <div className="founder-container">
          <div className="founder-image-col">
            <div className="founder-portrait-wrapper">
              <img src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80" alt="Neeraj Bala - Founder" className="founder-img" />
              <div className="glass-card founder-label">
                <span className="name">Neeraj Bala</span>
                <span className="title">Founder & Beauty Expert</span>
              </div>
            </div>
          </div>
          <div className="founder-content-col">
            <div className="elegant-divider"></div>
            <h2 className="section-title">The Visionary Behind the Beauty</h2>
            <p className="story-text">
              What began in 1997 as a small endeavor has blossomed into Dhariwal's most trusted luxury beauty destination. Neeraj Bala’s passion for artistry and genuine care forms the soul of our salon. 
            </p>
            <div className="founder-quote">
              <Quote className="quote-icon" size={40} />
              <blockquote>
                "True beauty is not just about how you look, but how you feel when you step out of our doors. We don't just transform appearances; we nurture confidence."
              </blockquote>
              <div className="signature">Neeraj Bala</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT MEHAK SALON SECTION */}
      <section className="about-salon">
        <div className="about-salon-container">
          <div className="about-masonry-gallery">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80" alt="Salon Interior" className="masonry-img img-1" />
            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80" alt="Spa Ambience" className="masonry-img img-2" />
            <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80" alt="Beauty Treatment" className="masonry-img img-3" />
          </div>
          
          <div className="about-text-content">
            <div className="content-block">
              <h3 className="block-title">Beauty Beyond Appearance</h3>
              <p>We believe that self-care is an essential ritual. Every treatment is designed to restore balance, uplift your spirit, and bring out your natural radiance.</p>
            </div>
            <div className="content-block">
              <h3 className="block-title">A Space Designed For Confidence & Care</h3>
              <p>Our elegant interiors and serene ambience provide an escape from the ordinary. Let our expert team pamper you in a hygienic, relaxing environment.</p>
            </div>
            <div className="content-block">
              <h3 className="block-title">Luxury Beauty Experience</h3>
              <p>From premium imported products to modern styling techniques, we ensure that every moment you spend here feels profoundly special.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="why-choose-us">
        <div className="section-header center">
          <span className="sub-tag">The Mehak Standard</span>
          <h2 className="section-title">Why We Are Different</h2>
        </div>
        <div className="features-grid">
          {[
            { icon: <UserCheck size={32} />, title: 'Skilled Experts', desc: 'Highly trained professionals dedicated to their craft.' },
            { icon: <HeartHandshake size={32} />, title: 'Personalized Care', desc: 'Consultations tailored to your unique beauty needs.' },
            { icon: <ShieldCheck size={32} />, title: 'Hygienic Environment', desc: 'Strict sterilization protocols for your safety.' },
            { icon: <Droplets size={32} />, title: 'Premium Products', desc: 'We only use top-tier, skin-friendly global brands.' },
            { icon: <Scissors size={32} />, title: 'Modern Techniques', desc: 'Always updated with the latest beauty trends.' },
            { icon: <Star size={32} />, title: 'Affordable Luxury', desc: 'An opulent experience that remains accessible.' }
          ].map((feature, idx) => (
            <div className="feature-card glass-card" key={idx}>
              <div className="icon-wrapper">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="about-gallery">
        <div className="section-header center">
          <h2 className="section-title">Step Inside Our World</h2>
          <p className="section-desc">Experience the luxurious ambience of Mehak Salon.</p>
        </div>
        <div className="gallery-masonry">
          <div className="gallery-item item-wide"><img src={displayGallery[0]?.imageUrl} alt={displayGallery[0]?.title || 'Salon'} /></div>
          <div className="gallery-item item-tall"><img src={displayGallery[1]?.imageUrl} alt={displayGallery[1]?.title || 'Details'} /></div>
          <div className="gallery-item"><img src={displayGallery[2]?.imageUrl} alt={displayGallery[2]?.title || 'Spa'} /></div>
          <div className="gallery-item"><img src={displayGallery[3]?.imageUrl} alt={displayGallery[3]?.title || 'Makeup'} /></div>
        </div>
      </section>

      {/* 8. TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <div className="section-header center">
          <h2 className="section-title">Words of Love</h2>
        </div>
        <div className="testimonial-carousel">
          {displayTestimonials.slice(0, 3).map((review, idx) => (
            <div className="testimonial-card glass-card" key={idx}>
              <div className="quote-mark">"</div>
              <p className="review-text">{review.text}</p>
              <div className="reviewer-info">
                <div className="stars">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="reviewer-name">- {review.customerName}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
