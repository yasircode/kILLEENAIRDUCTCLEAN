import React from 'react';

const NolanvilleDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f4f7f6',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 60, 120, 0.9), rgba(0, 60, 120, 0.9)), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '110px 20px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
      margin: '0 0 20px 0',
      fontWeight: '850',
      letterSpacing: '-1px',
    },
    accentBar: {
      height: '6px',
      width: '100px',
      backgroundColor: '#00d2ff',
      margin: '25px auto',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    introBox: {
      background: 'white',
      padding: '50px',
      borderRadius: '30px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      marginTop: '-100px',
      position: 'relative',
      zIndex: 2,
    },
    sectionTitle: {
      color: '#003c78',
      fontSize: '2.3rem',
      marginBottom: '25px',
      fontWeight: '800',
      borderLeft: '8px solid #00d2ff',
      paddingLeft: '20px',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '35px',
      margin: '60px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '25px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
      borderTop: '10px solid #003c78',
      height: '100%',
    },
    highlightText: {
      color: '#003c78',
      fontWeight: '700',
      fontSize: '1.1rem',
    },
    ctaArea: {
      backgroundColor: '#003c78',
      color: 'white',
      padding: '80px 30px',
      borderRadius: '40px',
      textAlign: 'center',
      margin: '80px 0',
      boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
    },
    btnMain: {
      padding: '20px 50px',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      borderRadius: '60px',
      border: 'none',
      cursor: 'pointer',
      margin: '15px',
      backgroundColor: '#00d2ff',
      color: '#003c78',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Nolanville, TX | Small Town Pride, Big City Quality</h1>
          <div style={styles.accentBar}></div>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', opacity: 0.9 }}>
            Comprehensive Air Quality & Energy Solutions for Nolanville Families.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <h2 style={{ color: '#003c78', marginTop: 0 }}>Expert Care for Nolanville's Growing Homes</h2>
          <p>
            Nolanville is no longer just a pass-through between Killeen and Belton—it’s a premier destination for families seeking space and quality. Whether you’re located in the prestigious <strong>Bella Charca</strong> gated community or own a classic ranch-style home off <strong>Warrior Way</strong>, your indoor air quality is our top priority.
          </p>
          <p>
            The open landscapes around Nolanville and proximity to <strong>Stillhouse Hollow Lake</strong> mean higher exposure to seasonal allergens, outdoor dust, and humidity. At <strong>Killeen Air Duct Cleaners</strong>, we help Nolanville residents keep their homes allergy-free and their HVAC systems running efficiently throughout the brutal Texas summers.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Nolanville, TX</h2>
          <p>
            Construction dust from new developments and rural debris can quickly clog your vents. Our <strong>duct cleaning Nolanville TX</strong> service is a deep-clean process that reaches every inch of your air distribution system, ensuring your family breathes only the purest air.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlightText}>Our Professional Approach:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Precision <strong>vent cleaning Nolanville</strong> for supply & return lines</li>
                <li>HEPA-filtered negative pressure vacuuming</li>
                <li>Source removal of dander, dust, and pollen</li>
                <li>Detailed airflow performance inspection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (The High-Ticket Target) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Nolanville, TX</h2>
          <p>
            In Nolanville, a clean duct is only half the battle. If your coils are caked with Texas grime, your AC works twice as hard for half the cooling. Our <strong>HVAC cleaning Nolanville TX</strong> is a full-system restoration designed to lower your utility bills.
          </p>
          
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#00d2ff'}}>
              <h4 style={styles.highlightText}>Total System Restoration:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>AC system cleaning Nolanville</strong> expert service</li>
                <li>Blower motor and housing deep-clean</li>
                <li>Evaporator coil decontamination</li>
                <li>Return plenum and air handler sanitization</li>
              </ul>
              <p style={{marginTop: '20px', fontWeight: 'bold', color: '#27ae60'}}>Benefit: Prevents sudden system failures during 100°F+ days.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>Older Nolanville properties often suffer from leaky, torn, or rodent-damaged ductwork. We provide high-efficiency <strong>duct replacement Nolanville TX</strong> to ensure your cold air actually reaches your living space.</p>
            <p style={{fontSize: '0.95rem', fontStyle: 'italic'}}>Recommended for homes with uneven room temperatures.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#2ecc71'}}>
            <h3 style={{color: '#27ae60'}}>🏠 Attic Insulation Services</h3>
            <p>Nolanville attics can act like ovens. Our <strong>blown-in insulation Nolanville</strong> creates a thermal barrier that can reduce your cooling costs by up to 30%. Stop paying to cool the outdoors!</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS & CHIMNEYS --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Don't ignore the warning signs of a clogged vent. We help Nolanville homeowners prevent house fires and improve dryer efficiency with professional lint removal.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep</h3>
            <p>Keeping Nolanville cozy and safe. Our chimney services include creosote removal and draft inspections for your peace of mind.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{textAlign: 'center', color: '#003c78', marginBottom: '40px'}}>Nolanville Resident FAQ</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{background: '#fff', padding: '25px', borderRadius: '15px', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
              <p><strong>Is HVAC cleaning better than just vent cleaning?</strong></p>
              <p>In Nolanville's dusty climate, we recommend both. Vent cleaning clears the air paths, but HVAC cleaning services the internal motor and coils to ensure energy efficiency.</p>
            </div>
            <div style={{background: '#fff', padding: '25px', borderRadius: '15px', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'}}>
              <p><strong>How do I know if I need new insulation?</strong></p>
              <p>If your AC runs constantly or your upstairs rooms are significantly warmer than downstairs, your insulation is likely insufficient for Texas summers.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '20px' }}>Get Your Free Nolanville Estimate</h2>
          <p style={{ fontSize: '1.4rem', opacity: '0.9', marginBottom: '50px' }}>
            Join hundreds of satisfied Nolanville neighbors. Professional service, guaranteed.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={styles.btnMain}>📞 Call  (254) 998 3484</button>
            <button style={{ ...styles.btnMain, backgroundColor: 'white', color: '#003c78' }}>📩 Request Quote</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', color: '#95a5a6', fontSize: '1rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Nolanville, Bella Charca, and Warrior Way.
      </footer>
    </div>
  );
};

export default NolanvilleDuctCleaning;