import React from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";
import Banner from "./Banner";

const Ductservice = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION - SEO Optimized for Central Texas */}
      <section className="hero">
        <div className="overlay">
          <h1>
            Expert Air Duct Repair & Replacement in Killeen & Temple, TX
          </h1>

          <p className="breadcrumb">
            Home » Ductwork Solutions » Repair & Replacement
          </p>

          <a href="tel:2459983484" className="call-btn">
            FREE INSPECTION: (245) 998-3484
          </a>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Serving Killeen, Harker Heights, & Copperas Cove</h2>
            <p>
              Your air duct system is the lungs of your property. When ductwork becomes leaky or outdated, it significantly impacts indoor air quality and energy costs. At <strong>Killeen Air Duct Cleaning</strong>, we provide professional air duct repair and full system replacement services across <strong>Killeen, Nolanville, and Harker Heights</strong>.
            </p>

            <p>
              Whether you are dealing with sagging ducts in <strong>Copperas Cove</strong> or poor insulation in <strong>Temple, TX</strong>, our experienced technicians identify airflow restrictions and loose connections. We restore or replace damaged sections to ensure your HVAC system operates at peak efficiency.
            </p>
          </div>

          <div className="image">
            <img src="profile3.jpeg" alt="Duct Repair Specialists in Killeen and Temple" />
          </div>
        </div>
      </section>

      {/* REPAIR & REPLACEMENT GRID SECTION */}
      <section className="repair-grid-section">
        <div className="grid-wrapper">
          
          {/* Box 1: Regional Expertise */}
          <div className="grid-card">
            <div className="card-heading">
              Premier Duct Renewal in Bell County & Fort Cavazos
            </div>
            <div className="card-body card-content">
              <p>
                Homeowners in <strong>Killeen and Fort Cavazos</strong> (formerly Fort Hood) trust us for high-quality ductwork renewals. <strong>Central Texas</strong> weather can be harsh on flexible ducting; we specialize in replacing worn-out materials with durable, high-performance alternatives.
              </p>
              <p>
                Our certified team provides <strong>reliable duct sealing</strong> in <strong>Belton and Salado</strong>, eliminating leaks that cause your energy bills to skyrocket. We focus on structural integrity to ensure every room in your home stays perfectly climate-controlled.
              </p>
              <div className="cta-text">
                Trust <span className="red-brand">Killeen Air Duct Cleaning</span> for professional evaluations in <strong>Temple and Belton</strong> today.
              </div>
            </div>
          </div>

          {/* Box 2: Tailored Solutions */}
          <div className="grid-card">
            <div className="card-heading">
              Complete Ventilation Solutions for Local Cities
            </div>
            <div className="card-body card-content">
              <p>
                From minor patch-ups to full-scale air delivery system replacements, we offer tailored solutions for residential and commercial properties in <strong>Harker Heights, Nolanville, and Copperas Cove</strong>.
              </p>
              <p>
                We use <strong>mastic-sealed connections and R-8 high-efficiency insulation</strong> to ensure your air reaches its destination without loss. Our service ensures a healthier environment for your family or staff.
              </p>
              <h3 style={{fontSize: '18px', fontWeight: 'bold', marginTop: '20px'}}>Our Specialized Services Include:</h3>
              <ul className="service-bullets">
                <li>Commercial & Residential Duct Repair</li>
                <li>Full System Replacement in Temple & Belton</li>
                <li>Precision HVAC Duct Sealing & Seaming</li>
                <li>R-8 Insulated Ducting Upgrades</li>
                <li className="red-brand">Service Areas: Killeen, Harker Heights, Cove</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <Banner/>
      <Any/>
      <DuctLandingPage/>

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
          background-image: url("999.webp");
          background-size: cover;
          background-position: center;
          min-height: 550px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background: rgba(0, 0, 0, 0.7);
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
          max-width: 950px;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .breadcrumb {
          margin-top: 18px;
          font-size: 16px;
          letter-spacing: 0.5px;
        }

        .call-btn {
          margin-top: 30px;
          background-color: #c62828;
          color: white;
          padding: 18px 45px;
          text-decoration: none;
          font-size: 19px;
          font-weight: bold;
          border-radius: 4px;
          transition: 0.3s;
          display: inline-block;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .call-btn:hover { background-color: #a51d1d; transform: translateY(-2px); }

        /* CONTENT SECTION */
        .content-section {
          padding: 80px 20px;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .text { flex: 1.2; font-size: 18px; line-height: 1.8; color: #333; }
        .text h2 { color: #0e1b4d; font-size: 30px; margin-bottom: 20px; font-weight: 700; }
        .text p { margin-bottom: 20px; }
        .image { flex: 1; }
        .image img { width: 100%; border-radius: 12px; box-shadow: 0 12px 25px rgba(0,0,0,0.1); }

        /* REPAIR GRID SECTION */
        .repair-grid-section {
          padding: 80px 20px;
          background: #fff;
        }

        .grid-wrapper {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .grid-card {
          border: 1px solid #ececec;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: 0.3s;
        }
        
        .grid-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.1); }

        .card-heading {
          background-color: #0e1b4d;
          color: white;
          padding: 22px;
          text-align: center;
          font-size: 21px;
          font-weight: 700;
        }

        .card-content {
          padding: 35px;
          font-size: 17px;
          line-height: 1.7;
          color: #444;
        }

        .card-content p { margin-bottom: 18px; }

        .service-bullets {
          list-style: none;
          margin-top: 20px;
        }

        .service-bullets li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .service-bullets li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #c62828;
          font-weight: bold;
          font-size: 20px;
        }

        .cta-text { font-weight: bold; margin-top: 25px; border-top: 1px solid #eee; padding-top: 15px; }
        .red-brand { color: #c62828; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 32px; }
          .container { flex-direction: column; text-align: center; }
          .grid-wrapper { grid-template-columns: 1fr; }
        }

        @media (max-width: 576px) {
          .hero { min-height: 450px; }
          .overlay h1 { font-size: 24px; }
          .card-heading { font-size: 19px; }
          .call-btn { width: 100%; font-size: 17px; }
        }
      `}</style>
    </div>
  );
};

export default Ductservice;