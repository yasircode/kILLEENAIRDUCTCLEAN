import React from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";
const Commerciacleaning = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>
            COMMERCIAL AIR DUCT CLEANING SERVICES IN KILLEEN TX
          </h1>

          <p className="breadcrumb">
            Home » Commercial Air Duct Cleaning
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
              Welcome to <strong>Killeen Air Duct Cleaning</strong>, your trusted local professionals dedicated to improving indoor air quality in Killeen and surrounding areas. We specialize in residential and commercial air duct cleaning services designed to remove dust, debris, allergens, mold particles, and airborne contaminants from your HVAC system.
            </p>

            <p>
              Our mission is simple — to provide cleaner, healthier, and fresher indoor air for your business. A clean HVAC system not only improves air quality but also enhances energy efficiency and extends the life of your heating and cooling system. Our experienced technicians use advanced equipment and proven cleaning techniques to ensure your air ducts are thoroughly cleaned and sanitized.
            </p>
          </div>

          <div className="image">
            <img src="profile1.jpeg" alt="Killeen Air Duct Team" />
          </div>
        </div>
      </section>
<Any/>
      {/* NEW SEO & DESIGN SECTION (BASED ON SCREENSHOT) */}
      <section className="service-grid-section">
        <div className="grid-container">
          
          {/* Box 1: Commercial Services */}
          <div className="grid-box">
            <div className="box-header">
              <h2>Ensuring Killeen's Clean Air with Our Commercial Services</h2>
            </div>
            <div className="box-content">
              <p>
                Based in the heart of <strong>Killeen, TX</strong>, we proudly serve local businesses and industrial facilities across Bell County. Our experienced team uses high-performance industrial vacuums and advanced agitation tools to deliver <strong>top-tier commercial air duct cleaning</strong>. 
              </p>
              <p>
                By meticulously removing contaminants, we help your facility achieve OSHA standards, improve <strong>employee productivity</strong> through better IAQ (Indoor Air Quality), and reduce long-term HVAC maintenance costs.
              </p>
              
              <h3 className="list-title">Our professional services include:</h3>
              <ul className="check-list">
                <li>Detailed HVAC System Diagnostics</li>
                <li>Commercial Grade Debris & Dust Removal</li>
                <li>High-Level Indoor Air Quality Assessment</li>
                <li>Antimicrobial Duct Sanitization</li>
                <li>Industrial Exhaust & Ventilation Cleaning</li>
                <li className="red-highlight">System Efficiency & Airflow Evaluation</li>
                <li>Compliance Maintenance & Documentation</li>
              </ul>
            </div>
          </div>

          {/* Box 2: Efficiency & Call to Action */}
          <div className="grid-box">
            <div className="box-header">
              <h2>Prompt and Efficient Commercial Debris Removal</h2>
            </div>
            <div className="box-content">
              <p>
                At <strong>Killeen Air Duct</strong>, we understand that time is money. Our dedicated commercial specialists offer <strong>rapid debris removal</strong> with minimal disruption to your daily operations. Accumulated dust and construction debris in your vents can stifle your HVAC performance and skyrocket energy bills.
              </p>
              <p>
                Our team uses specialized compressed air tools and HEPA-filtered collection systems to ensure your workspace remains spotless. We are committed to helping your <strong>Killeen business thrive</strong> in a safe, breathable, and healthy environment. 
              </p>
              
              <div className="cta-wrapper">
                <p>Need swift, professional debris removal for your building?</p>
                <a href="tel:2107770616" className="call-box-btn">
                  CALL US: (254) 998-3484
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .residential-page {
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        /* HERO SECTION */
        .hero {
          background-image: url("o6.jpeg");
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
          text-transform: uppercase;
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

        /* NEW SERVICE GRID SECTION (MATCHING SCREENSHOT) */
        .service-grid-section {
          padding: 60px 20px;
          background: #fff;
        }

        .grid-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .grid-box {
          border: 1px solid #ddd;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }

        .box-header {
          background-color: #0e1b4d;
          padding: 15px;
          text-align: center;
        }

        .box-header h2 {
          color: white;
          font-size: 22px;
          font-weight: bold;
        }

        .box-content {
          padding: 30px;
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }

        .box-content p { margin-bottom: 15px; }

        .list-title {
          font-size: 18px;
          font-weight: bold;
          margin: 20px 0 15px 0;
          text-align: center;
        }

        .check-list {
          list-style: none;
        }

        .check-list li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .check-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          font-size: 20px;
          font-weight: bold;
        }

        .red-highlight { color: #c62828; font-weight: bold; }

        .cta-wrapper {
          margin-top: 30px;
          text-align: center;
        }

        .call-box-btn {
          display: inline-block;
          background-color: #c62828;
          color: white;
          padding: 18px 35px;
          font-size: 22px;
          font-weight: bold;
          text-decoration: none;
          margin-top: 20px;
          border-radius: 4px;
          width: 100%;
          max-width: 350px;
        }

        /* 🔥 PERFECT MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 28px; }
          .container { flex-direction: column; gap: 30px; }
          .text { font-size: 16px; text-align: center; }
          .grid-container { grid-template-columns: 1fr; }
        }

        @media (max-width: 576px) {
          .hero { min-height: 420px; }
          .overlay h1 { font-size: 22px; }
          .box-header h2 { font-size: 18px; }
          .call-box-btn { font-size: 18px; }
        }

      `}</style>
      <DuctLandingPage/>
    </div>
  );
};

export default Commerciacleaning;