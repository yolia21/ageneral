import React from 'react';
import { Phone, Star, ShieldCheck, Clock, MapPin, Calendar, CheckCircle2, Zap, Radio, Wrench, UserCheck } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Action */}
          <div className="hero-text-content">
            <div className="hero-badge-group">
              <span className="hero-rating-pill">
                <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
                4.4 Google Rating (9 Verified Reviews)
              </span>
              <span className="badge-live">
                <span className="pulse-dot"></span>
                24/7 Techs Ready in Matawan
              </span>
            </div>

            <h1 className="hero-title">
              Fast, Reliable <span className="gradient-text">24/7 Plumbing</span> & <span className="accent-orange">Sewer Repair</span>
            </h1>

            <p className="hero-description">
              Serving Matawan, NJ & surrounding Monmouth County with 24/7 emergency dispatch. 
              From leak detection to sewer line restoration—our local team (Alfie, Jay, Tim, Cody & Carlos) gets it done clean, fast, and transparently.
            </p>

            <div className="hero-cta-group">
              <a href="tel:7325665000" className="btn btn-primary btn-lg">
                <Phone size={22} />
                Call (732) 566-5000
              </a>
              
              <button onClick={onOpenBooking} className="btn btn-secondary btn-lg">
                <Calendar size={20} />
                Request Online Dispatch
              </button>
            </div>

            {/* Guarantees row */}
            <div className="hero-guarantee-grid">
              <div className="guarantee-item">
                <CheckCircle2 size={18} className="guarantee-icon" />
                <span>Same-Day & Holiday Service</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={18} className="guarantee-icon" />
                <span>Pristine Work Area Cleanup</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={18} className="guarantee-icon" />
                <span>Upfront Flat-Rate Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Dispatch Monitor Card (No AI Images) */}
          <div className="hero-media-wrapper">
            <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border-cyan)', boxShadow: 'var(--shadow-lg)' }}>
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                    <Radio size={22} className="pulse-icon" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: '#ffffff' }}>Matawan Dispatch Hub</h3>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>📍 125 Main St, Matawan, NJ 07747</div>
                  </div>
                </div>
                <span className="badge-live" style={{ fontSize: '0.75rem' }}>ACTIVE 24/7</span>
              </div>

              {/* Status metrics grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(11, 19, 37, 0.7)', border: '1px solid var(--border-light)', padding: '1rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Avg Local ETA</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00b4d8', marginTop: '0.2rem' }}>30 - 45 Mins</div>
                  <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.2rem' }}>⚡ Fast Track Priority</div>
                </div>

                <div style={{ background: 'rgba(11, 19, 37, 0.7)', border: '1px solid var(--border-light)', padding: '1rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>On-Duty Techs</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>5 Experts</div>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.2rem' }}>Alfie, Jay, Tim, Cody, Carlos</div>
                </div>
              </div>

              {/* Verified Features */}
              <div style={{ background: 'rgba(0, 180, 216, 0.08)', border: '1px solid rgba(0, 180, 216, 0.25)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#48cae4', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <UserCheck size={16} /> Verified Customer Highlights
                </div>
                <div style={{ fontSize: '0.825rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                  • Mother's Day & Holiday Emergency Response<br />
                  • 100% Clean Work Area Guarantee<br />
                  • Upfront Diagnostic & Fair Pricing
                </div>
              </div>

              {/* Direct call banner inside card */}
              <a 
                href="tel:7325665000" 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
              >
                <Phone size={18} /> Direct Hotline: (732) 566-5000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
