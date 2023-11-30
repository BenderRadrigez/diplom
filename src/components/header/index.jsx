import React from "react";
import NavMenu from "./nav_menu";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/MainPage";
import AllProducts from "../../pages/AllProductsPage";
import Categories from "../../pages/CategoriesPage";
import Sales from "../../pages/SalesPage";
import Error from "../../pages/ErrorPage";
import logo from "../../assets/images/logo.svg";
import basket from "../../assets/images/icons/basket=empty.svg";
import style from "./style.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <img src={logo} alt="logo" className="logo" />
      <NavMenu>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="products" element={<Categories />} />
          <Route path="/all_products" element={<AllProducts />} />
          <Route path="/all_sales" element={<Sales />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </NavMenu>
      <button className={style.basket}>
        <img src={basket} alt="basket" />
      </button>
    </div>
  );
}
