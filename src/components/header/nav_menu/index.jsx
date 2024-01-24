import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className={style.buttons_nav}>
        <button onClick={() => navigate("/")}>Main Page</button>
        <button onClick={() => navigate("/categories")}>Categories</button>
        <button onClick={() => navigate("/all-products")}>All products</button>
        <button onClick={() => navigate("/all-sales")}>All sales</button>
      </div>
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
