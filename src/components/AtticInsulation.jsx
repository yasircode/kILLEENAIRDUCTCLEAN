import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";
import Banner from "./Banner";
const AtticInsulation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Why is attic insulation important for Killeen homes?",
      answer: "In Killeen, TX, temperatures can be extreme. Proper insulation keeps your home cool in summer and warm in winter, significantly reducing the load on your HVAC system and lowering energy bills."
    },
    {
      question: "What types of attic insulation services do you offer?",
      answer: "We offer comprehensive services including high-quality blown-in insulation, batt insulation installation, old insulation removal, and thermal barrier assessments tailored to Texas architecture."
    },
    {
      question: "How does attic insulation improve energy efficiency?",
      answer: "It creates a thermal seal that prevents heat transfer. This means your air conditioner doesn't have to run constantly to maintain a comfortable temperature, saving up to 15-20% on utility costs."
    },
    {
      question: "How often should attic insulation be replaced?",
      answer: "Generally, insulation lasts 15-20 years. However, if you notice rising bills, uneven temperatures, or if the material has been damaged by pests or moisture, it's time for a replacement."
    },
    {
      question: "How much does attic insulation cost in Killeen?",
      answer: "Costs vary based on the square footage of your attic and the type of material chosen. We provide free, transparent estimates to give you the best value for your investment."
    }
  ];

  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Attic Insulation Services in Killeen, TX</h1>
          <p className="breadcrumb">Home » Residential Services » Attic Insulation</p>
          <a href="tel:2549983484" className="call-btn">CALL US: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Expert Attic Solutions for Killeen Homeowners</h2>
            <p>
              Proper attic insulation is one of the most important upgrades for improving energy efficiency and indoor comfort. At <strong>Killeen Air Duct Cleaning</strong>, we provide professional attic insulation installation and replacement in Killeen, TX to help homeowners reduce energy waste.
            </p>
            <p>
              Our experienced team uses high-quality insulation materials and modern installation techniques to create a strong thermal barrier that improves overall home efficiency and maintains consistent indoor temperatures year-round.
            </p>
          </div>
          <div className="image">
            <img src="profile3.jpeg" alt="Killeen Air Duct Team" className="styled-img" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTION */}
      <div className="info-grid-container">
        <div className="info-row">
          <div className="info-box">
            <div className="box-header">Attic Insulation Services in Killeen, TX</div>
            <div className="box-body">
              <p>Killeen, with its diverse Texas climate, needs proper insulation to maintain an energy-efficient environment. We offer:</p>
              <ul className="list-items">
                <li>High-quality attic insulation installation</li>
                <li>Expert consultation for insulation type</li>
                <li>Comprehensive attic inspection and cleanup</li>
                <li>Old insulation removal and replacement</li>
                <li>Tailored energy efficiency solutions</li>
              </ul>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">Efficient Insulation Installation</div>
            <div className="box-body">
              <p>Our skilled team excels at insulation installation. We use innovative techniques to provide the most effective barrier for your attic, reducing heat loss in winter and keeping your home cool during hot Killeen summers.</p>
              <a href="tel:2549983484" className="box-call-btn">GET A FREE QUOTE</a>
            </div>
          </div>
        </div>

        <div className="info-row">
          <div className="info-box">
            <div className="box-header">Attic Insulation Removal</div>
            <div className="box-body">
              <p>Removing old or damaged attic insulation is a crucial step towards improving your home's health. We ensure safe removal while minimizing dust and debris, keeping your home environment safe and breathable.</p>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">Top-notch Replacement</div>
            <div className="box-body">
              <p>Inefficient insulation can result in higher bills. Our replacement service focuses on fixing these issues using efficient materials tailored to your home's needs and Texas climate standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Attic Insulation Service: FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
              </div>
              {openFaq === index && (
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
        .residential-page { font-family: 'Segoe UI', Arial, sans-serif; overflow-x: hidden; }

        /* HERO */
        .hero {
          background-image: url("o8.jpeg");
          background-size: cover; background-position: center;
          min-height: 600px; position: relative; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.7); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px; color: white; }
        .overlay h1 { font-size: clamp(24px, 5vw, 40px); font-weight: 700; max-width: 900px; text-transform: uppercase; }
        .call-btn { margin-top: 25px; background-color: #c62828; color: white; padding: 15px 35px; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 4px; transition: 0.3s; }

        /* CONTENT SECTION (Mobile Friendly) */
        .content-section { padding: 60px 20px; background: #fff; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 40px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.7; color: #444; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 28px; }
        .styled-img { width: 100%; max-width: 500px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

        /* BOX GRID */
        .info-grid-container { max-width: 1200px; margin: 20px auto 60px; padding: 0 20px; }
        .info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
        .info-box { border: 1px solid #e0e0e0; border-radius: 6px; overflow: hidden; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .box-header { background: #0e1b4d; color: white; padding: 15px; font-weight: bold; font-size: 18px; text-align: center; }
        .box-body { padding: 25px; line-height: 1.6; font-size: 16px; }
        .list-items { list-style: none; margin-top: 15px; }
        .list-items li::before { content: "•"; color: #c62828; font-weight: bold; margin-right: 10px; }
        .box-call-btn { display: inline-block; margin-top: 15px; background: #c62828; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; }

        /* FAQ */
        .faq-section { background: #f9f9f9; padding: 60px 20px; }
        .faq-container { max-width: 900px; margin: auto; }
        .faq-title { text-align: center; margin-bottom: 35px; color: #0e1b4d; font-size: 30px; }
        .faq-item { background: white; border: 1px solid #eee; margin-bottom: 10px; border-radius: 5px; }
        .faq-question { padding: 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 600; color: #c62828; }
        .faq-answer { padding: 0 20px 20px; color: #555; line-height: 1.6; border-top: 1px solid #f1f1f1; padding-top: 15px; }

        /* 🔥 MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .container { flex-direction: column-reverse; text-align: center; gap: 30px; }
          .info-row { grid-template-columns: 1fr; }
          .text { font-size: 16px; }
          .content-section { padding: 40px 15px; }
        }
      `}</style>
      <Banner/>
      <Any/>
      <DuctLandingPage/>
    </div>
  );
};

export default AtticInsulation;