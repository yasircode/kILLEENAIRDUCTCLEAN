import React from 'react';

const SaladoDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Georgia", serif', // Classy look for Salado
      color: '#2d3436',
      backgroundColor: '#fdfbf7',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px',
      textAlign: 'center',
      borderBottom: '5px solid #c0392b',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      margin: '0 0 20px 0',
      fontWeight: '700',
      letterSpacing: '0.5px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '50px',
      borderRadius: '10px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
      marginTop: '-100px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid #e0e0e0',
    },
    sectionTitle: {
      color: '#2c3e50',
      fontSize: '2.2rem',
      marginBottom: '25px',
      fontWeight: '700',
      borderBottom: '2px solid #c0392b',
      display: 'inline-block',
      paddingBottom: '10px'
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px',
      margin: '60px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
      borderLeft: '5px solid #c0392b',
    },
    ctaArea: {
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '15px',
      textAlign: 'center',
      margin: '80px 0',
    },
    btn: {
      padding: '18px 45px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      backgroundColor: '#c0392b',
      color: '#fff',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Salado, TX | Killeen Air Duct Cleaners</h1>
          <p style={{ fontSize: '1.4rem', fontStyle: 'italic', opacity: 0.9 }}>
            Preserving Air Quality in the Village of Salado with Expert Care.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <div style={{ color: '#c0392b', fontWeight: 'bold', marginBottom: '10px' }}>✅ SALADO, TX</div>
          <h2 style={{ color: '#2c3e50', marginTop: 0 }}>Specialized Service for a Unique Texas Village</h2>
          <p>
            Salado’s mix of historic homes and custom-built properties requires specialized HVAC care. From the artisan shops on <strong>Main Street</strong> to the homes along <strong>Royal Street</strong>, dust from rural surroundings and heavy AC usage can impact duct systems.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we treat Salado homes with the respect they deserve. Whether you are dealing with the humidity near <strong>Salado Creek</strong> or older architecture, we provide full-service air system solutions to ensure your home remains a healthy sanctuary.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '70px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Salado, TX</h2>
          <p>
            Older homes in Salado may contain years of duct buildup and seasonal allergens like cedar and oak pollen. Our <strong>duct cleaning Salado TX</strong> process removes debris and improves airflow efficiency using precision tools.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={{color: '#c0392b'}}>Why Salado Homes Need This:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Detailed <strong>vent cleaning Salado</strong> for historic properties</li>
                <li>HEPA-filtered extraction to protect your interior</li>
                <li>Removal of rural dust, dander, and microscopic pollen</li>
                <li>Restoration of fresh, odorless airflow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC Cleaning in Salado, TX</h2>
          <p>
            The humidity from the creek and intense Texas heat put a massive strain on air handlers. Internal <strong>HVAC cleaning Salado TX</strong> prevents overheating and reduces system strain during peak summer months.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderLeftColor: '#2c3e50'}}>
              <h4 style={{color: '#2c3e50'}}>System Restoration Includes:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Salado</strong> coil decontamination</li>
                <li>Blower motor and fan blade deep-clean</li>
                <li>Condensate drain line clearing (Essential for mold prevention)</li>
                <li>Return plenum sanitization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3 style={{color: '#2c3e50'}}>🛠️ Air Duct Replacement</h3>
            <p>Older Salado homes often have deteriorating fiberglass ducts that leak energy. We offer <strong>duct replacement Salado TX</strong> to restore airflow balance and modernize your system.</p>
          </div>
          <div style={styles.card}>
            <h3 style={{color: '#2c3e50'}}>🏠 Attic Insulation Services</h3>
            <p>Insulation upgrades reduce temperature fluctuations and energy costs. Our <strong>blown-in insulation Salado</strong> creates a powerful thermal barrier against the Texas sun.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS, CHIMNEYS & UV --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderLeftColor: '#c0392b'}}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Annual vent maintenance improves safety and dryer performance. We remove hazardous lint buildup to protect your Salado home.</p>
          </div>
          <div style={{...styles.card, borderLeftColor: '#c0392b'}}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Historic and traditional homes often require regular maintenance. We ensure your fireplace is safe and clean for the winter months.</p>
          </div>
          <div style={{...styles.card, borderLeftColor: '#2c3e50'}}>
            <h3>✨ Indoor UV Light Purification</h3>
            <p>UV systems improve indoor air sanitation and neutralize microbial growth, significantly reducing mold risks in the Salado humidity.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0', borderTop: '1px solid #ddd', paddingTop: '40px' }}>
          <h2 style={{textAlign: 'center', color: '#2c3e50', marginBottom: '30px'}}>Village of Salado Resident FAQ</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '20px' }}>
              <p><strong>Can you clean ducts in very old historic homes?</strong></p>
              <p>Yes. We have specialized techniques for older systems that ensure a deep clean without compromising the integrity of the original structure.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p><strong>Does Salado Creek humidity affect my air vents?</strong></p>
              <p>Absolutely. High humidity can lead to moisture in the ducts, which attracts dust and can cause mold. Regular cleaning is highly recommended.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Quality You Can Trust.</h2>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '40px' }}>
            Get a free estimate for Salado’s premier air duct and HVAC cleaning service.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btn}>📞 Call Now: (254) 998 3484</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#2c3e50' }}>📩 Request Service</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#95a5a6', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Salado and the Greater Chisholm Trail Area.
      </footer>
    </div>
  );
};

export default SaladoDuctCleaning;