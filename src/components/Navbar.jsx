import React, { useState, useEffect } from 'react';
import { Phone, Clock, ShieldCheck, MapPin, Menu, X, Wrench, Calendar } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top emergency alert bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="badge-live">
              <span className="pulse-dot"></span>
              24/7 Emergency Dispatch Active
            </span>
            <span className="top-bar-divider">•</span>
            <span className="top-bar-info">
              <MapPin size={14} className="icon-gold" /> 125 Main St, Matawan, NJ 07747
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-info">
              <Clock size={14} className="icon-cyan" /> Open 24 Hours / 7 Days a Week
            </span>
            <span className="top-bar-divider">•</span>
            <span className="top-bar-info text-highlight">
              ⭐ 4.4 Google Rating (9 Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Logo */}
          <a href="#" className="nav-logo">
            <div className="logo-icon-wrap">
              <Wrench className="logo-icon" size={26} />
            </div>
            <div className="logo-text">
              <span className="logo-name">A GENERAL</span>
              <span className="logo-sub">Plumbing & Sewer Services</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#calculator">Instant Quote</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#reviews">Reviews (4.4★)</a></li>
            <li><a href="#service-area">Service Area</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>

          {/* CTA Actions */}
          <div className="nav-actions">
            <a href="tel:7325665000" className="nav-phone-btn">
              <div className="phone-icon-pulse">
                <Phone size={18} />
              </div>
              <div className="phone-btn-text">
                <span className="phone-label">24/7 CALL DISPATCH</span>
                <span className="phone-number">(732) 566-5000</span>
              </div>
            </a>

            <button onClick={onOpenBooking} className="btn btn-primary btn-sm hide-mobile">
              <Calendar size={16} /> Schedule Service
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <ul className="mobile-nav-links">
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Instant Quote</a></li>
              <li><a href="#team" onClick={() => setMobileMenuOpen(false)}>Our Team (Alfie, Jay, Tim...)</a></li>
              <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Customer Reviews (4.4★)</a></li>
              <li><a href="#service-area" onClick={() => setMobileMenuOpen(false)}>Service Area (07747)</a></li>
              <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
            </ul>
            <div className="mobile-drawer-actions">
              <a href="tel:7325665000" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Phone size={20} /> Call (732) 566-5000
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '0.75rem' }}
              >
                <Calendar size={18} /> Request Dispatch Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
