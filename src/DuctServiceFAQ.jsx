import React, { useState } from 'react';
import './DuctServiceFAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Added a dedicated toggle function
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`faq-wrapper ${isOpen ? 'active' : ''}`}>
      <div 
        className="faq-header" 
        onClick={toggleOpen}
        role="button" 
        aria-expanded={isOpen}
      >
        <div className="faq-question-content">
          <span className="faq-icon-circle">?</span>
          <span className="faq-question-text">{question}</span>
        </div>
        {/* Changed to standard hyphen for better compatibility */}
        <span className="faq-toggle-plus">{isOpen ? '-' : '+'}</span>
      </div>
      
      {/* Smooth reveal: You might want to handle this in CSS for animations */}
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const DuctServiceFAQ = () => {
  const faqData = [
    {
      question: "Why Is Professional Air Duct Cleaning Important In Killeen?",
      answer: "Professional air duct cleaning removes dust, allergens, and Central Texas pollutants like Cedar pollen from your HVAC system. This improves indoor air quality and enhances system efficiency."
    },
    { 
      question: "How Often Should Air Ducts Be Cleaned?", 
      answer: "We recommend cleaning air ducts every 3 to 5 years. However, in Killeen, homes with pets or allergy sufferers may need it every 2 to 3 years." 
    },
    { 
      question: "What Is The Process Of Air Duct Cleaning?", 
      answer: "We use high-powered negative air pressure vacuums and agitation brushes to clear debris from the entire duct system." 
    },
    { 
      question: "What Techniques And Tools Does Killeen Air Duct Cleaning Use?", 
      answer: "We use industry-leading HEPA-filtered negative air machines and mechanical brushes for 'source removal' cleaning." 
    },
    { 
      question: "How Can I Schedule A Service With Killeen Air Duct Cleaning?", 
      answer: "You can call us directly or use our online contact form to get a free estimate today." 
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-main-title">Killeen Duct Cleaning FAQ</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuctServiceFAQ;