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

      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/18325601768"
        style={styles.whatsappFloat} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="35" height="35" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}