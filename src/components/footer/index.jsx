import React from "react";
import AboutUs from "./about_us";
import style from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <h2>Contact</h2>
      <AboutUs />
    </footer>
  );
}
