import React from 'react';
import MaintenanceGuide from '../MaintenanceGuide';


import DuctLandingPage from '../DuctLandingPage';
import Management from './Management';
import ImageComparison from './ImageComparison';
import IntroCard from './IntroCard';
const Georgetown = () => {
  // --- Yahan Company ka content aur image paths hain ---
  const serviceData = [
    {
      title: "BENEFITS OF CLEANING YOUR AIR DUCTS",
      content: "Cleaning your air ducts does wonders for your home. It gets rid of dust and other nasty stuff, making the air cleaner and fresher. This means less coughing and sneezing. Also, your air system works smoother, which can lower your energy bills.",
      cta: "Want cleaner air in your home? Get your air ducts cleaned today and breathe easier!",
      image: "/013.jpeg", // Apni image ka path yahan dalein
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
        <h1>KELLEEN Air Duct Cleaning in Georgetown, TX</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<IntroCard/>


        
    <ImageComparison/>
       
      {/* --- Inline CSS (Styled JSX) --- */}
      <style>
        {`
          .services-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
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

          /* --- Mobile Responsive --- */
          @media (max-width: 900px) {
            .service-row, .service-row.reverse {
              flex-direction: column;
              text-align: center;
              gap: 30px;
              margin-bottom: 60px;
            }

            .image-container {
              order: -1; /* Image text se upar dikhegi mobile pe */
            }

            .points-list {
              text-align: left;
              display: inline-block;
            }

            .call-btn {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>

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
      <Management/>
       <DuctLandingPage />
    </div>
  );
};

export default Georgetown;