import React from 'react';
import DuctLandingPage from '../DuctLandingPage';
import Banner from './Banner';
import ImageComparison from './ImageComparison';
import Management from './Management';
import Hero from './Hero';

const Belton = () => {
  return (
    <div className="city-page">
      {/* 1. CSS Styles for Video and Overlay */}
      <style>
        {`
          .video-hero-container {
            position: relative;
            width: 100%;
            height: 500px; /* Aap height kam ya zyada kar sakte hain */
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000;
          }

          .video-hero-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
          }

          .video-overlay-text {
            position: relative;
            z-index: 2;
            text-align: center;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4); /* Dark shade for text clarity */
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .video-overlay-text h1 {
            color: #ffffff;
            font-size: clamp(28px, 5vw, 48px);
            font-weight: 900;
            text-transform: uppercase;
            text-shadow: 2px 2px 15px rgba(0,0,0,0.7);
            margin: 0;
            padding: 0 20px;
          }

          @media (max-width: 992px) {
            .video-hero-container {
              height: 350px;
            }
          }
        `}
      </style>

      {/* 2. Top Video Section */}
      <div className="video-hero-container">
        <video autoPlay muted loop playsInline>
          <source src="/red.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay-text">
          <h1>Air Duct Cleaning in Belton, TX</h1>
        </div>
      </div>

 <br></br>
      {/* 3. Rest of the Components */}
      <Hero />
      <ImageComparison />
      <br />
     <Banner />
      <Management />
      <DuctLandingPage />
    </div>
  );
};

export default Belton;