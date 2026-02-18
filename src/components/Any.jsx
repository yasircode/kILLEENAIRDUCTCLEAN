import React from 'react';
import './Any.css';

const Any = () => {
  const benefits = [
    { 
        title: "We Will Beat any Price", 
        icon: <svg viewBox="0 0 24 24" className="svg-icon blue-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m10-18.13a4 4 0 1 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>
    },
    { 
        title: "No Hidden Fee", 
        icon: <svg viewBox="0 0 24 24" className="svg-icon red-icon"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    },
    { 
        title: "Experienced Technicians", 
        icon: <svg viewBox="0 0 24 24" className="svg-icon blue-icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    },
    { 
        title: "Same-day Service", 
        icon: <svg viewBox="0 0 24 24" className="svg-icon red-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    },
    { 
        title: "We Carry Equipment In Our Trucks", 
        icon: <svg viewBox="0 0 24 24" className="svg-icon blue-icon"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
    },
    { 
        title: "100% Customer Satisfaction", 
        icon: <svg viewBox="0 0 24 24" className="svg-icon red-icon"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
    }
  ];

  return (
    <section className="any-section">
      <div className="any-container">
        <h2 className="any-title">PROFESSIONAL AIR DUCT CLEANING SERVICES</h2>
        <div className="any-grid">
          {benefits.map((item, index) => (
            <div key={index} className="any-box">
              <div className="any-icon-container">
                <div className="any-splash"></div>
                {item.icon}
              </div>
              <h3 className="any-box-text">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Any;