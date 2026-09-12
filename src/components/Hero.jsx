import React from 'react';
import { Phone, Star, ShieldCheck, Clock, MapPin, Calendar, CheckCircle2, Zap } from 'lucide-react';

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
              From leak detection to sewer line restoration—our experts (Alfie, Jay, Tim, Cody & Carlos) get it done clean, fast, and transparently.
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

          {/* Right Column: Hero Visual Card */}
          <div className="hero-media-wrapper">
            <div className="hero-image-card">
              <img src="/hero_plumber.png" alt="A General Plumbing & Sewer Services Master Plumber" />
              <div className="hero-image-overlay"></div>
              
              <div className="hero-floating-badge">
                <div className="hero-badge-icon">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="hero-badge-title">Average Response: 30-45 Mins</div>
                  <div className="hero-badge-subtitle">Dispatching from 125 Main St, Matawan, NJ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
