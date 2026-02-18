import React from 'react';
import './DuctCleaning.css';

const DuctCleaning = () => {
  const address = "KILLEEN, TX";
  

  const signs = [
    "Excessive dust build-up on and around your vents, indicating clogged ducts.",
    "Visible signs of mold growth inside or near your air ducts.",
    "A constant musty or mildew smell when your HVAC system is active.",
    "Inconsistent air flow in different rooms, which is a sign of blockages in your ductwork.",
    "A sudden increase in energy costs, possibly due to reduced efficiency from clogged ducts.",
    "If your air ducts haven’t been cleaned in the last three to five years."
  ];

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="title">SIGNS YOU NEED PROFESSIONAL AIR DUCT CLEANING SERVICES</h1>
          <p className="intro-text">
            Here are some key signs which indicates that you should call a professional to clean your air ducts:
          </p>
          <ul className="signs-list">
            {signs.map((sign, index) => (
              <li key={index} className="sign-item">{sign}</li>
            ))}
          </ul>
        </div>

        <div className="image-section">
          <img 
            src="o10.jpeg" 
            alt="Inside of a dirty air duct" 
            className="duct-image"
          />
        </div>
      </div>

      
    </div>
  );
};

export default DuctCleaning;