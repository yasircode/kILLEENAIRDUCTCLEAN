import React from 'react';
import Hero from './components/Hero.jsx';
import IntroCard from './components/IntroCard.jsx';
import ServiceAreas from './components/ServiceAreas.jsx';
import Gallery from './components/Gallery.jsx';
import Banner from './components/Banner.jsx';
import Management from './components/Management.jsx';
import Any from './components/Any.jsx';
import ImageComparison from './components/ImageComparison.jsx'; 
import Benefits from './Benefits.jsx';
import Blue from './Blue.jsx';
import DuctCleaning from './DuctCleaning.jsx';
import MaintenanceGuide from './MaintenanceGuide.jsx';
import HVACLandingPage from './HVACLandingPage.jsx';
import Commercial from './Commercial.jsx';
import DuctService from './DuctService.jsx';
import DuctServiceFAQ from './DuctServiceFAQ.jsx';
import DuctLandingPage from './DuctLandingPage.jsx';


const Home = () => {
  return (
    <>
     <Hero />
    <br />
    <IntroCard />
    <br /><br />
    <ServiceAreas />
    <Gallery />
    <Banner />
    <br />
    <Management />
    <br />
    <Any />
    <ImageComparison />
    <Benefits />
    <br />
    <Blue />
    <DuctCleaning />
    <MaintenanceGuide />
    <HVACLandingPage />
    <Commercial />
    <Dryer />
    <DuctService />
    <DuctServiceFAQ />
    <br />
    <DuctLandingPage />
  
    </>
  );
};

export default Home;