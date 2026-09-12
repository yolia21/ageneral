import React from 'react';
import { Wrench, Phone, MapPin, Clock, Star, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div className="nav-logo" style={{ marginBottom: '1.25rem' }}>
              <div className="logo-icon-wrap">
                <Wrench className="logo-icon" size={24} />
              </div>
              <div className="logo-text">
                <span className="logo-name">A GENERAL</span>
                <span className="logo-sub">Plumbing & Sewer Services</span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Matawan's trusted 24/7 master plumbing and sewer service provider. Dedicated to fast response times, holiday emergency relief, clean work areas, and 100% upfront pricing.
            </p>

            <div className="star-rating" style={{ marginBottom: '0.5rem' }}>
              <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
              <Star size={16} fill="#fbbf24" stroke="#fbbf24" style={{ opacity: 0.5 }} />
              <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, marginLeft: '0.4rem' }}>4.4 / 5.0 Rating (9 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Master Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Plumbing Leak Detection</a></li>
              <li><a href="#services">Drain Cleaning & Hydro-Jetting</a></li>
              <li><a href="#services">Sewer Repair & Main Line</a></li>
              <li><a href="#services">Toilet Repair & Replacement</a></li>
              <li><a href="#services">Shower & Tub Installation</a></li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="footer-col-title">Contact & Dispatch</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#00b4d8', flexShrink: 0, marginTop: '2px' }} />
                <span>125 Main St<br />Matawan, NJ 07747</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#ff5e00', flexShrink: 0 }} />
                <a href="tel:7325665000" style={{ color: '#ffffff', fontWeight: 800 }}>(732) 566-5000</a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Clock size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>Open 24 Hours / 7 Days a Week</span>
              </li>
            </ul>
          </div>

          {/* Technicians & Area */}
          <div>
            <h4 className="footer-col-title">Our Matawan Team</h4>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
              Master technicians praised by name in customer reviews:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {['Alfie', 'Jay', 'Tim', 'Cody', 'Carlos'].map((t) => (
                <span key={t} style={{ background: 'rgba(0, 180, 216, 0.12)', border: '1px solid var(--border-cyan)', color: '#48cae4', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.775rem', fontWeight: 700 }}>
                  👨‍🔧 {t}
                </span>
              ))}
            </div>

            <button onClick={onOpenBooking} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
              Request Online Dispatch
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} A General Plumbing & Sewer Services. All Rights Reserved. 125 Main St, Matawan, NJ 07747.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ color: '#34d399' }}>🟢 Dispatch Status: Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
