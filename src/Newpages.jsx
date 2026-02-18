import React, { useState } from 'react';
import './Newpages.css';

const Newpages = () => {
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
            <img src="man.webp" alt="Kitchen Duct Cleaning" />
          </div>
          <div className="text-box">
            <h2 className="title-bold">Commercial Air Duct Cleaning San Antonio – Clear Ducts, Peak Performance</h2>
            <p className="description">Air duct cleaning may not be the first thing on your to-do list, but it’s essential for the overall well-being of your business. That’s where we come in.</p>
            <p className="description">Our technicians employ advanced methodologies, such as <strong>air whips </strong> and <strong> skipper balls, paired with robust, HEPA-filtered vacuums</strong>for comprehensive cleansing.</p>
            <p className="description">This ensures your ducts are free from pollutants, allergens, and even potential microbial growth.</p>
                <p className="description">The result? An HVAC system that works at peak efficiency, lowering your energy expenses, and fostering a workspace that breathes productivity.</p>
            <button className="red-btn align-right">GET AN ESTIMATE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newpages;