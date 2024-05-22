import React from 'react';
import styled from "styled-components";

import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  height: 9vh;
  background-color: #3B5B5D;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    display: flex;
    align-items: center;
  }
  .logo-container img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  .menu-container {
    display: flex;
    align-items: center;
  }

  .input-box {
    position: relative;
    margin-right: 20px;
  }
  
  .input-box input {
    width: 200px;
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255,255,255, .2);
    border-radius: 20px;
    font-size: 14px;
    color: #fff;
    padding: 10px 35px 10px 20px;
  }
  
  .search-icon {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
  }
  
  .input-box input::placeholder{
    color: #fff;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  
  ul li {
    margin-left: 20px;
  }
  
  ul li a {
    color: #FFF;
    text-decoration: none;
    transition: opacity 0.3s ease;
  }
  
  ul li a:hover {
    opacity: 0.9;
  }

  button {
    background-color: #333;
    color: #fff;
    padding: 10px 25px;
    border: none;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    transition: all 0.5s ease;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className='logo-container'>
        
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Communities">Communities</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
      <nav className='menu-container'>
        <div className='input-box'>
          <input type="text" placeholder="Search..."/>
          
        </div>
        <Link to="/LoginPage">
          <button className="sign-in">Sign In</button>
        </Link>
      </nav>
    </StyledHeader>
  );
}

export default Header;