import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";

const ACcleaning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does your AC cleaning service include?",
      answer: "Our professional service includes deep coil cleaning, blower fan sanitation, drain line flushing, and a full system performance check to ensure maximum cooling efficiency."
    },
    {
      question: "How often should I schedule an AC cleaning service?",
      answer: "In Killeen’s dusty and hot climate, we recommend a professional cleaning at least once a year (ideally before summer) to prevent breakdowns and maintain air quality."
    },
    {
      question: "How does AC cleaning improve my unit's efficiency?",
      answer: "When coils are clean, the system transfers heat more easily. This reduces the workload on your compressor, lowering energy consumption and your monthly electricity bills."
    },
    {
      question: "What signs indicate I need an AC cleaning service?",
      answer: "Common signs include weak airflow, unusual musty odors, higher than normal energy bills, or ice formation on the outdoor unit coils."
    }
  ];

  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>AC Cleaning Service in Killeen, TX | Breathe Fresh Air</h1>
          <p className="breadcrumb">Home » Residential Services » AC Cleaning</p>
          <a href="tel:2549983484" className="call-btn">CALL US: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Expert AC Maintenance & Sanitation in Killeen</h2>
            <p>
              Welcome to <strong>Killeen Air Duct Cleaning</strong>, your reliable local experts for professional AC cleaning services in Killeen, TX. We are dedicated to improving indoor air quality and maximizing performance.
            </p>
            <p>
              Given the intense Texas heat, an efficient AC is a necessity. Our technicians provide deep cleaning to restore your system's peak performance and lower your energy bills.
            </p>
          </div>
          <div className="image-box">
            <img src="profile3.jpeg" alt="Killeen AC Cleaning Experts" className="square-img" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTIONS */}
      <div className="dual-box-container">
        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">HVAC Sanitation</div>
            <div className="card-body">
              <p>A well-functioning HVAC system is the backbone of a comfortable home in <strong>Killeen and Fort Hood</strong>. We improve efficiency and extend lifespan.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Residential AC Care</div>
            <div className="card-body">
              <ul className="service-list">
                <li>HVAC Sanitation</li>
                <li>Dust and Allergen Removal</li>
                <li>Mold Remediation</li>
                <li>Ductwork Inspection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">Coil Cleaning</div>
            <div className="card-body">
              <p>Your AC coils play a significant role in cooling. We provide meticulous coil cleaning to boost your AC's performance instantly.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Health First</div>
            <div className="card-body">
              <p>A clean AC is healthier. Our sanitization service eliminates harmful bacteria in <strong>Harker Heights & Nolanville</strong>.</p>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 style={{textAlign: 'center', marginBottom: '30px'}}>AC Cleaning Services: FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? "active" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; background: #fff; color: #333; overflow-x: hidden; }

        /* HERO */
        .hero {
          background-image: url("ac.jpg");
          background-size: cover; background-position: center;
          min-height: 400px; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.7); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; padding: 20px; text-align: center; }
        .overlay h1 { font-size: clamp(22px, 5vw, 32px); text-transform: uppercase; }

        /* INTRO & SQUARE IMAGE */
        .content-section { padding: 60px 20px; }
        .container { max-width: 1100px; margin: auto; display: flex; align-items: center; gap: 40px; }
        .text { flex: 1.2; }
        .image-box { flex: 0.8; display: flex; justify-content: center; }
        
        .square-img { 
          width: 100%; 
          max-width: 350px; 
          aspect-ratio: 1 / 1; 
          object-fit: cover; 
          border-radius: 12px; 
          box-shadow: 0 10px 20px rgba(0,0,0,0.1); 
        }

        /* BOXES */
        .dual-box-container { max-width: 1100px; margin: 20px auto; padding: 0 20px; }
        .grid-flex { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .info-card { border: 1px solid #ddd; border-radius: 5px; overflow: hidden; background: #fff; }
        .card-header { background: #0e1b4d; color: white; padding: 15px; text-align: center; font-weight: bold; }
        .card-body { padding: 20px; line-height: 1.6; }
        
        /* FAQ ACCORDION */
        .faq-section { background: #f8f9fa; padding: 50px 20px; }
        .faq-container { max-width: 800px; margin: auto; }
        .faq-item { background: white; border: 1px solid #eee; margin-bottom: 10px; border-radius: 4px; cursor: pointer; }
        .faq-question { padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; color: #c62828; }
        .faq-answer { max-height: 0; overflow: hidden; transition: 0.3s ease-out; padding: 0 20px; }
        .faq-answer.active { max-height: 200px; padding: 10px 20px 20px; border-top: 1px solid #f1f1f1; }

        .call-btn { margin-top: 20px; background: #c62828; color: white; padding: 12px 30px; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block; }
        .service-list { list-style: none; }
        .service-list li::before { content: "•"; color: #c62828; font-size: 20px; padding-right: 10px; }

        /* 🔥 MOBILE OPTIMIZATION */
        @media (max-width: 992px) {
          .content-section { padding: 40px 15px; }
          .container { flex-direction: column-reverse; text-align: center; gap: 30px; }
          .grid-flex { grid-template-columns: 1fr; }
          .square-img { max-width: 300px; }
          .overlay h1 { font-size: 24px; }
        }
      `}</style>
      
      <DuctLandingPage/>
    </div>
  );
};

export default ACcleaning;