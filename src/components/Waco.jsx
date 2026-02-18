import React from "react";
// 1. IMPORT CHECK: Agar file same folder mein hai toh "./DuctLandingPage" 
// Agar ek folder piche hai toh "../DuctLandingPage"
// Agar aapke paas ye file nahi hai, toh niche di gayi line ko comment out (//) kar dein.
import DuctLandingPage from "../DuctLandingPage"; 

const Waco = () => {
  return (
    <div className="residential-page">
      
      {/* CSS Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .residential-page { font-family: Arial, sans-serif; overflow-x: hidden; }
        
        .hero {
          background-image: url("o7.jpeg");
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

        .overlay h1 { font-size: clamp(24px, 5vw, 40px); font-weight: 700; max-width: 900px; line-height: 1.3; }
        .breadcrumb { margin-top: 18px; font-size: 16px; opacity: 0.9; }

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

        .content-section { padding: 80px 20px; background: #f7f7f7; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 50px; }
        .text { flex: 1; font-size: 18px; line-height: 1.8; color: #333; }
        .image { flex: 1; }
        .image img { width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }

        @media (max-width: 992px) {
          .container { flex-direction: column; gap: 30px; }
          .text { text-align: center; }
        }
      `}} />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>UV Light System Installation in Waco, TX</h1>
          <p className="breadcrumb">Home » Residential Air Duct Cleaning</p>
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
              Creating a clean and healthy indoor environment is essential for your home or business. 
              At <strong>Killeen Service</strong>, we provide professional UV light system installation 
              in Waco, TX to help eliminate airborne contaminants and improve overall air quality.
            </p>
            <p>
              Modern HVAC UV light systems are designed to reduce mold growth, bacteria, and viruses. 
              Ultraviolet lights target pollutants at the source, keeping your system efficient.
            </p>
          </div>

          <div className="image">
            <img src="profile3.jpeg" alt="Killeen Air Duct Team" />
          </div>
        </div>
      </section>

      {/* 2. IMPORTANT: Agar DuctLandingPage load nahi ho raha, toh usey abhi ke liye hata dein */}
      {/* <DuctLandingPage /> */}
      
    </div>
  );
};

export default Waco;