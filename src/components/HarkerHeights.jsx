import React from 'react';

const HarkerHeightsCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#fdfdfd',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 40, 80, 0.88), rgba(0, 40, 80, 0.88)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
      margin: '0 0 20px 0',
      fontWeight: '900',
      letterSpacing: '-0.5px',
    },
    accentBar: {
      height: '5px',
      width: '100px',
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
      borderRadius: '24px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.07)',
      marginTop: '-90px',
      position: 'relative',
      zIndex: 2,
      border: '1px solid #f0f0f0',
    },
    sectionTitle: {
      color: '#002850',
      fontSize: '2.2rem',
      marginBottom: '20px',
      fontWeight: '800',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '25px',
      margin: '50px 0',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '35px',
      borderRadius: '20px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
      borderTop: '8px solid #002850',
      transition: 'all 0.3s ease',
    },
    highlight: {
      color: '#00d2ff',
      fontWeight: 'bold',
    },
    ctaArea: {
      backgroundColor: '#002850',
      color: 'white',
      padding: '70px 30px',
      borderRadius: '30px',
      textAlign: 'center',
      margin: '60px 0',
    },
    btn: {
      padding: '20px 45px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
      transition: 'transform 0.2s',
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Harker Heights, TX | Killeen Air Duct Cleaners</h1>
          <div style={styles.accentBar}></div>
          <p style={{ fontSize: '1.3rem', fontWeight: '300', opacity: 0.9 }}>
            Providing Advanced HVAC Solutions for the Bright Star of Central Texas.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <div style={{color: '#00d2ff', fontWeight: 'bold', marginBottom: '10px'}}>✅ HARKER HEIGHTS, TX</div>
          <h2 style={{ color: '#002850', marginTop: 0 }}>Protecting Harker Heights Homes</h2>
          <p>
            Harker Heights homeowners rely heavily on efficient HVAC systems to stay comfortable during long Central Texas summers. From homes near <strong>Stillhouse Hollow Lake</strong> to established neighborhoods along <strong>FM 2410</strong>, properties in Harker Heights often experience airflow inefficiencies caused by dust buildup and lakeside humidity.
          </p>
          <p>
            At <strong>Killeen Air Duct Cleaners</strong>, we provide professional services designed to restore system performance, improve air quality, and increase energy efficiency for our Harker Heights neighbors near <strong>Knights Way</strong> and <strong>Dana Peak Park</strong>.
          </p>
        </section>

        {/* --- SERVICE 1: AIR DUCT CLEANING --- */}
        <div style={{ marginTop: '70px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Harker Heights, TX</h2>
          <p>
            In Harker Heights, where many homes were built during growth periods, duct systems may contain years of buildup. Our professional <strong>duct cleaning Harker Heights TX</strong> focuses on removing dust, pollen, pet dander, and construction debris using high-powered negative pressure extraction.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlight}>Comprehensive Duct Cleaning:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Complete vent and trunk line cleaning</li>
                <li>Negative pressure vacuum extraction</li>
                <li>Removal of airborne contaminants & allergens</li>
                <li>Full airflow diagnostic inspection</li>
              </ul>
              <p style={{marginTop: '10px', fontSize: '0.9rem'}}>Clean ducts help reduce allergens and lower HVAC strain.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Harker Heights, TX</h2>
          <p>
            We clean internal HVAC components including blower motors, evaporator coils, and air handlers. In high-heat Texas summers, even small debris buildup can reduce cooling efficiency. Our <strong>HVAC cleaning Harker Heights TX</strong> ensures your entire unit is optimized to prevent unexpected breakdowns.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#00d2ff'}}>
              <h4 style={{color: '#002850', fontWeight: 'bold'}}>System Optimization Includes:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Blower wheel and motor decontamination</li>
                <li>Evaporator coil antimicrobial treatment</li>
                <li><strong>AC system cleaning Harker Heights</strong> coil inspection</li>
                <li>Condensate drain line clearing</li>
              </ul>
              <p style={{marginTop: '15px', fontSize: '0.95rem', color: '#636e72'}}><em>Lower utility bills by improving heat exchange efficiency.</em></p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: REPLACEMENT & INSULATION --- */}
        <div style={styles.serviceGrid}>
          <div style={{...styles.card, borderTopColor: '#e17055'}}>
            <h3 style={{color: '#d35400'}}>🛠️ Air Duct Replacement</h3>
            <p>Damaged or poorly sealed ductwork leads to uneven temperatures. We design and install properly sized <strong>duct replacement Harker Heights TX</strong> systems to restore balance and eliminate energy loss.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#27ae60'}}>
            <h3 style={{color: '#218c74'}}>🏠 Attic Insulation Services</h3>
            <p>Attics in this region frequently exceed 130°F. Our <strong>blown-in insulation Harker Heights</strong> service creates a thermal barrier that reduces heat transfer and improves indoor comfort.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DRYER VENTS, CHIMNEY & UV --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h3>🧺 Dryer Vent Cleaning</h3>
            <p>Many homes in Harker Heights have longer vent runs that require annual maintenance. Removing lint buildup improves dryer efficiency and prevents fire risks.</p>
          </div>
          <div style={styles.card}>
            <h3>🧹 Chimney Sweep Services</h3>
            <p>Seasonal fireplace use creates creosote buildup. Our inspection and <strong>chimney cleaning</strong> ensure safe operation before Hill Country winters arrive.</p>
          </div>
          <div style={{...styles.card, borderTopColor: '#8e44ad'}}>
            <h3 style={{color: '#6c3483'}}>✨ Indoor UV Light Purification</h3>
            <p>Our <strong>UV light purification</strong> systems neutralize airborne bacteria and mold spores within your HVAC system, improving overall air sanitation.</p>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0', background: '#f1f2f6', padding: '40px', borderRadius: '25px' }}>
          <h2 style={{textAlign: 'center', color: '#002850', marginBottom: '40px'}}>Harker Heights Service FAQs</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '15px' }}>
              <p><strong>Is HVAC cleaning different from duct cleaning?</strong></p>
              <p>Yes. Duct cleaning removes debris from the "veins" (vents) of your home, while HVAC cleaning services the "heart" (blower, coils, and internal components).</p>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '15px' }}>
              <p><strong>How often should I clean my vents in Harker Heights?</strong></p>
              <p>Due to the dust and wind in Central Texas, we recommend a professional cleaning every 2–3 years for most households.</p>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '15px' }}>
              <p><strong>Does new insulation really help my AC?</strong></p>
              <p>In Texas, an under-insulated attic can reach 140°F. Proper insulation prevents that heat from radiating into your home, reducing AC strain significantly.</p>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '15px' }}>Ready for a Healthier Home?</h2>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '40px' }}>
            Get a Free Estimate for Harker Heights air duct cleaning, replacement, or insulation today.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ ...styles.btn, backgroundColor: '#00d2ff', color: '#002850' }}>📞 Call Now   (254) 998 3484</button>
            <button style={{ ...styles.btn, backgroundColor: 'white', color: '#002850', border: '2px solid #00d2ff' }}>📩 Online Request</button>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '50px', color: '#95a5a6', fontSize: '0.95rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving the Harker Heights Community with Integrity.
      </footer>
    </div>
  );
};

export default HarkerHeightsCleaning;