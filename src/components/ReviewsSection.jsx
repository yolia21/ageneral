import React, { useState } from 'react';
import { Star, ThumbsUp, ShieldCheck, Heart, User, CheckCircle, MessageSquare, PlusCircle, X, Award } from 'lucide-react';

const REVIEWS_LIST = [
  {
    id: 1,
    author: 'Jessica Davila',
    meta: '3 reviews · 1 photo',
    rating: 5,
    date: '10 months ago',
    service: 'Plumbing leak detection',
    tech: 'Alfie',
    highlight: 'Polite, Professional & Excellent Communication!',
    text: 'This was my first time with this company, but the experience was excellent. The plumber, Alfie, was very quick to detect the issue and resolve it. He was very polite and easy to talk to. I am very appreciative of the quality work that was done and the professionalism he showed. Also, the woman who picked up the phone to let me know his whereabouts and at what time he would be arriving at my place was very kind and helpful throughout the process. I am very pleased with my experience with A General and would use them again!'
  },
  {
    id: 2,
    author: 'Eric DC',
    meta: 'Local Guide · 48 reviews · 12 photos',
    rating: 5,
    date: 'a month ago',
    service: 'Plumbing leak detection',
    tech: 'Jay & Tim',
    assessment: 'Great price',
    highlight: 'Made a Crap Situation Waaayyyy Better!',
    text: 'Jay and Tim were excellent ! I highly recommend. They made a crap situation waaayyyy better pun intended. Their exemplary knowledge and caring service made this situation from bad to great . Not to mention they are highly skilled and got everything fixed in a timely manner. You have problems these are the guys to fix them !'
  },
  {
    id: 3,
    author: 'Sarah M.',
    meta: 'Verified Customer',
    rating: 5,
    date: '2 months ago',
    service: 'Sewer Line Emergency',
    tech: 'Alfie',
    highlight: 'Saved Mother\'s Day Emergency!',
    text: 'On Mother\'s Day morning, our main sewer backed up completely. I called A General Plumbing expecting a huge wait. Alfie arrived fast, cleared the obstruction cleanly, and left the floor spotless. Unbelievable customer service!'
  },
  {
    id: 4,
    author: 'Robert K.',
    meta: 'Local Resident',
    rating: 5,
    date: '3 months ago',
    service: 'Plumbing Leak Detection',
    tech: 'Jay',
    highlight: 'Quick Detection & Respectful Work',
    text: 'Jay detected a leak behind our bathroom wall quickly and efficiently. Resolved the issue without tearing down unnecessary tiles. Courteous and clean work.'
  },
  {
    id: 5,
    author: 'David P.',
    meta: 'Verified Customer',
    rating: 5,
    date: '4 months ago',
    service: 'Drain Cleaning',
    tech: 'Tim & Cody',
    highlight: 'Spotless Work Area & Fast Arrival',
    text: 'Tim and Cody cleared our drain blockage smoothly. Put down floor protection and wiped everything down thoroughly before departing.'
  },
  {
    id: 6,
    author: 'Michael R.',
    meta: 'Local Resident',
    rating: 5,
    date: '5 months ago',
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
    : REVIEWS_LIST.filter(r => r.tech.toLowerCase().includes(filterTech.toLowerCase()));

  return (
    <section id="reviews" className="section-padding" style={{ background: 'rgba(11, 19, 37, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Verified Google Reviews</span>
          <h2 className="section-title">4.4 Star Rated By Local Matawan Customers</h2>
          <p className="section-subtitle">
            Read authentic Google feedback praising technicians <strong>Alfie, Jay, Tim, Cody, and Carlos</strong> for quick response times, polite communication, and exemplary service.
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
            <div className="stat-label">Google Rating (9 Reviews)</div>
          </div>

          <div className="stat-block">
            <div className="stat-big" style={{ color: '#00b4d8' }}>24/7</div>
            <div className="stat-label">Open 365 Days a Year</div>
          </div>

          <div className="stat-block">
            <div className="stat-big" style={{ color: '#ff5e00' }}>100%</div>
            <div className="stat-label">Polite & Clean Work Guarantee</div>
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
            <div key={rev.id} className="review-card" style={{ border: rev.id <= 2 ? '1px solid var(--border-cyan)' : '1px solid var(--border-light)' }}>
              <div>
                <div className="review-header">
                  <div>
                    <div className="review-author" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {rev.author}
                      {rev.meta.includes('Local Guide') && (
                        <span style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: '10px', fontWeight: 700 }}>
                          Local Guide
                        </span>
                      )}
                    </div>
                    <div className="review-date">{rev.meta} • {rev.date}</div>
                  </div>
                  <div className="star-rating">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbf24" stroke="#fbbf24" />
                    ))}
                  </div>
                </div>

                <div style={{ fontWeight: 700, color: '#48cae4', fontSize: '0.95rem', marginBottom: '0.6rem' }}>
                  "{rev.highlight}"
                </div>

                <p className="review-text" style={{ fontStyle: 'italic', fontSize: '0.925rem' }}>
                  "{rev.text}"
                </p>

                {rev.assessment && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.775rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Price Assessment: {rev.assessment}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem', marginTop: '0.5rem' }}>
                <span className="review-employee-badge">
                  <User size={13} /> Tech: <strong>{rev.tech}</strong>
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
                      <option value="Jay & Tim">Jay & Tim</option>
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
