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
    highlight: 'Very polite, quick & helpful phone support',
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
    highlight: 'Jay and Tim made a crap situation waaayyyy better!',
    text: 'Jay and Tim were excellent ! I highly recommend. They made a crap situation waaayyyy better pun intended. Their exemplary knowledge and caring service made this situation from bad to great . Not to mention they are highly skilled and got everything fixed in a timely manner. You have problems these are the guys to fix them !'
  },
  {
    id: 3,
    author: 'Irina Lendensky',
    meta: '12 reviews · 1 photo',
    rating: 5,
    date: '5 years ago',
    service: 'Plumbing leak detection',
    tech: 'Cody',
    positiveTags: ['Responsiveness', 'Professionalism', 'Value'],
    highlight: 'Courteous, professional & spotlessly clean',
    text: 'This was our first time using this company. Cody, the plumber was courteous, professional and did a terrific job. He left the space where he worked spotlessly clean. The price was very reasonable as well. Great experience'
  },
  {
    id: 4,
    author: 'Aleksandra Kosakowska',
    meta: '11 reviews · 1 photo',
    rating: 5,
    date: '5 years ago',
    service: 'Drain cleaning',
    tech: 'Emergency Dispatch',
    positiveTags: ['Responsiveness', 'Professionalism'],
    highlight: 'Showed up same day on Mother\'s Day!',
    text: 'Out of 6 plumbers we called this was the only one that called back and showed up the same day on mother\'s day! We had a clog in the toilet caused by a toy and he got it out quickly and without making a mess. So greatful for such a reliable service provider ?'
  },
  {
    id: 5,
    author: 'Aleks Zhdanov',
    meta: '14 reviews',
    rating: 5,
    date: '2 years ago',
    service: 'General Plumbing',
    tech: 'On-duty Plumber',
    highlight: 'Went above and beyond',
    text: 'Plumber was great there was a miscommunication over the phone about price and he still worked with us and went above and beyond.'
  },
  {
    id: 6,
    author: 'Charles Giordano',
    meta: 'Local Guide · 19 reviews',
    rating: 5,
    date: '5 years ago',
    service: 'Drain cleaning',
    tech: 'Carlos',
    highlight: 'Salute to Carlos for a good job on a tough clog!',
    text: 'Had a bad drain clog.called A General in the morning and Carlos arrived in the afternoon.Went right to work with a small snake that didn\'t cut it.Quickly changed attack and brought out a bigger snake that did the job on a tuff clog.Salute to Carlos for a good job!'
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
          <span className="section-tag">Authentic Customer Reviews</span>
          <h2 className="section-title">Verified Ratings From Real Homeowners</h2>
          <p className="section-subtitle">
            Strictly real Google reviews for A General Plumbing & Sewer Services featuring technicians <strong>Alfie, Jay, Tim, Cody, and Carlos</strong>.
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
            <div className="stat-label">Google Rating</div>
          </div>

          <div className="stat-block">
            <div className="stat-big" style={{ color: '#00b4d8' }}>24/7</div>
            <div className="stat-label">Mother's Day & Emergency Relief</div>
          </div>

          <div className="stat-block">
            <div className="stat-big" style={{ color: '#ff5e00' }}>100%</div>
            <div className="stat-label">Courteous & Clean Work Area</div>
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
            <div key={rev.id} className="review-card" style={{ border: '1px solid var(--border-cyan)' }}>
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

                <p className="review-text" style={{ fontSize: '0.925rem', color: '#e2e8f0', lineHeight: '1.6' }}>
                  "{rev.text}"
                </p>

                {rev.assessment && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.775rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Price Assessment: {rev.assessment}
                  </div>
                )}

                {rev.positiveTags && (
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    {rev.positiveTags.map((pt, i) => (
                      <span key={i} style={{ background: 'rgba(0, 180, 216, 0.1)', border: '1px solid rgba(0, 180, 216, 0.2)', color: '#48cae4', fontSize: '0.725rem', padding: '0.15rem 0.45rem', borderRadius: '4px', fontWeight: 600 }}>
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem', marginTop: '0.5rem' }}>
                <span className="review-employee-badge">
                  <User size={13} /> Tech: <strong>{rev.tech}</strong>
                </span>
                {rev.service && <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Service: {rev.service}</span>}
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
                <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>Your review helps us maintain our standard in Matawan, NJ.</p>
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
