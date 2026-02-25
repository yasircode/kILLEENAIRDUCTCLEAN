import React from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";

const Commerciacleaning = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION - SEO Optimized for Central Texas */}
      <section className="hero">
        <div className="overlay">
          <h1>
            COMMERCIAL AIR DUCT CLEANING SERVICES IN KILLEEN & CENTRAL TEXAS
          </h1>

          <p className="breadcrumb">
            Home » Commercial HVAC Cleaning Killeen & Temple
          </p>

          <a href="tel:2459983484" className="call-btn">
            GET A QUOTE: (245) 998-3484
          </a>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Trusted Commercial Air Quality Experts</h2>
            <p>
              Welcome to <strong>Killeen Air Duct Cleaning</strong>, your trusted local professionals dedicated to improving indoor air quality in <strong>Killeen, Harker Heights, Temple, and Belton</strong>. We specialize in industrial-grade commercial air duct cleaning services designed to remove dust, allergens, and airborne contaminants from complex HVAC systems.
            </p>

            <p>
              Our mission is to provide healthier indoor air for businesses across <strong>Bell County</strong>. From retail spaces in <strong>Copperas Cove</strong> to large corporate offices in <strong>Temple, TX</strong>, we enhance energy efficiency and extend the life of your heating and cooling systems using advanced HEPA-filtered equipment.
            </p>
          </div>

          <div className="image">
            <img src="profile1.jpeg" alt="Commercial Air Duct Cleaning Team in Killeen TX" />
          </div>
        </div>
      </section>

      <Any/>

      {/* NEW SEO & DESIGN SECTION */}
      <section className="service-grid-section">
        <div className="grid-container">
          
          {/* Box 1: Commercial Services Across Texas */}
          <div className="grid-box">
            <div className="box-header">
              <h2>Serving Killeen, Harker Heights & Fort Cavazos</h2>
            </div>
            <div className="box-content">
              <p>
                Based in <strong>Killeen, TX</strong>, we proudly serve local businesses, medical facilities, and industrial complexes across the <strong>Greater Fort Cavazos (formerly Fort Hood)</strong> area. Our team delivers <strong>top-tier commercial air duct cleaning</strong> tailored to the unique dusty climate of Central Texas.
              </p>
              <p>
                Whether you are in <strong>Belton or Nolanville</strong>, we help your facility meet OSHA standards, boost employee health, and significantly reduce energy overheads by optimizing your ventilation system.
              </p>
              
              <h3 className="list-title">Our Industrial Services Include:</h3>
              <ul className="check-list">
                <li>Multi-Unit Commercial HVAC Diagnostics</li>
                <li>Industrial Grade Debris Removal (HEPA Filtered)</li>
                <li>Temple & Belton Regional IAQ Assessments</li>
                <li>Antimicrobial Fogging & Duct Sanitization</li>
                <li>Restaurant & Retail Exhaust Cleaning</li>
                <li className="red-highlight">Serving Killeen, Temple, & Copperas Cove</li>
                <li>Full Compliance Documentation for Inspections</li>
              </ul>
            </div>
          </div>

          {/* Box 2: Efficiency & Call to Action */}
          <div className="grid-box">
            <div className="box-header">
              <h2>Efficiency for Businesses in Bell County</h2>
            </div>
            <div className="box-content">
              <p>
                At <strong>Killeen Air Duct Cleaning</strong>, we know that business downtime isn't an option. Our commercial specialists provide <strong>rapid, after-hours debris removal</strong> for businesses in <strong>Salado, Kempner, and Morgan’s Point Resort</strong>.
              </p>
              <p>
                Don't let accumulated dust in your vents skyrocket your energy bills or impact staff productivity. We are committed to helping your <strong>Central Texas business thrive</strong> with a clean, safe, and professional indoor environment.
              </p>
              
              <div className="cta-wrapper">
                <p>Need a professional assessment for your commercial building?</p>
                <a href="tel:2459983484" className="call-box-btn">
                  CALL FOR ESTIMATE: (254) 998-3484
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
          font-family: 'Segoe UI', Arial, sans-serif;
          overflow-x: hidden;
        }

        /* HERO SECTION */
        .hero {
          background-image: url("o6.jpeg");
          background-size: cover;
          background-position: center;
          min-height: 550px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background: rgba(14, 27, 77, 0.7); /* Deep Navy Overlay */
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
          font-size: 42px;
          font-weight: 800;
          max-width: 1000px;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .breadcrumb {
          margin-top: 18px;
          font-size: 16px;
          letter-spacing: 1px;
        }

        .call-btn {
          margin-top: 30px;
          background-color: #c62828;
          color: white;
          padding: 18px 45px;
          text-decoration: none;
          font-size: 20px;
          font-weight: bold;
          border-radius: 5px;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .call-btn:hover { background-color: #a51d1d; transform: scale(1.05); }

        /* CONTENT SECTION */
        .content-section {
          padding: 80px 20px;
          background: #fdfdfd;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .text { flex: 1.2; font-size: 18px; line-height: 1.8; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 32px; font-weight: 800; }
        .text p { margin-bottom: 20px; color: #444; }
        .image { flex: 1; }
        .image img { width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

        /* SERVICE GRID SECTION */
        .service-grid-section {
          padding: 80px 20px;
          background: #f4f7fa;
        }

        .grid-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .grid-box {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          border: 1px solid #e0e6ed;
        }

        .box-header {
          background-color: #0e1b4d;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }

        .box-header h2 {
          color: white;
          font-size: 24px;
          font-weight: 700;
        }

        .box-content {
          padding: 35px;
          font-size: 17px;
          line-height: 1.7;
          color: #333;
        }

        .box-content p { margin-bottom: 20px; }

        .list-title {
          font-size: 20px;
          font-weight: 800;
          margin: 25px 0 15px 0;
          color: #0e1b4d;
          border-bottom: 2px solid #c62828;
          display: inline-block;
        }

        .check-list {
          list-style: none;
          margin-top: 10px;
        }

        .check-list li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 12px;
          font-weight: 500;
        }

        .check-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #c62828;
          font-size: 20px;
          font-weight: bold;
        }

        .red-highlight { color: #c62828; font-weight: bold; }

        .cta-wrapper {
          margin-top: 30px;
          text-align: center;
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
        }

        .call-box-btn {
          display: inline-block;
          background-color: #c62828;
          color: white;
          padding: 18px 35px;
          font-size: 22px;
          font-weight: 800;
          text-decoration: none;
          margin-top: 15px;
          border-radius: 5px;
          width: 100%;
          transition: 0.3s;
        }

        .call-box-btn:hover { background-color: #0e1b4d; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 32px; }
          .container { flex-direction: column; text-align: center; }
          .grid-container { grid-template-columns: 1fr; }
          .text h2 { font-size: 28px; }
        }

        @media (max-width: 576px) {
          .hero { min-height: 450px; }
          .overlay h1 { font-size: 24px; }
          .box-header h2 { font-size: 20px; }
          .call-box-btn { font-size: 18px; }
          .box-content { padding: 20px; }
        }
      `}</style>
      <DuctLandingPage/>
    </div>
  );
};

export default Commerciacleaning;