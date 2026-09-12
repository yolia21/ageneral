import React, { useState } from 'react';
import { X, Calendar, Phone, Clock, AlertTriangle, CheckCircle, Upload, ShieldCheck, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: 'Matawan, NJ 07747',
    service: defaultService || 'Plumbing Leak Detection',
    isEmergency: true,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNo, setTicketNo] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedTicket = 'AGP-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNo(generatedTicket);
    setSubmitted(true);

    // Trigger confetti animation celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect', err);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: '#94a3b8' }}
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="badge-live">🟢 24/7 Dispatch Active</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.25rem' }}>
              Request Plumbing Dispatch
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Direct line to A General Plumbing & Sewer Services at 125 Main St, Matawan, NJ.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Emergency toggle */}
              <div 
                style={{ 
                  background: formData.isEmergency ? 'rgba(255, 94, 0, 0.15)' : 'rgba(11, 19, 37, 0.6)', 
                  border: `1px solid ${formData.isEmergency ? 'var(--accent-orange)' : 'var(--border-light)'}`,
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  cursor: 'pointer'
                }}
                onClick={() => setFormData({ ...formData, isEmergency: !formData.isEmergency })}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <AlertTriangle size={22} style={{ color: formData.isEmergency ? '#ff5e00' : '#94a3b8' }} />
                  <div>
                    <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>
                      {formData.isEmergency ? '⚡ Urgent 24/7 Emergency Dispatch' : '📅 Scheduled Appointment'}
                    </div>
                    <div style={{ fontSize: '0.775rem', color: '#cbd5e1' }}>
                      {formData.isEmergency ? 'Tech dispatched immediately (Avg response 30-45 mins)' : 'Choose your preferred date and time slot'}
                    </div>
                  </div>
                </div>
                <input 
                  type="checkbox" 
                  checked={formData.isEmergency} 
                  onChange={() => {}} 
                  style={{ accentColor: '#ff5e00', transform: 'scale(1.2)' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    className="area-input" 
                    placeholder="e.g. Michael Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    Callback Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    className="area-input" 
                    placeholder="(732) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Property Address (Matawan & Monmouth County) *
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    required 
                    className="area-input" 
                    placeholder="Street Address, City, ZIP"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ width: '100%', paddingLeft: '2.5rem' }}
                  />
                  <MapPin size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Primary Service Needed *
                </label>
                <select 
                  className="area-input"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ width: '100%' }}
                >
                  <option value="Plumbing Leak Detection">Plumbing Leak Detection</option>
                  <option value="Drain Cleaning">Drain Cleaning & Hydro Jetting</option>
                  <option value="Sewer Repair">Sewer Repair & Main Line</option>
                  <option value="Toilet Repair">Toilet Repair & Replacement</option>
                  <option value="Shower Installation">Shower & Tub Installation</option>
                  <option value="General Plumbing Issue">General Plumbing Emergency</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                  Issue Notes / Special Requests (Optional):
                </label>
                <textarea 
                  className="area-input"
                  rows={2}
                  placeholder="e.g. Water dripping under kitchen sink, or request technician Alfie/Jay if available..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ width: '100%', resize: 'none' }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Submit Dispatch Request
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>
                  Need immediate phone confirmation? Call <a href="tel:7325665000" style={{ color: '#00b4d8', fontWeight: 700 }}>(732) 566-5000</a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <CheckCircle size={64} style={{ color: '#10b981', margin: '0 auto 1.25rem auto' }} />
            
            <div className="badge-live" style={{ marginBottom: '1rem' }}>
              Dispatch Ticket: {ticketNo}
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Dispatch Confirmed!
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
              Thank you, <strong>{formData.name}</strong>. Our on-duty dispatcher at 125 Main St, Matawan is reviewing your request for <strong>{formData.service}</strong>.
            </p>

            <div style={{ background: 'rgba(11,19,37,0.8)', border: '1px solid var(--border-cyan)', padding: '1.25rem', borderRadius: '12px', textAlign: 'left', marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Dispatch Details:</div>
              <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 600 }}>📍 Location: {formData.address}</div>
              <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 600, marginTop: '0.25rem' }}>📞 Phone: {formData.phone}</div>
              <div style={{ fontSize: '0.95rem', color: '#48cae4', fontWeight: 600, marginTop: '0.25rem' }}>⏱️ Status: {formData.isEmergency ? 'Urgent 24/7 Priority Active' : 'Scheduled Request Received'}</div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="tel:7325665000" className="btn btn-primary">
                <Phone size={18} /> Direct Call (732) 566-5000
              </a>
              <button onClick={handleReset} className="btn btn-outline">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
