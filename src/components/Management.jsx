import React from 'react';
import './management.css';

const Management = () => {
  const coreServices = [
    { name: "Air Duct Cleaning", description: "Comprehensive cleaning of air ducts to remove dust, debris, and contaminants for improved indoor air quality." },
    { name: "HVAC Cleaning", description: "Thorough cleaning of heating, ventilation, and air conditioning systems to ensure efficient operation and better air flow." },
    { name: "Dryer Vent Cleaning", description: "Removal of lint and debris from dryer vents to prevent fire hazards and improve dryer efficiency." },
    { name: "Chimney & Fireplace", description: "Professional cleaning and maintenance of chimneys and fireplaces to ensure safe and efficient operation." },
    { name: "Hood Cleaning", description: "Deep cleaning of kitchen exhaust hoods and vents to remove grease and maintain hygiene standards." },
    { name: "Air Duct Replacement", description: "Replacement of damaged or outdated air ducts with new, efficient systems for optimal performance." },
    { name: "Attic Insulation", description: "Installation and improvement of attic insulation to enhance energy efficiency and temperature control." }
  ];

  const airQuality = [
    { name: "UV Light HVAC Ionization", description: "Advanced UV light technology integrated into HVAC systems to neutralize airborne pathogens and improve air purity." },
    { name: "Whole-Home Air Scrubber", description: "Installation of air scrubbers that capture and remove pollutants, allergens, and odors throughout the home." },
    { name: "VOC & Odor Removal", description: "Specialized systems designed to eliminate volatile organic compounds and unpleasant odors." }
  ];

  return (
    <div className="mgmt-wrapper">
      <div className="mgmt-container">
        
        {/* Section 1 */}
        <div className="section-intro">
          <p className="overline">Premium Maintenance</p>
          <h2 className="section-title">Expert HVAC & Duct Services</h2>
          <div className="title-bar blue"></div>
        </div>

        <div className="cards-layout">
          {coreServices.map((item, i) => (
            <div key={i} className="service-card-new">
              <div className="accent-top blue"></div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <div className="section-intro mt-lg">
          <p className="overline">High-End Solutions</p>
          <h2 className="section-title">Advanced Air Quality</h2>
          <div className="title-bar red"></div>
        </div>

        <div className="cards-layout">
          {airQuality.map((item, i) => (
            <div key={i} className="service-card-new">
              <div className="accent-top red"></div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="sticky-footer">
          <a href="tel:(254) 998-3484" className="floating-btn">
             Call for Service Estimate 📞
          </a>
        </div>

      </div>
    </div>
  );
};

export default Management;