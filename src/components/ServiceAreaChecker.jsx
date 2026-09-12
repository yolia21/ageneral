import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Navigation, AlertCircle, Phone } from 'lucide-react';

const COVERED_ZIPS = [
  { zip: '07747', city: 'Matawan & Aberdeen', eta: '15 - 30 Mins (Primary Hub)' },
  { zip: '08857', city: 'Old Bridge', eta: '25 - 40 Mins' },
  { zip: '07735', city: 'Keyport & Union Beach', eta: '20 - 35 Mins' },
  { zip: '07733', city: 'Holmdel', eta: '25 - 40 Mins' },
  { zip: '07730', city: 'Hazlet', eta: '25 - 35 Mins' },
  { zip: '07746', city: 'Marlboro & Morganville', eta: '30 - 45 Mins' },
  { zip: '07721', city: 'Cliffwood & Cliffwood Beach', eta: '15 - 30 Mins' }
];

export default function ServiceAreaChecker({ onOpenBooking }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    const clean = query.trim().toLowerCase();
    
    if (!clean) return;

    const found = COVERED_ZIPS.find(item => 
      item.zip === clean || item.city.toLowerCase().includes(clean)
    );

    if (found) {
      setResult({ status: 'covered', data: found });
    } else {
      setResult({ 
        status: 'extended', 
        message: `Zip Code "${query}" is within our extended emergency coverage area! Call (732) 566-5000 directly for immediate dispatch confirmation.` 
      });
    }
  };

  return (
    <section id="service-area" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Matawan & Monmouth County Coverage</span>
          <h2 className="section-title">Check Immediate Service Availability</h2>
          <p className="section-subtitle">
            Dispatched directly from <strong>125 Main St, Matawan, NJ 07747</strong>. Enter your ZIP code to view estimated arrival times.
          </p>
        </div>

        <div className="area-box">
          <form onSubmit={handleCheck} className="area-search-form">
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <input
                type="text"
                className="area-input"
                placeholder="Enter ZIP code (e.g. 07747) or city name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <MapPin size={18} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
              <Search size={18} /> Check Coverage
            </button>
          </form>

          {/* Dynamic Result Output */}
          {result && (
            <div style={{ 
              background: result.status === 'covered' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(0, 180, 216, 0.12)',
              border: `1px solid ${result.status === 'covered' ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-cyan)'}`,
              padding: '1.25rem',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              animation: 'fadeIn 0.25s ease-out'
            }}>
              {result.status === 'covered' ? (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.15rem' }}>
                      Primary Service Zone: {result.data.city} ({result.data.zip})
                    </h4>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                      <Clock size={14} style={{ display: 'inline', marginRight: '4px', color: '#00b4d8' }} />
                      Estimated Emergency Response ETA: <strong>{result.data.eta}</strong>
                    </p>
                    <button 
                      onClick={() => onOpenBooking(`Dispatch to ${result.data.city} (${result.data.zip})`)} 
                      className="btn btn-primary btn-sm" 
                      style={{ marginTop: '0.85rem' }}
                    >
                      Request Dispatch to {result.data.zip}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <AlertCircle size={24} style={{ color: '#00b4d8', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.1rem' }}>Extended Emergency Service Available</h4>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginTop: '0.25rem' }}>{result.message}</p>
                    <a href="tel:7325665000" className="btn btn-secondary btn-sm" style={{ marginTop: '0.85rem' }}>
                      <Phone size={14} /> Call (732) 566-5000
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Area Tags */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Primary Towns Served 24/7:</span>
            <div className="area-tags">
              <span className="area-tag-pill main">📍 Matawan (07747)</span>
              <span className="area-tag-pill main">📍 Aberdeen (07747)</span>
              <span className="area-tag-pill">Old Bridge (08857)</span>
              <span className="area-tag-pill">Keyport (07735)</span>
              <span className="area-tag-pill">Holmdel (07733)</span>
              <span className="area-tag-pill">Hazlet (07730)</span>
              <span className="area-tag-pill">Marlboro (07746)</span>
              <span className="area-tag-pill">Cliffwood Beach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
