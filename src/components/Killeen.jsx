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


const Killeen = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Global Styles for this page */}
      <style>
        {`
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

          /* Mobile Responsive Design */
          @media (max-width: 992px) {
            .nolanville-section {
              flex-direction: column;
              padding: 40px 20px;
              text-align: center;
            }
            .nolanville-image-box {
              order: -1; /* Image mobile par text se pehle dikhegi */
              width: 100%;
            }
          }
        `}
      </style>

      {/* 2. Top Header/Hero Section */}
      <Hero />
      
      {/* 3. Nolanville Custom Section (Jo aapne manga tha) */}
      <section className="nolanville-section">
        <div className="nolanville-content">
          <h2 className="nolanville-heading">Local Air Duct Cleaning Services</h2>
          <div className="nolanville-subheading">In Killeen, Texas</div>
          
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
      <br></br>
      <br></br>

      {/* 4. Other Existing Components */}
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

export default Killeen;