import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Commerciacleaning = () => {
  const { cityName } = useParams();

  const displayCity = cityName
    ? cityName.split('-').map(word => word.toUpperCase()).join(' ').replace(' TX', ', TX')
    : "Killeen, TX";

  useEffect(() => {
    // SEO Title for Repair Service
    document.title = `Professional Air Duct Repair in ${displayCity} | Fix Leaky Ducts`;
    window.scrollTo(0, 0);
  }, [displayCity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Air Duct Repair & Sealing in ${displayCity}`,
    "serviceType": "HVAC Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "JY Air Duct Cleaning & Repair",
      "address": { "@type": "PostalAddress", "addressLocality": displayCity, "addressRegion": "TX" },
      "telephone": "(254) 998-3484"
    }
  };

  return (
    <div style={styles.container}>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Hero Section */}
      <section style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.videoBg}>
          <source src="/red.mp4" type="video/mp4" />
          <img src="/red.mp4" alt={`Air Duct Repair Service in ${displayCity}`} />
        </video>
        <div style={styles.heroOverlay}>
          <h1 style={styles.h1}>Certified Air Duct Repair in {displayCity}</h1>
          <p style={styles.subtext}>Stop wasting energy! We fix leaks, crushed ducts, and disconnected vents across {displayCity}.</p>
          <div style={styles.btnGroup}>
            <a href="tel:2549983484" style={styles.ctaButton}>Request Repair Now</a>
            <Link to="/contact" style={styles.secondaryBtn}>Free Inspection</Link>
          </div>
        </div>
      </section>

      <div style={styles.contentWrapper}>
        
        {/* Section 1: The Problem */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Is Your {displayCity} Home Losing Air Through Leaky Ducts?</h2>
          <p style={styles.paragraph}>
            Did you know that the average home in <strong>{displayCity}</strong> loses up to 30% of its conditioned air through small holes and cracks in the ductwork? This means your AC is working harder, and you are paying for air that never even reaches your rooms. Our expert repair team identifies structural failures and provides long-term sealing solutions.
          </p>
          <img src="/profile4.jpeg" alt={`Technician repairing air ducts in ${displayCity}`} style={styles.image} />
        </section>

        {/* Section 2: Signs you need repair (Expanded Content) */}
        <section style={styles.infoBox}>
          <h2 style={styles.h2}>Common Signs You Need Air Duct Repair</h2>
          <p style={styles.paragraph}>Residents of {displayCity} should look out for these red flags:</p>
          <ul style={styles.list}>
            <li><strong>Hot & Cold Spots:</strong> One room is freezing while another is burning.</li>
            <li><strong>High Utility Bills:</strong> A sudden spike in your {displayCity} electric bill.</li>
            <li><strong>Excessive Dust:</strong> Holes in ducts pull in attic dust and fiberglass.</li>
            <li><strong>Noisy Vents:</strong> Rattling or whistling sounds often indicate loose joints.</li>
            <li><strong>Pest Intrusion:</strong> Rodents often enter through broken duct sections.</li>
          </ul>
        </section>

        {/* Section 3: Technical Repair Process */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Our Comprehensive Repair & Sealing Process</h2>
          <div style={styles.stepGrid}>
            <div style={styles.stepCard}>
              <h3>Pressure Testing</h3>
              <p>We measure the airflow loss in your {displayCity} property to find the exact leak points.</p>
            </div>
            <div style={styles.stepCard}>
              <h3>Mastic Sealing</h3>
              <p>Using professional-grade mastic sealant that never cracks or peels like duct tape.</p>
            </div>
            <div style={styles.stepCard}>
              <h3>Duct Realignment</h3>
              <p>Fixing disconnected pipes and crushed flex ducts in tight attic spaces.</p>
            </div>
            <div style={styles.stepCard}>
              <h3>Insulation Wrap</h3>
              <p>Re-insulating repaired sections to prevent condensation and mold growth.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Local Impact */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Why Choose JY for Duct Repair in {displayCity}?</h2>
          <p style={styles.paragraph}>
            We aren't just cleaners; we are air distribution specialists. We understand the specific HVAC challenges in Central Texas. Whether your home is in the heart of {displayCity} or the surrounding suburbs, we provide repairs that meet local building codes and improve your home’s overall "Health Score."
          </p>
        </section>

        {/* Section 5: Internal City Links (SEO Power) */}
        <section style={styles.internalLinks}>
          <h3 style={styles.h3}>Duct Repair Services Near You</h3>
          <div style={styles.linkGrid}>
            <Link style={styles.footerLink} to="/repair/killeen-tx">Killeen</Link>
            <Link style={styles.footerLink} to="/repair/harker-heights-tx">Harker Heights</Link>
            <Link style={styles.footerLink} to="/repair/temple-tx">Temple</Link>
            <Link style={styles.footerLink} to="/repair/belton-tx">Belton</Link>
            <Link style={styles.footerLink} to="/repair/waco-tx">Waco</Link>
            <Link style={styles.footerLink} to="/repair/georgetown-tx">Georgetown</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

// CSS styles same as provided before but reused for consistency
const styles = {
  container: { backgroundColor: '#fff', color: '#333', fontFamily: '"Segoe UI", sans-serif' },
  hero: { position: 'relative', height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textAlign: 'center', color: 'white' },
  videoBg: { position: 'absolute', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', zIndex: '1', transform: 'translateX(-50%) translateY(-50%)', objectFit: 'cover' },
  heroOverlay: { zIndex: '2', padding: '20px', background: 'rgba(0,0,0,0.6)', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  h1: { fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 20px' },
  subtext: { fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '750px', marginBottom: '30px' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  ctaButton: { background: '#e63946', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  secondaryBtn: { background: 'white', color: '#1d3557', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' },
  contentWrapper: { maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' },
  section: { marginBottom: '50px' },
  h2: { fontSize: '1.8rem', color: '#1d3557', marginBottom: '15px', borderBottom: '3px solid #e63946', display: 'inline-block' },
  paragraph: { fontSize: '1.1rem', lineHeight: '1.7', color: '#444' },
  image: { width: '100%', borderRadius: '10px', marginTop: '20px' },
  list: { paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2' },
  infoBox: { background: '#f1f4f9', padding: '30px', borderRadius: '15px', marginBottom: '50px' },
  stepGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '25px' },
  stepCard: { padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  internalLinks: { background: '#1d3557', color: 'white', padding: '40px', borderRadius: '15px' },
  h3: { textAlign: 'center', marginBottom: '25px' },
  linkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '15px', textAlign: 'center' },
  footerLink: { color: '#f1faee', textDecoration: 'none' }
};

export default Commerciacleaning;