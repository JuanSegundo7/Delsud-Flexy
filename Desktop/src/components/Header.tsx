import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header id={styles.Header}>
      <Image src={Logo} alt="logo" />
      <Image id="mobile-visible" src={Menu} alt="menu" />
    </header>
  );
};

export default Header;
