import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Banner from "./Banner";
import Any from "./Any";

const HVACInstallation = () => {
  // State for Accordion FAQs
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does HVAC installation and repair involve?",
      answer: "HVAC installation involves setting up the furnace, AC unit, and ductwork. Repair includes diagnosing issues like faulty thermostats, refrigerant leaks, or broken compressors to restore comfort."
    },
    {
      question: "How often should HVAC systems be serviced?",
      answer: "We recommend servicing your system twice a year—once in the spring for AC and once in the fall for heating—to ensure peak performance in Killeen's weather."
    },
    {
      question: "What are the signs that my HVAC system needs repairs?",
      answer: "Common signs include unusual noises, inconsistent temperatures, high energy bills, and frequent cycling or poor airflow."
    },
    {
      question: "What benefits do regular HVAC maintenance provide?",
      answer: "Maintenance extends the lifespan of your unit, lowers energy costs, prevents expensive emergency repairs, and improves indoor air quality."
    },
    {
      question: "Why choose Killeen Air Duct Cleaning for HVAC services?",
      answer: "We are local experts dedicated to Killeen residents. We provide transparent pricing, certified technicians, and a satisfaction guarantee on every job."
    }
  ];

  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Killeen Air Conditioning And Heating Killeen, Tx</h1>
          <p className="breadcrumb">Home » HVAC Services » Installation & Repair</p>
          <a href="tel:2549983484" className="call-btn">CALL US: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Reliable HVAC Solutions in Killeen, TX</h2>
            <p>
              A fireplace or heating system adds comfort, but without proper maintenance, systems collect soot and debris. At <strong>Killeen Air Duct Cleaning</strong>, we ensure your home stays safe and warm.
            </p>
            <p>
              Our trained technicians provide deep inspection and cleaning to remove hazardous buildup. Trust us for top-tier HVAC performance all year round.
            </p>
          </div>
          <div className="image">
            <img src="profile3.jpeg" alt="Killeen Air Duct Team" className="square-img" />
          </div>
        </div>
      </section>
<Banner/>
      <Any/>
      {/* STEP BY STEP DUAL BOX LAYOUT (As per your Screenshots) */}
      <div className="dual-box-container">
        
        {/* Row 1 */}
        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">Elevate Your Comfort with HVAC Sanitation</div>
            <div className="card-body">
              <p>A well-functioning HVAC system is the backbone of a comfortable home. We aim to <strong>improve efficiency, extend lifespan</strong>, and save you from unexpected costs.</p>
              <p>Our experts use the latest sanitation techniques to remove dirt, grime, and blockages that compromise your health.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Killeen's Best Residential Services</div>
            <div className="card-body">
              <p>We’re proud to offer top-rated services to the Killeen community. We believe a clean home is a happy home, and we’re committed to making yours the cleanest.</p>
              <ul className="service-list">
                <li>HVAC Sanitation</li>
                <li>Dust and Allergen Removal</li>
                <li>Mold Remediation</li>
                <li>Ductwork Inspection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">Prompt and Efficient Debris Removal</div>
            <div className="card-body">
              <p>Accumulated debris in air ducts can impact performance. Our team uses specialized tools to meticulously clean your ducts, ensuring they are free from dust and dirt.</p>
              <a href="tel:2549983484" className="inline-call">CALL US: (254) 998-3484</a>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Ductwork Repair & Replacement</div>
            <div className="card-body">
              <p>Killeen trusts us for their ductwork needs. We understand the unique requirements of Texas homes and provide reliable restoration services.</p>
              <ul className="service-list">
                <li>Ductwork Repair Solutions</li>
                <li>Air Duct Replacement</li>
                <li>HVAC Duct Restoration</li>
                <li>Ventilation System Renewal</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* FAQ SECTION WITH ANSWERS */}
      <section className="faq-section">
        <div className="faq-container">
          <h2>HVAC Installation and Repair: FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; background: #fff; color: #333; }

        /* HERO */
        .hero {
          background-image: url("o5.jpeg");
          background-size: cover; background-position: center;
          min-height: 450px; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.65); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; color: white; }
        .overlay h1 { font-size: 35px; font-weight: 700; max-width: 900px; }

        /* INTRO */
        .content-section { padding: 60px 20px; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 50px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.7; }
        .square-img { width: 100%; max-width: 400px; aspect-ratio: 1/1; object-fit: cover; border-radius: 10px; }

        /* DUAL BOX STYLE */
        .dual-box-container { max-width: 1200px; margin: 40px auto; padding: 0 20px; }
        .grid-flex { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px; }
        .info-card { border: 1px solid #ddd; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
        .card-header { background: #0e1b4d; color: white; padding: 18px; text-align: center; font-weight: bold; font-size: 19px; }
        .card-body { padding: 25px; font-size: 16px; line-height: 1.6; }
        
        .service-list { list-style: none; margin-top: 15px; }
        .service-list li { padding-left: 25px; position: relative; margin-bottom: 10px; font-weight: 500; }
        .service-list li::before { content: "✔"; position: absolute; left: 0; color: #c62828; font-weight: bold; }

        .inline-call { display: inline-block; margin-top: 15px; background: #c62828; color: white; padding: 10px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; }

        /* FAQ */
        .faq-section { background: #f9f9f9; padding: 60px 20px; }
        .faq-container { max-width: 900px; margin: auto; }
        .faq-container h2 { text-align: center; margin-bottom: 30px; color: #0e1b4d; }
        .faq-item { background: white; border: 1px solid #eee; margin-bottom: 10px; cursor: pointer; border-radius: 5px; }
        .faq-question { padding: 18px; display: flex; justify-content: space-between; font-weight: bold; color: #c62828; }
        .faq-answer { padding: 0 18px 18px; color: #555; line-height: 1.5; border-top: 1px solid #f1f1f1; padding-top: 10px; }

        /* MOBILE */
        @media (max-width: 992px) {
          .container { flex-direction: column; text-align: center; }
          .grid-flex { grid-template-columns: 1fr; }
          .overlay h1 { font-size: 26px; }
        }
      `}</style>
      
      <DuctLandingPage/>
    </div>
  );
};

export default HVACInstallation;