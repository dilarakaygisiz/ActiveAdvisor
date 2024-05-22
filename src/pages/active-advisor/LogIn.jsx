import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { redirect as redirectDom } from 'react-router-dom';
import { useEffect } from 'react';
import { signIn } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';
import { auth } from '../../config/firebase';
import { Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const styles = {
  wrapper: {
    width: '420px', // Sabit bir genişlik belirleyelim
    margin: 'auto', // Sayfanın ortasında hizalama için margin: auto kullanın
    marginTop: '150px', // Üstten boşluk vermek için margin-top kullanın
    background: '#3B5B5D', // Tüm sayfa rengini beyaz yap
    border: '2px solid rgba(255,255,255, .1)',
    borderRadius: '10px',
    padding: '30px 40px',
    color: '#fff', // Genel metin rengini belirle (opsiyonel)
  },
  h1: {
    fontSize: '36px',
    textAlign: 'center',
  },
  inputBox: {
    position: 'relative',
    width: '100%',
    height: '50px',
    margin: '30px 0',
  },
  input: {
    width: 'calc(100% - 45px)',
    height: '100%',
    background: 'transparent',
    border: '2px solid rgba(0,0,0, .2)', // Input kenarlık rengini değiştir (opsiyonel)
    borderRadius: '60px',
    fontSize: '16px',
    color: '#fff', // Input yazı rengini değiştir (opsiyonel)
    padding: '20px 20px 20px 45px',
    boxSizing: 'border-box',
    outline: 'none',
  },
  icon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '20px',
  },
  rememberForgot: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14.5px',
    margin: '-15px 0 15px',
    color: "#fff",
  },
  btn: {
    width: '100%',
    height: '45px',
    background: '#333',
    border: 'none',
    borderRadius: '40px',
    boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#fff',
    fontWeight: '600',
    outline: 'none',
  },
  registerLink: {
    fontSize: '14.5px',
    textAlign: 'center',
    margin: '20px 0 15px',
  },
  registerLinkA: {
    color: '#fff', // Link rengini değiştir (opsiyonel)
    textDecoration: 'none', // Çizgiyi kaldır
    fontWeight: '600',
  },
  btnLink: {
      color: '#fff',
      textDecoration: 'none',
  },
  forgotPass: {
    color: '#fff',
  }
  
};



function LogIn() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);




const handleSubmit = useCallback((e) =>{
  e.preventDefault();
  console.log(email, password);

  if( !email || !password ){
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("you have logged in!")
    setIsLoggedIn(true);
  })
  .catch((e) =>{
    console.log(e);
  });
}, [email, password]);

if (isLoggedIn) {
  // Yönlendirme burada gerçekleşiyor
  return <Navigate to="/Profile" />;
}

return (
  <div>
      <div style={styles.wrapper}>
        <form onSubmit={handleSubmit} action="" className="">
          <h1 style={styles.h1}>Login</h1>
          <div style={styles.inputBox}>
            <input 
              value={email}
              type='email' 
              placeholder='Email' 
              onChange={(e) => setEmail(e.target.value)}
              required style={styles.input}/>
            <FaUser style={styles.icon}/>
          </div>
          <div style={styles.inputBox}>
            <input
              value={password}
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required style={styles.input}/>
            <FaLock style={styles.icon} />     
          </div>
          <div style={styles.rememberForgot}>
            <label><input type="checkbox"/>Remember me</label>
            <Link style={styles.forgotPass} to="/ForgotPass">Forgot Password</Link>
            </div>
          
          <button type="submit" className="btn" style={styles.btn}>Log In</button>
          <div className="register-link" style={styles.registerLink}>
            <p>
              Don't have an account? <a href="/SignUp" style={styles.registerLinkA}>Sign Up</a>
            </p>
          </div> 
        </form>
      </div>
  </div>
)
}

export default LogIn