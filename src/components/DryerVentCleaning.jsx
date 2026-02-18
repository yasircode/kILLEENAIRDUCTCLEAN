import React from "react";

import DuctLandingPage from "../DuctLandingPage";

const DryerVentCleaning = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>
            Killeen Dryer Vent Cleaning Services | Licensed & Affordable
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
              Looking for the best dryer vent cleaning in Killeen, TX? Our professional team at Killeen Air Duct Cleaning provides expert dryer vent inspection, cleaning, and maintenance services to keep your home safe and energy-efficient.

Clogged dryer vents are one of the top causes of residential fires and high electricity bills. Over time, lint, dust, and debris accumulate inside the dryer exhaust system, restricting airflow and forcing your dryer to work harder. This can lead to overheating, longer drying times, increased energy costs, and potential fire hazards.
</p>

            <p>
              Our certified technicians use advanced vacuum systems and specialized tools to completely remove lint buildup from your dryer vent line. We ensure proper airflow, improved dryer performance, and maximum safety for your home.
            </p>
          </div>

          <div className="image">
            <img src="profile1.jpeg" alt="Killeen Air Duct Team" />
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

        /* 🔥 PERFECT MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 {
            font-size: 28px;
          }

          .container {
            flex-direction: column;
            gap: 30px;
          }

          .text {
            font-size: 16px;
            text-align: center;
          }

          .image img {
            border-radius: 8px;
          }
        }

        @media (max-width: 576px) {
          .hero {
            min-height: 420px;
          }

          .overlay {
            padding: 30px 15px;
          }

          .overlay h1 {
            font-size: 22px;
          }

          .breadcrumb {
            font-size: 14px;
          }

          .call-btn {
            width: 100%;
            max-width: 300px;
            padding: 14px;
            font-size: 16px;
          }

          .content-section {
            padding: 50px 15px;
          }
        }

      `}</style>
     
      <DuctLandingPage/>
    </div>
  );
};

export default DryerVentCleaning;
