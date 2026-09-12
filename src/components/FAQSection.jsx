import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Do you charge extra for 24/7 emergency dispatch or holiday service?',
    a: 'We believe in 100% transparent, upfront flat-rate pricing. Whether you call us at 2:00 AM on a Tuesday or on a holiday like Mother\'s Day, our dispatcher provides clear pricing before any work begins so there are zero surprises.'
  },
  {
    q: 'How fast can a technician arrive at my property in Matawan (07747)?',
    a: 'Because our central facility is located right at 125 Main St in Matawan, NJ 07747, our average emergency response time for Matawan and Aberdeen is between 30 to 45 minutes.'
  },
  {
    q: 'Who are your master technicians?',
    a: 'Our core team of experienced technicians includes Alfie, Jay, Tim, Cody, and Carlos. Each tech brings decades of specialized experience in leak detection, main line hydro-jetting, sewer repairs, and clean work guarantees.'
  },
  {
    q: 'What is your Clean Work Area Guarantee?',
    a: 'We respect your home. Our technicians wear protective shoe covers, lay down heavy-duty drop cloths, and thoroughly clean and sanitize the work area before leaving your property.'
  },
  {
    q: 'What services are confirmed by your customer reviews?',
    a: 'Our customer reviews confirm 5 key specialties: Plumbing leak detection, Drain cleaning & hydro-jetting, Sewer line repair, Toilet repair & replacement, and Shower fixture installation.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section-padding" style={{ background: 'rgba(18, 30, 54, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about our 24/7 service, pricing, and Matawan response team.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} style={{ color: '#00b4d8' }} />
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transition: 'transform 0.25s ease', 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: '#00b4d8'
                    }} 
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
