import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "/030.jpeg", 
    "/022.jpeg", 
    "/018.jpeg",
    "/o7.jpeg", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only auto-slide if the screen is small enough that not all images are visible
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const itemsToShow = getItemsToShow();
        // If 4 items are showing and we have 4 images, don't slide
        if (itemsToShow >= images.length) return 0;
        return prevIndex >= images.length - itemsToShow ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [images.length]);

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Killeen Air Duct Cleaners</h2>
      <div className="slider-container">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / getItemsToShow())}%)` }}
        >
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <div className="image-card">
                <img src={img} alt={`Project ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getItemsToShow = () => {
  if (window.innerWidth <= 480) return 1; // Phone
  if (window.innerWidth <= 1024) return 2; // Tablet/Small Laptop
  return 3; // Desktop/Large Laptop
};

export default Gallery;