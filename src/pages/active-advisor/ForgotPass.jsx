import { useState, useCallback } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../config/firebase'
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const styles = {
  wrapper: {
    width: '420px',
    margin: 'auto',
    marginTop: '150px',
    background: '#3B5B5D',
    border: '2px solid rgba(255,255,255, .1)',
    borderRadius: '10px',
    padding: '30px 40px',
    color: '#fff',
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
    border: '2px solid rgba(0,0,0, .2)',
    borderRadius: '60px',
    fontSize: '16px',
    color: '#fff',
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
  }
};

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!email) {
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please check your email to reset the password!');
        navigate('/login'); // Redirect to the login page
      })
      .catch((e) => {
        console.log(e);
      });
  }, [email, navigate]);

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.h1}>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputBox}>
          <input
            type="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            style={styles.input}
          />
          <FaEnvelope style={styles.icon} />
        </div>
        <button type="submit" style={styles.btn}>Send reset password email</button>
      </form>
    </div>
  );
}

export default ForgotPass;