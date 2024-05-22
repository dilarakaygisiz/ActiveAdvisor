import React, { useState } from 'react'
import NavbarComponent from '../../components/active-advisor/NavbarComponent';
import FooterComp from '../../components/active-advisor/FooterComp';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import { Alert } from '@mui/material';


function Contact() {

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2j70mpk', 'template_6jh85hv', form.current, {
        publicKey: 'zy__FgLLq986PI9it',
      })
      .then(
        () => {
         alert ("Your message has sent successfully.")
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      };
  return (
    <div>
        <NavbarComponent />
        <div style={styles.contactContainer}>
        <form ref={form} onSubmit={sendEmail} style={styles.contactLeft}>
          <div style={styles.contactLeftTitle}>
            <h2> Contact Us </h2>
            <hr style={styles.contactLeftHr} />
          </div>
          <input type="hidden" name="access_key" value="b4c890bf-fb78-46f2-949b-3e3b394d6cbb" />
          <input type="text" name="username" placeholder="Your Name" style={styles.contactInputs} required />
          <input type="email" name="email" placeholder="Your Email" style={styles.contactInputs} required />
          <textarea name="message" placeholder="Your message" style={styles.contactTextarea} required></textarea>
          <button onSubmit={sendEmail} type="submit" style={styles.contactButton}>Send <SendIcon/> </button>
          
        </form>
        <div className="contact-right">
          {/* İlgili içerik */}
        </div>
      </div>
      <FooterComp />
    </div>

  
  )
}

export default Contact

const styles = {
  '*': {
    backgroundColor: '#333',
  },
  html: {
    fontFamily: 'Outfit',
  },
  body: {
    background: '#3B5B5D',
    margin: 0,
    padding: 0,
  },
  contactContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/18/92/57/360_F_318925721_Lk0xALnTK2c2tq9mcYlZFTO2rovKFxiQ.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  contactLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '20px',
  },
  contactLeftTitle: {
    fontWeight: 600,
    color: '#333',
    fontSize: '40px',
    marginBottom: '5px',
  },
  contactLeftHr: {
    border: 'none',
    width: '400px',
    height: '5px',
    backgroundColor: '#033a3780',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  contactInputs: {
    width: '400px',
    height: '60px',
    border: '1px solid #333', // Çerçeve eklendi
    outline: 'none',
    paddingLeft: '25px',
    fontWeight: 500,
    color: 'black',
    borderRadius: '20px',
    transition: 'border-color 0.3s', // Geçiş eklendi
  },
  contactTextarea: {
    width: '400px', // Boyut eklendi
    height: '130px', // Boyut eklendi
    border: '1px solid #333', // Çerçeve eklendi
    outline: 'none',
    paddingTop: '15px',
    borderRadius: '20px',
    paddingLeft: '25px',
    fontWeight: 500,
    color: 'black',
    transition: 'border-color 0.3s', // Geçiş eklendi
  },
  contactButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 30px',
    fontSize: '20px',
    fontWeight: 500,
    color: '#fff',
    gap: '10px',
    border: 'none',
    borderRadius: '50px',
    background: '#71ADB5',
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Geçiş eklendi
  },
  contactButtonImg: {
    height: '15px',
  },
  '@media (max-width: 800px)': {
    contactInputs: {
      width: '80vw',
    },
    contactTextarea: {
      width: '80vw', // Boyut eklendi
    },
  },
};