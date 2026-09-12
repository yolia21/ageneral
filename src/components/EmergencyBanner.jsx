import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, PhoneCall, Clock } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="ticker-banner">
      <div className="container">
        <div className="ticker-flex">
          <div className="ticker-item">
            <Clock size={18} style={{ color: '#00b4d8' }} />
            <span>Open 24/7/365 — Nights, Weekends & Holidays</span>
          </div>

          <div className="ticker-item">
            <HeartHandshake size={18} style={{ color: '#ff5e00' }} />
            <span>Same-Day & Holiday Emergency Relief (Mother's Day & Nights Included)</span>
          </div>

          <div className="ticker-item">
            <Sparkles size={18} style={{ color: '#fbbf24' }} />
            <span>Spotless Clean Work Area Guarantee</span>
          </div>

          <a href="tel:7325665000" className="ticker-item" style={{ color: '#34d399', fontWeight: 800 }}>
            <PhoneCall size={18} />
            <span>Call (732) 566-5000</span>
          </a>
        </div>
      </div>
    </div>
  );
}
