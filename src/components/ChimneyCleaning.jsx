import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";

const ChimneyCleaning = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Why is chimney cleaning essential for Killeen & Temple homes?",
      answer: "Cleaning is vital to prevent hazardous creosote fires, especially after heavy use during Central Texas winter snaps. It ensures your fireplace operates safely in Killeen, Temple, and Belton homes."
    },
    {
      question: "How often should I get my chimney cleaned in Bell County?",
      answer: "We recommend a professional inspection and sweep at least once a year. Homeowners in Harker Heights and Copperas Cove who use wood-burning stoves as a primary heat source may need it twice a season."
    },
    {
      question: "Can I clean the chimney myself?",
      answer: "DIY cleaning often misses dangerous soot buildup. Our professional technicians use specialized cameras to ensure every blockage and fire hazard is removed safely for residents across Nolanville and Salado."
    },
    {
      question: "What signs indicate that my chimney needs cleaning?",
      answer: "Common signs include a strong smoky odor, difficulty starting a fire, or seeing black flaky debris (creosote) falling into the firebox in your Killeen or Belton property."
    }
  ];

  return (
    <div className="residential-page">
      
      {/* HERO SECTION - Optimized for Multiple Cities */}
      <section className="hero">
        <div className="overlay">
          <h1>Expert Chimney Cleaning in Killeen, Temple & Belton, TX</h1>
          <p className="breadcrumb">Home » Residential Services » Chimney Sweep & Inspection</p>
          <a href="tel:2549983484" className="call-btn">BOOK A SWEEP: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Reliable Chimney Sweeping for Central Texas Families</h2>
            <p>
              A cozy fireplace is the heart of a home during Central Texas's winter, providing warmth to families in <strong>Killeen, Harker Heights, and Copperas Cove</strong>. However, without regular maintenance, your chimney can become a hidden danger. Over time, hazardous <strong>creosote buildup and soot</strong> accumulate, leading to fire risks.
            </p>
            <p>
              At <strong>Killeen Air Duct Cleaning</strong>, we specialize in comprehensive chimney services for <strong>Temple and Belton</strong>. Our expert team ensures your flue is clear and your ventilation is perfect, so your family stays safe while enjoying the fireside.
            </p>
          </div>
          <div className="image">
            <img src="profile3.jpeg" alt="Professional Chimney Sweep Killeen & Temple TX" className="main-image" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTION - Location Targeted */}
      <section className="service-grid-area">
        <div className="grid-flex">
          
          <div className="service-card">
            <div className="card-title">Chimney Lining & Safety: Killeen & Belton</div>
            <div className="card-body">
              <p>The chimney lining is your primary barrier between extreme heat and your home's structure. We serve <strong>Killeen and Fort Cavazos</strong> with precision repairs.</p>
              <ul className="feature-list">
                <li><strong>Fire Prevention:</strong> We remove creosote which causes 90% of chimney fires.</li>
                <li><strong>Heat Management:</strong> Protecting the walls of your <strong>Temple, TX</strong> home.</li>
                <li><strong>Smoke Control:</strong> Ensuring proper draft and air circulation.</li>
              </ul>
              <p>An unchecked lining can pose severe risks. Prioritize your safety by keeping it in top shape with our specialized <strong>Bell County</strong> repair services.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-title">Top-Rated Chimney Sweep in Temple & Cove</div>
            <div className="card-body">
              <p>Clean chimneys make all the difference in efficiency. We provide mess-free sweeping services for residents in <strong>Copperas Cove and Harker Heights</strong>.</p>
              <ul className="feature-list">
                <li><strong>Better Fires:</strong> Enjoy vibrant, cleaner burns this winter.</li>
                <li><strong>Blockage Removal:</strong> We clear bird nests and debris common in <strong>Central Texas</strong>.</li>
                <li><strong>Longevity:</strong> Routine maintenance saves you thousands in future repairs.</li>
              </ul>
              <div className="cta-box">
                <p>Ready for a safe fire season in <strong>Temple or Belton</strong>? Let's secure your home.</p>
                <a href="tel:2549983484" className="bold-call">GET A FREE QUOTE</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-heading">Bell County Chimney Cleaning: FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{openFaq === index ? "−" : "+"}</span>
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
        .residential-page { font-family: 'Segoe UI', Roboto, sans-serif; color: #333; overflow-x: hidden; }

        /* HERO */
        .hero { background-image: url("047.jpeg"); background-size: cover; background-position: center; min-height: 500px; display: flex; align-items: center; justify-content: center; position: relative; }
        .overlay { background: rgba(0, 0, 0, 0.75); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; color: white; }
        .overlay h1 { font-size: clamp(26px, 5vw, 42px); font-weight: 800; max-width: 950px; line-height: 1.2; text-transform: uppercase; }
        .call-btn { margin-top: 30px; background-color: #c62828; color: white; padding: 18px 45px; text-decoration: none; font-size: 19px; font-weight: bold; border-radius: 5px; transition: 0.3s; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
        .call-btn:hover { background-color: #a51d1d; transform: translateY(-2px); }

        /* INTRO */
        .content-section { padding: 80px 20px; background: #fff; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 60px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.8; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 34px; font-weight: 700; }
        .main-image { width: 100%; border-radius: 15px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .image { flex: 0.8; }

        /* GRID BOXES */
        .service-grid-area { padding: 80px 20px; background: #f8f9fa; }
        .grid-flex { max-width: 1200px; margin: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .service-card { background: white; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
        .card-title { background: #0e1b4d; color: white; padding: 25px; text-align: center; font-size: 22px; font-weight: bold; }
        .card-body { padding: 35px; }
        .feature-list { list-style: none; margin: 25px 0; }
        .feature-list li { position: relative; padding-left: 35px; margin-bottom: 15px; font-weight: 600; font-size: 17px; }
        .feature-list li::before { content: "✔"; position: absolute; left: 0; color: #c62828; font-weight: 900; font-size: 20px; }
        .bold-call { display: block; background: #c62828; color: white; padding: 16px; text-align: center; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 25px; font-size: 18px; transition: 0.3s; }
        .bold-call:hover { background: #0e1b4d; }

        /* FAQ Section */
        .faq-section { padding: 80px 20px; background: #fff; }
        .faq-container { max-width: 1000px; margin: auto; }
        .faq-heading { text-align: center; margin-bottom: 40px; color: #0e1b4d; font-size: 36px; font-weight: 800; }
        .faq-item { border-bottom: 1px solid #eee; margin-bottom: 15px; background: #fdfdfd; border-radius: 8px; }
        .faq-question { padding: 22px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: bold; color: #c62828; font-size: 19px; }
        .faq-answer { padding: 0 22px 22px; line-height: 1.7; color: #555; font-size: 17px; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .container { flex-direction: column-reverse; text-align: center; gap: 30px; }
          .grid-flex { grid-template-columns: 1fr; }
          .hero { min-height: 450px; }
          .overlay h1 { font-size: 28px; }
        }
      `}</style>

      <Any/>
      <DuctLandingPage/>
    </div>
  );
};

export default ChimneyCleaning;