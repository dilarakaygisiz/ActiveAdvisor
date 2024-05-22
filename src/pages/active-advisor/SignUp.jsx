import React from "react";
import { useState, createRef } from "react";
import { redirect as redirectDom } from 'react-router-dom';
import { handleSubmit } from "react";
import { useEffect } from "react";
import { signUp } from "../../config/firebase";
import { useCallback } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../../config/firebase'
import { Navigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState(false);

 

  const handleSubmit = useCallback((e) =>{
    e.preventDefault();
    console.log(email, password);

    if( !email || !password ){
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      alert("New user is created!")
      setUser(true)
      updateProfile(auth.user, {displayName: name})
      setRedirect(true);
    })
    .catch((e) =>{
      alert(e);
    });
  }, [name, email, password]);

  if (user) {
    // Yönlendirme burada gerçekleşiyor
    return <Navigate to="/LogIn" />;
  }


  
  

  return (
    <>
      <div style={styles.wrapper}>
        <form onSubmit={handleSubmit} action="" className="">
          <h1 style={styles.h1}>Register</h1>
          <div style={styles.inputBox}>
            <input
              value={name}
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.currentTarget.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputBox}>
            <input
              value={phoneNumber}
              type="text"
              placeholder="Phone Number"
              onChange={(e) =>  setPhoneNumber(e.currentTarget.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputBox}>
            <input
              value={email}
              type="email"
              placeholder="E-mail Address"
              onChange={(e) =>  setEmail(e.currentTarget.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputBox}>
            <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
              style={styles.input}
            />
          </div>

          <div>
              <button type="submit" className="btn" style={styles.btn}> Sign Up
              </button>
          </div>

          <div className="register-link" style={styles.registerLink}>
            <p>
              Already registered?{" "}
              <a href="/LogIn" style={styles.registerLinkA}>
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    width: "420px", // Sabit bir genişlik belirleyelim
    margin: "auto", // Sayfanın ortasında hizalama için margin: auto kullanın
    marginTop: "150px", // Üstten boşluk vermek için margin-top kullanın
    background: "#3B5B5D", // Tüm sayfa rengini beyaz yap
    border: "2px solid rgba(255,255,255, .1)",
    borderRadius: "10px",
    padding: "30px 40px",
    color: "#fff", // Genel metin rengini belirle (opsiyonel)
    marginBottom: "150px",
  },
  h1: {
    fontSize: "36px",
    textAlign: "center",
  },
  inputBox: {
    position: "relative",
    width: "100%",
    height: "50px",
    margin: "30px 0",
  },
  input: {
    width: "calc(100% - 45px)",
    height: "100%",
    background: "transparent",
    border: "2px solid rgba(0,0,0, .2)", // Input kenarlık rengini değiştir (opsiyonel)
    borderRadius: "60px",
    fontSize: "16px",
    color: "#fff", // Input yazı rengini değiştir (opsiyonel)
    padding: "20px 20px 20px 25px",
    boxSizing: "border-box",
    outline: "none",
  },
  icon: {
    position: "absolute",
    left: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "20px",
  },
  btn: {
    width: "100%",
    height: "45px",
    background: "#333",
    border: "none",
    borderRadius: "40px",
    boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
    cursor: "pointer",
    fontSize: "16px",
    color: "#fff",
    fontWeight: "600",
    outline: "none",
  },
  registerLink: {
    fontSize: "14.5px",
    textAlign: "center",
    margin: "20px 0 15px",
  },
  registerLinkA: {
    color: "#fff", // Link rengini değiştir (opsiyonel)
    textDecoration: "none", // Çizgiyi kaldır
    fontWeight: "600",
  },
  btnLink: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default SignUp;

