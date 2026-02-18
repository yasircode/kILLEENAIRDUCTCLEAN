import React from 'react';

const Banner = () => {
  const styles = {
    bannerContainer: {
      backgroundColor: '#0d47a1',
      width: '100%',
      padding: '15px 20px', 
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    bannerText: {
      color: '#ffffff',
      /* RESPONSIVE FONT: 18px on small screens, 4% of width on tablets, 32px on desktop */
      fontSize: 'clamp(18px, 4.5vw, 32px)', 
      fontWeight: '800',
      margin: 0,
      textTransform: 'uppercase',
      fontFamily: 'Arial, sans-serif',
      letterSpacing: '1px',
      lineHeight: '1.2',
      display: 'flex',
      flexWrap: 'wrap', // Drops phone number to second line on tiny screens
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px'
    },
    phoneNumber: {
      color: '#ffffff',
      textDecoration: 'none',
      whiteSpace: 'nowrap', // Prevents phone number from breaking in half
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle highlight
      padding: '2px 8px',
      borderRadius: '4px'
    }
  };

  return (
    <div style={styles.bannerContainer}>
      <h2 style={styles.bannerText}>
        <span>CALL US NOW :</span> 
        <a href="tel:2549983484" style={styles.phoneNumber}>
          (254) 998-3484
        </a>
      </h2>
    </div>
  );
};

export default Banner; 