import React from 'react';
import { Search, Droplets, Wrench, Flame, ShowerHead, PhoneCall, ShieldCheck, CheckCircle2, Calendar, Clock, Sparkles } from 'lucide-react';

const DETAILED_SERVICES = [
  {
    icon: Search,
    title: 'Plumbing Leak Detection',
    subtitle: 'Non-Invasive Diagnostic Precision',
    description: 'We pinpoint hidden water leaks inside walls, under slab foundations, and behind ceilings using non-invasive acoustic sensors and thermal imaging before water damage spreads.',
    features: ['Thermal Imaging & Acoustic Search', 'Slab Leak & Underground Line Diagnostics', 'Ceiling & Wall Moisture Tracing', 'Prevents Structural Water Damage']
  },
  {
    icon: Droplets,
    title: 'Drain Cleaning & Hydro Jetting',
    subtitle: 'Tough Clog Removal',
    description: 'Heavy-duty auger snaking and high-pressure hydro-jetting to blast away stubborn grease, scale, hair, and intrusive tree roots from main lines and fixture drains.',
    features: ['High-Pressure Main Line Hydro-Jetting', 'Small & Heavy-Duty Drain Snaking', 'Kitchen Sink & Bathroom Clog Removal', 'Camera Line Inspection Verification']
  },
  {
    icon: Wrench,
    title: 'Sewer Line Repair & Diagnostics',
    subtitle: 'Full Main Line Restoration',
    description: 'Complete sewer main diagnostics, camera inspections, spot repairs, and pipe replacement for backed-up main lines and cracked sewer pipes.',
    features: ['Full HD Sewer Video Camera Diagnostics', 'Main Line Root Clearing & Trenchless Repair', 'Basement & Yard Backup Relief', 'Full Main Line Replacement']
  },
  {
    icon: Flame,
    title: 'Toilet Repair & Replacement',
    subtitle: 'Fast Fixture & Leak Fixes',
    description: 'Fixing running toilets, leaking wax rings, faulty flapper valves, weak flushing mechanisms, or installing modern high-efficiency toilets.',
    features: ['Wax Ring & Bowl Seal Replacement', 'Flapper, Fill & Flush Valve Repairs', 'Running & Phantom Flushing Fixes', 'New High-Efficiency Toilet Fitting']
  },
  {
    icon: ShowerHead,
    title: 'Shower & Tub Installation',
    subtitle: 'Fixture & Valve Plumbing',
    description: 'Professional valve plumbing, pressure-balanced shower valve upgrades, fixture replacements, and custom shower pan conversions.',
    features: ['Pressure-Balanced Valve Fitting', 'Tub-to-Shower Conversions', 'Corroded Fixture & Valve Replacement', 'Leak-Free Shower Pan Plumbing']
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: '24/7 Helpful Phone Dispatch',
    desc: 'Call (732) 566-5000. Our kind office staff confirms technician whereabouts and exact arrival time.'
  },
  {
    step: '02',
    title: 'Prompt On-Site Diagnostic',
    desc: 'Assigned tech (Alfie, Jay, Tim, Cody, or Carlos) arrives equipped with diagnostic cameras & leak sensors.'
  },
  {
    step: '03',
    title: 'Skilled Master Repair',
    desc: 'We execute the repair efficiently—from heavy-duty drain snaking to acoustic leak fixes.'
  },
  {
    step: '04',
    title: 'Spotless Clean Area Guarantee',
    desc: 'We thoroughly clean and wipe down the space, leaving your home spotlessly clean before leaving.'
  }
];

export default function ServiceSolutions({ onOpenBooking }) {
  return (
    <section id="our-services" className="section-padding" style={{ background: 'rgba(18, 30, 54, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Comprehensive Master Solutions</span>
          <h2 className="section-title">What Our Services Are</h2>
          <p className="section-subtitle">
            From acoustic leak detection to heavy-duty drain snaking and sewer repairs—explore our confirmed plumbing & sewer services in Matawan, NJ.
          </p>
        </div>

        {/* Process Flow Ticker */}
        <div style={{ background: 'rgba(11, 19, 37, 0.8)', border: '1px solid var(--border-cyan)', borderRadius: '16px', padding: '2rem', marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#00b4d8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              How We Work • Step-by-Step Resolution
            </span>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginTop: '0.25rem' }}>
              Our 4-Step Professional Service Guarantee
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {PROCESS_STEPS.map((s, idx) => (
              <div key={idx} style={{ background: 'rgba(24, 40, 70, 0.6)', border: '1px solid var(--border-light)', padding: '1.25rem', borderRadius: '12px', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'rgba(0, 180, 216, 0.4)', marginBottom: '0.25rem' }}>
                  {s.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.4rem' }}>{s.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Solutions Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {DETAILED_SERVICES.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'center' }}>
                {/* Icon Box */}
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(0, 180, 216, 0.12)', border: '1px solid var(--border-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#48cae4', flexShrink: 0 }}>
                  <IconComp size={32} />
                </div>

                {/* Info Text */}
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#ff5e00', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {srv.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '0.2rem 0 0.5rem 0' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1rem', maxWidth: '700px' }}>
                    {srv.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {srv.features.map((feat, fIdx) => (
                      <span key={fIdx} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: '#e2e8f0', fontSize: '0.8rem', padding: '0.3rem 0.65rem', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                        <CheckCircle2 size={13} style={{ color: '#10b981' }} /> {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
                  <button 
                    onClick={() => onOpenBooking(srv.title)} 
                    className="btn btn-primary btn-sm"
                  >
                    <Calendar size={16} /> Request Dispatch
                  </button>
                  <a href="tel:7325665000" className="btn btn-secondary btn-sm">
                    <PhoneCall size={14} /> Call (732) 566-5000
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
