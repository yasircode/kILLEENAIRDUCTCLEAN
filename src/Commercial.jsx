import React from 'react';
import './Commercial.css';

const Commercial = () => {
  return (
    <section className="comm-section">
      <div className="comm-flex">
        <div className="comm-img-box">
          <img src="o8.jpeg" alt="Commercial Cleaning" />
        </div>
        <div className="comm-text-box">
          <h2>KILLEEN COMMERCIAL DUCT CLEANING: CLEAN AIR FOR HEALTHIER WORKPLACES</h2>
          <p>Air duct cleaning may not be the first thing on your to-do list, but it's essential for the overall well-being of your business.</p>
          <p>Our technicians employ advanced methodologies, such as <strong>air whips</strong> and <strong>skipper balls</strong>, paired with robust, HEPA-filtered vacuums.</p>
          <button className="comm-btn">GET AN ESTIMATE</button>
        </div>
      </div>    
    </section>
  );
};

export default Commercial;