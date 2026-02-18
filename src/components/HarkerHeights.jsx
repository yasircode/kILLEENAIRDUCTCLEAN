import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Unique from '../Unique';
import DuctLandingPage from '../DuctLandingPage';
import IntroCard from './IntroCard';
import Any from './Any';
const HarkerHeights = () => {
  return (
    <div className="city-page">
       {/* Yahan aap Harker Heights ka apna alag design bana sakte hain */}
       <h1>Air Duct Cleaning in Harker Heights, TX</h1>

      <Banner />
<br></br>

      <Hero />
      <IntroCard />
<Any />
      <Unique />
      <DuctLandingPage />
    </div>
  );
};
export default HarkerHeights;