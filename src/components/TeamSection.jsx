import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Wrench, Star } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Alfie',
    role: 'Lead Master Plumber',
    specialty: 'Leak Detection & Hydro-Jetting',
    badge: 'Mother\'s Day Hero 🏆',
    image: '/tech_alfie.png',
    quote: '"Alfie responded in 35 minutes flat on Mother\'s Day when our main line clogged. Incredible service and left the basement cleaner than before!"'
  },
  {
    name: 'Jay',
    role: 'Sewer & Drain Specialist',
    specialty: 'Main Line Camera Inspection & Sewer Repair',
    badge: 'Fast Dispatch Expert ⚡',
    image: '/tech_jay.png',
    quote: '"Jay resolved a severe drain blockage same-day. Explained every step clearly and was super respectful of our home."'
  },
  {
    name: 'Tim',
    role: 'Senior Plumbing Technician',
    specialty: 'Toilet & Pipe Diagnostics',
    badge: 'Precision & Cleanliness 🌟',
    image: '/hero_plumber.png',
    quote: '"Tim fixed our leaking toilet and replaced corroded valves quickly. Courteous, professional, and zero mess left behind."'
  },
  {
    name: 'Cody',
    role: 'Emergency Response Tech',
    specialty: 'Burst Pipe & Rapid Shutoff',
    badge: 'Same-Day Service Lead ⏱️',
    image: '/tech_alfie.png',
    quote: '"Cody arrived late at night during a major pipe emergency. Fixed the leak within an hour with total professionalism."'
  },
  {
    name: 'Carlos',
    role: 'Fixture & Shower Installer',
    specialty: 'Shower Valve Plumbing & Tub Replacement',
    badge: 'Installation Master 🚿',
    image: '/tech_jay.png',
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
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-avatar-box">
                <img src={member.image} alt={`Plumber ${member.name}`} />
                <span 
                  style={{ 
                    position: 'absolute', 
                    top: '0.75rem', 
                    right: '0.75rem', 
                    background: 'rgba(11,19,37,0.85)', 
                    border: '1px solid var(--border-cyan)', 
                    color: '#fbbf24', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem', 
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
          ))}
        </div>
      </div>
    </section>
  );
}
