import React, { useState } from "react";
import style from "./style.module.scss";
import image from "../../assets/images/image_for_the_discont_banner.svg";

export default function GetDiscount() {
  const classes = `${style.discount_section} discount_section`;
  const [name, setName] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [email, setEmail] = useState("*****@*****.com");
  return (
    <div className={classes}>
      <h3>5% off on the first order</h3>
      <div className={style.conteiner}>
        <img src={image} alt="img" />
        <div className={style.register_form}>
          <input
            type="text"
            value={name}
            onChange={(val) => setName(val.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(val) => setNumber(val.target.value)}
            placeholder="Phone number"
          />
          <input
            type="text"
            value={email}
            onChange={(val) => setEmail(val.target.value)}
            placeholder="Email"
          />
          <button>Get a discount</button>
        </div>
      </div>
    </div>
  );
}
