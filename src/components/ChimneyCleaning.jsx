import React from "react";
import DuctLandingPage from "../DuctLandingPage";

const ChimneyCleaning = () => {
  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Professional Chimney Cleaning & Safety Inspections in Killeen, TX</h1>

          <p className="breadcrumb">
            Home » Residential Services » Chimney Cleaning
          </p>

          <a href="tel:2459983484" className="call-btn">
            CALL US: (245) 998-3484
          </a>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <p>
              A cozy fireplace is the heart of a home during Killeen’s colder months, providing warmth and a relaxing atmosphere. However, without regular maintenance, your chimney can become a hidden danger. Over time, hazardous <strong>creosote buildup, soot, and debris</strong> accumulate, which can lead to chimney fires and carbon monoxide risks.
            </p>
            <p>
              At <strong>Killeen Air Duct Cleaning</strong>, we specialize in comprehensive chimney sweep services tailored for Central Texas homes. Our expert technicians use high-end tools to ensure your flue is clear, your ventilation is perfect, and your family stays safe while enjoying the fireside.
            </p>
          </div>

          <div className="image">
            <img src="profile3.jpeg" alt="Killeen Professional Chimney Sweep" />
          </div>
        </div>
      </section>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; overflow-x: hidden; color: #333; }

        /* HERO SECTION */
        .hero {
          background-image: url("047.jpeg");
          background-size: cover;
          background-position: center;
          min-height: 450px;
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
        .overlay h1 { font-size: 38px; font-weight: 700; max-width: 850px; line-height: 1.2; text-transform: uppercase; }
        .breadcrumb { margin-top: 15px; font-size: 15px; letter-spacing: 1px; }
        .call-btn {
          margin-top: 25px;
          background-color: #c62828;
          color: white;
          padding: 15px 35px;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          border-radius: 5px;
          transition: 0.3s ease;
        }
        .call-btn:hover { background-color: #a51d1d; transform: scale(1.05); }

        /* CONTENT SECTION */
        .content-section { padding: 60px 20px; background: #f9f9f9; }
        .container { max-width: 1100px; margin: auto; display: flex; align-items: center; gap: 40px; }
        .text { flex: 1.2; font-size: 17px; line-height: 1.7; }
        .text p { margin-bottom: 15px; }
        .image { flex: 0.8; }
        .image img { width: 100%; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

        /* DUAL BOX SECTION (AS PER SCREENSHOT) */
        .service-grid-area { padding: 50px 20px; background: #fff; }
        .grid-flex { max-width: 1200px; margin: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .service-card { border: 1px solid #e0e0e0; border-radius: 4px; overflow: hidden; display: flex; flex-direction: column; }
        .card-title { background: #0e1b4d; color: white; padding: 20px; text-align: center; font-size: 20px; font-weight: bold; letter-spacing: 0.5px; }
        .card-body { padding: 30px; flex-grow: 1; }
        .card-body p { margin-bottom: 15px; font-size: 16px; line-height: 1.6; }
        
        .feature-list { list-style: none; margin-top: 15px; }
        .feature-list li { position: relative; padding-left: 30px; margin-bottom: 10px; font-weight: 600; font-size: 16px; }
        .feature-list li::before { content: "✔"; position: absolute; left: 0; color: #c62828; font-size: 18px; }

        .cta-box { text-align: center; margin-top: 20px; padding: 20px; border-top: 1px solid #eee; }
        .red-text { color: #c62828; font-weight: bold; }
        .bold-call { display: block; background: #c62828; color: white; padding: 12px; margin-top: 10px; text-decoration: none; border-radius: 4px; font-size: 20px; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .overlay h1 { font-size: 26px; }
          .container { flex-direction: column; text-align: center; }
          .grid-flex { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
          .hero { min-height: 350px; }
          .card-title { font-size: 18px; }
          .content-section { padding: 40px 15px; }
        }
      `}</style>

      {/* UPDATED SERVICE DETAILS (MATCHING SCREENSHOT DESIGN) */}
      <section className="service-grid-area">
        <div className="grid-flex">
          
          {/* Box 1: Cleaning Services */}
          <div className="service-card">
            <div className="card-title">Killeen’s Trusted Chimney Cleaning Services</div>
            <div className="card-body">
              <p>
                Living in <strong>Killeen and Fort Hood</strong> means experiencing unique weather shifts. Over time, your chimney bears the brunt of these changes, gathering dangerous residues and creosote.
              </p>
              <p>
                With <strong>Killeen Air Duct Cleaning</strong>, you receive a service tailored to the specific architecture of Central Texas homes. We ensure every nook and cranny of your chimney is pristine, safeguarding your home and loved ones from fire hazards.
              </p>
              <h4 style={{marginBottom: '10px'}}>Our Services Include:</h4>
              <ul className="feature-list">
                <li>Comprehensive Chimney Inspection</li>
                <li>Soot and Creosote Removal</li>
                <li>Chimney Blockage Clearance</li>
                <li>Flue Lining Inspection & Repair</li>
                <li>Regular Maintenance & Safety Checks</li>
              </ul>
            </div>
          </div>

          {/* Box 2: Installation & CTA */}
          <div className="service-card">
            <div className="card-title">Killeen’s Choice for Chimney Installation</div>
            <div className="card-body">
              <p>
                Dreaming of cozy fireside moments in your home? A top-notch chimney foundation is key. Whether you are in <strong>Harker Heights or Nolanville</strong>, we provide professional installation that lasts.
              </p>
              <ul className="feature-list">
                <li><strong>Materials:</strong> We pick what suits our local Texas weather.</li>
                <li><strong>Setup:</strong> Our expertise ensures chimneys that work and look great.</li>
                <li><strong>Longevity:</strong> Quality installation means your chimney will stand the test of time.</li>
              </ul>
              <div className="cta-box">
                <p>Ready to transform your space and ensure a safe home atmosphere?</p>
                <a href="tel:2549983484" className="bold-call">
                  CALL US: (254) 998-3484
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <DuctLandingPage/>
    </div>
  );
};

export default ChimneyCleaning;