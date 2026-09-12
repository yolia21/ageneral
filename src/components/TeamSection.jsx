import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Wrench, Star, User, Droplets, Zap, ShowerHead } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Alfie',
    initial: 'A',
    role: 'Lead Master Plumber',
    specialty: 'Leak Detection & Hydro-Jetting',
    badge: 'Mother\'s Day Hero 🏆',
    icon: Wrench,
    color: 'linear-gradient(135deg, #00b4d8, #0077b6)',
    quote: '"Alfie responded in 35 minutes flat on Mother\'s Day when our main line clogged. Incredible service and left the basement cleaner than before!"'
  },
  {
    name: 'Jay',
    initial: 'J',
    role: 'Sewer & Drain Specialist',
    specialty: 'Main Line Camera Inspection & Sewer Repair',
    badge: 'Fast Dispatch Expert ⚡',
    icon: Droplets,
    color: 'linear-gradient(135deg, #ff5e00, #ff8800)',
    quote: '"Jay resolved a severe drain blockage same-day. Explained every step clearly and was super respectful of our home."'
  },
  {
    name: 'Tim',
    initial: 'T',
    role: 'Senior Plumbing Technician',
    specialty: 'Toilet & Pipe Diagnostics',
    badge: 'Precision & Cleanliness 🌟',
    icon: ShieldCheck,
    color: 'linear-gradient(135deg, #10b981, #059669)',
    quote: '"Tim fixed our leaking toilet and replaced corroded valves quickly. Courteous, professional, and zero mess left behind."'
  },
  {
    name: 'Cody',
    initial: 'C',
    role: 'Emergency Response Tech',
    specialty: 'Burst Pipe & Rapid Shutoff',
    badge: 'Same-Day Service Lead ⏱️',
    icon: Zap,
    color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    quote: '"Cody arrived late at night during a major pipe emergency. Fixed the leak within an hour with total professionalism."'
  },
  {
    name: 'Carlos',
    initial: 'C',
    role: 'Fixture & Shower Installer',
    specialty: 'Shower Valve Plumbing & Tub Replacement',
    badge: 'Installation Master 🚿',
    icon: ShowerHead,
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    quote: '"Carlos installed our new custom shower fixtures flawlessly. High attention to detail and upfront pricing."'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Praise By Name In Customer Reviews</span>
          <h2 className="section-title">Meet Our Trusted Technicians</h2>
          <p className="section-subtitle">
            The real professionals behind our 4.4 Google rating. Known for quick response times, holiday availability, and immaculate clean-ups.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member, idx) => {
            const IconComp = member.icon;
            return (
              <div key={idx} className="team-card">
                <div 
                  className="team-avatar-box" 
                  style={{ 
                    height: '180px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at center, rgba(0,180,216,0.15) 0%, rgba(11,19,37,0.95) 70%)',
                    borderBottom: '1px solid var(--border-light)'
                  }}
                >
                  <div 
                    style={{ 
                      width: '72px', 
                      height: '72px', 
                      borderRadius: '50%', 
                      background: member.color,
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                      marginBottom: '0.5rem',
                      position: 'relative'
                    }}
                  >
                    {member.initial}
                    <div 
                      style={{ 
                        position: 'absolute', 
                        bottom: '-4px', 
                        right: '-4px', 
                        width: '26px', 
                        height: '26px', 
                        borderRadius: '50%', 
                        background: '#0b1325', 
                        border: '1px solid var(--border-cyan)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#48cae4' 
                      }}
                    >
                      <IconComp size={14} />
                    </div>
                  </div>

                  <span 
                    style={{ 
                      background: 'rgba(11,19,37,0.85)', 
                      border: '1px solid var(--border-cyan)', 
                      color: '#fbbf24', 
                      padding: '0.2rem 0.65rem', 
                      borderRadius: '20px', 
                      fontSize: '0.725rem', 
                      fontWeight: 700 
                    }}
                  >
                    {member.badge}
                  </span>
                </div>

                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                    <strong>Focus:</strong> {member.specialty}
                  </div>

                  <div className="team-quote">
                    {member.quote}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
