import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmergencyBanner from './components/EmergencyBanner';
import ServicesSection from './components/ServicesSection';
import EstimateCalculator from './components/EstimateCalculator';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';
import ServiceAreaChecker from './components/ServiceAreaChecker';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import BookingModal from './components/BookingModal';

import './index.css';
import './components/Components.css';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedServiceForBooking('');
  };

  return (
    <div className="app-main-wrapper">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Layout */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <EmergencyBanner />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <EstimateCalculator onOpenBooking={handleOpenBooking} />
        <TeamSection />
        <ReviewsSection />
        <ServiceAreaChecker onOpenBooking={handleOpenBooking} />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking / Dispatch Request Modal */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={handleCloseBooking}
        defaultService={selectedServiceForBooking}
      />
    </div>
  );
}
