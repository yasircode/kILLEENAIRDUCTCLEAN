import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";

const ACcleaning = () => {
  // State for FAQ Accordion
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
              Welcome to <strong>Killeen Air Duct Cleaning</strong>, your reliable local experts for professional AC cleaning services in Killeen, TX. We are dedicated to improving indoor air quality and maximizing the performance of your cooling system.
            </p>
            <p>
              Given the intense Texas heat, an efficient AC is a necessity. Our technicians provide deep cleaning to restore your system's peak performance and lower your energy bills.
            </p>
          </div>
          {/* IMAGE SIZE CONTROLLED HERE */}
          <div className="image-box">
            <img src="profile3.jpeg" alt="Killeen AC Cleaning Experts" className="small-img" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTIONS */}
      <div className="dual-box-container">
        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">Elevate Your Comfort with Our HVAC Sanitation</div>
            <div className="card-body">
              <p>A well-functioning HVAC system is the backbone of a comfortable home in <strong>Killeen and Fort Hood</strong>. We aim to improve your system’s efficiency and extend its lifespan.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Killeen's Best Residential AC Cleaning</div>
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
            <div className="card-header">Coil Cleaning - Optimal Performance</div>
            <div className="card-body">
              <p>Your AC coils play a significant role in cooling. Over time, they collect grime. We provide meticulous coil cleaning to boost your AC's performance instantly.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">AC System Sanitization - Health First</div>
            <div className="card-body">
              <p>A clean AC is healthier. Our sanitization service eliminates harmful bacteria and mold in <strong>Harker Heights & Nolanville</strong> homes.</p>
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
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; background: #fff; color: #333; }

        /* HERO */
        .hero {
          background-image: url("ac.jpg");
          background-size: cover; background-position: center;
          min-height: 400px; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.7); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; padding: 20px; text-align: center; }
        .overlay h1 { font-size: 32px; text-transform: uppercase; }

        /* INTRO & SMALL IMAGE */
        .content-section { padding: 100px 100px; }
        .container { max-width: 1100px; margin: auto; display: flex; align-items: center; gap: 40px; }
        .text { flex: 1.5; }
        .image-box { flex: 1.5; display: flex; justify-content: center; }
        .small-img { width: 100%; max-width: 1000px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

        /* BOXES */
        .dual-box-container { max-width: 1100px; margin: 20px auto; padding: 0 20px; }
        .grid-flex { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .info-card { border: 1px solid #ddd; border-radius: 5px; overflow: hidden; }
        .card-header { background: #0e1b4d; color: white; padding: 15px; text-align: center; font-weight: bold; }
        .card-body { padding: 20px; line-height: 1.6; }
        
        /* FAQ ACCORDION */
        .faq-section { background: #f8f9fa; padding: 50px 20px; }
        .faq-container { max-width: 800px; margin: auto; }
        .faq-item { background: white; border: 1px solid #eee; margin-bottom: 10px; border-radius: 4px; cursor: pointer; transition: 0.3s; }
        .faq-question { padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; color: #c62828; }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; background: #fff; padding: 0 20px; }
        .faq-answer.active { max-height: 200px; padding: 10px 20px 20px 20px; border-top: 1px solid #f1f1f1; }

        /* BUTTONS */
        .call-btn { margin-top: 20px; background: #c62828; color: white; padding: 12px 30px; text-decoration: none; font-weight: bold; border-radius: 4px; }
        .service-list { list-style: none; margin-top: 10px; }
        .service-list li::before { content: "•"; color: #c62828; font-size: 20px; padding-right: 10px; }

        @media (max-width: 992px) {
          .grid-flex { grid-template-columns: 1fr; }
          .container { flex-direction: column; text-align: center; }
          .small-img { max-width: 250px; }
        }
      `}</style>
      
      <DuctLandingPage/>
    </div>
  );
};

export default ACcleaning;