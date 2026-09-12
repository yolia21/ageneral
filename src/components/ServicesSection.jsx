import React, { useState } from 'react';
import { Search, Flame, ShieldAlert, Droplets, ShowerHead, Wrench, ArrowRight, Check, X, Phone } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'leak-detection',
    title: 'Plumbing Leak Detection',
    icon: Search,
    urgency: 'High Urgency',
    shortDesc: 'Non-invasive acoustic and thermal detection to locate hidden pipe leaks inside walls, slabs, and ceilings before water damage spreads.',
    tags: ['Acoustic Sensor', 'Thermal Imaging', 'Slab Leaks', 'Hidden Water Damage'],
    symptoms: [
      'Unexplained spike in monthly water bill',
      'Damp carpet, ceiling discoloration, or warm floor spots',
      'Musty odor or mold growth around baseboards',
      'Constant sound of running water when taps are closed'
    ],
    techLead: 'Alfie, Jay & Tim'
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning & Hydro Jetting',
    icon: Droplets,
    urgency: 'Medium - High',
    shortDesc: 'Heavy-duty drain augers and high-pressure water jetting to clear stubborn grease, hair, scale, and root blockages rapidly.',
    tags: ['Hydro Jetting', 'Clogged Sink', 'Main Line Cleanout', 'Camera Inspection'],
    symptoms: [
      'Slow draining sinks, bathtubs, or laundry tubs',
      'Gurgling noises coming from bathroom drains',
      'Foul sewage smell rising from sinks',
      'Water backing up when running the washing machine'
    ],
    techLead: 'Jay & Cody'
  },
  {
    id: 'sewer-repair',
    title: 'Sewer Repair & Trenchless Services',
    icon: Wrench,
    urgency: 'Critical Emergency',
    shortDesc: 'Complete sewer main line diagnostics, spot repairs, pipe lining, and full line replacements with video camera verification.',
    tags: ['Tree Root Intrusion', 'Trenchless Repair', 'Sewer Line Camera', 'Collapse Fix'],
    symptoms: [
      'Multiple plumbing fixtures backing up simultaneously',
      'Soggy or lush green spots appearing in your lawn',
      'Sewage pooling in basement or yard',
      'Frequent main line clogs every few months'
    ],
    techLead: 'Alfie & Carlos'
  },
  {
    id: 'toilet-repair',
    title: 'Toilet Repair & Replacement',
    icon: Flame,
    urgency: 'Standard - High',
    shortDesc: 'Fix running toilets, weak flushes, phantom fills, leaking wax rings, or install modern water-saving high-efficiency toilets.',
    tags: ['Wax Ring Seal', 'Flapper & Valve', 'Running Toilet', 'High-Efficiency Upgrade'],
    symptoms: [
      'Toilet continuously runs water day and night',
      'Water pooling around the porcelain base',
      'Wobbling bowl or cracked porcelain tank',
      'Weak or double flushing required'
    ],
    techLead: 'Tim & Cody'
  },
  {
    id: 'shower-installation',
    title: 'Shower & Tub Installation',
    icon: ShowerHead,
    urgency: 'Standard Scheduled',
    shortDesc: 'Professional valve plumbing, custom shower pan installation, tub-to-shower conversions, and pressure-balanced fixture fitments.',
    tags: ['Custom Shower', 'Pressure-Balance Valve', 'Tub Conversion', 'Fixture Fitting'],
    symptoms: [
      'Leaking valve causing water damage behind shower wall',
      'Fluctuating water temperatures when someone flushes',
      'Corroded or leaking shower head fixture',
      'Upgrading bathroom fixture hardware for renovation'
    ],
    techLead: 'Carlos & Jay'
  }
];

export default function ServicesSection({ onOpenBooking }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Confirmed Master Services</span>
          <h2 className="section-title">Expert Solutions For Every Plumbing & Sewer Need</h2>
          <p className="section-subtitle">
            Equipped with state-of-the-art diagnostic cameras, hydro-jetters, and leak detection gear. Available 24/7 in Matawan, NJ.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div key={srv.id} className="glass-card service-card">
                <div className="service-icon-box">
                  <IconComp size={28} />
                </div>

                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.shortDesc}</p>

                <div className="service-tag-list">
                  {srv.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">{tag}</span>
                  ))}
                </div>

                <div className="service-footer">
                  <div className="service-price-tag">
                    Quote: <span className="service-price-amount" style={{ fontSize: '0.95rem' }}>Upfront Assessment</span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedService(srv)}
                    className="btn btn-secondary btn-sm"
                  >
                    Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedService(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: '#94a3b8' }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="service-icon-box" style={{ marginBottom: 0 }}>
                {React.createElement(selectedService.icon, { size: 28 })}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff' }}>{selectedService.title}</h3>
                <span className="badge-live" style={{ fontSize: '0.75rem' }}>Lead Techs: {selectedService.techLead}</span>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>{selectedService.shortDesc}</p>

            <h4 style={{ color: '#00b4d8', marginBottom: '0.75rem' }}>Common Warning Symptoms:</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {selectedService.symptoms.map((sym, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem', color: '#e2e8f0' }}>
                  <Check size={16} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                  <span>{sym}</span>
                </li>
              ))}
            </ul>

            <div style={{ background: 'rgba(11,19,37,0.7)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Transparent Service Quote</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#48cae4' }}>Upfront Evaluation & Fast Dispatch</div>
              </div>
              <a href="tel:7325665000" className="btn btn-primary btn-sm">
                <Phone size={16} /> (732) 566-5000
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                onClick={() => { setSelectedService(null); onOpenBooking(selectedService.title); }}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Dispatch Technician Now
              </button>
              <button 
                onClick={() => setSelectedService(null)} 
                className="btn btn-outline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
