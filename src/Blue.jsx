import React from 'react';

const Blue = () => {
  // All CSS styles added directly into the file for easy management
  const styles = {
    blueContainer: {
      backgroundColor: '#0d47a1', // The exact deep blue from your image
      width: '100%',
      padding: '12px 0',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // This ensures it covers the full width of the screen
      position: 'relative',
      left: 0,
      right: 0
    },
    blueText: {
      color: '#ffffff',
      fontSize: '32px', // Large and impactful
      fontWeight: '800', // Extra bold
      margin: 0,
      textTransform: 'uppercase',
      fontFamily: 'Arial, sans-serif',
      letterSpacing: '1px',
    },
    phoneNumber: {
      color: '#ffffff',
      textDecoration: 'none',
      marginLeft: '10px'
    }
  };

  return (
    <div style={styles.blueContainer}>
      <h2 style={styles.blueText}>
        CALL US NOW : 
        <a href="tel:2549983484" style={styles.phoneNumber}>
          (254) 998-3484
        </a>
      </h2>
    </div>
  );
};

export default Blue;