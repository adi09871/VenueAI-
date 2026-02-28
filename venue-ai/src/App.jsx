import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import CustomWorkspace from './pages/CustomWorkspace';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedVenueType, setSelectedVenueType] = useState(null);

  const handleNavigate = (page, venueType = null) => {
    if (venueType) setSelectedVenueType(venueType);
    setCurrentPage(page);
    // Push to browser history for back button support
    window.history.pushState({ page, venueType }, '', `/${page}`);
  };

  useEffect(() => {
    // Handle browser back button
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentPage(event.state.page);
        if (event.state.venueType) setSelectedVenueType(event.state.venueType);
      } else {
        setCurrentPage('landing');
        setSelectedVenueType(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'workspace' && <CustomWorkspace venueType={selectedVenueType} onNavigate={handleNavigate} />}
    </div>
  );
}