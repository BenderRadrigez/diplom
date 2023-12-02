import React from "react";
import insta from "../../../assets/images/icons/Instagram.svg";
import whatsup from "../../../assets/images/icons/Whatsup.svg";
import styles from "./style.module.scss"
import MapsImg from "../../../assets/images/map.png"
import { Link } from "react-router-dom";


export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.left}>
        <p>Phone</p>
        <span>+49 999 999 99 99</span>
      </div>

      <div className={styles.right}>
        <p>Socials</p>
        <span className={styles.sotial}>
          <Link to="https://instagram.com/enemyfollow"><img src={insta} alt="" /></Link>
          <Link to="/"><img src={whatsup} alt="" /></Link>
        </span>
      </div>

      <div className={styles.left}>
        <p>Address</p>
        <span>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</span>
      </div>

      <div className={styles.right}>
        <p>Working Hours</p>
        <span>24 hours a day</span>
      </div>

      <div className={styles.map}>
      <img src={MapsImg} alt="Map" />
      </div>
    </div>
  );
}
