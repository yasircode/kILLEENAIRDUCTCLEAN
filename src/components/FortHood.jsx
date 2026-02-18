import React from 'react';
import DuctLandingPage from '../DuctLandingPage';

const FortHood = () => {
  return (
    <section className="duct-container">
      {/* CSS Styles inside the same file */}
      <style>
        {`
          .duct-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 60px 8%;
            background-color: #f5f5f5;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            gap: 40px;
            overflow-x: hidden;
          }

          .duct-content {
            flex: 1.2;
            max-width: 650px;
          }

          .duct-title {
            color: #0d47a1; 
            font-size: clamp(24px, 4vw, 32px);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
            text-transform: uppercase;
          }

          .duct-subtitle {
            color: #000;
          }

          .duct-text {
            color: #444;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 15px;
          }

          .duct-cta-text {
            font-size: 16px;
            margin-top: 20px;
            font-weight: bold;
            color: #222;
          }

          .duct-button {
            background-color: #b22222;
            color: white;
            border: none;
            padding: 15px 35px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(178, 34, 34, 0.3);
          }

          .duct-button:hover {
            background-color: #8b0000;
            transform: translateY(-2px);
          }

          .duct-image-wrapper {
            flex: 0.8;
            display: flex;
            justify-content: center;
          }

          .duct-image {
            width: 100%;
            max-width: 450px;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          }

          /* --- Mobile Responsive View --- */
          @media (max-width: 992px) {
            .duct-container {
              flex-direction: column;
              padding: 40px 20px;
              text-align: center;
            }

            .duct-content {
              max-width: 100%;
            }

            .duct-image-wrapper {
              order: -1; /* Image mobile par text se pehle dikhegi */
              width: 100%;
            }

            .duct-image {
              max-width: 100%;
            }

            .duct-button {
              width: 100%; /* Mobile par full width button */
            }
          }
        `}
      </style>

      <div className="duct-content">
        <h2 className="duct-title">
          AIR DUCT REPAIR & REPLACEMENT – 
          <span className="duct-subtitle"> YOUR SOLUTION FOR DUCT REVIVAL!</span>
        </h2>
        
        <p className="duct-text">
          Ever thought about the hidden network of air ducts in your home or office? 
          They may be out of sight, but when things go wrong, you’ll feel it.
        </p>

        <p className="duct-text">
          Leaky ducts can waste up to <strong>30% of your system’s airflow</strong>, 
          leading to unnecessary energy costs and a less comfortable environment.
        </p>

        <p className="duct-text">
          But don’t worry, <strong>KILLEEN Air Duct Cleaning</strong>, your local experts in KILLEEN, Texas, 
          are here to help. Our experienced team can quickly identify and repair these hidden 
          problems, getting your system back to its peak efficiency.
        </p>

        <p className="duct-cta-text">
          <em>Contact us today and let’s get started on improving your space.</em>
        </p>

        <button 
          className="duct-button" 
          onClick={() => window.location.href = 'tel:(245) 998-3484'} // Phone number add karein
        >
          CALL FOR SERVICE
        </button>
      </div>

      <div className="duct-image-wrapper">
        <img 
          src="/033.jpeg" 
          alt="Killeen Technician repairing air ducts" 
          className="duct-image"
        />

      
      </div>

    
    </section>
    
  );
};

export default FortHood;