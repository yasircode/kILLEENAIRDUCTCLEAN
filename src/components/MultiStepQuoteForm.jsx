import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function MultiStepQuoteForm() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        'service_7azv4fg', 
        'template_10b1att', 
        form.current, 
        'w7Vj9gLxbbGl5lpPc'
      )
      .then(() => {
          alert("Information sent successfully!");
          form.current.reset();
      }, (error) => {
          console.error("Failed...", error);
          alert("Error occurred!");
      });
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      width: '95%',
      margin: '40px auto',
      backgroundColor: '#fff',
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      borderRadius: '8px', // Thoda sa soft corners
      border: '1px solid #e0e0e0',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)', // Soft shadow
      overflow: 'hidden',
      zIndex: '1'
    },
    header: {
      backgroundColor: '#0d47a1', // Navbar wala blue
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: '600',
      letterSpacing: '0.5px'
    },
    input: {
      width: '100%',
      padding: '15px 15px',
      border: 'none',
      borderBottom: '1px solid #eee',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box',
      color: '#333',
      display: 'block',
      transition: 'background 0.3s',
    },
    textarea: {
      width: '100%',
      padding: '15px 15px',
      border: 'none',
      fontSize: '14px',
      minHeight: '120px',
      outline: 'none',
      resize: 'none',
      display: 'block',
      boxSizing: 'border-box',
      color: '#333',
      backgroundColor: '#fcfcfc'
    },
    buttonContainer: {
      padding: '15px',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#0d47a1', // Professional Blue
      color: '#fff',
      width: '100%', // Full width button for better mobile UX
      padding: '14px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      transition: '0.3s ease',
      boxShadow: '0 4px 6px rgba(13, 71, 161, 0.2)'
    },
    whatsappFloat: {
      position: 'fixed',
      width: '60px',
      height: '60px',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#25d366',
      color: '#FFF',
      borderRadius: '50px',
      textAlign: 'center',
      boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
      zIndex: '9999',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none'
    }
  };

  return (
    <>
      <div style={styles.container}>
        {/* Header bar add ki hai form ko 'Complete' look dene ke liye */}
        <div style={styles.header}>Get A Free Quote</div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input style={styles.input} type="text" name="user_name" placeholder="Full Name" required />
          <input style={styles.input} type="tel" name="user_phone" placeholder="Phone Number" required />
          <input style={styles.input} type="text" name="user_address" placeholder="Address (City, State, Zip)" required />
          <input style={styles.input} type="email" name="user_email" placeholder="Email Address" required />
          <input style={styles.input} type="text" name="contact_preference" placeholder="Preference: Call, Text or Email?" />
          <textarea style={styles.textarea} name="message" placeholder="How can we help you?" required />
          
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Send Request &nbsp; &rarr;
            </button>
          </div>
        </form>
      </div>

    
    </>
  );
}