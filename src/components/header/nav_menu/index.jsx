import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

export default function NavMenu() {
  const navigate = useNavigate();

  return (
    <div className={style.buttons_nav}>
      <button onClick={() => navigate("/")}>Main Page</button>
      <button onClick={() => navigate("/categories")}>Categories</button>
      <button onClick={() => navigate("/products")}>All products</button>
      <button onClick={() => navigate("/products")}>All sales</button>
    </div>
  );
}
