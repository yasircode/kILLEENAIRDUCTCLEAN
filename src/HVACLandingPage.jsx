import React, { useState } from 'react';
import './HVACLandingPage.css';

const HVACLandingPage = () => {
  const [activeTab, setActiveTab] = useState('annual');

  const specialties = [
    "AC Cleaning Service", "Attic Insulation Services",
    "Dryer Vent Cleaning", "Commercial Air Duct Cleaning",
    "HVAC Installation & Repair", "Air Duct Repair & Replacement",
    "UV Light System Installation", "Residential Air Duct Cleaning"
  ];

  const maintenanceContent = {
    annual: "Just like your home needs regular dusting, your air ducts collect dust over time. We recommend a basic air duct cleaning once a year. This service involves a thorough vacuuming to remove any loose dust and debris, ensuring the air you breathe is fresh and clean.",
    deep: "For peak system performance and air quality, a more intensive cleaning is advisable every 3 to 5 years using rotary brushes and disinfection solutions.",
    custom: "We understand every home is unique. We provide initial inspections to determine the specific needs of your HVAC system for a personalized approach.",
    pricing: "We believe in upfront pricing. Deep cleaning usually ranges from $50 to $100 per duct, improving both air quality and system longevity."
  };

  return (
    <div className="page-wrapper">
      
      {/* SECTION 1: RESIDENTIAL CLEANING */}
      <section className="section-container">
        <div className="flex-layout">
          <div className="image-box">
            <img src="024.jpeg" alt="Kitchen Duct Cleaning" />
          </div>
          <div className="text-box">
            <h2 className="title-bold">RESIDENTIAL AIR DUCT CLEANING IN KILLEEN, TX – CLEAN AIR, HEALTHY HOME</h2>
            <p className="description">Air ducts – they’re the lungs of your home. At America Air Duct Cleaning, based in KILLEEN, Texas, we understand this.</p>
            <p className="description">We use advanced techniques like <strong>negative pressure cleaning</strong> and employ tools such as <strong>HEPA-filtered vacuums</strong> to deep clean your home's air ducts.</p>
            <p className="description">Air duct cleaning offers several benefits; it reduces allergens, minimizes musty odors, and contributes to energy savings.</p>
            <button className="red-btn align-right">GET AN ESTIMATE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HVACLandingPage;