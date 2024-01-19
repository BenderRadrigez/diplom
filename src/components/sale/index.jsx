import React from "react";
import style from "./style.module.scss";
import ItemsConstructor from "../itemsConstructor";
import { useNavigate } from "react-router-dom";

// sales for mainPage
export default function Sales() {
  const navigate = useNavigate();
  return (
    <div className={style.sales}>
      <div className={style.headers_h}>
        <h2>Sales</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button  onClick={() => navigate("/all-sales")}>All Sales</button>
        </div>
      </div>
      <ItemsConstructor isSlider={true} isSales={true} />
    </div>
  );
}
