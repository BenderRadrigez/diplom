import React from "react";
import insta from "../../../assets/images/icons/Instagram.svg";
import whatsup from "../../../assets/images/icons/Whatsup.svg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.left}>
        <p>Phone</p>
        <span>+48 452 717 819</span>
      </div>

      <div className={styles.right}>
        <p>Socials</p>
        <span className={styles.sotial}>
          <Link to="https://instagram.com/enemyfollow">
            <img src={insta} alt="" />
          </Link>
          <Link to="https://t.me/Curdt1">
            <img src={whatsup} alt="" />
          </Link>
        </span>
      </div>

      <div className={styles.left}>
        <p>Address</p>
        <span>Bierutowska 57B, 51-317 Wrocław</span>
      </div>

      <div className={styles.right}>
        <p>Working Hours</p>
        <span>24 hours a day</span>
      </div>

      <div className={styles.map}>
        <iframe
          title="tel_ran"
          frameBorder="none"
          width="100%"
          height="400px"
          src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Bierutowska%57B,%51-317%Wrocław&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}
