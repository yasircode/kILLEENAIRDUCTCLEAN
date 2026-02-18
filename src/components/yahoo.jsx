import React from 'react';
import './yahoo.css';

const YahooCard = () => {
  return (
    <div className="yahoo-container">
      <div className="yahoo-card">
        
        {/* Top Image Section */}
        <div className="yahoo-image-box">
          <img 
            src="/ll.jpeg" 
            alt="Air Duct Service" 
            className="yahoo-img"
          />
          
          {/* Labels */}
          <div className="yahoo-labels">
            <span className="label-red">Before</span>
            <span className="label-blue">After</span>
          </div>
          
        
        </div>

        {/* Content Section */}
        <div className="yahoo-content">
          <div className="yahoo-header">
            <h2 className="yahoo-title">Killeen Air Duct Cleaners</h2>
            <span className="yahoo-stars">★★★★★</span>
          </div>
          
        

          <div className="yahoo-stats">
            <div className="stat-item">
              <span className="stat-dot"></span> Certified Expert
            </div>
            <div className="stat-item">
              <span className="stat-dot"></span> Eco Friendly
            </div>
          </div>

          <button className="yahoo-btn">
            Contact Us!
            <svg className="yahoo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="yahoo-footer">
          Killeen Air Quality Services • Killeen, TX
        </div>
      </div>
    </div>
  );
};

export default YahooCard;