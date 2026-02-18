import React from "react";

import DuctLandingPage from "../DuctLandingPage";

const Commerciacleaning = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>
            COMMERICAL CLEANING AIR WITH OUR RESIDENTIAL KILLEEN AIR DUCT CLEANING SERVICES
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
              Welcome to Killeen Air Duct Cleaning, your trusted local professionals dedicated to improving indoor air quality in Killeen and surrounding areas. We specialize in residential and commercial air duct cleaning services designed to remove dust, debris, allergens, mold particles, and airborne contaminants from your HVAC system. <strong>Killeen Air Duct Cleaner</strong>,
              we specialize in Residential Air Duct Cleaning, ensuring you and
              your loved ones enjoy a cleaner, healthier indoor environment.
            </p>

            <p>
              Our mission is simple — to provide cleaner, healthier, and fresher indoor air for your home or business. A clean HVAC system not only improves air quality but also enhances energy efficiency and extends the life of your heating and cooling system. Our experienced technicians use advanced equipment and proven cleaning techniques to ensure your air ducts are thoroughly cleaned and sanitized.
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

export default Commerciacleaning;
