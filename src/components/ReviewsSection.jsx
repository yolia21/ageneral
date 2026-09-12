import React, { useState } from 'react';
import { Star, ThumbsUp, ShieldCheck, Heart, User, CheckCircle, MessageSquare, PlusCircle, X } from 'lucide-react';

const REVIEWS_LIST = [
  {
    id: 1,
    author: 'Sarah M.',
    location: 'Matawan, NJ 07747',
    rating: 5,
    date: '2 weeks ago',
    service: 'Sewer Line Emergency',
    tech: 'Alfie',
    highlight: 'Saved Mother\'s Day!',
    text: 'On Mother\'s Day morning, our main sewer backed up completely. I called A General Plumbing in panic expecting to wait days or pay an outrageous holiday surcharge. Alfie arrived within 45 minutes! He cleared the obstruction cleanly, ran a diagnostic camera, and left the floor spotless. Unbelievable customer service.'
  },
  {
    id: 2,
    author: 'Robert K.',
    location: 'Aberdeen, NJ',
    rating: 5,
    date: '1 month ago',
    service: 'Plumbing Leak Detection',
    tech: 'Jay',
    highlight: 'Quick & Transparent',
    text: 'Jay detected a hidden leak behind our bathroom tiles that two other plumbers had missed. Found it within 20 minutes without tearing down half our wall. Pricing was 100% upfront as quoted on the phone.'
  },
  {
    id: 3,
    author: 'David P.',
    location: 'Matawan, NJ 07747',
    rating: 5,
    date: '1 month ago',
    service: 'Drain Cleaning',
    tech: 'Tim',
    highlight: 'Spotless Work Area',
    text: 'Tim cleared a severe kitchen drain grease clog. He put down protective floor mats, wore boot covers, and wiped down the entire cabinet afterwards. Highest level of professionalism.'
  },
  {
    id: 4,
    author: 'Jennifer T.',
    location: 'Old Bridge, NJ',
    rating: 4,
    date: '2 months ago',
    service: 'Toilet & Valve Repair',
    tech: 'Cody',
    highlight: 'Same-Day Late Night Service',
    text: 'Our master bathroom toilet started overflowing at 9 PM on a Sunday. Cody showed up fast and replaced the faulty flapper valve and shutoff assembly. Reliable 24/7 service when you need it.'
  },
  {
    id: 5,
    author: 'Michael R.',
    location: 'Hazlet, NJ',
    rating: 5,
    date: '3 months ago',
    service: 'Shower Installation',
    tech: 'Carlos',
    highlight: 'Flawless Installation',
    text: 'Carlos installed a new pressure-balanced shower valve system in our guest bath. Worked fast, tested every setting, and was very friendly. Highly recommended!'
  }
];

export default function ReviewsSection() {
  const [filterTech, setFilterTech] = useState('all');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(false);

  const filteredReviews = filterTech === 'all' 
    ? REVIEWS_LIST 
    : REVIEWS_LIST.filter(r => r.tech.toLowerCase() === filterTech.toLowerCase());

  return (
    <section id="reviews" className="section-padding" style={{ background: 'rgba(11, 19, 37, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Google Reviews</span>
          <h2 className="section-title">4.4 Star Rated By Local Matawan Customers</h2>
          <p className="section-subtitle">
            Read what homeowners say about response times, Mother's Day emergency calls, clean work areas, and technicians Alfie, Jay, Tim, Cody, and Carlos.
          </p>
        </div>

        {/* Stats banner */}
        <div className="reviews-stats-banner">
          <div className="stat-block">
            <div className="stat-big">4.4 ★</div>
            <div className="star-rating" style={{ justifyContent: 'center', marginTop: '0.25rem' }}>
              <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={18} fill="#fbbf24" stroke="#fbbf24" style={{ opacity: 0.5 }} />
            </div>
            <div className="stat-label">Google Star Rating</div>
          </div>

          <div className="stat-block">
            <div className="stat-big" style={{ color: '#00b4d8' }}>24/7</div>
            <div className="stat-label">Open 365 Days a Year</div>
          </div>

          <div className="stat-block">
            <div className="stat-big" style={{ color: '#ff5e00' }}>100%</div>
            <div className="stat-label">Clean Work Area Guarantee</div>
          </div>

          <div className="stat-block">
            <button onClick={() => setReviewModalOpen(true)} className="btn btn-secondary btn-sm">
              <PlusCircle size={16} /> Write a Review
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 600 }}>Filter by Tech:</span>
          {['all', 'Alfie', 'Jay', 'Tim', 'Cody', 'Carlos'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterTech(t)}
              className={`btn btn-sm ${filterTech === t ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: '20px', padding: '0.35rem 0.85rem' }}
            >
              {t === 'all' ? 'All Reviews' : t}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="reviews-grid">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div>
                <div className="review-header">
                  <div>
                    <div className="review-author">{rev.author}</div>
                    <div className="review-date">{rev.location} • {rev.date}</div>
                  </div>
                  <div className="star-rating">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbf24" stroke="#fbbf24" />
                    ))}
                  </div>
                </div>

                <div style={{ fontWeight: 700, color: '#48cae4', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  "{rev.highlight}"
                </div>

                <p className="review-text">"{rev.text}"</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem', marginTop: '0.5rem' }}>
                <span className="review-employee-badge">
                  <User size={13} /> Tech Mentioned: <strong>{rev.tech}</strong>
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Service: {rev.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review modal */}
      {reviewModalOpen && (
        <div className="modal-overlay" onClick={() => setReviewModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setReviewModalOpen(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: '#94a3b8' }}
            >
              <X size={24} />
            </button>

            {!submittedReview ? (
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  Leave a Customer Review
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Share your experience with A General Plumbing & Sewer Services in Matawan, NJ.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setSubmittedReview(true); }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Your Name:</label>
                    <input className="area-input" required placeholder="e.g. John D." style={{ width: '100%' }} />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Technician Who Helped You:</label>
                    <select className="area-input" style={{ width: '100%' }}>
                      <option value="Alfie">Alfie</option>
                      <option value="Jay">Jay</option>
                      <option value="Tim">Tim</option>
                      <option value="Cody">Cody</option>
                      <option value="Carlos">Carlos</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Rating:</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={24} fill="#fbbf24" stroke="#fbbf24" style={{ cursor: 'pointer' }} />
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>Your Feedback:</label>
                    <textarea className="area-input" rows={3} required placeholder="Describe response time, cleanliness, and service quality..." style={{ width: '100%', resize: 'none' }}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    Submit Google Review
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <CheckCircle size={56} style={{ color: '#10b981', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>Thank You for Your Feedback!</h3>
                <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>Your review helps us maintain our 4.4 star standard in Matawan, NJ.</p>
                <button onClick={() => { setReviewModalOpen(false); setSubmittedReview(false); }} className="btn btn-secondary">
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
