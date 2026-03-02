import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChimneyCleaning = () => {
  // SEO Meta & Schema Setup
  useEffect(() => {
    document.title = "Chimney Sweep & Cleaning in Killeen, TX | Killeen Air Duct Cleaning Company";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional chimney sweep and inspection services in Killeen, Temple, and Belton, TX. We remove creosote and prevent fire hazards. 1000+ happy customers.");
    }

    // Schema Markup for Local Business & Service
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Chimney Cleaning & Sweep Services",
      "serviceType": "Chimney Maintenance",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Killeen Air Duct Cleaning Company",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Killeen",
          "addressRegion": "TX",
          "addressCountry": "US"
        },
        "telephone": "(254) 998-3484"
      },
      "areaServed": ["Killeen", "Temple", "Belton", "Harker Heights", "Copperas Cove"],
      "description": "Expert chimney cleaning, creosote removal, and safety inspections for homeowners in Central Texas."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  const cities = [
    { name: "Temple", slug: "location/temple" },
    { name: "Belton", slug: "location/belton" },
    { name: "Harker Heights", slug: "location/harkerheights" },
    { name: "Copperas Cove", slug: "location/copperascove" },
    { name: "Georgetown", slug: "location/georgetown" },
    { name: "Waco", slug: "location/waco" },
    { name: "Jarrell", slug: "location/Jarrell" },
    { name: "Nolanville", slug: "location/nolanville" },
    { name: "Salado", slug: "location/salado" },
    { name: "Liberty Hill", slug: "location/libertyhill" },
    { name: "Lampasas", slug: "location/lampasas" },
    { name: "Fort Cavazos", slug: "location/fortcavazos" }
  ];

  const styles = {
    container: { fontFamily: "'Inter', sans-serif", color: '#2c3e50', maxWidth: '1200px', margin: '0 auto', padding: '20px', lineHeight: '1.8' },
    hero: { textAlign: 'center', padding: '60px 0', borderBottom: '5px solid #c62828', marginBottom: '40px', backgroundColor: '#fdfdfd' },
    h1: { fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: '#0e1b4d', margin: '10px 0', fontWeight: 900, textTransform: 'uppercase' },
    section: { marginBottom: '50px', padding: '20px' },
    flexGroup: { display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start', marginBottom: '60px' },
    textContent: { flex: '1 1 550px' },
    imageContent: { flex: '1 1 400px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' },
    img: { width: '100%', height: 'auto', display: 'block' },
    subHeading: { fontSize: '2.2rem', color: '#0e1b4d', marginBottom: '20px', fontWeight: 700 },
    highlight: { color: '#c62828', fontWeight: 'bold' },
    citiesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px', marginTop: '30px' },
    cityLink: { textDecoration: 'none', backgroundColor: '#fff', border: '1px solid #ddd', padding: '12px', borderRadius: '8px', textAlign: 'center', color: '#333', fontWeight: '600', transition: '0.3s' }
  };

  return (
    <div style={styles.container}>
      {/* 1️⃣ TITLE & H1 (SEO RULE) */}
      <header style={styles.hero}>
        <div style={{ color: '#c62828', fontWeight: 700, letterSpacing: '2px' }}>TOP-RATED IN CENTRAL TEXAS</div>
        <h1 style={styles.h1}>Chimney Sweep & Cleaning in Killeen, TX</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '850px', margin: '20px auto' }}>
          Certified Fireplace Safety, Creosote Removal, and Full Inspections by **Killeen Air Duct Cleaning Company**.
        </p>
      </header>

      {/* 2️⃣ EXPANDED CONTENT (800+ WORDS TARGET) */}
      <section style={styles.flexGroup}>
        <div style={styles.textContent}>
          <h2 style={styles.subHeading}>The Best Chimney Cleaning in Killeen & Temple</h2>
          <p>
            When the temperature drops in Central Texas, there is nothing like the warmth of a fireplace. However, residents in <span style={styles.highlight}>Killeen, TX</span> often forget that a chimney requires professional maintenance to stay safe. At <strong>Killeen Air Duct Cleaning Company</strong>, we specialize in deep-cleaning fireplaces to ensure your home remains hazard-free.
          </p>
          <p>
            Our <Link to="/chimneycleaning">chimney sweep services</Link> are designed to tackle the toughest soot and creosote buildup. Creosote is a highly flammable substance that accumulates inside your chimney flue. If left uncleaned, it can ignite, causing a devastating chimney fire that can spread to the rest of your home in seconds.
          </p>
          <h3 style={{color: '#c62828'}}>Why Trust Killeen Air Duct Cleaning Company?</h3>
          <p>
            We don't just "brush" your chimney. We perform a multi-point safety inspection. We look for cracks in the flue liner, damaged masonry, and obstructions like bird nests or debris that are common in the <span style={styles.highlight}>Belton and Temple</span> areas. Our technicians use industrial-grade HEPA vacuums to ensure that not a single speck of dust enters your living room during the process.
          </p>
        </div>
        <div style={styles.imageContent}>
          <img src="038.jpeg" alt="Professional Chimney Sweep Service in Killeen TX" style={styles.img} />
        </div>
      </section>

      {/* 3️⃣ SERVICE DETAILS (EXPANDING WORD COUNT) */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9', borderRadius: '20px' }}>
        <h2 style={styles.subHeading}>Comprehensive Fireplace Inspections in Harker Heights</h2>
        <p>
          Every chimney cleaning starts with a visual inspection. In <span style={styles.highlight}>Harker Heights and Copperas Cove</span>, we see a variety of fireplace types—from traditional wood-burning to modern gas inserts. Each requires a specific touch. 
        </p>
        
        <p>
          Our <Link to="/location/harkerheights">Harker Heights experts</Link> check for:
        </p>
        <ul>
          <li><strong>Creosote Levels:</strong> Identifying Level 1, 2, or 3 creosote glazed deposits.</li>
          <li><strong>Flue Integrity:</strong> Ensuring smoke and carbon monoxide exit your home safely.</li>
          <li><strong>Damper Operation:</strong> Making sure you aren't losing heat (and money) through a broken seal.</li>
          <li><strong>Animal Obstructions:</strong> Removing squirrels, birds, or nests from your chimney stack.</li>
        </ul>
      </section>

      {/* 4️⃣ LONG-FORM CONTENT ON BENEFITS */}
      <section style={styles.flexGroup}>
        <div style={styles.imageContent}>
          <img src="039.jpeg" alt="Chimney Technician inspecting fireplace in Belton TX" style={styles.img} />
        </div>
        <div style={styles.textContent}>
          <h2 style={styles.subHeading}>Saving Money with Regular Sweeps</h2>
          <p>
            Did you know that a clean chimney actually saves you money? When your chimney is free of debris, the air drafts more efficiently. This means your wood burns slower and hotter, providing more heat for your <span style={styles.highlight}>Salado or Georgetown</span> home without wasting fuel. 
          </p>
          <p>
            Furthermore, routine cleaning prevents the need for expensive masonry repairs. Small cracks found during our inspection in <strong>Fort Cavazos</strong> can be fixed for a fraction of the cost of a full chimney rebuild. We take pride in being the most thorough chimney cleaning company in the Bell County area.
          </p>
          <p>
            Residents of <strong>Waco and Jarrell</strong> have relied on us for years to prepare their homes for the winter. Our commitment to excellence and fire safety is what makes us the #1 choice for "chimney cleaning near me."
          </p>
        </div>
      </section>

      {/* 5️⃣ INTERNAL LINKS & CITIES GRID */}
      <section style={styles.section}>
        <h2 style={{ textAlign: 'center', color: '#0e1b4d' }}>Serving Killeen & Surrounding Texas Cities</h2>
        <p style={{ textAlign: 'center' }}>We provide specialized chimney and air duct services to the following locations:</p>
        <div style={styles.citiesGrid}>
          <Link to="/location/killeen" style={{ ...styles.cityLink, backgroundColor: '#c62828', color: '#fff', borderColor: '#c62828' }}>
            📍 Killeen, TX (Home)
          </Link>
          {cities.map((city, index) => (
            <Link 
              key={index} 
              to={`/${city.slug}`} 
              style={styles.cityLink}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#fff5f5'; e.currentTarget.style.borderColor = '#c62828'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.borderColor = '#ddd'; }}
            >
              📍 {city.name}, TX
            </Link>
          ))}
        </div>
      </section>

      {/* 6️⃣ FINAL CALL TO ACTION */}
      <footer style={{ textAlign: 'center', padding: '50px', background: '#0e1b4d', color: '#fff', borderRadius: '15px' }}>
        <h2 style={{ color: '#fff' }}>Schedule Your Chimney Sweep Today</h2>
        <p>Don't wait for a fire hazard to happen. Protect your family in Killeen, Temple, or Belton.</p>
        <a href="tel:2549983484" style={{ fontSize: '2rem', color: '#ffd700', textDecoration: 'none', fontWeight: 800 }}>(254) 998-3484</a>
      </footer>
    </div>
  );
};

export default ChimneyCleaning;