import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function MobileStickyBar({ onOpenBooking }) {
  return (
    <div className="mobile-sticky-bar">
      <a href="tel:7325665000" className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }}>
        <Phone size={18} /> Call (732) 566-5000
      </a>
      <button onClick={onOpenBooking} className="btn btn-secondary" style={{ flex: 1, padding: '0.75rem' }}>
        <Calendar size={18} /> Online Quote
      </button>
    </div>
  );
}
