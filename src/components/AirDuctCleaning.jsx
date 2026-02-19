import React from "react";
import Banner from "./Banner";
import DuctLandingPage from "../DuctLandingPage";

const AirDuctCleaning = () => {
  return (
    <div className="residential-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>
            ENJOY CLEANER AIR WITH OUR RESIDENTIAL KILLEEN AIR DUCT CLEANING SERVICES
          </h1>
          <p className="breadcrumb">
            Home » Residential Air Duct Cleaning
          </p>
          <a href="tel:2459983484" className="call-btn">
            CALL US: (245) 998-3484
          </a>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <p>
              Air quality is not only about the air outside; it matters what
              you’re breathing in your home too. At <strong>Killeen Air Duct Cleaner</strong>,
              we specialize in Residential Air Duct Cleaning, ensuring you and
              your loved ones enjoy a cleaner, healthier indoor environment.
            </p>
            <p>
              We leverage state-of-the-art equipment, advanced techniques,
              and skilled professionals to remove dust, allergens, and
              contaminants from your air duct system.
            </p>
          </div>
          <div className="image">
            <img src="profile1.jpeg" alt="Killeen Air Duct Team" />
          </div>
        </div>
      </section>

      <Banner />

      {/* NEW UPDATED CONTENT SECTION (AS PER SCREENSHOT) */}
      <section className="sanitation-info-section">
        <div className="info-container">
          
          {/* Box 1: HVAC Sanitation */}
          <div className="info-card">
            <div className="card-header">
              <h2>Elevate Your Comfort with Our HVAC Sanitation Services</h2>
            </div>
            <div className="card-body">
              <p>
                A well-functioning HVAC system is the backbone of a comfortable home environment. With 
                <strong> Killeen Air Duct’s </strong> comprehensive HVAC sanitation services, 
                <strong> we aim to improve your system’s efficiency, extend its lifespan, and save you from unexpected repair costs.</strong>
              </p>
              <p>
                Our experts utilize the latest sanitation techniques, removing dirt, grime, and any potential blockages. 
                This preventive care helps to maintain <strong>consistent temperatures and optimum air quality</strong> in your Killeen home. 
                Don’t let a poorly maintained HVAC system compromise your comfort or health.
              </p>
              <p className="highlight-text">
                Take action today, reach out to <span className="red-text">Killeen Air Duct Cleaning</span> for top-notch HVAC sanitation services, 
                and enjoy a well-performing HVAC system year-round.
              </p>
            </div>
          </div>

          {/* Box 2: Best Service */}
          <div className="info-card">
            <div className="card-header">
              <h2>Killeen's Best Residential Air Duct Cleaning Service</h2>
            </div>
            <div className="card-body">
              <p>
                We’re proud to offer our <strong>top-rated Residential Air Duct Cleaning</strong> services to the beautiful city of 
                <strong> Killeen, Texas</strong>. We know that a clean home is a happy home, and we’re committed to making yours the cleanest it can be.
              </p>
              <p>
                Our technicians are skilled, reliable, and local to the <strong>Killeen, Fort Hood, and Harker Heights area</strong>, 
                ensuring you receive personalized, prompt, and efficient service every time.
              </p>
              <h3 className="list-title">Our Residential Air Duct Cleaning Services Include:</h3>
              <ul className="service-list">
                <li>HVAC Sanitation</li>
                <li>Dust and Allergen Removal</li>
                <li>Professional Mold Remediation</li>
                <li>Ductwork Inspection & Repair</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <DuctLandingPage />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .residential-page {
          font-family: 'Segoe UI', Roboto, Arial, sans-serif;
          overflow-x: hidden;
          background: #ffffff;
        }

        /* HERO SECTION */
        .hero {
          background-image: url("033.jpeg");
          background-size: cover;
          background-position: center;
          min-height: 500px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.65);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
          color: white;
        }

        .overlay h1 {
          font-size: 40px;
          font-weight: 700;
          max-width: 900px;
          line-height: 1.3;
        }

        .breadcrumb {
          margin-top: 18px;
          font-size: 16px;
          opacity: 0.9;
        }

        .call-btn {
          margin-top: 30px;
          background-color: #c62828;
          color: white;
          padding: 16px 40px;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          border-radius: 4px;
          transition: 0.3s;
          display: inline-block;
        }

        .call-btn:hover { background-color: #a51d1d; }

        /* CONTENT SECTION */
        .content-section {
          padding: 60px 20px;
          background: #f7f7f7;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .text { flex: 1; font-size: 18px; line-height: 1.8; }
        .text p { margin-bottom: 20px; }
        .image { flex: 1; }
        .image img { width: 100%; border-radius: 10px; }

        /* NEW SANITATION SECTION STYLES */
        .sanitation-info-section {
          padding: 60px 20px;
          background: #fff;
        }

        .info-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .info-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }

        .card-header {
          background-color: #0e1b4d; /* Navy Blue like Screenshot */
          padding: 20px;
          text-align: center;
        }

        .card-header h2 {
          color: white;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
        }

        .card-body {
          padding: 30px;
          font-size: 16px;
          line-height: 1.7;
          color: #444;
          flex-grow: 1;
        }

        .card-body p { margin-bottom: 15px; }
        
        .highlight-text { font-weight: 500; margin-top: 20px; }
        .red-text { color: #c62828; font-weight: bold; }
        
        .list-title {
          font-size: 18px;
          font-weight: 700;
          color: #0e1b4d;
          margin: 20px 0 15px 0;
        }

        .service-list {
          list-style: none;
        }

        .service-list li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .service-list li::before {
          content: "•";
          color: #000;
          font-weight: bold;
          font-size: 24px;
          position: absolute;
          left: 0;
          top: -5px;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 28px; }
          .container { flex-direction: column; text-align: center; }
          .info-container { grid-template-columns: 1fr; }
          .card-header h2 { font-size: 20px; }
        }

        @media (max-width: 576px) {
          .hero { min-height: 400px; }
          .overlay h1 { font-size: 22px; }
          .call-btn { width: 100%; font-size: 16px; }
          .card-body { padding: 20px; }
          .sanitation-info-section { padding: 40px 15px; }
        }
      `}</style>
    </div>
  );
};

export default AirDuctCleaning;