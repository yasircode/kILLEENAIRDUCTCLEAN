
import DuctLandingPage from '../DuctLandingPage';
import Banner from './Banner';
import ImageComparison from './ImageComparison';
import Management from './Management';
import Hero from './Hero';

const Belton = () => {
  return (
    <div className="city-page">
       {/* Yahan aap Belton ka apna alag design bana sakte hain */}
       <h1>Air Duct Cleaning in Belton, TX</h1>
      <Hero/>
    
       <ImageComparison />
         <br></br>
            <Banner />
         <Management />
       <DuctLandingPage />
    </div>
  );
};
export default Belton;