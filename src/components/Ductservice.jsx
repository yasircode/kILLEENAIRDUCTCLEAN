import React from "react";
import DuctLandingPage from "../DuctLandingPage";

const Ductservice = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>
            Killeen Air Duct Repair and Replacement Services
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
              Your air duct system is essential for delivering clean, conditioned air throughout your home or business. When ductwork becomes damaged, leaky, or outdated, it can reduce indoor air quality, increase energy costs, and put extra strain on your HVAC system.
            </p>

            <p>
              At <strong>Killeen Air Duct Cleaning</strong>, we provide professional air duct repair and air duct replacement services in Killeen, TX. Our experienced technicians carefully inspect your ductwork to identify leaks, loose connections, poor insulation, or airflow restrictions. We then restore or replace damaged sections to ensure maximum efficiency and proper air circulation.
            </p>
          </div>

          <div className="image">
            <img src="profile3.jpeg" alt="Killeen Air Duct Team" />
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
          background-image: url("999.webp");
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

        .call-btn:hover {
          background-color: #a51d1d;
        }

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

        .text {
          flex: 1;
          font-size: 18px;
          line-height: 1.8;
        }

        .text p {
          margin-bottom: 20px;
        }

        .image {
          flex: 1;
        }

        .image img {
          width: 100%;
          border-radius: 10px;
        }

        /* NEW DUAL BOX SECTION (AS PER SCREENSHOT) */
        .repair-grid-section {
          padding: 60px 20px;
          background: #fff;
        }

        .grid-wrapper {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .grid-card {
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .card-heading {
          background-color: #0e1b4d;
          color: white;
          padding: 18px;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .card-content {
          padding: 30px;
          font-size: 16px;
          line-height: 1.7;
          color: #444;
        }

        .card-content p { margin-bottom: 15px; }

        .service-bullets {
          list-style: none;
          margin-top: 15px;
        }

        .service-bullets li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .service-bullets li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #000;
          font-weight: bold;
          font-size: 22px;
          top: -4px;
        }

        .cta-text {
          font-weight: bold;
          margin-top: 20px;
        }

        .red-brand {
          color: #c62828;
        }

        /* 🔥 MOBILE RESPONSIVE OPTIMIZATION */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 28px; }
          .container { flex-direction: column; text-align: center; }
          .grid-wrapper { grid-template-columns: 1fr; }
        }

        @media (max-width: 576px) {
          .hero { min-height: 420px; }
          .overlay h1 { font-size: 22px; }
          .card-heading { font-size: 18px; padding: 15px; }
          .call-btn { width: 100%; font-size: 16px; }
          .repair-grid-section { padding: 40px 15px; }
        }
      `}</style>

      {/* NEW UPDATED CONTENT BASED ON SCREENSHOT STYLE */}
      <section className="repair-grid-section">
        <div className="grid-wrapper">
          
          {/* Box 1: Repair and Replacement */}
          <div className="grid-card">
            <div className="card-heading">
              Premier Air Duct Repair and Replacement in Killeen
            </div>
            <div className="card-body card-content">
              <p>
                Residents of <strong>Killeen and Fort Hood</strong> trust <strong>Killeen Air Duct Cleaning</strong> for their high-quality air duct repair and replacement needs. With years of hands-on experience in <strong>Central Texas</strong>, we understand the specific environmental factors that cause duct wear and tear.
              </p>
              <p>
                Our certified technicians provide <strong>reliable duct sealing and structural renewals</strong>, guaranteeing customer satisfaction at every stage. We focus on eliminating leaks that cause your HVAC to work overtime, ultimately lowering your utility bills.
              </p>
              <div className="cta-text">
                Reach out to <span className="red-brand">Killeen Air Duct Cleaning</span> for a comprehensive system evaluation today and breathe easier tomorrow.
              </div>
            </div>
          </div>

          {/* Box 2: Solutions and Lists */}
          <div className="grid-card">
            <div className="card-heading">
              Comprehensive Ductwork Solutions
            </div>
            <div className="card-body card-content">
              <p>
                From minor leaks to full-scale ventilation system renewals, we offer tailored solutions for homes in <strong>Harker Heights, Nolanville, and Copperas Cove</strong>. Our goal is to restore the structural integrity of your air delivery system.
              </p>
              <p>
                We use <strong>professional-grade mastic sealants and R-8 insulated ducting</strong> to ensure your climate-controlled air reaches its destination without loss.
              </p>
              <h3 style={{fontSize: '18px', fontWeight: 'bold', marginTop: '20px'}}>Our Services Include:</h3>
              <ul className="service-bullets">
                <li>Professional Ductwork Repair Solutions</li>
                <li>Full Air Duct Replacement Services</li>
                <li>Precision HVAC Duct Restoration</li>
                <li>Modern Ventilation System Renewal</li>
                <li className="red-brand">Energy-Efficient Airflow Optimization</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      
      <DuctLandingPage/>
    </div>
  );
};

export default Ductservice;