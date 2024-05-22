import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import styles from "./Header.module.css";
import NavbarComponent from "../active-advisor/NavbarComponent";

const Header = () => {
  return (
    <>
      <NavbarComponent />
    </>
  );
};

export default Header;
