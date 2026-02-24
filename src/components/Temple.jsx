import React from 'react';

const TempleDuctCleaning = () => {
  const styles = {
    wrapper: {
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#2d3436',
      backgroundColor: '#f8f9fa',
      lineHeight: '1.8',
      margin: 0,
    },
    header: {
      background: 'linear-gradient(rgba(0, 74, 153, 0.9), rgba(0, 74, 153, 0.9)), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
    },
    heroH1: {
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      margin: '0 0 20px 0',
      fontWeight: '850',
      lineHeight: '1.2',
    },
    accentBar: {
      height: '5px',
      width: '80px',
      backgroundColor: '#ffce00',
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
      color: '#004a99',
      fontSize: '2.1rem',
      marginBottom: '20px',
      borderLeft: '6px solid #ffce00',
      paddingLeft: '15px',
    },
    serviceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px',
      margin: '50px 0',
    },
    card: {
      backgroundColor: 'white',
      padding: '35px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
      borderTop: '6px solid #004a99',
    },
    list: {
      paddingLeft: '20px',
      color: '#444',
    },
    highlight: {
      color: '#004a99',
      fontWeight: '700',
    },
    ctaArea: {
      backgroundColor: '#004a99',
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
      {/* --- HERO SECTION --- */}
      <header style={styles.header}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={styles.heroH1}>Air Duct Cleaning in Temple, TX | Killeen Air Duct Cleaners</h1>
          <div style={styles.accentBar}></div>
          <p style={{ fontSize: '1.3rem', fontWeight: '300' }}>
            Temple's Premier Choice for Healthier Air and Lower Energy Bills.
          </p>
        </div>
      </header>

      <div style={styles.container}>
        {/* --- LOCALIZED INTRO --- */}
        <section style={styles.introBox}>
          <p>
            Living in the <strong>Temple-Belton area</strong> means dealing with unpredictable Central Texas weather—from scorching summer humidity to windy, dust-filled springs. At <strong>Killeen Air Duct Cleaners</strong>, we specialize in helping Temple homeowners maintain peak efficiency in their HVAC systems.
          </p>
          <p>
            Whether you have a newer home near <strong>Pepper Creek</strong> or an established property closer to <strong>Scott & White Medical Center</strong>, your air vents act as the lungs of your house. Heavy AC usage leads to massive dust buildup and seasonal allergens that can strain your system and your health. We provide localized expertise to keep Temple's air clean and affordable.
          </p>
        </section>

        {/* --- SERVICE 1: DUCT CLEANING --- */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Cleaning in Temple, TX</h2>
          <p>
            Are you noticing more dust on your furniture or sneezing more often? <strong>Duct cleaning Temple TX</strong> is essential for removing years of accumulated debris. Our high-powered vacuum extraction removes pet dander, mold spores, and pollen from your supply and return vents.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlight}>Service Highlights:</h4>
              <ul style={styles.list}>
                <li>Full <strong>vent cleaning Temple</strong> specialists</li>
                <li>Removal of deep-seated trunk line debris</li>
                <li>Commercial-grade suction technology</li>
                <li>Immediate improvement in airflow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 2: HVAC SYSTEM CLEANING (High Ticket) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>HVAC System Cleaning in Temple, TX</h2>
          <p>
            Sometimes cleaning the ducts isn't enough. For total efficiency, your entire <strong>AC system cleaning Temple</strong> needs attention. We target the mechanical heart of your home to ensure you aren't overpaying on utility bills.
          </p>
          <div style={styles.serviceGrid}>
            <div style={styles.card}>
              <h4 style={styles.highlight}>What We Clean:</h4>
              <ul style={styles.list}>
                <li>Blower motor & housing</li>
                <li>Evaporator coil decontamination</li>
                <li>Air handler deep cleaning</li>
                <li>Return plenum sanitization</li>
              </ul>
            </div>
            <div style={{...styles.card, borderTopColor: '#ffce00'}}>
              <h4 style={styles.highlight}>The Result:</h4>
              <p>Better cooling performance during 100°F+ days, lower monthly energy costs, and prevention of expensive emergency breakdowns.</p>
            </div>
          </div>
        </div>

        {/* --- SERVICE 3: DRYER VENT & CHIMNEY --- */}
        <div style={styles.serviceGrid}>
          <div style={styles.card}>
            <h2 style={{fontSize: '1.6rem', color: '#004a99'}}>🧺 Dryer Vent Cleaning</h2>
            <p>Lint is highly flammable. Our Temple team removes hidden obstructions and bird nests, significantly reducing fire hazards and making your laundry dry faster.</p>
          </div>
          <div style={styles.card}>
            <h2 style={{fontSize: '1.6rem', color: '#004a99'}}>🧹 Chimney Sweep Services</h2>
            <p>Prepare for the Central Texas winter. We provide creosote removal and fireplace safety evaluations to ensure your family stays warm safely.</p>
          </div>
        </div>

        {/* --- SERVICE 4: DUCT REPLACEMENT (High Ticket) --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>Air Duct Replacement in Temple, TX</h2>
          <p>
            If your home is over 15 years old, your flexible ductwork might be collapsing or torn. We offer professional <strong>air duct installation Temple</strong> to restore your home's balance.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#e17055'}}>
              <h4 style={styles.highlight}>Signs You Need New Ductwork:</h4>
              <ul style={styles.list}>
                <li>Hot and cold spots in different rooms</li>
                <li>Rats or mice have damaged the insulation</li>
                <li>Visible mold growth inside vents</li>
                <li>Crushed or restricted flex ducts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SERVICE 5: ATTIC INSULATION --- */}
        <div style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>Attic Insulation Services in Temple, TX</h2>
          <p>
            In Temple, attic temperatures can skyrocket. Without proper <strong>blown-in insulation Temple</strong>, your AC is fighting a losing battle. We help you seal the heat out.
          </p>
          <div style={styles.serviceGrid}>
            <div style={{...styles.card, borderTopColor: '#00b894'}}>
              <h4 style={styles.highlight}>Save Money Today:</h4>
              <ul style={styles.list}>
                <li>Old insulation removal & disposal</li>
                <li>Premium blown-in fiberglass or cellulose</li>
                <li>Immediate reduction in HVAC strain</li>
                <li>Stable indoor temperatures year-round</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <section style={{ margin: '60px 0' }}>
          <h2 style={{textAlign: 'center', color: '#004a99', marginBottom: '30px'}}>Temple Homeowner FAQs</h2>
          <div style={styles.faqItem}>
            <p><strong>How do I know if my air ducts need replacement?</strong></p>
            <p>If your ducts are over 15 years old, show signs of rodent damage, or if some rooms never get cool enough, a replacement is often more cost-effective than a repair.</p>
          </div>
          <div style={styles.faqItem}>
            <p><strong>Does attic insulation really lower energy bills in Texas?</strong></p>
            <p>Absolutely. Proper insulation acts as a thermal barrier, keeping the 130°F attic heat from entering your living space, lowering cooling costs by up to 25%.</p>
          </div>
          <div style={styles.faqItem}>
            <p><strong>What’s the difference between duct cleaning and HVAC cleaning?</strong></p>
            <p>Duct cleaning clears the "pipes," while HVAC cleaning services the "machine" (coils, blowers, and motors) to ensure the whole system runs like new.</p>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div style={styles.ctaArea}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Get a Free Estimate in Temple, TX</h2>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '30px' }}>
            Professional duct cleaning, replacement, and insulation services.
          </p>
          <button style={{ ...styles.btn, backgroundColor: '#ffce00', color: '#003366' }}>📞 Call Now: (254) XXX-XXXX</button>
          <button style={{ ...styles.btn, backgroundColor: 'transparent', color: 'white', border: '2px solid white' }}>📩 Request Service Online</button>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#636e72', fontSize: '0.9rem' }}>
        © 2026 Killeen Air Duct Cleaners | Serving Temple, Belton, and Morgan's Point Resort.
      </footer>
    </div>
  );
};

export default TempleDuctCleaning;