import React from "react";
// Agar file nahi mil rahi toh comment out rehne dein, warna import sahi hai
import DuctLandingPage from "../DuctLandingPage"; 
import Any from "./Any";
import Gallery from "../Gallery";
const Waco = () => {
  return (
    <div className="residential-page">
      
      {/* CSS Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; overflow-x: hidden; }
        
        /* Video Hero Styles */
        .hero {
          position: relative;
          min-height: 550px;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          z-index: -1;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6); /* Text readability ke liye */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          z-index: 1;
        }

        .overlay h1 { 
          font-size: clamp(28px, 6vw, 48px); 
          font-weight: 800; 
          max-width: 900px; 
          line-height: 1.2;
          text-transform: uppercase;
        }

        .breadcrumb { margin-top: 15px; font-size: 18px; opacity: 0.9; font-weight: 500; }

        .call-btn {
          margin-top: 30px;
          background-color: #c62828;
          color: white;
          padding: 16px 45px;
          text-decoration: none;
          font-size: 20px;
          font-weight: bold;
          border-radius: 5px;
          transition: 0.3s transform;
          display: inline-block;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .call-btn:hover {
          transform: translateY(-3px);
          background-color: #a51d24;
        }

        /* Content Section */
        .content-section { padding: 80px 20px; background: #ffffff; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 50px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.8; color: #333; }
        .text h2 { color: #c62828; margin-bottom: 20px; font-size: 32px; font-weight: 700; }
        .image { flex: 0.8; }
        .image img { width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }

        @media (max-width: 992px) {
          .hero { min-height: 450px; }
          .container { flex-direction: column; gap: 40px; }
          .text { text-align: center; }
          .image { width: 100%; order: -1; }
        }
      `}} />

      {/* HERO SECTION WITH VIDEO */}
      <section className="hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          {/* Public folder mein video file ka sahi naam check karein */}
          <source src="/red.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="overlay">
          <h1>UV Light System Installation in Waco, TX</h1>
          <p className="breadcrumb">Home » Residential Air Quality</p>
          <a href="tel:2459983484" className="call-btn">
            📞 CALL US: (245) 998-3484
          </a>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Breathe Healthier in Waco</h2>
            <p style={{ marginBottom: '20px' }}>
              Creating a clean and healthy indoor environment is essential for your home or business. 
              At <strong>Killeen Service</strong>, we provide professional UV light system installation 
              in Waco, TX to help eliminate airborne contaminants and improve overall air quality.
            </p>
            <p>
              Modern HVAC UV light systems are designed to reduce mold growth, bacteria, and viruses. 
              Ultraviolet lights target pollutants at the source, keeping your system efficient, 
              reducing odors, and helping your family breathe easier every day.
            </p>
          </div>

          <div className="image">
            {/* "profile3.jpeg" file public folder mein honi chahiye */}
            <img src="/profile3.jpeg" alt="UV Light Installation Waco" />
          </div>
        </div>
      </section>
<Any/>
<Gallery/>
      {/* DuctLandingPage agar import sahi hai toh niche uncomment kar dein */}
      <DuctLandingPage />
      
    </div>
  );
};

export default Waco;