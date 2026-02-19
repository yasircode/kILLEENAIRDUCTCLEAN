import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import DuctLandingPage from '../DuctLandingPage';
import Benefits from '../Benefits';
import Any from './Any';

const CopperasCove = () => {
  return (
    <div className="city-page">
      {/* --- Video Background Section Start --- */}
      <div className="video-hero-section" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/change.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay (Heading on top of video) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)' // Halka dark effect taake text saaf dikhe
        }}>
          <h1 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
            Air Duct Cleaning in Copperas Cove, TX
          </h1>
        </div>
      </div>
      {/* --- Video Background Section End --- */}
<br></br>
      <Hero />
      <Benefits />
      <Any />
      <Banner />
      <DuctLandingPage />
    </div>
  );
};

export default CopperasCove;