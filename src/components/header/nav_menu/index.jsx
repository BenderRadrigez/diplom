import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import imgBurger from "../../../assets/images/icons/Hamburger_icon.svg";

export default function NavMenu() {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);

  function toggleMenu() {
    setIsMenu(!isMenu);
  }

  return (
    <>
      <nav className={style.buttons_nav}>
        <NavLink to={"/"}>Main Page</NavLink>
        <NavLink to={"/categories"}>Categories</NavLink>
        <NavLink to={"/all-products"}>All products</NavLink>
        <NavLink to={"/all-sales"}>All sales</NavLink>
      </nav>
      <div className={style.burger}>
        <button onClick={toggleMenu} className={style.burgerBtn}>
          <img className={style.burgerImg} src={imgBurger} alt="" />
        </button>
        <div className={isMenu ? style.show : style.hide}>
          <button
            onClick={() => {
              navigate("/");
              toggleMenu();
            }}
          >
            Main Page
          </button>
          <button
            onClick={() => {
              navigate("/categories");
              toggleMenu();
            }}
          >
            Categories
          </button>
          <button
            onClick={() => {
              navigate("/all-products");
              toggleMenu();
            }}
          >
            All products
          </button>
          <button
            onClick={() => {
              navigate("/all-sales");
              toggleMenu();
            }}
          >
            All sales
          </button>
        </div>
      </div>
    </>
  );
}
