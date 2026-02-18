import React from 'react';
import Banner from './Banner';
import Management from './Management';
import DuctLandingPage from '../DuctLandingPage';
// import Hero from './Hero'; // Agar Hero component hai to ise uncomment karein

const FortCavazos = () => {
  return (
    <div className="city-page">
      {/* 1. Scoped Styles for Fort Cavazos */}
      <style>
        {`
          .fort-cavazos-section {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 60px 8%;
            gap: 40px;
            font-family: 'Segoe UI', Roboto, sans-serif;
            background-color: #ffffff;
          }

          .fort-cavazos-content {
            flex: 1.2;
          }

          .fort-cavazos-image-box {
            flex: 0.8;
            display: flex;
            justify-content: center;
          }

          .fort-cavazos-image-box img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          }

          .fort-cavazos-heading {
            font-size: clamp(28px, 4vw, 42px);
            font-weight: 800;
            margin: 0;
            color: #000;
            line-height: 1.1;
          }

          .fort-cavazos-subheading {
            font-size: clamp(24px, 3.5vw, 38px);
            color: #e11d24; 
            margin-top: 5px;
            margin-bottom: 25px;
            font-weight: 700;
          }

          .fort-cavazos-text {
            font-size: 16px;
            line-height: 1.7;
            color: #444;
            margin-bottom: 20px;
          }

          @media (max-width: 992px) {
            .fort-cavazos-section {
              flex-direction: column;
              padding: 40px 20px;
              text-align: center;
            }
            .fort-cavazos-image-box {
              order: -1; 
              width: 100%;
            }
          }
        `}
      </style>

      {/* 2. Page Content */}
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        
        <Banner />
        
        <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
          Air Duct Cleaning in Fort Cavazos, TX
        </h1>

        <section className="fort-cavazos-section">
          <div className="fort-cavazos-content">
            <h2 className="fort-cavazos-heading">Professional Air Duct Services</h2>
            <div className="fort-cavazos-subheading">In Fort Cavazos & Killeen Area</div>
            
            <p className="fort-cavazos-text">
              Searching for a reliable service to breathe fresh air into your home? Your search ends here! 
              At <strong>Killeen Air Duct</strong>, cleanliness is our passion, and we’re ready to 
              elevate your indoor air quality to new heights in Fort Cavazos.
            </p>

            <p className="fort-cavazos-text">
              Say goodbye to dusty air ducts and clogged dryer vents; we’ve got you covered with our 
              comprehensive services. From meticulous air duct repair to efficient dryer vent cleaning, 
              and from top-notch AC maintenance to seamless replacements.
            </p>

            <p className="fort-cavazos-text">
              Our commitment to the Fort Cavazos community is to go the extra mile. 
              We leave no stone unturned in ensuring your entire HVAC system works optimally, 
              bringing you true comfort and cleaner air.
            </p>
          </div>

          <div className="fort-cavazos-image-box">
            <img 
              src="/013.jpeg" 
              alt="Air Duct Cleaning Services Fort Cavazos" 
            />
          </div>
         
        </section>
        <Management />
<br></br>
      
         <DuctLandingPage />
      </div>
    </div>
  );
};

export default FortCavazos;