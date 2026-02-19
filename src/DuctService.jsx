import React from 'react';
import './DuctService.css';

const DuctService = () => {
  return (
    <section className="duct-container">
      <div className="duct-content">
        <h2 className="duct-title">
          AIR DUCT REPAIR & REPLACEMENT – 
          <span className="duct-subtitle"> YOUR SOLUTION FOR DUCT REVIVAL!</span>
        </h2>
        
        <p className="duct-text">
          Ever thought about the hidden network of air ducts in your home or office? 
          They may be out of sight, but when things go wrong, you’ll feel it.
        </p>

        <p className="duct-text">
          Leaky ducts can waste up to <strong>30% of your system’s airflow</strong>, 
          leading to unnecessary energy costs and a less comfortable environment.
        </p>

        <p className="duct-text">
          But don’t worry, KILLEEN Air Duct Cleaning, your local experts in KILLEEN, Texas, 
          are here to help. Our experienced team can quickly identify and repair these hidden 
          problems, getting your system back to its peak efficiency.
        </p>

        <p className="duct-cta-text">
          <em>Contact us today and let’s get started on improving your space.</em>
        </p>

        <button className="duct-button">CALL FOR SERVICE</button>
      </div>

      <div className="duct-image-wrapper">
        <img 
          src="033.jpeg" 
          alt="Technician repairing air ducts" 
          className="duct-image"
        />
      </div>
      
    </section>
   
  );
};

export default DuctService;