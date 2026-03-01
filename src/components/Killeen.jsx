import React from 'react';
import { Link } from 'react-router-dom'; // Link import karna zaroori hai

const KilleenDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f8f9fa',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url("https://images.unsplash.com/photo-1581094288338-2314dddb790b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
      margin: '0 0 20px 0',
      fontWeight: '850',
      lineHeight: '1.2',
    },
    accentBar: {
      height: '5px',
      width: '80px',
      backgroundColor: '#00d2ff',
      margin: '20px auto',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      marginTop: '-80px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#003366',
      fontSize: '2rem',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px',
      margin: '50px 0',
    },
    cardLink: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      transition: 'transform 0.3s ease',
    },
    card: {
      backgroundColor: 'white',
      padding: '35px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
      borderTop: '6px solid #0056b3',
      height: '100%', // Cards ki height barabar rakhne ke liye
    },
    list: {
      paddingLeft: '20px',
      color: '#444',
    },
    highlight: {
      color: '#0056b3',
      fontWeight: '700',
    },
    ctaArea: {
      backgroundColor: '#003366',
      color: 'white',
      padding: '60px 30px',
      borderRadius: '25px',
      textAlign: 'center',
      margin: '60px 0',
    },
    btn: {
      padding: '18px 40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    faqItem: {
      backgroundColor: '#fff',
      padding: '25px',
      borderRadius: '12px',
      marginBottom: '15px',
      borderLeft: '5px solid #00d2ff',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Killeen, TX | Killeen Air Duct Cleaners</h1>
          <div style={styles.accentBar}></div>
          <p style={{ fontSize: '1.4rem', fontWeight: '300' }}>
            Breathe Cleaner, Live Better. Your Local Air Quality Experts.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- INTRO --- */}
        <section style={styles.introBox}>
          <p>
            <strong>Killeen Air Duct Cleaners</strong> provides professional air duct cleaning, HVAC system cleaning, 
            dryer vent cleaning, chimney sweep, duct replacement, attic insulation, and indoor UV light purification 
            services throughout <strong>Killeen, TX</strong>.
            <br></br>
         With extreme Central Texas heat and nearly year-round air conditioning use, HVAC systems in Killeen homes operate constantly. That heavy usage leads to dust accumulation, airflow restriction, and reduced indoor air quality.

From homes near Fort Cavazos to established neighborhoods off Rancier Avenue and Stan Schlueter Loop, properties in Killeen experience high dust levels and seasonal allergens. Our team understands the specific environmental conditions affecting local homes and delivers safe, thorough, and efficient air system solutions designed for long-term performance.
          </p>
        </section>

        {/* --- SERVICE SECTION 1: DUCTS --- */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={styles.sectionTitle}>🌬️ Air Duct Cleaning & Repair</h2>
          <div style={styles.serviceGrid}>
            
            {/* CARD 1: Air Duct Cleaning */}
            <Link to="/air-duct-cleaning-killeen-tx" style={styles.cardLink}>
              <div style={styles.card}>
                <h4 style={styles.highlight}>Air Duct Cleaning in Killeen, TX</h4>
                <ul style={styles.list}>
                  <li>Complete supply and return cleaning</li>
                  <li>High-powered vacuum extraction</li>
                  <li>Debris removal from trunk lines</li>
                </ul>
                <p style={{color: '#0056b3', fontWeight: 'bold', marginTop: '15px'}}>Learn More →</p>
              </div>
            </Link>

            {/* CARD 2: Air Duct Repair */}
            <Link to="/air-duct-repair-killeen-tx" style={styles.cardLink}>
              <div style={{...styles.card, borderTopColor: '#e17055'}}>
                <h4 style={styles.highlight}>Air Duct Repair in Killeen,TX</h4>
                <ul style={styles.list}>
                  <li>Fix uneven room temperatures</li>
                  <li>Replace torn flex ducts</li>
                  <li>Seal air leaks</li>
                </ul>
                <p style={{color: '#e17055', fontWeight: 'bold', marginTop: '15px'}}>Learn More →</p>
              </div>
            </Link>
          </div>
        </div>

        {/* --- SERVICE SECTION 2: HVAC & UV --- */}
        <div style={styles.serviceGrid}>
          
          <Link to="/hvac-system-cleaning-killeen-tx" style={styles.cardLink}>
            <div style={styles.card}>
              <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>❄️ HVAC System Cleaning in Killeen, TX</h2>
              <p>Duct cleaning alone is not enough if internal components are dirty.</p>
              <p style={{color: '#0056b3', fontWeight: 'bold'}}>View Service →</p>
            </div>
          </Link>

          <Link to="/uv-light-air-purification-killeen-tx" style={styles.cardLink}>
            <div style={{...styles.card, borderTopColor: '#6c5ce7'}}>
              <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🛡️ UV Light Purification in Killeen, TX</h2>
              <p>Neutralize airborne bacteria and viruses directly inside your HVAC system.</p>
              <p style={{color: '#6c5ce7', fontWeight: 'bold'}}>View Service →</p>
            </div>
          </Link>
        </div>

        {/* --- SERVICE SECTION 3: DRYER & CHIMNEY --- */}
        <div style={styles.serviceGrid}>
          
          <Link to="/dryer-vent-cleaning-killeen-tx" style={styles.cardLink}>
            <div style={styles.card}>
              <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🧺 Dryer Vent Cleaning in Killeen, TX</h2>
              <p>Lint buildup is a serious fire hazard. Annual inspection is recommended.</p>
              <p style={{color: '#0056b3', fontWeight: 'bold'}}>View Service →</p>
            </div>
          </Link>

          <Link to="/chimney-sweep-killeen-tx" style={styles.cardLink}>
            <div style={styles.card}>
              <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🧹 Chimney Sweep in Killeen,TX</h2>
              <p>Professional creosote removal and fireplace safety evaluation.</p>
              <p style={{color: '#0056b3', fontWeight: 'bold'}}>View Service →</p>
            </div>
          </Link>
        </div>

        {/* --- SERVICE SECTION 4: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          
          <Link to="/air-duct-replacement-killeen-tx" style={styles.cardLink}>
            <div style={{...styles.card, borderTopColor: '#d63031'}}>
              <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🔄 Duct Replacement in Killeen,TX</h2>
              <p>Upgrade old or damaged systems with new efficient ductwork.</p>
              <p style={{color: '#d63031', fontWeight: 'bold'}}>View Service →</p>
            </div>
          </Link>

          <Link to="/attic-insulation-killeen-tx" style={styles.cardLink}>
            <div style={{...styles.card, borderTopColor: '#00b894'}}>
              <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🏠 Attic Insulation, in Killeen,TX</h2>
              <p>Proper insulation is your first line of defense against Texas heat.</p>
              <p style={{color: '#00b894', fontWeight: 'bold'}}>View Service →</p>
            </div>
          </Link>

          {/* Bonus: Chimney Services Link */}
          <Link to="/chimney-services-killeen-tx" style={styles.cardLink}>
            <div style={{...styles.card, borderTopColor: '#fdcb6e'}}>
              <h2 style={{...styles.sectionTitle, fontSize: '1.5rem'}}>🏗️ Chimney Services in Killeen,TX</h2>
              <p>Repair, caps, and maintenance for your chimney system.</p>
              <p style={{color: '#e17055', fontWeight: 'bold'}}>View Service →</p>
            </div>
          </Link>
        </div>

        {/* --- CTA --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Get a Free Estimate in Killeen, TX</h2>
          <button style={{ ...styles.btn, backgroundColor: '#ffce00', color: '#003366' }}>📞 Call Now: (254) 998 3484 </button>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#636e72', fontSize: '0.9rem' }}>
        © 2026 Killeen Air Duct Cleaners. All Rights Reserved.
      </footer>
    </div>
  );
};

export default KilleenDuctCleaning;