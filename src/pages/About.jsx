import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Droplets, ShieldCheck, HeartHandshake, Scissors, UserCheck, Star, Quote } from 'lucide-react';
import './About.css';

const About = () => {
  // To ensure the page scrolls to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <span className="luxury-badge">Since 1997</span>
            <h1 className="hero-heading">Redefining Beauty & Confidence Since 1997</h1>
            <h2 className="hero-subheading">An elegant sanctuary where artistry meets self-care.</h2>
            <p className="hero-intro">
              Step into a world of refined elegance. At Mehak Salon & Spa, we craft unforgettable beauty experiences tailored to unveil your most confident self.
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
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" alt="Founder Neeraj Bala - Mehak Salon" />
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
          <div className="gallery-item item-wide"><img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" alt="Salon" /></div>
          <div className="gallery-item item-tall"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80" alt="Details" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80" alt="Spa" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=600&q=80" alt="Makeup" /></div>
        </div>
      </section>

      {/* 8. TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <div className="section-header center">
          <h2 className="section-title">Words of Love</h2>
        </div>
        <div className="testimonial-carousel">
          {[
            { name: "Priya Sharma", text: "The bridal makeup was phenomenal. I felt like a queen on my special day. The team at Mehak truly knows how to make you shine." },
            { name: "Simran Kaur", text: "Best spa experience in Dhariwal! The ambience is incredibly relaxing and the staff is so professional and polite." },
            { name: "Aarti Verma", text: "I've been a regular since 2015. Their dedication to hygiene and premium quality has never dropped. Absolutely love it here." }
          ].map((review, idx) => (
            <div className="testimonial-card glass-card" key={idx}>
              <div className="quote-mark">"</div>
              <p className="review-text">{review.text}</p>
              <div className="reviewer-info">
                <div className="stars">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="reviewer-name">- {review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
};

export default About;
