import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Wrench, Star, User, Droplets, Zap, ShowerHead } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Alfie',
    initial: 'A',
    role: 'Master Plumber',
    specialty: 'Plumbing Leak Detection & Resolution',
    badge: 'Quick & Polite Specialist 🏆',
    icon: Wrench,
    color: 'linear-gradient(135deg, #00b4d8, #0077b6)',
    quote: '"The plumber, Alfie, was very quick to detect the issue and resolve it. He was very polite and easy to talk to. Quality work and professionalism!" — Jessica Davila'
  },
  {
    name: 'Jay',
    initial: 'J',
    role: 'Sewer & Drain Specialist',
    specialty: 'Main Line Camera Inspection & Sewer Repair',
    badge: 'Exemplary Service ⚡',
    icon: Droplets,
    color: 'linear-gradient(135deg, #ff5e00, #ff8800)',
    quote: '"Jay and Tim were excellent ! They made a crap situation waaayyyy better. Exemplary knowledge and caring service." — Eric DC'
  },
  {
    name: 'Tim',
    initial: 'T',
    role: 'Senior Plumbing Technician',
    specialty: 'Toilet & Pipe Diagnostics',
    badge: 'Highly Skilled Master 🌟',
    icon: ShieldCheck,
    color: 'linear-gradient(135deg, #10b981, #059669)',
    quote: '"Jay and Tim are highly skilled and got everything fixed in a timely manner. You have problems these are the guys to fix them !" — Eric DC'
  },
  {
    name: 'Cody',
    initial: 'C',
    role: 'Plumbing Technician',
    specialty: 'Leak Repair & Spotless Cleanup',
    badge: 'Spotlessly Clean Lead ⏱️',
    icon: Zap,
    color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    quote: '"Cody, the plumber was courteous, professional and did a terrific job. He left the space where he worked spotlessly clean." — Irina Lendensky'
  },
  {
    name: 'Carlos',
    initial: 'C',
    role: 'Drain & Fixture Specialist',
    specialty: 'Heavy-Duty Drain Snaking & Fixture Installation',
    badge: 'Tough Clog Specialist 🚿',
    icon: ShowerHead,
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    quote: '"Carlos arrived in the afternoon and brought out a bigger snake that did the job on a tuff clog. Salute to Carlos for a good job!" — Charles Giordano'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Praise By Name In Customer Reviews</span>
          <h2 className="section-title">Meet Our Technicians</h2>
          <p className="section-subtitle">
            The real professionals praised in verified Google customer reviews.
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
