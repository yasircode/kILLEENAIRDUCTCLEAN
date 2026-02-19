import React from 'react';
import DuctServiceFAQ from '../DuctServiceFAQ';
import DuctLandingPage from '../DuctLandingPage'; 
import Management from './Management';

const Nolanville = () => {
  return (
    <div className="city-page">
      {/* 1. Global Styles for this page */}
      <style>
        {`
          .video-hero {
            position: relative;
            width: 100%;
            height: 500px; 
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .video-hero video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
          }

          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4); /* Halka dark filter */
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .video-overlay h1 {
            color: #ffffff;
            font-size: clamp(32px, 6vw, 52px);
            font-weight: 900;
            text-align: center;
            padding: 0 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 3px 3px 15px rgba(0,0,0,0.7); /* Text ko prominent karne ke liye */
          }

          .nolanville-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 60px 8%;
            gap: 40px;
            font-family: 'Segoe UI', Roboto, sans-serif;
            background-color: #ffffff;
          }

          .nolanville-content {
            flex: 1.2;
          }

          .nolanville-image-box {
            flex: 0.8;
            display: flex;
            justify-content: center;
          }

          .nolanville-image-box img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          }

          .nolanville-heading {
            font-size: clamp(28px, 4vw, 42px);
            font-weight: 800;
            margin: 0;
            color: #000;
            line-height: 1.1;
          }

          .nolanville-subheading {
            font-size: clamp(24px, 3.5vw, 38px);
            color: #e11d24; 
            margin-top: 5px;
            margin-bottom: 25px;
            font-weight: 700;
          }

          .nolanville-text {
            font-size: 16px;
            line-height: 1.7;
            color: #444;
            margin-bottom: 20px;
          }

          @media (max-width: 992px) {
            .video-hero { height: 400px; } /* Mobile pe height thori kam */
            .nolanville-section {
              flex-direction: column;
              padding: 400px 20px;
              text-align: center;
            }
            .nolanville-image-box {
              order: -1; 
              width: 100%;
            }
          }
        `}
      </style>

      <div style={{ width: '100%', overflowX: 'hidden' }}>
        
        {/* --- Video Section --- */}
        <div className="video-hero">
          <video autoPlay muted loop playsInline>
            <source src="/red.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h1>Air Duct Cleaning in Nolanville, TX</h1>
          </div>
        </div>

        {/* --- Text Content Section --- */}
        <section className="nolanville-section">
          <div className="nolanville-content">
            <h2 className="nolanville-heading">Local Air Duct Cleaning Services</h2>
            <div className="nolanville-subheading">In Nolanville & Killeen, Texas</div>
            
            <p className="nolanville-text">
              Searching for a reliable service to breathe fresh air into your home? Your search ends here! 
              At <strong>Killeen Air Duct</strong>, cleanliness is our passion, and we’re ready to 
              elevate your indoor air quality to new heights.
            </p>

            <p className="nolanville-text">
              Say goodbye to dusty air ducts and clogged dryer vents; we’ve got you covered with our 
              comprehensive services. From meticulous air duct repair to efficient dryer vent cleaning, 
              and from top-notch AC maintenance to seamless replacements, we offer it all.
            </p>

            <p className="nolanville-text">
              But we don’t stop there! What sets us apart is our commitment to going the extra mile. 
              We leave no stone unturned in ensuring your entire HVAC system works optimally, 
              bringing you true comfort.
            </p>
          </div>

          <div className="nolanville-image-box">
            <img 
              src="/013.jpeg"
              alt="Killeen Air Duct Cleaning Team" 
            />
          </div>
        </section>

        <Management />
        <br />
        <DuctServiceFAQ />
        <DuctLandingPage />
      </div>
    </div>
  );
};

export default Nolanville;