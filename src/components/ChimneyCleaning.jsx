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
      question: "Why is chimney cleaning essential for Killeen homes?",
      answer: "Cleaning is vital to prevent hazardous creosote fires, manage heat transfer effectively, and ensure your fireplace operates at peak performance during Texas's cooler months."
    },
    {
      question: "How often should I get my chimney cleaned?",
      answer: "We recommend a professional inspection and sweep at least once a year, or more frequently if you use your fireplace as a primary heating source throughout the winter."
    },
    {
      question: "Can I clean the chimney myself?",
      answer: "DIY cleaning often misses dangerous soot buildup in the flue lining. Our professional technicians use specialized tools and cameras to ensure every blockage and fire hazard is removed safely."
    },
    {
      question: "What signs indicate that my chimney needs cleaning?",
      answer: "Common signs include a strong smoky odor, visible soot buildup, difficulty starting a fire, or seeing black flaky debris falling into the firebox."
    }
  ];

  return (
    <div className="residential-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>Professional Chimney Cleaning & Safety Inspections in Killeen, TX</h1>
          <p className="breadcrumb">Home » Residential Services » Chimney Sweep</p>
          <a href="tel:2549983484" className="call-btn">CALL US: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Reliable Chimney Sweeping & Maintenance</h2>
            <p>
              A cozy fireplace is the heart of a home during Central Texas's winter, providing warmth and a relaxing atmosphere. However, without regular maintenance, your chimney can become a hidden danger. Over time, hazardous <strong>creosote buildup and debris</strong> accumulate, leading to fire risks and ventilation issues.
            </p>
            <p>
              At <strong>Killeen Air Duct Cleaning</strong>, we specialize in comprehensive chimney services. Our expert team ensures your flue is clear and your ventilation is perfect, so your family stays safe while enjoying the fireside.
            </p>
          </div>
          <div className="image">
            <img src="profile3.jpeg" alt="Professional Chimney Sweep Killeen" className="main-image" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTION (SEO Content based on Screenshots) */}
      <section className="service-grid-area">
        <div className="grid-flex">
          
          <div className="service-card">
            <div className="card-title">Chimney Lining Inspection & Repair: The Safety Net</div>
            <div className="card-body">
              <p>The chimney lining is more critical than most homeowners realize. It acts as the primary barrier between heat and your home's structure. Why prioritize its health?</p>
              <ul className="feature-list">
                <li><strong>Safety:</strong> Properly maintained linings prevent hazardous structure fires.</li>
                <li><strong>Heat Management:</strong> It controls heat transfer, protecting your interior walls.</li>
                <li><strong>Performance:</strong> Ensures a smooth, smoke-free fireplace experience.</li>
              </ul>
              <p>An unchecked lining can pose severe risks. Prioritize your safety by keeping it in top shape with our specialized Killeen repair services.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-title">Your Go-To for Chimney Cleaning in Killeen</div>
            <div className="card-body">
              <p>Clean chimneys make all the difference in efficiency and safety. We don't just sweep; we restore your system to prime condition using industry-leading tools.</p>
              <ul className="feature-list">
                <li><strong>Better Fires:</strong> Experience more efficient and vibrant burns.</li>
                <li><strong>Risk Reduction:</strong> Minimize blockages and the danger of unexpected fires.</li>
                <li><strong>Longevity:</strong> Regular maintenance prolongs the life of your entire chimney system.</li>
              </ul>
              <div className="cta-box">
                <p>Looking for a clean start this season? Let's connect and secure your home.</p>
                <a href="tel:2549983484" className="bold-call">GET A FREE QUOTE</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION (From Screenshots) */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-heading">Chimney Cleaning: FAQs</h2>
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
        .hero { background-image: url("047.jpeg"); background-size: cover; background-position: center; min-height: 480px; display: flex; align-items: center; justify-content: center; position: relative; }
        .overlay { background: rgba(0, 0, 0, 0.75); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; color: white; }
        .overlay h1 { font-size: clamp(24px, 5vw, 40px); font-weight: 800; max-width: 900px; line-height: 1.2; }
        .call-btn { margin-top: 30px; background-color: #c62828; color: white; padding: 16px 40px; text-decoration: none; font-size: 18px; font-weight: bold; border-radius: 5px; transition: 0.3s; }

        /* INTRO */
        .content-section { padding: 80px 20px; background: #fff; }
        .container { max-width: 1200px; margin: auto; display: flex; align-items: center; gap: 50px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.8; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 32px; }
        .main-image { width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .image { flex: 0.8; }

        /* GRID BOXES */
        .service-grid-area { padding: 40px 20px 80px; background: #f8f9fa; }
        .grid-flex { max-width: 1200px; margin: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .service-card { background: white; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .card-title { background: #0e1b4d; color: white; padding: 22px; text-align: center; font-size: 20px; font-weight: bold; }
        .card-body { padding: 30px; }
        .feature-list { list-style: none; margin: 20px 0; }
        .feature-list li { position: relative; padding-left: 30px; margin-bottom: 12px; font-weight: 600; }
        .feature-list li::before { content: "✔"; position: absolute; left: 0; color: #c62828; font-weight: 900; }
        .bold-call { display: block; background: #c62828; color: white; padding: 15px; text-align: center; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; font-size: 18px; }

        /* FAQ Section */
        .faq-section { padding: 80px 20px; background: #fff; }
        .faq-container { max-width: 900px; margin: auto; }
        .faq-heading { text-align: center; margin-bottom: 40px; color: #0e1b4d; font-size: 36px; }
        .faq-item { border-bottom: 1px solid #eee; margin-bottom: 10px; }
        .faq-question { padding: 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: bold; color: #c62828; font-size: 18px; transition: 0.2s; }
        .faq-answer { padding: 0 20px 20px; line-height: 1.6; color: #555; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 992px) {
          .container { flex-direction: column-reverse; text-align: center; }
          .grid-flex { grid-template-columns: 1fr; }
          .hero { min-height: 400px; }
        }
      `}</style>
<Any/>
      <DuctLandingPage/>
    </div>
  );
};

export default ChimneyCleaning;