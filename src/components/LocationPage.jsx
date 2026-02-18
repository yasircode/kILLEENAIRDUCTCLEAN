import React from 'react';
import { useParams } from 'react-router-dom';

const LocationPage = () => {
  const { cityName } = useParams(); // URL se city ka naam uthayega
  const name = cityName.replace(/-/g, ' ').toUpperCase(); // killeen-tx -> KILLEEN TX

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1 style={{ color: '#0d47a1' }}>Air Duct Cleaning in {name}</h1>
      <p>Professional cleaning services for your home or business in {name}.</p>
      {/* Yahan aap apna baki design (Hero, Contact Form wagera) add kar sakte hain */}
    </div>
  );
};

export default LocationPage;