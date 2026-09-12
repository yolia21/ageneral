import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Phone, Calendar, Clock, ShieldCheck } from 'lucide-react';

export default function EstimateCalculator({ onOpenBooking }) {
  const [serviceType, setServiceType] = useState('leak-detection');
  const [urgency, setUrgency] = useState('emergency');
  const [property, setProperty] = useState('residential');

  const serviceOptions = {
    'leak-detection': { label: 'Plumbing Leak Detection', desc: 'Acoustic & thermal imaging leak search' },
    'drain-cleaning': { label: 'Drain Cleaning / Hydro-Jetting', desc: 'Main line auger & clog removal' },
    'sewer-repair': { label: 'Sewer Repair & Camera Inspection', desc: 'Sewer main diagnostic & pipe fix' },
    'toilet-repair': { label: 'Toilet Repair & Valve Replace', desc: 'Running toilet or leak repair' },
    'shower-installation': { label: 'Shower / Fixture Installation', desc: 'Valve plumbing & tub conversion' }
  };

  const currentConfig = serviceOptions[serviceType];

  return (
    <section id="calculator" className="section-padding" style={{ background: 'rgba(18, 30, 54, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Matawan Dispatch</span>
          <h2 className="section-title">Interactive Service & Dispatch Request Builder</h2>
          <p className="section-subtitle">
            Configure your plumbing situation in 3 seconds for immediate priority dispatch & upfront phone assessment.
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
                  1. Select Service Category:
                </label>
                <div className="calc-radio-grid">
                  {Object.keys(serviceOptions).map((key) => (
                    <div 
                      key={key} 
                      className={`calc-radio-card ${serviceType === key ? 'active' : ''}`}
                      onClick={() => setServiceType(key)}
                    >
                      <div className="calc-radio-title">{serviceOptions[key].label}</div>
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
                    <div className="calc-radio-sub">Same-Day Availability</div>
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
                    <div className="calc-radio-sub">Store / Office</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="calc-summary-box">
              <div>
                <div style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', color: '#00b4d8', fontWeight: 800 }}>
                  Selected Dispatch Request
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '0.2rem' }}>
                  {currentConfig.label}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  {currentConfig.desc}
                </p>

                <div style={{ background: 'rgba(11, 19, 37, 0.8)', border: '1px solid var(--border-cyan)', padding: '1rem', borderRadius: '12px', margin: '1.25rem 0' }}>
                  <div style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={16} /> Estimated Arrival: 30-45 Mins in 07747
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                    Our dispatcher will call you immediately to confirm technician whereabouts & details.
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  <li style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                    Courteous, polite & easy-to-talk-to technicians
                  </li>
                  <li style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                    Assigned Master Techs (Alfie, Jay, Tim, Cody, or Carlos)
                  </li>
                  <li style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                    Exemplary knowledge & spotless cleanup
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button 
                  onClick={() => onOpenBooking(`${currentConfig.label}`)}
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%' }}
                >
                  <Calendar size={20} /> Request Dispatch For This Issue
                </button>
                
                <a href="tel:7325665000" className="btn btn-secondary" style={{ width: '100%' }}>
                  <Phone size={18} /> Call (732) 566-5000 Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
