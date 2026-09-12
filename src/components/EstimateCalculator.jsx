import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Phone, Calendar } from 'lucide-react';

export default function EstimateCalculator({ onOpenBooking }) {
  const [serviceType, setServiceType] = useState('leak-detection');
  const [urgency, setUrgency] = useState('emergency');
  const [property, setProperty] = useState('residential');

  // Base pricing mapping
  const basePrices = {
    'leak-detection': { label: 'Leak Detection', base: 175, high: 299 },
    'drain-cleaning': { label: 'Drain Cleaning / Hydro-Jetting', base: 125, high: 249 },
    'sewer-repair': { label: 'Sewer Line Diagnostic & Repair', base: 350, high: 950 },
    'toilet-repair': { label: 'Toilet Repair & Valve Replace', base: 95, high: 195 },
    'shower-installation': { label: 'Shower / Fixture Installation', base: 299, high: 750 }
  };

  const urgencyMultiplier = {
    standard: 1.0,
    emergency: 1.15,
    holiday: 1.25
  };

  const propertyMultiplier = {
    residential: 1.0,
    condo: 1.05,
    commercial: 1.3
  };

  const currentConfig = basePrices[serviceType];
  const mult = urgencyMultiplier[urgency] * propertyMultiplier[property];

  const estimatedMin = Math.round(currentConfig.base * mult);
  const estimatedMax = Math.round(currentConfig.high * mult);

  return (
    <section id="calculator" className="section-padding" style={{ background: 'rgba(18, 30, 54, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">100% Upfront Transparency</span>
          <h2 className="section-title">Instant Plumbing Cost Estimator</h2>
          <p className="section-subtitle">
            Get a realistic, zero-obligation estimate in 30 seconds. No hidden dispatch surprises.
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-grid">
            {/* Options selection */}
            <div className="calc-options-group">
              {/* Step 1: Service */}
              <div>
                <label className="calc-label">
                  <Calculator size={18} style={{ color: '#00b4d8' }} />
                  1. Select Plumbing Service:
                </label>
                <div className="calc-radio-grid">
                  {Object.keys(basePrices).map((key) => (
                    <div 
                      key={key} 
                      className={`calc-radio-card ${serviceType === key ? 'active' : ''}`}
                      onClick={() => setServiceType(key)}
                    >
                      <div className="calc-radio-title">{basePrices[key].label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Urgency */}
              <div>
                <label className="calc-label">
                  2. Dispatch Urgency Needed:
                </label>
                <div className="calc-radio-grid">
                  <div 
                    className={`calc-radio-card ${urgency === 'standard' ? 'active' : ''}`}
                    onClick={() => setUrgency('standard')}
                  >
                    <div className="calc-radio-title">Standard</div>
                    <div className="calc-radio-sub">Scheduled Appt</div>
                  </div>
                  <div 
                    className={`calc-radio-card ${urgency === 'emergency' ? 'active' : ''}`}
                    onClick={() => setUrgency('emergency')}
                  >
                    <div className="calc-radio-title">⚡ 24/7 Emergency</div>
                    <div className="calc-radio-sub">Immediate Dispatch</div>
                  </div>
                  <div 
                    className={`calc-radio-card ${urgency === 'holiday' ? 'active' : ''}`}
                    onClick={() => setUrgency('holiday')}
                  >
                    <div className="calc-radio-title">🎆 Weekend/Holiday</div>
                    <div className="calc-radio-sub">Mother's Day & Late Night</div>
                  </div>
                </div>
              </div>

              {/* Step 3: Property */}
              <div>
                <label className="calc-label">
                  3. Property Type:
                </label>
                <div className="calc-radio-grid">
                  <div 
                    className={`calc-radio-card ${property === 'residential' ? 'active' : ''}`}
                    onClick={() => setProperty('residential')}
                  >
                    <div className="calc-radio-title">Single Family</div>
                    <div className="calc-radio-sub">House</div>
                  </div>
                  <div 
                    className={`calc-radio-card ${property === 'condo' ? 'active' : ''}`}
                    onClick={() => setProperty('condo')}
                  >
                    <div className="calc-radio-title">Condo / Townhouse</div>
                    <div className="calc-radio-sub">Multi-level</div>
                  </div>
                  <div 
                    className={`calc-radio-card ${property === 'commercial' ? 'active' : ''}`}
                    onClick={() => setProperty('commercial')}
                  >
                    <div className="calc-radio-title">Commercial</div>
                    <div className="calc-radio-sub">Store / Restaurant</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="calc-summary-box">
              <div>
                <div style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', color: '#00b4d8', fontWeight: 800 }}>
                  Estimated Rate Range
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '0.2rem' }}>
                  {currentConfig.label}
                </h3>

                <div className="estimate-price-display">
                  <div className="estimate-range">${estimatedMin} - ${estimatedMax}</div>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Includes diagnostic check & labor warranty</span>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  <li style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                    Zero surprise hidden fees guarantee
                  </li>
                  <li style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                    Assigned Master Tech (Alfie, Jay, Tim, Cody, or Carlos)
                  </li>
                  <li style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                    Full clean-up of work area upon completion
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button 
                  onClick={() => onOpenBooking(`${currentConfig.label} ($${estimatedMin}-$${estimatedMax})`)}
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%' }}
                >
                  <Calendar size={20} /> Lock In Estimate & Book
                </button>
                
                <a href="tel:7325665000" className="btn btn-secondary" style={{ width: '100%' }}>
                  <Phone size={18} /> Call (732) 566-5000 To Confirm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
