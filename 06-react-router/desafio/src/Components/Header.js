import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav classname={styles.header}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>{" "}
        <li>
          <NavLink to="contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
