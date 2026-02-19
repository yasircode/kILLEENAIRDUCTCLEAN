import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import IntroCard from './IntroCard';
import ImageComparison from './ImageComparison';
import DuctLandingPage from '../DuctLandingPage';
import DuctServiceFAQ from '../DuctServiceFAQ';
import Any from './Any';
import YahooCard from './yahoo';
import Gallery from '../Gallery';
import Newadd from './Newadd';


const Georgetown = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Scoped Styles for Georgetown & Video Hero */}
      <style>
        {`
          .video-hero-wrapper {
            position: relative;
            width: 100%;
            height: 65vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
          }

          .hero-video-file {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -1;
            transform: translate(-50%, -50%);
            object-fit: cover;
          }

          .hero-video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Dark shade for text readability */
            z-index: 0;
          }

          .hero-video-text {
            position: relative;
            z-index: 1;
            padding: 0 20px;
          }

          .hero-video-text h1 {
            font-size: clamp(32px, 5vw, 52px);
            font-weight: 800;
            margin-bottom: 10px;
            text-transform: uppercase;
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
            .video-hero-wrapper { height: 45vh; }
            .nolanville-section {
              flex-direction: column;
              padding: 40px 20px;
              text-align: center;
            }
            .nolanville-image-box {
              order: -1; 
              width: 100%;
            }
          }
        `}
      </style>

      {/* 2. Top Video Hero Section */}
      <section className="video-hero-wrapper">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video-file"
        >
          {/* Change video path here */}
          <source src="/red.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
        <div className="hero-video-text">
          <h1>Air Duct Cleaning in Georgetown, TX</h1>
          <p style={{fontSize: '1.2rem', fontWeight: '500'}}>Breathe Cleaner, Healthier Air Today</p>
        </div>
      </section>

      {/* Hero Component (Optional: Agar video ke neeche banner style chahiye) */}
      <Hero />
      
      {/* 3. Georgetown Content Section */}
      <section className="nolanville-section">
        <div className="nolanville-content">
          <h2 className="nolanville-heading">Local Air Duct Cleaning Services</h2>
          <div className="nolanville-subheading">In Georgetown Area</div>
          
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
      
      <br />

      {/* 4. Other Components */}
      <IntroCard />
      <ImageComparison />
      <YahooCard/>
      <Gallery/>
      <Newadd/>
      
      <Any/>
      <Banner />
      <DuctServiceFAQ />
      <br />
      <DuctLandingPage />
    </div>
  );
};

export default Georgetown;