import React, { useState } from "react";
import DuctLandingPage from "../DuctLandingPage";
import Banner from "./Banner";
import Any from "./Any";

const ACcleaning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does your AC cleaning service include in Central Texas?",
      answer: "Our professional service is tailored for Texas dust. It includes deep evaporator and condenser coil cleaning, blower fan sanitation, drain line flushing to prevent clogs, and a full system performance check to ensure maximum cooling."
    },
    {
      question: "How often should I schedule an AC cleaning in Bell County?",
      answer: "In Killeen’s dusty and hot climate, we recommend a professional cleaning at least once a year. For homes in high-traffic areas like Temple or near Fort Cavazos, bi-annual cleaning helps maintain perfect air quality."
    },
    {
      question: "How does AC cleaning lower my electricity bills?",
      answer: "When coils are clean, the system transfers heat more easily. This reduces the workload on your compressor in the 100°F Killeen heat, lowering energy consumption and your monthly utility costs by up to 15%."
    },
    {
      question: "What are the signs that my AC needs immediate cleaning?",
      answer: "Common signs include weak airflow in certain rooms, musty odors from vents, unusually high energy bills, or ice formation on the outdoor unit coils even during hot summer days."
    }
  ];

  return (
    <div className="residential-page">
      
      {/* HERO SECTION - City Targeted */}
      <section className="hero">
        <div className="overlay">
          <h1>AC Cleaning & Coil Sanitation in Killeen, Temple & Belton</h1>
          <p className="breadcrumb">Home » Residential Services » Professional AC Cleaning</p>
          <a href="tel:2549983484" className="call-btn">BOOK A CLEANING: (254) 998-3484</a>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="content-section">
        <div className="container">
          <div className="text">
            <h2>Expert AC Maintenance for Killeen Homeowners</h2>
            <p>
              Welcome to <strong>Killeen Air Duct Cleaning</strong>, your local authority for professional AC cleaning services in <strong>Killeen, Temple, and Belton, TX</strong>. We specialize in removing the deep-seated grime that Texas summers leave behind.
            </p>
            <p>
              An efficient AC is more than a luxury; it's a health necessity. Our technicians provide deep sanitation of your internal components, ensuring that the air circulating in your <strong>Harker Heights or Copperas Cove</strong> home is free from allergens, mold, and dust.
            </p>
          </div>
          <div className="image-box">
            <img src="profile3.jpeg" alt="AC Cleaning Experts in Killeen TX" className="square-img" />
          </div>
        </div>
      </section>

      {/* DUAL BOX SECTIONS - Service Features */}
      <div className="dual-box-container">
        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">Advanced Coil Cleaning</div>
            <div className="card-body">
              <p>Dirty coils are the #1 cause of AC failure in <strong>Killeen and Fort Cavazos</strong>. We use eco-friendly foam cleaners to dissolve buildup, restoring your unit’s cooling power instantly without damaging sensitive fins.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Residential Sanitation</div>
            <div className="card-body">
              <ul className="service-list">
                <li><strong>Evaporator Coil</strong> Deep Clean</li>
                <li><strong>Condenser</strong> Power Wash</li>
                <li><strong>Blower Motor</strong> Dust Removal</li>
                <li><strong>Algaecide</strong> Drain Treatment</li>
                <li>Serving Killeen, Temple & Belton</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid-flex">
          <div className="info-card">
            <div className="card-header">Drain Line Flushing</div>
            <div className="card-body">
              <p>Humidity in <strong>Central Texas</strong> causes algae growth in AC drain lines, leading to water damage. Our high-pressure flush ensures your system drains properly and prevents costly ceiling leaks.</p>
            </div>
          </div>
          <div className="info-card">
            <div className="card-header">Health & Air Quality</div>
            <div className="card-body">
              <p>A clean AC means fewer allergens. Our sanitation service eliminates bacteria and mold spores in <strong>Harker Heights & Nolanville</strong>, making it perfect for families with asthma or allergies.</p>
            </div>
          </div>
        </div>
      </div>

      <Banner/>
      <Any/>

      {/* INTERACTIVE FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 style={{textAlign: 'center', marginBottom: '30px', color: '#0e1b4d', fontSize: '32px'}}>AC Cleaning & Maintenance: FAQs</h2>
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
          min-height: 450px; display: flex; align-items: center; justify-content: center;
        }
        .overlay { background: rgba(0, 0, 0, 0.75); width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; padding: 20px; text-align: center; }
        .overlay h1 { font-size: clamp(24px, 5vw, 36px); text-transform: uppercase; font-weight: 800; max-width: 900px; }
        .breadcrumb { margin: 10px 0; font-size: 16px; opacity: 0.9; }

        /* INTRO & SQUARE IMAGE */
        .content-section { padding: 80px 20px; }
        .container { max-width: 1100px; margin: auto; display: flex; align-items: center; gap: 50px; }
        .text { flex: 1.2; font-size: 18px; line-height: 1.8; }
        .text h2 { color: #0e1b4d; margin-bottom: 20px; font-size: 30px; font-weight: 700; }
        .image-box { flex: 0.8; display: flex; justify-content: center; }
        
        .square-img { 
          width: 100%; 
          max-width: 400px; 
          aspect-ratio: 1 / 1; 
          object-fit: cover; 
          border-radius: 15px; 
          box-shadow: 0 15px 30px rgba(0,0,0,0.1); 
        }

        /* BOXES */
        .dual-box-container { max-width: 1100px; margin: 20px auto 60px; padding: 0 20px; }
        .grid-flex { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
        .info-card { border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: 0.3s; }
        .info-card:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .card-header { background: #0e1b4d; color: white; padding: 20px; text-align: center; font-weight: bold; font-size: 20px; }
        .card-body { padding: 25px; line-height: 1.7; font-size: 17px; }
        
        /* FAQ ACCORDION */
        .faq-section { background: #f4f7fa; padding: 70px 20px; }
        .faq-container { max-width: 900px; margin: auto; }
        .faq-item { background: white; border: 1px solid #e0e6ed; margin-bottom: 15px; border-radius: 8px; cursor: pointer; transition: 0.3s; }
        .faq-item:hover { border-color: #c62828; }
        .faq-question { padding: 20px 25px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; color: #c62828; font-size: 19px; }
        .faq-answer { max-height: 0; overflow: hidden; transition: 0.3s ease-out; padding: 0 25px; }
        .faq-answer.active { max-height: 250px; padding: 15px 25px 25px; border-top: 1px solid #f1f1f1; }
        .faq-answer p { font-size: 17px; line-height: 1.6; color: #555; }

        .call-btn { margin-top: 30px; background: #c62828; color: white; padding: 15px 40px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block; font-size: 18px; transition: 0.3s; }
        .call-btn:hover { background: #0e1b4d; }
        
        .service-list { list-style: none; }
        .service-list li { margin-bottom: 8px; font-weight: 500; }
        .service-list li::before { content: "✓"; color: #c62828; font-weight: 900; padding-right: 12px; }

        /* 🔥 MOBILE OPTIMIZATION */
        @media (max-width: 992px) {
          .container { flex-direction: column-reverse; text-align: center; gap: 30px; }
          .grid-flex { grid-template-columns: 1fr; }
          .square-img { max-width: 320px; }
          .overlay h1 { font-size: 26px; }
          .content-section { padding: 50px 20px; }
        }
      `}</style>
      <DuctLandingPage/>
    </div>
  );
};

export default ACcleaning;