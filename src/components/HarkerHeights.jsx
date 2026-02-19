import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Unique from '../Unique';
import DuctLandingPage from '../DuctLandingPage';
import IntroCard from './IntroCard';
import Any from './Any';

const HarkerHeights = () => {
  return (
    <div className="city-page">
      {/* --- Video Section Start --- */}
      <div className="video-wrapper" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        
        {/* Video Tag */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text (Video ke upar wala text) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center', // Horizontal center
          alignItems: 'center',     // Vertical center
          backgroundColor: 'rgba(0, 0, 0, 0.4)' // Video ko thora dark karne ke liye taake text saaf dikhe
        }}>
          <h1 style={{ color: 'white', textAlign: 'center', fontSize: '3rem', padding: '0 20px' }}>
            Air Duct Cleaning in Harker Heights, TX
          </h1>
        </div>
      </div>
      {/* --- Video Section End --- */}
<br></br>
      <Hero />
      <IntroCard />
      <Any />
      <Unique />
      <DuctLandingPage />
    </div>
  );
};

export default HarkerHeights;