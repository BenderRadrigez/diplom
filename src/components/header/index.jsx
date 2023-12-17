import React from "react";
import NavMenu from "./nav_menu";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import style from "./style.module.scss";
import Basket from "./basket";

export default function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <NavMenu />

      < Basket/>
    </header>
  );
}
