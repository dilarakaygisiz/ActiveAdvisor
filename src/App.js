import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// hilal
import Header from './components/hilal/Header';
import Footer from './components/hilal/Footer';
import PropertyDetails from './pages/hilal/PropertyDetails';
// Active Advisor
import Homepage from './components/active-advisor/Homepage';
import About from './pages/active-advisor/About';
import Communities from './pages/active-advisor/Communities';
import Contact from './pages/active-advisor/Contact';
import LogIn from './pages/active-advisor/LogIn'
import SignUp from './pages/active-advisor/SignUp'
import Profile from './pages/active-advisor/Profile'
import Error from './pages/active-advisor/Error'
import Chatbot from './components/chatbot/Chatbot';

const App = () => {
  const HilalContainer = ({ children }) => {
    return (
      <div className='hilal_pages_cont'>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
  return <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/property/:id' element={<HilalContainer><PropertyDetails /></HilalContainer>} />
      <Route path="/About" element={<About />} />
      <Route path="/Communities" element={<HilalContainer><Communities /></HilalContainer>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    <Chatbot />
  </>;
};

export default App;
