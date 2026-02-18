import React from 'react';
import './NewItem.css';

const services = [
  {
    id: 1,
    title: "Dryer Vent maintenance cleaning",
    time: "24 hrs",
    price: "$69",
    img: "/ok5.png" 
  },
  {
    id: 2,
    title: "AC Air Duct Cleaning maintenance",
    time: "30 mins",
    price: "$129",
    img: "/ok1.png" 
  },
  {
    id: 3,
    title: "HVAC Maintenance Cleaning",
    time: "1 hr",
    price: "$399",
    img: "/ok2.png"
  }
];

const NewItem = () => {
  return (
    <div className="newitem-container">
      {services.map((item) => (
        <div key={item.id} className="newitem-card">
          <div className="newitem-img-box">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="newitem-info">
            <h3 className="newitem-title">{item.title}</h3>
            <p className="newitem-meta">
              {item.time} | <span className="newitem-price">{item.price}</span>
            </p>
            <button className="newitem-btn">BOOK</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewItem;