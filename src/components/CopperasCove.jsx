import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import DuctLandingPage from '../DuctLandingPage';
import Benefits from '../Benefits';
import Any from './Any';

const CopperasCove = () => {
  return (
    <div className="city-page">
       {/* Yahan aap Copperas Cove ka apna alag design bana sakte hain */}
       <h1>Air Duct Cleaning in Copperas Cove, TX</h1>
      <Hero />
       
       <Benefits />
    <Any />
      <Banner />
       <DuctLandingPage />
    </div>
  );
};
export default CopperasCove;