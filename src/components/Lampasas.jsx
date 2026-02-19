import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import DuctLandingPage from '../DuctLandingPage';
import Any from './Any';
import Gallery from '../Gallery';
const Lampasas = () => {
  // --- Yahan Company ka content aur image paths hain ---
  const serviceData = [
    {
      title: "BENEFITS OF CLEANING YOUR AIR DUCTS",
      content: "Cleaning your air ducts does wonders for your home. It gets rid of dust and other nasty stuff, making the air cleaner and fresher. This means less coughing and sneezing. Also, your air system works smoother, which can lower your energy bills.",
      cta: "Want cleaner air in your home? Get your air ducts cleaned today and breathe easier!",
      image: "/013.jpeg", 
      imageLeft: false
    },
    {
      title: "ELEVATE YOUR HOME'S AIR QUALITY WITH OUR EXPERT SERVICES",
      content: "We offer a variety of services to keep your home's air clean and your family healthy:",
      list: [
        "Air Duct Cleaning: Get rid of dust, allergens, and pollutants.",
        "Dryer Vent Cleaning: Reduce fire risk and increase efficiency.",
        "HVAC System Cleaning: Ensure smooth running and lower bills.",
        "Air Quality Testing: Target problem areas effectively."
      ],
      cta: "Ready for cleaner air in your home? Call Killeen Air Duct Cleaner today!",
      image: "/1000.png", 
      imageLeft: true
    },
    {
      title: "DRYER VENT CLEANING IN KILLEEN, TEXAS",
      content: "Cleaning your dryer vent stops fires and cuts down on your energy bills. Lint can block your vent, but cleaning it makes your dryer work faster and safer. This simple step keeps your home safe and saves you money.",
      cta: "Want to dry your clothes safely and save money? Book our service today!",
      image: "/015.jpeg", 
      imageLeft: false
    },
    {
      title: "REPAIRING OR REPLACING YOUR AIR DUCTS",
      content: "Sometimes air ducts need fixing or even replacing. If your ducts are old or damaged, they might not work well, making your system struggle. Fixing them can make your home more comfortable.",
      cta: "Noticing issues? Reach out to Killeen Air Duct Cleaner today!",
      image: "/016.jpeg", 
      imageLeft: true
    }
  ];

  return (
    <div className="killeen-air-duct-page">
      
      {/* --- Inline CSS (Video + Content Styles) --- */}
      <style>
        {`
          .video-hero-section {
            position: relative;
            width: 100%;
            height: 65vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
          }

          .hero-video-bg {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -1;
            transform: translate(-50%, -50%);
            object-fit: cover;
          }

          .video-dark-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 0;
          }

          .hero-content-inner {
            position: relative;
            z-index: 1;
            padding: 20px;
          }

          .hero-content-inner h1 {
            font-size: clamp(28px, 5vw, 48px);
            font-weight: 800;
            text-transform: uppercase;
            margin: 0;
            text-shadow: 2px 2px 15px rgba(0,0,0,0.6);
          }

          .services-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          }

          .service-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
            margin-bottom: 100px;
          }

          .service-row.reverse {
            flex-direction: row-reverse;
          }

          .text-container {
            flex: 1;
          }

          .image-container {
            flex: 1;
            display: flex;
            justify-content: center;
          }

          .image-container img {
            width: 100%;
            max-width: 500px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.12);
          }

          .title {
            font-size: clamp(24px, 4vw, 32px);
            font-weight: 900;
            color: #111;
            line-height: 1.2;
            margin-bottom: 20px;
            text-transform: uppercase;
          }

          .description {
            font-size: 16px;
            line-height: 1.7;
            color: #444;
            margin-bottom: 15px;
          }

          .points-list {
            margin-bottom: 25px;
            padding-left: 20px;
          }

          .points-list li {
            margin-bottom: 10px;
            font-weight: 500;
            color: #333;
          }

          .cta-text {
            font-size: 17px;
            margin-bottom: 30px;
            color: #000;
            display: block;
          }

          .call-btn {
            display: inline-flex;
            align-items: center;
            background-color: #a51d24;
            color: #fff;
            padding: 14px 28px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            font-size: 18px;
            transition: 0.3s transform;
          }

          .call-btn:hover {
            transform: translateY(-3px);
            background-color: #8a181d;
          }

          @media (max-width: 900px) {
            .video-hero-section { height: 45vh; }
            .service-row, .service-row.reverse {
              flex-direction: column;
              text-align: center;
              gap: 30px;
              margin-bottom: 60px;
            }
            .image-container { order: -1; }
            .points-list { text-align: left; display: inline-block; }
            .call-btn { width: 100%; justify-content: center; }
          }
        `}
      </style>

      {/* --- Top Video Hero Section --- */}
      <section className="video-hero-section">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video-bg"
        >
          {/* Apni video file ka path yahan check karein */}
          <source src="/red.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-dark-overlay"></div>
        <div className="hero-content-inner">
          <h1>KILLEEN Air Duct Cleaning in Lampasas, TX</h1>
          <p style={{marginTop: '10px', fontSize: '1.2rem'}}>Expert Solutions for Cleaner Indoor Air</p>
        </div>
      </section>

      {/* Banner aur Hero components agar video ke neeche chahiye hon to yahan rehne dein */}
      <Banner />
<Gallery/>
      <Any/>
      {/* <Hero /> - Video ke baad iski zarurat shayad na pade, par aap use kar sakte hain */}

      {/* --- Main Content Render --- */}
      <div className="services-wrapper">
        {serviceData.map((item, index) => (
          <section 
            key={index} 
            className={`service-row ${item.imageLeft ? 'reverse' : ''}`}
          >
            <div className="text-container">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.content}</p>
              
              {item.list && (
                <ul className="points-list">
                  {item.list.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <span className="cta-text"><strong>{item.cta}</strong></span>
              
              <a href="tel:(245)998-3484" className="call-btn">
                <span style={{ marginRight: '10px' }}>📞</span> CALL US
              </a>
            </div>

            <div className="image-container">
              <img src={item.image} alt={item.title} />
            </div>
          </section>
        ))}
      </div>
      
      <DuctLandingPage />
    </div>
  );
};

export default Lampasas;