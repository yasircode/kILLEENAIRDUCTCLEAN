import React from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";

const DryerVentCleaning = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION - SEO Optimized for Killeen & Surrounding Areas */}
      <section className="hero">
        <div className="overlay">
          <h1>
            Professional Dryer Vent Cleaning in Killeen, TX & Nearby Cities
          </h1>

          <p className="breadcrumb">
            Home » Residential Services » Dryer Vent Cleaning
          </p>

          <a href="tel:2459983484" className="call-btn">
            BOOK A CLEANING: (245) 998-3484
          </a>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Reliable Dryer Vent Maintenance for Central Texas Homes</h2>
            <p>
              Looking for the best dryer vent cleaning in <strong>Killeen, TX</strong>? Our professional team at <strong>Killeen Air Duct Cleaning</strong> provides expert dryer vent inspection, cleaning, and maintenance services to keep your home safe and energy-efficient across <strong>Harker Heights, Copperas Cove, and Nolanville</strong>.
            </p>
            <p>
              Clogged dryer vents are one of the top causes of residential fires and high electricity bills in <strong>Bell County</strong>. Over time, lint and debris accumulate inside the dryer exhaust system, restricting airflow. This forces your dryer to work harder, leading to overheating and potential fire hazards.
            </p>
            <p>
              Our certified technicians use advanced vacuum systems to completely remove lint buildup. We serve homeowners in <strong>Fort Cavazos, Temple, and Belton</strong>, ensuring proper airflow and maximum safety for your family.
            </p>
          </div>

          <div className="image">
            <img src="profile1.jpeg" alt="Professional Dryer Vent Cleaning Team in Killeen TX" />
          </div>
        </div>
      </section>

      {/* SEO RANKED UPDATED INFO GRID SECTION */}
      <section className="info-grid-section">
        <div className="info-grid-container">
          
          {/* Box 1: Fire Safety & Efficiency */}
          <div className="info-box">
            <div className="info-box-header">
              Home Safety & Efficiency in Killeen & Belton
            </div>
            <div className="info-box-body">
              <p>
                Did you know that lint buildup is a leading cause of household fires in <strong>Killeen, TX and Temple</strong>? At <strong>Killeen Air Duct Cleaning</strong>, our specialized sanitation services are designed to eliminate dangerous blockages, <strong>improving your dryer's efficiency and extending its lifespan.</strong>
              </p>
              <p>
                Our local technicians serve <strong>Harker Heights and Copperas Cove</strong>, utilizing professional-grade brush systems to clear exhaust lines. This preventive care ensures consistent airflow, reducing drying times and <strong>slashing your monthly energy costs</strong>. Don't let a clogged vent put your family at risk.
              </p>
              <p>
                Reach out to <span className="highlight-red">Killeen Air Duct Cleaning</span> today for premium maintenance in <strong>Salado, Nolanville, and Belton</strong>.
              </p>
            </div>
          </div>

          {/* Box 2: Service Cities & List */}
          <div className="info-box">
            <div className="info-box-header">
              Top-Rated Vent Cleaning Across Bell County
            </div>
            <div className="info-box-body">
              <p>
                We are proud to serve the hardworking communities of <strong>Killeen, Fort Cavazos (Fort Hood), Harker Heights, and Nolanville</strong>. Our local experts provide the most reliable and prompt dryer vent solutions in the region.
              </p>
              <p>
                Our team ensures a <strong>thorough, mess-free cleaning process</strong> every time, helping your appliances run at peak performance while keeping your indoor air quality high in <strong>Temple and Copperas Cove</strong>.
              </p>
              <strong>Our Specialized Services Include:</strong>
              <ul>
                <li>Professional Dryer Vent Lint Removal</li>
                <li>Harker Heights & Temple Airflow Testing</li>
                <li>Fire Hazard Inspection & Risk Assessment</li>
                <li className="highlight-red">Energy-Efficiency Optimization</li>
                <li>Serving Killeen, Belton, & Copperas Cove</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <Any/>
      <DuctLandingPage/>

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
          background-image: url("o11.jpeg");
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
          font-size: 42px;
          font-weight: 800;
          max-width: 900px;
          line-height: 1.2;
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
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .call-btn:hover {
          background-color: #a51d1d;
          transform: translateY(-2px);
        }

        /* CONTENT SECTION */
        .content-section {
          padding: 80px 20px;
          background: #f7f7f7;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .text {
          flex: 1.2;
          font-size: 18px;
          line-height: 1.8;
          color: #333;
        }

        .text h2 {
          color: #0e1b4d;
          margin-bottom: 20px;
          font-size: 28px;
        }

        .text p {
          margin-bottom: 20px;
        }

        .image {
          flex: 1;
        }

        .image img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* INFO GRID SECTION */
        .info-grid-section {
          padding: 80px 20px;
          background: #fff;
        }

        .info-grid-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .info-box {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
        }

        .info-box-header {
          background-color: #0e1b4d;
          color: white;
          padding: 25px;
          text-align: center;
          font-size: 22px;
          font-weight: 700;
        }

        .info-box-body {
          padding: 35px;
          font-size: 17px;
          line-height: 1.8;
          color: #444;
        }

        .info-box-body ul {
          list-style: none;
          margin-top: 20px;
        }

        .info-box-body ul li {
          margin-bottom: 12px;
          position: relative;
          padding-left: 30px;
          font-weight: 500;
        }

        .info-box-body ul li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #c62828;
          font-weight: bold;
          font-size: 18px;
        }

        .highlight-red {
          color: #c62828;
          font-weight: bold;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 32px; }
          .container { flex-direction: column; text-align: center; }
          .info-grid-container { grid-template-columns: 1fr; }
        }

        @media (max-width: 576px) {
          .hero { min-height: 450px; }
          .overlay h1 { font-size: 24px; }
          .info-box-header { font-size: 18px; }
          .call-btn { width: 100%; font-size: 16px; }
          .info-box-body { padding: 25px; }
        }
      `}</style>
    </div>
  );
};

export default DryerVentCleaning;