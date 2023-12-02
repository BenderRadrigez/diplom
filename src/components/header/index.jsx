import React from "react";
import NavMenu from "./nav_menu";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/icons/basket=empty.svg";
import style from "./style.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <NavMenu />

      <button className={style.basket}>
        <img src={basket} alt="basket" />
      </button>
    </div>
  );
}
