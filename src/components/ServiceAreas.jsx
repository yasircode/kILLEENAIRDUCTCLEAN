import React from 'react';
import "./ServiceAreas.css";


const ServiceArea = () => {
  const cities = [
    "Harker Heights", "Nolanville", "Belton", "Temple", 
    "Copperas Cove", "Fort Cavazos", "Salado", "Lampasas","Georgetown","Liberty Hill","Fort Hood","Waco","Jarrell","Austin","Kempner"
  ];

  return (
    <section className="service-area-section">
      <div className="content-container">
        {/* HEADER SECTION */}
        <div className="section-header">
          <span className="area-badge">Local Service Area</span>
          <h2 className="area-title">Cities We Serve</h2>
          <div className="accent-line"></div>
          <p className="area-desc">Providing 5-Star Air Duct Cleaning across Central Texas</p>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="cities-grid">
          {/* PRIMARY HUB CARD */}
          <div className="city-card hub-card">
            <div className="hub-tag">Primary Location</div>
            <h3 className="city-label">📍 Killeen, TX</h3>
            <div className="status-indicator">
              <span className="dot"></span> Active Service Zone
            </div>
          </div>

          {/* SECONDARY CITY CARDS */}
          {cities.map((city, index) => (
            <div key={index} className="city-card standard-card">
              <span className="pin-icon">📍</span>
              <span className="city-name">{city}</span>
            </div>
          ))}
        </div>

        {/* MOBILE-OPTIMIZED CALL TO ACTION */}
        <div className="cta-box">
          <a href="tel:2107770616" className="area-call-button">
            Check Availability In Your City
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;