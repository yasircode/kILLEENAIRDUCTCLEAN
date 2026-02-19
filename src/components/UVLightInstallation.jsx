import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Any from "./Any";
import Banner from "./Banner";
const UVLightInstallation = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a UV Light System?",
      answer: "A UV light system is an advanced air purification technology installed inside your HVAC unit. It uses ultraviolet germicidal irradiation to neutralize bacteria, viruses, and mold spores as they pass through your air ducts."
    },
    {
      question: "How does a UV Light System work in an HVAC unit?",
      answer: "The light emits UV-C rays that penetrate the DNA of microorganisms, effectively destroying them or preventing them from reproducing. This ensures the air circulated in your Killeen home is significantly cleaner."
    },
    {
      question: "How effective are UV Light Systems?",
      answer: "They are highly effective at maintaining a clean HVAC coil and reducing airborne biological contaminants. When combined with quality filtration, they provide the highest level of indoor air quality enhancement."
    },
    {
      question: "What's the lifespan of a UV Light System?",
      answer: "While the system itself lasts many years, the UV bulbs typically need to be replaced every 12 to 24 months to maintain their germicidal effectiveness."
    }
  ];

  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Advanced UV Light System Installation in Killeen, TX</h1>
          <p className="breadcrumb">Home » Residential Services » UV Air Purification</p>
          <a href="tel:2549983484" className="call-btn">CALL US: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Killeen's Experts in Ultraviolet Disinfection</h2>
            <p>
              Creating a clean and healthy indoor environment is essential for your family. At <strong>Killeen Air Duct Cleaning</strong>, we provide professional UV light system installation in Killeen, TX to help eliminate airborne contaminants at the source.
            </p>
            <p>
              Modern HVAC UV light systems are designed to stop mold growth and neutralize viruses before they circulate through your rooms. By targeting biological pollutants inside your ventilation system, we help you breathe easier and keep your HVAC unit running more efficiently.
            </p>
          </div>
          <div className="image">
            <img src="profile3.jpeg" alt="Killeen Air Duct Team" className="styled-img" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTION (SEO Content based on Screenshots) */}
      <div className="info-grid-container">
        <div className="info-row">
          <div className="info-box">
            <div className="box-header">Ultraviolet Disinfection Installation</div>
            <div className="box-body">
              <p>Embrace a healthier indoor environment with our expert UV-C technology setup. This specialized technology eliminates harmful particles that traditional filters might miss.</p>
              <ul className="list-items">
                <li>Elimination of Odors & Allergens</li>
                <li>Reduction in Airborne Bacteria</li>
                <li>Enhanced HVAC Lifespan</li>
                <li>Tailored Installation Strategy</li>
              </ul>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">Professional UV System Setup</div>
            <div className="box-body">
              <p>Our trained technicians carry out each setup process with meticulous attention to detail. We don't just install; we guide you on how to maintain the system for optimal operation and maximum health benefits.</p>
              <p><strong>Protect your loved ones today</strong> with a system designed for Texas homes.</p>
              <a href="tel:2549983484" className="box-call-btn">SCHEDULE AN APPOINTMENT</a>
            </div>
          </div>
        </div>

        <div className="info-row">
          <div className="info-box">
            <div className="box-header">Indoor Air Quality Enhancement</div>
            <div className="box-body">
              <p>Live and breathe better with our comprehensive air quality services. We use the latest tools to analyze your indoor environment and devise effective improvement strategies that go beyond just cleaning.</p>
            </div>
          </div>
          <div className="info-box">
            <div className="box-header">UV Air Purifier Integration</div>
            <div className="box-body">
              <p>Integrating a UV air purifier into your existing HVAC system is a cost-effective way to boost health. You'll notice an immediate improvement in air freshness and a reduction in seasonal allergy symptoms.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">UV Light Installation: FAQs</h2>
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
        .residential-page { font-family: 'Segoe UI', Roboto, sans-serif; overflow-x: hidden; color: #333; }

        /* HERO */
        .hero {
          background-image: url("o7.jpeg");
          background-size: cover; background-position: center;
          min-height: 450px; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.7); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; color: white; }
        .overlay h1 { font-size: clamp(24px, 5vw, 42px); font-weight: 800; max-width: 900px; line-height: 1.2; }
        .call-btn { margin-top: 25px; background-color: #c62828; color: white; padding: 15px 35px; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 4px; transition: 0.3s; box-shadow: 0 4px 15px rgba(198, 40, 40, 0.4); }

        /* CONTENT */
        .content-section { padding: 60px 20px; background: #fff; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 40px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.7; color: #444; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 32px; font-weight: 700; }
        .image { flex: 1; }
        .styled-img { width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

        /* GRID BOXES */
        .info-grid-container { max-width: 1200px; margin: 20px auto 60px; padding: 0 20px; }
        .info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
        .info-box { border: 1px solid #eef0f2; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s; }
        .info-box:hover { transform: translateY(-5px); }
        .box-header { background: #0e1b4d; color: white; padding: 18px; font-weight: bold; font-size: 20px; text-align: center; }
        .box-body { padding: 25px; line-height: 1.6; font-size: 16px; }
        .list-items { list-style: none; margin-top: 15px; }
        .list-items li::before { content: "✓"; color: #c62828; font-weight: bold; margin-right: 10px; }
        .box-call-btn { display: inline-block; margin-top: 20px; background: #c62828; color: white; padding: 10px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; }

        /* FAQ */
        .faq-section { background: #f4f7f9; padding: 70px 20px; }
        .faq-container { max-width: 900px; margin: auto; }
        .faq-title { text-align: center; margin-bottom: 40px; color: #0e1b4d; font-size: 32px; }
        .faq-item { background: white; margin-bottom: 12px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .faq-question { padding: 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 600; color: #c62828; font-size: 18px; }
        .faq-answer { padding: 0 20px 20px; color: #555; line-height: 1.6; border-top: 1px solid #f9f9f9; padding-top: 15px; }

        /* 🔥 MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .container { flex-direction: column-reverse; text-align: center; gap: 30px; }
          .info-row { grid-template-columns: 1fr; }
          .text h2 { font-size: 26px; }
          .hero { min-height: 380px; }
          .box-header { font-size: 18px; }
        }
      `}</style>
      <Banner/>
      <Any/>
      <DuctLandingPage/>
    </div>
  );
};

export default UVLightInstallation;