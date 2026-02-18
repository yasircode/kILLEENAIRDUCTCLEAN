import React, { useState } from 'react';
import './MaintenanceGuide.css';

const MaintenanceGuide = () => {
  const [activeTab, setActiveTab] = useState('annual');

  const content = {
    annual: {
      text: "Dust and allergens don't just sit on your furniture; they settle inside your air ducts. Our annual duct maintenance service provides a comprehensive vacuuming of your ventilation system. By removing hidden debris, we eliminate the 'source' of indoor pollution, giving your family cleaner air and a more efficient HVAC system."
    },
    deep: {
      text: "Every 3–5 years, we recommend a Professional Deep Clean for peak air quality. Using high-speed rotary brushes and EPA-approved sanitizers, we remove stubborn contaminants and restore your HVAC system to like-new condition. It’s the ultimate way to maximize system life and ensure clean air for your Killeen home."
    },
    custom: {
      text: "Every Killeen home is unique. We recommend a professional inspection to assess your specific HVAC needs and provide a tailored cleaning plan for your system."
    },
    pricing: {
      text: "At Killeen Air Duct Cleaning, we prioritize transparency. Our professional deep cleaning is an investment in your home’s health, typically ranging from $50 to $100 per duct."
    }
  };

  return (
    <section className="maintenance-section">
      <div className="maintenance-container">
        {/* Left Side: Image */}
        <div className="image-box">
          <img 
            src="profile1.jpeg" 
            alt="HVAC Maintenance Team" 
          />
        </div>

        {/* Right Side: Content */}
        <div className="content-box">
          <h2 className="main-title">The Killeen Homeowner’s Guide to HVAC & Air Duct Maintenance</h2>
          <p className="intro-para">
            At Killeen Air Duct Cleaning, we are dedicated to providing the highest standard of indoor air quality for homes and businesses throughout Killeen, TX."
          </p>

          <div className="tab-layout">
            <div className="tab-menu">
              {/* Button 1 */}
              <button 
                className={`tab-btn ${activeTab === 'annual' ? 'active-red' : 'red-static'}`}
                onClick={() => setActiveTab('annual')}
              >
                Annual Air Duct Cleaning
                {activeTab === 'annual' && <div className="arrow-right"></div>}
              </button>

              {/* Button 2 */}
              <button 
                className={`tab-btn ${activeTab === 'deep' ? 'active-red' : 'red-dark-static'}`}
                onClick={() => setActiveTab('deep')}
              >
                Deep Cleaning Every 3 to 5 Years
                {activeTab === 'deep' && <div className="arrow-right"></div>}
              </button>

              {/* Button 3 */}
              <button 
                className={`tab-btn ${activeTab === 'custom' ? 'active-red' : 'blue-static'}`}
                onClick={() => setActiveTab('custom')}
              >
                Customized Cleaning Solutions
                {activeTab === 'custom' && <div className="arrow-right"></div>}
              </button>

              {/* Button 4 */}
              <button 
                className={`tab-btn ${activeTab === 'pricing' ? 'active-red' : 'blue-static'}`}
                onClick={() => setActiveTab('pricing')}
              >
                Transparent Pricing
                {activeTab === 'pricing' && <div className="arrow-right"></div>}
              </button>
            </div>

            <div className="tab-content">
              <p>{content[activeTab].text}</p>
            </div>
          </div>

          <div className="button-wrapper">
            <button className="estimate-btn">GET AN ESTIMATE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceGuide;